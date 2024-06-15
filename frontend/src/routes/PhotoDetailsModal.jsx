import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const {
    photoSelected,
    displayModal,
    setDisplayModal,
    setFavorites,
    selected,
    setSelected,
    setPhotoSelected
  } = props;

  const { id, user, urls, location,similar_photos } = photoSelected;

  const photos = Object.values(similar_photos);

  const closeButton = () => {
    setDisplayModal(false);
  };

  return (
    <div className="photo-details-modal" onClick={closeButton}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          setFavorites={setFavorites}
          id={id}
          selected={selected}
          setSelected={setSelected}
        />
       <img src={urls.full} className="photo-details-modal__image"></img>
        <div className="photo-list__user-info photo-list__user-details">
          <img src={user.profile} className="photo-list__user-profile" />
          <div>
            {user.username}
            <br />
            <span className="photo-list__user-location">
              {location.city}, {location.country}
            </span>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <div className="photo-details-modal__images">
          <PhotoList 
            photos={photos}
            setFavorites={setFavorites}
            setDisplayModal={setDisplayModal}
            setPhotoSelected={setPhotoSelected}
            selected={selected}
            setSelected={setSelected}
           />
        </div>
      </div>
    </div>
  );
};
export default PhotoDetailsModal;
