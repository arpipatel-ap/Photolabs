import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import photos from "mocks/photos";



const PhotoList = (props) => {
  const {photos, favorites, setFavorites,displayModal, setDisplayModal,photoSelected, setPhotoSelected} = props;
 ;
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        {...photo}
        favorites={favorites} 
        setFavorites={setFavorites} 
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
