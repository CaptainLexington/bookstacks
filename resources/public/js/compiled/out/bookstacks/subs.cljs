(ns bookstacks.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]
            [clojure.string :as string]
            [clojure.set :as set]))

(re-frame/reg-sub
  :name
  (fn [db]
    (:name db)))

(re-frame/reg-sub 
  :books 
  (fn [db]
    (:books db)))

(defn filter-stacks [stacks query current-stack]
  (clojure.set/select 
    #(clojure.string/includes? 
       (string/lower-case  %) 
       (string/lower-case  query))
    stacks))

(defn generate-stacks [books]
  (set 
    (reduce #(concat %1 
                     (map :name 
                          (:stacks %2))) 
            []
            books)))

(re-frame/reg-sub
  :stacks
  (fn [db]
    (let [query (reaction (:search-term db))
          current-stack (reaction (:current-stack db))]
      (sort (filter-stacks (generate-stacks (:books db)) 
                           @query 
                           @current-stack)))))

(defn test-by-stack [stack]
  (case stack
    "In Progress" #(= :reading (:status %))
    (fn [book]
      (some #(= (:name %) 
                stack)
            (:stacks book)))))


(defn get-stack [books stack] 
  (filter 
    (test-by-stack stack) 
    books))



(re-frame/reg-sub 
  :current-stack 
  (fn [db]
    (:current-stack db)))

(re-frame/reg-sub
  :stack
  (fn [db [query stack-name]]
    (let [books (reaction (:books db))]
      {:name stack-name 
       :books (get-stack @books
                         stack-name)})))

(re-frame/reg-sub
  :search-term
  (fn [db]
    (:search-term db))) 


(re-frame/reg-sub
  :active-panel
  (fn [db _]
    (:active-panel db)))
