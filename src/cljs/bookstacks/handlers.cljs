(ns bookstacks.handlers
  (:require [re-frame.core :as re-frame]
            [bookstacks.db :as db]))

(re-frame/reg-event-db
  :initialize-db
  (fn  [_ _]
    db/default-db))

(re-frame/reg-event-db
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(re-frame/reg-event-db
  :add-bookstack
  (fn [db [_ new-title new-list]]
    (assoc db :lists 
           (conj 
             (:lists db)
             {:name new-title
              :list  (mapv #(hash-map :title % 
                                     :status :unread) 
                          (clojure.string/split  new-list #"\n"))}))))

(re-frame/reg-event-db
  :update-read-status
  (fn [db [_ status book list]]
    (assoc-in db
              [:lists 
               (.indexOf (:lists db) list)
               :list
               (.indexOf (:list list) book)
               :status]
              status)))
