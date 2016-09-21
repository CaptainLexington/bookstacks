(ns bookstacks.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [re-com.core :as re-com]))


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
               :label "Add New List"
               :on-click #(swap! add-new-open not)]
      :showing? add-new-open
      :position :right-below
      :popover [re-com/popover-content-wrapper 
                :title "Add New List"
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
                        :placeholder "List"
                        :height "200px"
                        :width "100%"]
                       [re-com/button 
                        :label "Add"
                        :on-click #(do (re-frame/dispatch [:add-bookstack @add-new-title @add-new-list])
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
  [:ul 
   (mapv)
   ]
  [re-com/vertical-pill-tabs
   :tabs (reagent.ratom/reaction (mapv #(hash-map
                                          :id %
                                          :label %)
                                       (sort  @stacks)))
   :model current-stack
   :on-change #(re-frame/dispatch [:select-stack %])])

(defn bookstack [stack]
  [:div.booklist  [:h3 (:name stack)]
   (into [:ul]
         (map #(vector (keyword (str "li." (name (:status %))))
                       [:span  (:title %)]
                       (read-status (:status %) % stack))
              (:books stack)))])

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
                                        (bookstack-nav stacks current-stack)
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
