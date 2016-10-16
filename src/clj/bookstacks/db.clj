(ns bookstacks.db
  (:require [monger.core :as mg]
            [monger.collection :as mc])
  (:import org.bson.types.ObjectId))

(def db (let [conn (mg/connect)]
          (mg/get-db conn "bookstacks-test")))

(defn get-user-by-service-id [service id])

(defn update-user [user]
  (let [userid (ObjectId. (:_id user))
        books (:books user)]
    (mc/update-by-id db "users" userid {:books books})))
