(ns bookstacks.db)

(def default-db
  {:name "Bookstacks Online"
   :books [{:title "Flashman"
            :status :read
            :stacks [{:name "The Flashman Papers"
                      :index 0}]},
           {:title "Royal Flash"
            :status :reading
            :stacks [{:name "The Flashman Papers"
                      :index 1}]},
           {:title "Flashman at the Charge"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 3}]},
           {:title "Flashman and the Angel of the Lord"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 9}]},
           {:title "Flashman in the Great Game"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 4}]},
           {:title "Flashman's Lady"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 5}]},
           {:title "Flashman and the Redskins"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 6}]},
           {:title "Flash for Freedom!"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 2}]},
           {:title "Flashman and the Dragon"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 7}]},
           {:title "Flashman and the Mountain of Light"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 8}]},
           {:title "Flashman and the Tiger"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 10}]},
           {:title "Flashman on the March"
            :status :unread
            :stacks [{:name "The Flashman Papers"
                      :index 11}]},
           {:title "The Lion, the Witch, and the Wardrobe"
            :status :read
            :stacks [{:name "The Chronicles of Narnia"
                      :index 0}
                     {:name "Inklings fantasy novels"
                      :index 3}]},
           {:title "Prince Caspian"
            :status :read
            :stacks [{:name "The Chronicles of Narnia"
                      :index 1}
                     {:name "Inklings fantasy novels"
                      :index 4}]},
           {:title "The Voyage of the Dawn Treader"
            :status :read
            :stacks [{:name "The Chronicles of Narnia"
                      :index 2}
                     {:name "Inklings fantasy novels"
                      :index 5}]},
           {:title "The Silver Chair"
            :status :unread
            :stacks [{:name "The Chronicles of Narnia"
                      :index 3}
                     {:name "Inklings fantasy novels"
                      :index 6}]},
           {:title "The Horse and His Boy"
            :status :unread
            :stacks [{:name "The Chronicles of Narnia"
                      :index 4}
                     {:name "Inklings fantasy novels"
                      :index 7}]},
           {:title "The Magician's Nephew"
            :status :unread
            :stacks [{:name "The Chronicles of Narnia"
                      :index 5}
                     {:name "Inklings fantasy novels"
                      :index 8}]},
           {:title "The Last Battle"
            :status :unread
            :stacks [{:name "The Chronicles of Narnia"
                      :index 6}
                     {:name "Inklings fantasy novels"
                      :index 9}]},
           {:title "The Fellowship of the Ring"
            :status :unread
            :stacks [{:name "The Lord of the Rings"
                      :index 0}
                     {:name "Inklings fantasy novels"
                      :index 0}]},
           {:title "The Return of the King"
            :status :unread
            :stacks [{:name "The Lord of the Rings"
                      :index 2}
                     {:name "Inklings fantasy novels"
                      :index 2}]},
{:title "The Two Towers"
 :status :unread
 :stacks [{:name "The Lord of the Rings"
           :index 1}
          {:name "Inklings fantasy novels"
           :index 1}]},
{:title "The Hitchhiker's Guide to the Galaxy"
 :status :read
 :stacks [{:name "The Hitchhiker's Guide to the Galaxy"
           :index 0}]},
{:title "The Restaurant at the End of the Universe"
 :status :read
 :stacks [{:name "The Hitchhiker's Guide to the Galaxy"
           :index 1}]},
{:title "Life, the Universe, and Everything"
 :status :read
 :stacks [{:name "The Hitchhiker's Guide to the Galaxy"
           :index 2}]}
{:title "So Long and Thanks for All the Fish"
 :status :read
 :stacks [{:name "The Hitchhiker's Guide to the Galaxy"
           :index 3}]}
{:title "Mostly Harmless"
 :status :read
 :stacks [{:name "The Hitchhiker's Guide to the Galaxy"
           :index 4}]}]

:stacks #{"The Flashman Papers"
          "The Chronicles of Narnia"
          "The Lord of the Rings"
          "The Hitchhiker's Guide to the Galaxy"
          "Inklings fantasy novels" }
:search-term ""
:current-stack "The Flashman Papers"})
