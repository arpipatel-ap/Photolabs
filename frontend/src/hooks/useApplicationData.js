import React, {useState} from "react";

const useApplicationData =() => {
  const [state, setState] = useState({
    favorites: [],
    displayModal: (false),
    photoSelected: null
  });
  const { favorites, displayModal, photoSelected } = state;

  const updateToFavPhotoIds = (id) => {
    setState(preState => {
      const preFavorites = preState.favorites;
      if (preFavorites.includes(id)) {
        
        return {preState,favorites :preFavorites.filter((favoritesitems) => favoritesitems !== id)};
      } else {
        
        return [...preFavorites, id]
      }
    })
  };

  const onSelectPhoto= (photo) => {
    setState((preState) => ({...preState, photoSelected: photo, displayModal: "true"}));
  }
  const onClosePhotoDetailsModal = () => {
    setState((preState) => ({ ...preState, displayModal: false }));
  };
  return {
    state,
    favorites,
    displayModal,
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  };
};
  


export default useApplicationData;

