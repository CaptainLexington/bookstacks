(ns figwheel.connect (:require [bookstacks.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/bookstacks.core.mount-root (apply js/bookstacks.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'bookstacks.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://[[client-hostname]]:3449/figwheel-ws"})

