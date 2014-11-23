(ns patterny.core
  (:refer-clojure :exclude [time])
  (:require-macros [cljs.core.async.macros :refer [go]]
                   [wilkerdev.util.macros :refer [dochan time]])
  (:require [cljs.core.async :refer [chan <! >! put! close!] :as async]
            [wilkerdev.util.dom :as dom]
            [wilkerdev.util.reactive :as r]
            [clojure.string :as str]))

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

(defn file-pick-on-click [el]
  (let [c (chan 1)
        input (doto (.createElement dom/document "input")
                    (aset "type" "file")
                    (dom/set-style! "display" "none"))]
    (dom/listen input "change" #(put! c (array-seq (.-files input))))
    (dom/listen el "click" #(do
                             (.preventDefault %)
                             (dom/trigger input "click")))
    (.appendChild dom/body input)
    c))

(defn create-canvas [{:keys [width height]}]
  (doto (.createElement js/document "canvas")
        (aset "width" width)
        (aset "height" height)))

(defn file-dropper [el]
  (let [c (chan)
        hover (partial dom/toggle-class! el "dragging-over")]
    (dom/listen el "dragenter" #(hover true))
    (dom/listen el "dragover" #(hover true))
    (dom/listen el "dragleave" #(hover false))
    (dom/listen el "dragend" #(hover false))
    (dom/listen el "drop" #(do
                            (hover false)
                            (put! c (event-files %))))
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
          (->> (range (div-floor (count coll) size))
               (drop 1)
               (map (partial * size))))
        size-match?
        (fn size-match? [size x]
          (= (subvec coll 0 size)
             (subvec coll x (+ x size))))
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
        axis-map {:x {:size    {:width width :height 1}
                      :range-s height
                      :crop    #(vector 0 % width 1)}
                  :y {:size    {:width 1 :height height}
                      :range-s width
                      :crop    #(vector % 0 1 height)}}
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
    {:width  (find-series-pattern columns)
     :height (find-series-pattern rows)}))

(defn data-from-canvas-crop [canvas {:keys [width height x y]
                                     :or   {width 1 height 1 x 0 y 0}
                                     :as   square}]
  (let [new-canvas (create-canvas square)]
    (doto (.getContext new-canvas "2d")
          (.drawImage canvas x y width height 0 0 width height))
    (.toDataURL new-canvas "image/png")))

(defn init []
  (let [cur-img (dom/$ "#current-pattern")
        file-chan (async/merge [(file-pick-on-click (dom/$ "#js-pick-image"))
                                (file-pick-on-click (dom/$ "#js-pick-image-after"))
                                (file-dropper dom/body)])]
    (dochan [[file] file-chan]
            (let [image (-> (read-file-as-data-url file) <!
                            (load-image) <!)
                  [canvas] (canvas-from-image image)
                  size (time "Find pattern" (find-pattern canvas))
                  pattern-data (time "Generating data" (data-from-canvas-crop canvas size))]
              (doto dom/body
                    (dom/set-style! "backgroundImage" (str "url('" pattern-data "')"))
                    (dom/add-class! "processed"))
              (set! (.-src cur-img) pattern-data)))
    (.log js/console (clj->js "Ready"))))

(init)
