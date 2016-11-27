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
  (set/select 
    #(string/includes? 
       (string/lower-case  %) 
       (string/lower-case query))
    stacks))

(defn generate-stacks  [books]
  (set 
    (reduce #(concat %1 
                     (keys (:stacks %2))) 
            []
            books)))

(defn filter-stacks-by-book-title [books query]
  (generate-stacks
    (filter #(do
               (string/includes? 
                 (string/lower-case (:title %)) 
                 (string/lower-case query)))
            books)))

(re-frame/reg-sub
  :stacks
  (fn [db]
    (let [query (reaction (:search-term db))
          current-stack (reaction (:current-stack db))
          stacks (reaction (generate-stacks (vals (:books db))))
          stacks-by-name (filter-stacks @stacks
                                        @query 
                                        @current-stack)
          stacks-by-book-title (filter-stacks-by-book-title (vals  (:books db))
                                                            @query)]
      (sort (set/union stacks-by-name
                       stacks-by-book-title )))))

(defn test-by-stack [stack]
  (case stack
    "In Progress" #(= :reading (:status %))
    (fn [book]
      (some #(= % stack)
            (keys (:stacks book))))))

(defn get-stack  [books stack] 
  (sort-by #(get (:stacks %) stack)
           (filter 
             (test-by-stack stack) 
             (vals books))))

(re-frame/reg-sub 
  :current-stack 
  (fn [db]
    (:current-stack db)))

(re-frame/reg-sub
  :stack
  (fn [db [query stack-name]]
    (let [books (reaction (:books db))
          stack  (map-indexed #(assoc %2
                                      :index
                                      %1)
                              (get-stack @books
                                         stack-name))]
      {:name stack-name 
       :books stack})))

(re-frame/reg-sub
  :search-term
  (fn [db]
    (:search-term db))) 

(re-frame/reg-sub
  :active-panel
  (fn [db _]
    (:active-panel db)))
