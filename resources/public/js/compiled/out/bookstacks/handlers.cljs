(ns bookstacks.handlers
  (:require [re-frame.core :as re-frame]
            [bookstacks.db :as db]
            [bookstacks.subs :as sub]
            ))

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

(defn process-books [book]
  (assoc book
         :status
         (keyword (:status book))))

(re-frame/reg-event-db 
  :load-user
  (fn [db [_ user]]
    (let [books (mapv process-books
                      (:books user))
          newdb (assoc db
                       :books
                       books
                       :stacks
                       (set (:stacks user)))]
      newdb)))

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
  :add-book
  (fn [db [_ stack]]
   (assoc db
          :books
          (conj
            (:books db)
            {:title ""
             :status :unread
             :editing? true
             :stacks [{:name stack
                       :index (count (sub/get-stack (:books db) stack))}]}))))

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

(re-frame/reg-event-db
  :edit-book-title
  (fn [db [_ book]]
    (assoc-in db
              [:books 
               (.indexOf (:books db) book)
               :editing?]
              true)))

(re-frame/reg-event-db
  :update-book-title
  (fn [db [_ title book]]
    (update
      (assoc-in db
                [:books 
                 (.indexOf (:books db) book)]
                (dissoc (assoc book
                                :title title)
                        :editing?)))))

(re-frame/reg-event-db
  :delete-book
  (fn [db [_ book]]
    (update 
      (assoc db
             :books
             (into [] (remove #(= % book) (:books db)))))))
