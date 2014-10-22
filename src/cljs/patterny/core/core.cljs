(ns patterny.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [wilkerdev.util.macros :refer [dochan]])
  (:require [cljs.core.async :refer [chan <! >! put! close!]]
            [goog.events :as events]
            [wilkerdev.util.reactive :as r]
            [clojure.browser.repl :as repl]
            [clojure.string :as str]))

(set! (.-ondragover js/window) #(.preventDefault %))
(set! (.-ondrop js/window) #(.preventDefault %))

(defn $
  ([query] ($ js/document query))
  ([target query] (.querySelector target query)))

(defn event-files [evt]
  (array-seq (.. evt -event_ -dataTransfer -files)))

(defn read-file-as-data-url [file]
  (let [c (chan)
        callback (fn [e]
                   (put! c (.. e -target -result))
                   (close! c))]
    (doto (js/FileReader.)
          (aset "onload" callback)
          (.readAsDataURL file))
    c))

(defn create-canvas [{:keys [width height]}]
  (doto (.createElement js/document "canvas")
        (aset "width" width)
        (aset "height" height)))

(defn file-dropper [el]
  (let [c (chan)]
    (events/listen el "drop" #(put! c (event-files %)))
    c))

(defn load-image [src]
  (let [c (chan)
        img (js/Image.)]
    (doto img
          (aset "onload" #(do (put! c img) (close! c)))
          (aset "src" src))
    c))

(defn image-size [img] {:width (.-width img) :height (.-height img)})

(defn canvas-from-image [img]
  (let [canvas (create-canvas (image-size img))
        ctx (.getContext canvas "2d")]
    (.drawImage ctx img 0 0)
    [canvas ctx]))

(defn canvas-image-data [canvas]
  (let [ctx (.getContext canvas "2d")
        width (.-width canvas)
        height (.-height canvas)]
    {:data   (.-data (.getImageData ctx 0 0 width height))
     :width  width
     :height height}))

(defn xy-pos [{:keys [width height]} {:keys [x y]}]
  (* 4 (+ (mod x width)
          (* (mod y height) width))))

(defn zero-fill [s n p]
  (let [delta (- n (count s))]
    (if (> delta 0)
      (str (str/join (repeat delta p)) s)
      s)))

(defn color-at-pos [{:keys [data]} pos]
  {:r (aget data pos)
   :g (aget data (+ pos 1))
   :b (aget data (+ pos 2))
   :a (aget data (+ pos 3))})

(defn color-at [data point]
  (color-at-pos data (xy-pos data point)))

(defn color-hex [{:keys [r g b a]}]
  (let [hex (fn [& args] (apply str (map #(zero-fill (.toString % 16) 2 "0") args)))]
    (hex r g b a)))

(defn hex-color-at [data point] (:hex (color-at data point)))

(defn read-row [{:keys [width height]} y]
  {:pre [(< y height)]}
  (->> (range width)
       (map #(hash-map :x % :y y))))

(defn read-column [{:keys [width height]} x]
  {:pre [(< x width)]}
  (->> (range height)
       (map #(hash-map :x x :y %))))

(defn filter-index [pred coll]
  (->> (map vector (range) coll)
       (filter #(pred (second %)))
       (map first)))

(defn point+ [{x1 :x y1 :y} {x2 :x y2 :y}]
  {:x (+ x1 x2)
   :y (+ y1 y2)})

(defn equal-squares? [data
                      {w1 :width h1 :height :as s1}
                      {w2 :width h2 :height :as s2}]
  (if (and (= w1 w2)
           (= h1 h2))
    (let [points (for [x (range w1) y (range h1)] {:x x :y y})]
      (every? (fn [p]
                (if (= (color-at data (point+ s1 p))
                       (color-at data (point+ s2 p)))
                  true
                  false))
              points))
    false))

(defn div-floor [x y] (.floor js/Math (/ x y)))
(defn div-ceil [x y] (.ceil js/Math (/ x y)))

(defn test-square-possibilities [{fw :width fh :height} {sw :width sh :height}]
  (for [x (range (div-floor fw sw))
        y (range (div-floor fh sh))
        :when (or (> x 0)
                  (> y 0))]
    {:x (* x sw) :y (* y sh) :width sw :height sh}))

(defn test-square [data square]
  (every? (partial equal-squares? data square)
          (test-square-possibilities data square)))

(defn find-pattern [{:keys [width height] :as data}]
  (let [checks (for [w (drop 1 (range (div-ceil width 2)))
                     h (drop 1 (range (div-ceil height 2)))]
                 {:x 0 :y 0 :width w :height h})]
    (->> checks
         (filter (partial test-square data))
         (first))))

(defn find-next-equal-right [data {:keys [x y] :as point}]
  (let [current (hex-color-at data point)
        next (->> (read-row data y)
                  (drop x)
                  (map (partial hex-color-at data))
                  (filter-index #(= % current)))]
    next))

(defn init []
  (repl/connect "http://localhost:9000/repl")
  (let [view-area ($ "#view-area")]
    (dochan [[file] (file-dropper ($ "#drop-container"))]
      (let [image (-> (read-file-as-data-url file) <!
                      (load-image) <!)
            [canvas] (canvas-from-image image)
            data (canvas-image-data canvas)]
        (.appendChild view-area canvas)
        (.log js/console "res" (clj->js (find-pattern data)))))))

(init)
