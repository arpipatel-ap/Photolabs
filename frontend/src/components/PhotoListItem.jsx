import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
 
  return (
    <div className="photo-list__item">
      <img className= " .photo-list__image"src={imageSource} alt ="Image" />
      <img className = ".photo-list__user-profile"src={profile} alt= "Profile" />
      
        <h2 className="photo-list__user-info ">{username}</h2>
        <p className=".photo-list__user-location">Location: {location.city}, {location.country}</p>
      
    </div>
  );
};

export default PhotoListItem;

