(ns wilkerdev.util.macros
  (:refer-clojure :exclude [test time]))

(defmacro dochan [[binding chan] & body]
  `(let [chan# ~chan]
     (cljs.core.async.macros/go
       (loop []
         (if-let [~binding (cljs.core.async/<! chan#)]
           (do
             ~@body
             (recur))
           :done)))))

(defmacro <? [ch]
  `(wilkerdev.util.reactive/throw-err (cljs.core.async/<! ~ch)))

(defmacro go-catch [& body]
  `(cljs.core.async.macros/go
     (try
       ~@body
       (catch js/Error e e))))

(defmacro test [title & body]
  `(cljs.core.async.macros/go
     (try
       ~@body
       (.log js/console "Passed:" ~title)
       (catch js/Error e#
         (.log js/console "Failed:" ~title ":" (.-stack e#))))))

; like the regular clojure time, but it takes advantages of javascript console
; timing capabilities
(defmacro time [message & body]
  `(do
     (.time js/console ~message)
     (let [res# (do ~@body)]
       (.timeEnd js/console ~message)
       res#)))
