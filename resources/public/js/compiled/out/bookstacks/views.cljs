(ns bookstacks.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]
            [camel-snake-kebab.core :as case]
            [bookstacks.utils :as utils]))


;; home

(defn home-title []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [re-com/title
       :label (str "Hello from " @name ". This is the Home Page.")
       :level :level1])))

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn add-a-list []
  (let [add-new-open (reagent/atom false)
        add-new-title (reagent/atom "")
        add-new-list (reagent/atom "")]
    [:div.add
     [re-com/popover-anchor-wrapper
      :anchor [re-com/button 
               :label "Add New Stack"
               :on-click #(swap! add-new-open not)]
      :showing? add-new-open
      :position :right-below
      :popover [re-com/popover-content-wrapper 
                :title "Add New Stack"
                :showing? add-new-open 
                :position :right-below
                :width "400px"
                :body [:div 
                       [re-com/input-text :model ""
                        :on-change #(reset! add-new-title %)
                        :width "100%"
                        :placeholder "Name"]
                       [re-com/input-textarea :model ""
                        :on-change #(reset! add-new-list %)
                        :placeholder "Books"
                        :rows 10
                        :width "100%"]
                       [re-com/button 
                        :label "Add"
                        :on-click #(do (re-frame/dispatch [:add-bookstack 
                                                           @add-new-title 
                                                           @add-new-list])
                                       (swap! add-new-open not) )]]]]]))
(defn search
  [search-term]
  [re-com/input-text 
   :model search-term
   :change-on-blur? false
   :placeholder "Search Stacks & Books"
   :on-change #(re-frame/dispatch [:update-search-term %])])

(defn read-status
  [status book list] 
  (let [tabs (reagent/atom [{:id :unread
                             :label "Unread"},
                            {:id :reading
                             :label "Reading"},
                            {:id :read
                             :label "Read"}])
        status (reagent/atom status)]
    [re-com/horizontal-bar-tabs
     :tabs tabs
     :model status
     :on-change #(do
                   (reset! status %)
                   (re-frame/dispatch [:update-read-status % book list]))]))

(defn bookstack-nav [stacks current-stack]
  (let [all-stacks (clojure.set/union stacks #{"In Progress"})]
    (into [:nav ]
          (mapv (fn [stack]
                  [:li
                   [:a {:href (str "/#/stacks/" (clojure.string/replace stack
                                                                        " "
                                                                        "_"))} 
                    stack]])
                all-stacks))))

(defn bookstack-row [stack book]
  [(keyword (str "li." (name (:status book))))
   (if (:editing? book) 
     [re-com/input-text
      :model (:title book)
      :width "204px"
      :on-change #(re-frame/dispatch [:update-book-title % book])]
     [:span (:title book)])
   (read-status (:status book) book stack)
   [re-com/h-box
    :class "modify-book"
    :children [[re-com/md-icon-button
                :md-icon-name "zmdi-edit"
                :size :smaller 
                :on-click #(re-frame/dispatch [:edit-book-title book])]
               [re-com/md-icon-button
                :md-icon-name "zmdi-delete"
                :size :smaller
                :on-click #(re-frame/dispatch [:delete-book book])]]]])

(defn bookstack [stack]
  (let [row (partial bookstack-row stack)
        books (group-by :status (:books stack))
        unread-books (sort-by (partial utils/stack-sort (:name stack))
                              (concat 
                                (:reading books)
                                (:unread books)))
        read-books (sort-by (partial utils/stack-sort (:name stack))
                            (:read books))]
    [:div.booklist 
     [re-com/h-box 
      :children [[:h3.stack (:name stack)]
                 [re-com/md-icon-button
                  :md-icon-name "zmdi-plus"
                  :on-click #(re-frame/dispatch [:add-book (:name stack)])]
                 [re-com/md-icon-button
                  :md-icon-name "zmdi-delete"
                  :on-click #(re-frame/dispatch [:delete-bookstack (:name stack)])]]]
     [re-com/h-box
      :children [ 
                 (into [:ul [:h4 "Unread"]]
                       (if (zero? (count unread-books)) 
                         "You've read every book in this stack. Go watch a movie!"
                         (map row 
                              unread-books)))
                 (into [:ul [:h4 "Read"]]
                       (if (zero? (count read-books))
                         "You haven't read any of the books in this stack. Crack one open!" 
                         (map row 
                              read-books)))]]]))

(defn home-panel []
  (let [current-stack (re-frame/subscribe [:current-stack])
        stack (re-frame/subscribe [:stack @current-stack])
        stacks (re-frame/subscribe [:stacks])
        search-term (re-frame/subscribe [:search-term])]
    [re-com/v-box
     :gap "1em"
     :children [[home-title]
                [re-com/h-box
                 :children [[re-com/v-box
                             :children [(search search-term) 
                                        (add-a-list)
                                        (bookstack-nav @stacks @current-stack)
                                        [link-to-about-page]]]
                            [:div  
                             (bookstack @stack)]]]]]))


;; about

(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title] [link-to-home-page]]])


;; main

(defmulti panels identity)
(defmethod panels :home-panel [] [home-panel])
(defmethod panels :about-panel [] [about-panel])
(defmethod panels :default [] [:div])

(defn show-panel
  [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [:active-panel])]
    (fn []
      [re-com/v-box
       :height "100%"
       :children [[panels @active-panel]]])))
