(ns wilkerdev.util.dom
  (:require [goog.style :as style]))

(def document js/document)
(def body (.-body document))

(defn $
  ([query] ($ document query))
  ([target query] (.querySelector target query)))

(defn by-id [id] (.getElementById document id))

(defn set-style [el style value] (style/setStyle el style value))
