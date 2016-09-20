(ns bookstacks.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  :name
  (fn [db]
    (:name db)))

(re-frame/reg-sub 
  :books 
  (fn [db]
    (:books db)))

(re-frame/reg-sub
  :stacks
  (fn [db]
    (:stacks db)))

(defn get-stack [books stack] 
  (sort-by :index 
           (filter 
             (fn [book]
               (some #(= (:name %) 
                         stack)
                     (:stacks book)))
             books)))

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
  :active-panel
  (fn [db _]
    (:active-panel db)))
