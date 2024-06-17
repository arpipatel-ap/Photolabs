import React, {useState } from 'react';
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  const { id,location, urls, user,  favorites, updateToFavPhotoIds,
    onSelectPhoto, photo } =props;
  

  return (
    <div className="photo-list__item">
       <PhotoFavButton favorites={favorites} updateToFavPhotoIds={updateToFavPhotoIds} id={id} />

      <img className="photo-list__image" src={urls.regular} onClick={()=> onSelectPhoto(photo)} alt={`Image by ${user.username}`} />
      <div className="photo-list__user-info photo-list__user-details">
        <img src={user.profile} className="photo-list__user-profile"></img>
        <div>
          {user.username} 
          <br></br>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

