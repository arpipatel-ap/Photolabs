import React from "react";
import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoList from "./PhotoList";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  const { location, urls, user,favorites, setFavorites, displayModal, setDisplayModal,photoSelected, setPhotoSelected  } =props;
  
  //const id = props.photo.id;

  const handlePhotoClick = () => {
    setPhotoSelected(props)
    return setDisplayModal(prevDisplayModal => !prevDisplayModal);
  }
  return (
    <div className="photo-list__item" onClick={handlePhotoClick}>
       <PhotoFavButton   favorites={favorites} setFavorites={setFavorites} setPhotoSelected={setPhotoSelected} />

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

