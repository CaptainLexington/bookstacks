-- MODEL

type alias Model = List String


-- UPDATE

type Action 
    = Create String
    | Pop

update : Action -> Model -> Model
update action model =
  case action of
    Create string -> String.split "\n" string
    Pop -> tail model

-- VIEW

view : Model -> Html
view =