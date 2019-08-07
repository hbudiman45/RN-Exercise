import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECTED_PLACE,
  DESELECTED_PLACE
} from "./../action/actyionTypes";

const initState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state, //spread operator. Immutable state
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://images.unsplash.com/photo-1563216368-5b6a40648062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    case SELECTED_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(place => {
          return place.key === action.placeKey;
        })
      };
    case DESELECTED_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
