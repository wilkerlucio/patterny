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

(defn has-class? [el name]
  (classes/has el name))

(defn set-class! [el name]
  (classes/set el name))

(defn add-class! [el name]
  (classes/add el name))

(defn remove-class! [el name]
  (classes/remove el name))

(defn toggle-class!
  ([el name] (toggle-class! el name (not (has-class? el name))))
  ([el name bool]
   (if bool
     (add-class! el name)
     (remove-class! el name))))
