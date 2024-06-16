import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import useApplicationData from "hooks/useApplicationData";

// const PhotoList = ({
//   photos,
//   favorites,
//   updateToFavPhotoIds,
//   onSelectPhoto,
// }) =>{


  const PhotoList =({
  updateToFavPhotoIds,
  onSelectPhoto,
}) =>{
    const { state } = useApplicationData();
  const photos = state.photoData;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        {...photo}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onSelectPhoto={onSelectPhoto}

          />
      ))}
    </ul>
  );
};

export default PhotoList;
