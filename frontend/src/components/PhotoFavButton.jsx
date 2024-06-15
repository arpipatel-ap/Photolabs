import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const {favorites, updateFavorites, id} = props;
  const { favorites = [], updateFavorites, id } = props;

  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg" onClick={() => {updateFavorites(id)}}>
      <FavIcon selected={favorites.includes(id)}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;