import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, topics, displayModal, setDisplayModal,photoSelected, setPhotoSelected ,favorites, updateFavorites } = props;
 

  return (
    <div className="home-route">
      <TopNavigation topics ={props.topics} isFavPhotoExist ={favorites.length} />
      <PhotoList 
      photos = {props.photos}
      favorites={favorites}
      updateFavorites={updateFavorites}
      setDisplayModal={setDisplayModal}
      setPhotoSelected ={setPhotoSelected}
      />
    </div>
  );
};

export default HomeRoute;
