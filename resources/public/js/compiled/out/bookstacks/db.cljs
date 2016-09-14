(ns bookstacks.db)

(def default-db
  {:name "Bookstacks Online"
   :lists [{:name "The Flashman Papers"
            :list [{:title "Flashman"
                    :status :read},
                   {:title "Royal Flash"
                    :status :reading},
                   {:title "Flash for Freedom!"
                    :status :unread},
                   {:title "Flashman at the Charge"
                    :status :unread},
                   {:title "Flashman in the Great Game"
                    :status :unread},
                   {:title "Flashman's Lady"
                    :status :unread},
                   {:title "Flashman and the Redskins"
                    :status :unread},
                   {:title "Flashman and the Dragon"
                    :status :unread},
                   {:title "Flashman and the Mountain of Light"
                    :status :unread},
                   {:title "Flashman and the Angel of the Lord"
                    :status :unread},
                   {:title "Flashman and the Tiger"
                    :status :unread},
                   {:title "Flashman on the March"
                    :status :unread}]}
           {:name "The Chronicles of Narnia"
            :list [{:title "The Lion, the Witch, and the Wardrobe"
                    :status :read},
                   {:title "Prince Caspian"
                    :status :read},
                   {:title "The Voyage of the Dawn Treader"
                    :status :read},
                   {:title "The Silver Chair"
                    :status :unread},
                   {:title "The Horse and His Boy"
                    :status :unread},
                   {:title "The Magician's Nephew"
                    :status :unread},
                   {:title "The Last Battle"
                    :status :unread}]}]})
