import React, {useReducer, useEffect} from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO: 'CLOSE_PHOTO'
}

// Reducer function to manage state updates based on actions
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
          favorites: [...state.favorites.filter((favorites) => favorites != action.payload)]
        }
      case ACTIONS.SET_PHOTO_DATA:
        return{
          ...state,
          photoData: action.payload
        }
      case ACTIONS.SET_TOPIC_DATA:
        return{
          ...state,
          topicData: action.payload
        }
      case ACTIONS.SELECT_PHOTO:
        return {
          ...state,
          selectedPhoto: action.payload,
          displayModal: true
        }
      case ACTIONS.GET_PHOTOS_BY_TOPICS:
          return {
            ...state, photoData: action.payload
          }
      case ACTIONS.DISPLAY_PHOTO_DETAILS:
        return{
          ...state,
          selectedPhoto: action.payload,
        }
      case ACTIONS.CLOSE_PHOTO:
        return{
        ...state,
        selectedPhoto: null,
        displayModal: false
        }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

// Initial state of the application
const INITIAL_STATE = {
  favorites: [],
  photoData: [],
  topicData: [],
  displayModal: false,
  selectedPhoto: null
}

// Custom hook for managing application state and data fetching
const useApplicationData =() => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE); // useReducer hook to manage state 

  // useEffect hook to fetch initial photo
  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, []);

  // useEffect hook to fetch initial topic
  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, []);

  // Function to fetch photos by a specific topic ID
  const getPhotosByTopics = (topic_id) => {
    fetch(`/api/topics/photos/${topic_id}`)
      .then((response) => response.json())
      .then((data) => dispatch({type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data}));    
  }

  // Function to add or remove photo ID from favorites
  const updateToFavPhotoIds = (id) => {
    if (state.favorites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: id });
    }
  };

  // Function to select a photo and display its details in a modal
  const onSelectPhoto= photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  
   // Function to close the photo details modal
  const onClosePhotoDetailsModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO });

  return {
    state,
    getPhotosByTopics,
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  };
};
  
export default useApplicationData;

