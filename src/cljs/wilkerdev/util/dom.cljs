(ns wilkerdev.util.dom
  (:require [goog.style :as style]))

(defn $
  ([query] ($ js/document query))
  ([target query] (.querySelector target query)))

(defn by-id [id] (.getElementById js/document id))

(defn set-style [el style value] (style/setStyle el style value))
