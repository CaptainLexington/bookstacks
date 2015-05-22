-- MODEL

type alias Model = 
    { title : String,
      entries :  List String
    }


-- UPDATE

type Action 
    = Create String
    | Pop

update : Action -> Model -> Model
update action model =
  case action of
    Create string -> String.split "\n" string
    Pop -> 
        { model |
            entries <- tail model.entries
        }

-- VIEW

view : Model -> Html
view =