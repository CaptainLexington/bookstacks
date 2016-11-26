(ns bookstacks.handlers
  (:require [re-frame.core :as re-frame]
            [cljs-uuid-utils.core :as uuid]
            [bookstacks.db :as db]
            [bookstacks.subs :as sub]))

(defn update-user [data]
  (db/update-user data)
  data)

(defn book  [title]
  (let  [id (keyword (uuid/uuid-string
                       (uuid/make-random-uuid)))]
    {:id id
     :title title
     :status :unread
     :stacks {}}))

(defn add-book [books book]
  (assoc books
         (:id book)
         book))

(defn add-book-to-stack [stack-name book index]
  (assoc-in book
            [:stacks
             stack-name] 
            index))

(re-frame/reg-event-db
  :initialize-db
  (fn  [_ _]
    db/default-db))

(re-frame/reg-event-db
  :set-active-panel
  (fn [db [_ active-panel]]
    (assoc db :active-panel active-panel)))

(defn update-values  [m f & args]
  (reduce (fn  [r  [k v]]
            (assoc r
                   k
                   (apply f v args))) 
          {}
          m))

(defn process-books [book]
  (assoc book
         :status
         (keyword (:status book))
         :id
         (keyword (:id book))
         :stacks (clojure.walk/stringify-keys (:stacks book))))

(re-frame/reg-event-db 
  :load-user
  (fn [db [_ user]]
    (let [books (update-values (:books user)
                               process-books) 
          newdb (assoc db
                       :books
                       books)]
      newdb)))

(re-frame/reg-event-db
  :add-bookstack
  (fn [db [_ new-title new-list]]
    (let [books (mapv #(book %)
                      (clojure.string/split 
                        new-list
                        #"\n"))]
      (update-user 
        (assoc db
               :books 
               (reduce  #(assoc %1
                                (:id %2)
                                %2)
                       (:books db)
                       (map-indexed #(add-book-to-stack new-title %2 %1)
                                    books)))))))

(re-frame/reg-event-db
  :delete-bookstack
  (fn [db [_ stack]]
    (set! (.-location js/window)
          "/#/stacks/In_Progress")
    (update-user 
      (assoc db
             :books
             (into {} 
                   (remove #(empty? (:stacks (second %)))
                           (update-values
                             (:books db)
                             (fn [book] 
                               (assoc book 
                                      :stacks
                                      (dissoc (:stacks book)
                                              stack))))))))))

(re-frame/reg-event-db
  :add-book
  (fn [db [_ stack]]
    (update-user
      (let [new-book (book "")]
        (assoc db
               :books
               (add-book
                 (:books db)
                 (add-book-to-stack
                   (:name stack)
                   (assoc new-book
                          :editing? true)
                   (count (:books stack)))))))))

(re-frame/reg-event-db
  :update-read-status
  (fn [db [_ status book]]
    (update-user 
      (assoc-in db
                [:books 
                 (:id book)
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
               (:id book)
               :editing?]
              true)))

(re-frame/reg-event-db
  :update-book-title
  (fn [db [_ title book]]
    (let [book-with-new-title (assoc book
                                     :title title)]
      (update-user
        (assoc-in db
                  [:books 
                   (:id book)]
                  (dissoc book-with-new-title 
                          :editing?))))))

(defn update-index [old-index new-index index]
  (cond 
    (= index old-index) new-index
    (<= old-index index new-index) (dec index)
    (<= new-index index old-index) (inc index) 
    :else index))


(re-frame/reg-event-db 
  :update-book-index
  (fn [db [_ book stack old-index new-index]]
    (reduce #(let [index (:index %2)
                   updated-index (update-index old-index new-index index)]
               (assoc-in  %1
                         [:books
                          (:id %2)
                          :stacks
                          (:name stack)]
                         updated-index))
            db
            (:books stack))))

(defn remove-book-from-stack [stack book]
  (dissoc (:stacks book) 
          stack))

(re-frame/reg-event-db
  :remove-book-from-stack
  (fn [db [_ stack book]]
    (update-user 
      (let [new-stacks (remove-book-from-stack stack book)]
        (if (empty? new-stacks)
          (assoc db
                 :books
                 (dissoc (:books db) (:id book)))
          (assoc-in db
                    [:books
                     (:id book) 
                     :stacks]
                    new-stacks))))))
