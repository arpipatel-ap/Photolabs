import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {photos, topics,favorites, updateToFavPhotoIds,
    onSelectPhoto } = props;
 

  return (
    <div className="home-route">
      <TopNavigation topics ={props.topics} isFavPhotoExist ={favorites.length} />
      <PhotoList 
      photos = {props.photos}
      favorites={favorites}
      updateToFavPhotoIds={updateToFavPhotoIds}
      onSelectPhoto={onSelectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
