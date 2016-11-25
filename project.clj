(defproject bookstacks "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [com.novemberain/monger "3.1.0"]
                 [compojure "1.5.0"]
                 [ring "1.4.0"] 
                 [ring/ring-json "0.4.0"]
                 [ring/ring-defaults "0.2.1"]
                 [yogthos/config "0.8"]
                 [org.clojure/tools.reader "1.0.0-beta1"]
                 [org.clojure/clojurescript  "1.9.293"
                  ;; Not excluding the reader will result in cljsbuild not
                  ;; finding the reader. If you can run cljsbuild successfully
                  ;; without this exclusion, then you may remove it.
                  :exclusions  [com.google.guava/guava org.clojure/tools.reader]]
                 ;; something is pulling guava 18.0 and this is giving me
                 ;; cljsbuild errors
                 [com.google.guava/guava "19.0"]
                 [reagent "0.6.0-rc"]
                 [binaryage/devtools "0.6.1"]
                 [re-frame "0.8.0"]
                 [re-com "0.8.3"]
                 [secretary "1.2.3"]
                 [cljs-ajax "0.5.8"]
                 [com.lucasbradstreet/cljs-uuid-utils "1.0.2"]]

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-less "1.7.5"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

  :hooks  [leiningen.cljsbuild]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]

  :figwheel {:css-dirs ["resources/public/css"]
             :ring-handler bookstacks.handler/dev-handler}

  :less {:source-paths ["less"]
         :target-path  "resources/public/css"}

  :profiles
  {:dev
   {:dependencies []

    :plugins      [[lein-figwheel "0.5.4-3"]]
    }}

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "bookstacks.core/mount-root"
                    :websocket-host :js-client-host}
     :compiler     {:main                 bookstacks.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true}}

    {:id           "min"
     :source-paths ["src/cljs"]
     :jar true
     :compiler     {:main            bookstacks.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}
    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:output-to "resources/test/compiled.js"
                    :optimizations :advanced
                    :pretty-print true}} ]
   :test-commands  {"test"  ["phantomjs"
                             "resources/test/test.js"
                             "resources/test/test.html"]}}

  :main bookstacks.server

  :aot [bookstacks.server]

  :uberjar-name "bookstacks.jar"

  :prep-tasks [["cljsbuild" "once" "min"]["less" "once"] "compile"])
