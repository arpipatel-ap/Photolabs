import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div>
      <img src={imageSource} alt ="Image" />
      <img src={profile} alt= "Profile" />
      <div>
        <h2>{username}</h2>
        <p>Location: {location.city}, {location.country}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;

