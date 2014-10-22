(ns patterny.core
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [wilkerdev.util.macros :refer [dochan bench]])
  (:require [cljs.core.async :refer [chan <! >! put! close!]]
            [goog.events :as events]
            [wilkerdev.util.dom :as dom]
            [wilkerdev.util.reactive :as r]
            [clojure.browser.repl :as repl]
            [clojure.string :as str]))

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
    (or (->> possibles
          (filter test-size)
          first)
        (count coll))))

(defn compute-axis [canvas axis]
  (let [{:keys [width height]} (get-size canvas)
        axis-map {:x {:size {:width width :height 1}
                      :range-s height
                      :crop #(vector 0 % width 1)}
                  :y {:size {:width 1 :height height}
                      :range-s width
                      :crop #(vector % 0 1 height)}}
        {:keys [size range-s crop]} (get axis-map axis)
        tmp-canvas (create-canvas size)
        ctx (.getContext tmp-canvas "2d")]
    (for [n (range range-s)
          :let [[sx sy sw sh] (crop n)]]
      (do
        (.drawImage ctx canvas sx sy sw sh 0 0 sw sh)
        (.toDataURL tmp-canvas "image/png")))))

(defn find-pattern [canvas]
  (let [rows (vec (compute-axis canvas :y))
        columns (vec (compute-axis canvas :x))]
    {:width (find-series-pattern columns)
     :height (find-series-pattern rows)}))

(defn data-from-canvas-crop [canvas {:keys [width height x y]
                                      :or {width 1 height 1 x 0 y 0}
                                      :as square}]
  (let [new-canvas (create-canvas square)]
    (doto (.getContext new-canvas "2d")
      (.drawImage canvas x y width height 0 0 width height))
    (.toDataURL new-canvas "image/png")))

(defn init []
  (.log js/console "Initializing...")
  (let [cur-img ($ "#current-pattern")]
    (dochan [[file] (file-dropper ($ "body"))]
      (let [image (-> (read-file-as-data-url file) <!
                      (load-image) <!)
            [canvas] (canvas-from-image image)
            size (bench "Find pattern" (find-pattern canvas))
            pattern-data (bench "Generating data" (data-from-canvas-crop canvas size))]
        (.log js/console (str "url('" pattern-data "')"))
        (dom/set-style dom/body "backgroundImage" (str "url('" pattern-data "')"))
        (set! (.-src cur-img) pattern-data)))))

(init)
