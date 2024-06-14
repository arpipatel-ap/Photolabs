import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {

  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="Image" />
      <div className="photo-list__user-info photo-list__user-details">
        <img src={profile} className="photo-list__user-profile"></img>
        <div>
          {username} 
          <br></br>
          <span className="photo-list__user-location">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

