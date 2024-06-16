import React, {useReducer, useEffect} from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO: 'CLOSE_PHOTO'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
      case ACTIONS.FAV_PHOTO_REMOVED:
        return{
          ...state,
          favorites: [favPhotoArray.filter((favorites) => favorites != action.payload)]
        }
      case ACTIONS.SET_PHOTO_DATA:
        return{
          ...state,
          photoSelected: action.payload
        }
      case ACTIONS.SET_TOPIC_DATA:
        return{
          ...state,
          topic: action.payload
        }
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          photoSelected: action.payload,
          displayModal: true
        }
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return{
          ...state
        }
      case ACTIONS.CLOSE_PHOTO:
        return{
        ...state,
        photoSelected: null,
        displayModal: false
        }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
const INITIAL_STATE = {
  favorites: [],
  photoData: [],
  topicData: [],
  displayModal: false,
  photoSelected: null
}




const useApplicationData =() => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateToFavPhotoIds = (id) => {
    if (state.favorites.includes(id)) {
      dispatch({ type: FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: FAV_PHOTO_ADDED, payload: id });
    }
  };

  const onSelectPhoto= photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  
  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });

  return {
    state,
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  };
};
  


export default useApplicationData;

