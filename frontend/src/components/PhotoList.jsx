import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";



const PhotoList = (props) => {
  const {photos, favorites, setFavorites,displayModal, setDisplayModal,photoSelected, setPhotoSelected,updateFavorites} = props;
 ;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        {...photo}
        updateFavorites= {updateFavorites}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        photoSelected ={photoSelected}
        setPhotoSelected ={setPhotoSelected}
        


          />
      ))}
    </ul>
  );
};

export default PhotoList;
