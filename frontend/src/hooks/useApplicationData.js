import React, {useState} from "react";

const useApplicationData =() => {
  const [state, setState] = useState();
  const [favorites, setFavorites] = useState([]);
  const [displayModal, setDisplayModal]= useState(false);
  const [photoSelected, setPhotoSelected] = useState();

  const updateToFavPhotoIds = (id) => {
    setFavorites(preFavorites => {
      console.log(preFavorites)
      if (preFavorites.includes(id)) {
        
        return preFavorites.filter((favoritesitems) => favoritesitems !== id);
      } else {
        
        return [...preFavorites, id]
      }
    })
  };

  const onSelectPhoto= (photo) => {
    setPhotoSelected(photo)
    setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }
  const onClosePhotoDetailsModal = () => {
    return setDisplayModal(false);
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

