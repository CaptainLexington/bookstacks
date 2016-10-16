(ns bookstacks.handler
  (:require [compojure.core :refer [GET POST defroutes]]
            [compojure.route :refer [resources]]
            [ring.util.response :refer [resource-response]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.json :refer [wrap-json-params wrap-json-body]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.keyword-params :refer [wrap-keyword-params]]
            [ring.middleware.defaults :refer :all]
            [monger.result :refer [acknowledged?]]
            [bookstacks.db :as db]))


(defn update [user]
  (let  [result  (db/update-user user)]
    (if  (acknowledged? result)
      {:status 200
       :body "Write success!"}
      {:status 500
       :body "Error writing results to db"})))


(defroutes routes
  (GET "/" [] (resource-response "index.html" {:root "public"}))
  (GET "/app" [] nil)
  (POST "/update" [& params] (update params))
  (POST "/get-user" [] nil)
  (resources "/"))

(def dev-handler (-> #'routes 
                     wrap-reload
                     wrap-keyword-params  
                     wrap-json-params
                     wrap-params))

(def handler (wrap-defaults #'routes api-defaults))
