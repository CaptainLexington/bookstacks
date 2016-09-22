(ns bookstacks.utils)

(defn stack-sort [stack book]
  (:index  (first (filter #(= (:name %) stack)
                          (:stacks book)))))
