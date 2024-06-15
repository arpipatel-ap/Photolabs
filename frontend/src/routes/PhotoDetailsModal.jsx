import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {displayModal, setDisplayModal} =props;

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
