import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import useApplicationData from "hooks/useApplicationData";

const PhotoList = ({
  photos,
  favorites,
  updateToFavPhotoIds,
  onSelectPhoto,
}) =>{



  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        {...photo}
        favorites ={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onSelectPhoto={onSelectPhoto}

          />
      ))}
    </ul>
  );
};

export default PhotoList;
