import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {favorites, setFavorites, id} = props;
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    const newFavoriteitem = !favorites;
    setFavorites(preFavorites => {
      if (preFavorites.includes(id)) {
        setSelected(false);
        return preFavorites.filter((favoritesitems) => favoritesitems !== id);
      } else {
        setSelected(true);
        return [...preFavorites, id]
      }
      })
  };
  return (
    <div className="photo-list__fav-icon" >
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
      <FavIcon selected={selected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;