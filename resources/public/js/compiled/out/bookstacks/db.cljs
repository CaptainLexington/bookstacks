(ns bookstacks.db
  (:require [ajax.core :refer [POST GET]]
            [re-frame.core :as re-frame]))

(def default-db
  {:name "Bookstacks Online"
   :_id "58027964d482a9608a0e3395"
   :facebookID ""
   :googleID ""
   :books {}
   :stacks {}
   :search-term ""
   :editing-stack-name? false
   :current-stack "In Progress"})

(defn update-user [user]
  (POST "/update"
        {:params user
         :format :json}))

(defn get-user [id]
  (GET (str "/get-user/" id)
       {:handler #(re-frame/dispatch [:load-user %])
        :response-format (ajax.core/json-response-format {:keywords? true })}))


(set! (.-onload js/window) 
      #(get-user  "58027964d482a9608a0e3395"))
