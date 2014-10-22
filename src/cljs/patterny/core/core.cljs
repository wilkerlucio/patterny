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

(defn get-size [img] {:width (.-width img) :height (.-height img)})

(defn canvas-from-image [img]
  (let [canvas (create-canvas (get-size img))
        ctx (.getContext canvas "2d")]
    (.drawImage ctx img 0 0)
    [canvas ctx]))

(defn div-floor [x y] (.floor js/Math (/ x y)))
(defn div-ceil [x y] (.ceil js/Math (/ x y)))

(defn find-series-pattern [coll]
  (let [options-for-size
        (fn options-for-size [size]
          (for [x (drop 1 (range (div-floor (count coll) size)))]
            (* x size)))
        size-match?
        (fn size-match? [size x]
          (let [a (subvec coll 0 size)
                b (subvec coll x (+ x size))]
            (= a b)))
        test-size
        (fn test-size [size]
          (every? (partial size-match? size)
                  (options-for-size size)))
        possibles (drop 1 (range (div-ceil (count coll) 2)))]
    (->> possibles
         (filter test-size)
         first)))

(defn compute-axis-x [canvas]
  (let [{:keys [width height]} (get-size canvas)
        tmp-canvas (create-canvas {:width 1 :height height})
        ctx (.getContext tmp-canvas "2d")]
    (for [n (range width)]
      (do
        (.drawImage ctx canvas n 0 1 height 0 0 1 height)
        (.toDataURL tmp-canvas "image/png")))))

(defn compute-axis-y [canvas]
  (let [{:keys [width height]} (get-size canvas)
        tmp-canvas (create-canvas {:width width :height 1})
        ctx (.getContext tmp-canvas "2d")]
    (for [n (range height)]
      (do
        (.drawImage ctx canvas 0 n width 1 0 0 width 1)
        (.toDataURL tmp-canvas "image/png")))))

(defn find-pattern [canvas]
  (let [rows (vec (compute-axis-x canvas))
        columns (vec (compute-axis-y canvas))]
    {:width (find-series-pattern columns)
     :height (find-series-pattern rows)}))

(defn init []
  (let [view-area ($ "#view-area")]
    (dochan [[file] (file-dropper ($ "#drop-container"))]
      (let [image (-> (read-file-as-data-url file) <!
                      (load-image) <!)
            [canvas] (canvas-from-image image)]
        (.appendChild view-area canvas)
        (.time js/console "Finding pattern")
        (.log js/console (clj->js (find-pattern canvas)))
        (.timeEnd js/console "Finding pattern")))))

(init)
