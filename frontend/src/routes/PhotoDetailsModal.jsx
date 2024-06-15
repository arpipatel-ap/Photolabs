import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {displayModal, setDisplayModal,photoSelected, setPhotoSelected } =props;
  console.log(photoSelected);
  const closeButton =() =>{
    setDisplayModal(false);
  }
  return (
    <div className="photo-details-modal" onClick ={closeButton}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

export default PhotoDetailsModal;
