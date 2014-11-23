(defproject pattern-finder "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0-alpha4"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [camel-snake-kebab "0.2.4"]]

  :source-paths ["src/clj" "src/cljs"]

  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild  { :builds { :dev { :source-paths ["src/cljs"]
                                 :compiler { :output-to "web/js/patterny.js"
                                             :optimizations :whitespace
                                             :pretty-print true}}
                          :release { :source-paths ["src/cljs"]
                                 :compiler { :output-to "web/js/patterny.js"
                                             :output-dir "web/js"
                                             :optimizations :advanced
                                             :pretty-print false
                                             :source-map "web/js/patterny.js.map"}}}})
