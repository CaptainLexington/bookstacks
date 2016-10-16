(ns bookstacks.handlers
  (:require [re-frame.core :as re-frame]
            [bookstacks.db :as db]))

(defn update [data]
  (db/update-user data)
  data)


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
    (update 
    (assoc db
           :books 
           (vec (concat 
                  (:books db)
                  (map-indexed
                    (fn [index title]
                     (hash-map
                      :title title
                      :status :unread
                      :stacks [{:name new-title
                                :index index}]))
                    (clojure.string/split 
                      new-list
                      #"\n"))))
           :stacks
           (conj (:stacks db)
                 new-title)))))

(re-frame/reg-event-db
  :update-read-status
  (fn [db [_ status book]]
    (update 
    (assoc-in db
              [:books 
               (.indexOf (:books db) book)
               :status]
              status))))

(re-frame/reg-event-db
  :update-search-term
  (fn [db [_ search-term]]
    (assoc db
           :search-term
           search-term)))

(re-frame/reg-event-db
  :select-stack 
  (fn [db [_ stack-name]]
    (assoc db
           :current-stack (clojure.string/replace stack-name
                                            "_"
                                            " "))))
