import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, topics, displayModal, setDisplayModal,photoSelected, setPhotoSelected ,selected, setSelected } = props;
  const [favorites, setFavorites] = useState([])

  return (
    <div className="home-route">
      <TopNavigation topics ={props.topics} isFavPhotoExist ={favorites.length} />
      <PhotoList 
      photos = {props.photos}
      favorites={favorites}
      setFavorites={setFavorites}
      setDisplayModal={setDisplayModal}
      setPhotoSelected ={setPhotoSelected}
      selected={selected}
      setSelected= {setSelected}
      />
    </div>
  );
};

export default HomeRoute;
