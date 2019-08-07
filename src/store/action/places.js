import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECTED_PLACE,
  DESELECTED_PLACE
} from "./actyionTypes";

export const addPlace = placeName => {
  return {
    type: ADD_PLACE,
    placeName: placeName
  };
};

export const deletePlace = () => {
  return {
    type: DELETE_PLACE
  };
};

export const selectPlace = key => {
  return {
    type: SELECTED_PLACE,
    placeKey: key
  };
};
export const deselectPlace = () => {
  return {
    type: DESELECTED_PLACE
  };
};
