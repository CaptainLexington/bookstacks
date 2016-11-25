(ns bookstacks.db
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import org.bson.types.ObjectId))

(def db (let [conn (mg/connect)]
          (mg/get-db conn "bookstacks-test")))

(defn get-user-by-service-id [service id])

(defn generate-stacks [ user ]
  (set 
    (reduce #(concat %1 (map :name (:stacks %2))) 
            []
            (:books user))))


(defn get-user-by-system-id [id]
  (let [user (mc/find-map-by-id db "users" (ObjectId. id))]
    (assoc user 
           :_id (str (:_id user)))))

(defn update-user [user]
  (let [userid (ObjectId. (:_id user))
        books (:books user)
        stacks (:stacks user)]
    (mc/update-by-id db "users" userid {:books books})))
