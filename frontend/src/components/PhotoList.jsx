import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  photos,
  favorites,
  updateToFavPhotoIds,
  onSelectPhoto,
}) =>{

  return (
    <ul className="photo-list">
      {photos?.map((photo) => (

        <PhotoListItem 
        key={photo.id} 
        {...photo}
        photo ={photo}
        favorites ={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onSelectPhoto={onSelectPhoto}
          />
      ))}
    </ul>
  );
};

export default PhotoList;
