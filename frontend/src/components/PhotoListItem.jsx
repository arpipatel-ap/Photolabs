import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = ({ location, urls, user  }) => {
  

  return (
    <div className="photo-list__item">
       <PhotoFavButton />

      <img className="photo-list__image" src={urls.regular} alt="Image" />
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

