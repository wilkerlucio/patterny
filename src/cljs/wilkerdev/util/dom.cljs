(ns wilkerdev.util.dom
  (:require [goog.style :as style]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]))

(def document js/document)
(def body (.-body document))

(defn $
  ([query] ($ document query))
  ([target query] (.querySelector target query)))

(defn by-id [id] (.getElementById document id))

(defn set-style! [el style value] (style/setStyle el style value))

(defn set-class! [el name]
  (classes/set el name))

(defn add-class! [el name]
  (classes/add el name))

(defn remove-class! [el name]
  (classes/remove el name))
