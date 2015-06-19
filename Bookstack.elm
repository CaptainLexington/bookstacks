module Bookstack (Model, Action, update) where

import Graphics.Element exposing (..)
import Graphics.Input.Field as Field
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import List
import String
import StartApp




-- main

main =
    StartApp.start { model = {title = "", entries = Nothing}, update = update, view = view }



-- MODEL

type alias Model = 
    { title : String,
      --entries :  List String
    }


-- UPDATE

type Action 
    = Create String
    | Pop

update : Action -> Model -> Model
update action model =
  case action of
    Create string -> 
        { model |
            entries <- String.split "\n" string
        }
    --Pop -> 
    --    { model |
    --        entries <- List.tail model.entries
    --    }

 -- VIEW

view : Singal.Address Action -> Model -> Html
view address model =
  div []
    [ 
      div [] [ text (toString model) ]
    , button [ onClick address Create ] [ text "+" ]
    ]