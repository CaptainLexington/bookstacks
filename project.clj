(defproject bookstacks "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure        "1.8.0"]
                 [org.clojure/clojurescript  "1.9.89"]
                 [reagent "0.6.0-rc"]
                 [binaryage/devtools "0.6.1"]
                 [re-frame "0.8.0"]
                 [re-com "0.8.3"]
                 [secretary "1.2.3"]
                 [compojure "1.5.0"]
                 [yogthos/config "0.8"]
                 [camel-snake-kebab "0.4.0"]
                 [ring "1.4.0"]]

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-less "1.7.5"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"]

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

    ]}

  :main bookstacks.server

  :aot [bookstacks.server]

  :uberjar-name "bookstacks.jar"

  :prep-tasks [["cljsbuild" "once" "min"]["less" "once"] "compile"]
  )
