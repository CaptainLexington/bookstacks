(ns bookstacks.test
  (:require [cljs.test :refer-macros [deftest is testing run-all-tests]]
            [bookstacks.]))

(deftest test-numbers
  (is  (= 1 1)))

(enable-console-print!)

(defn ^:export run
    []
    (run-all-tests #"bookstacks.*test"))
