import React,{ useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({
  photos, 
  topics,
  favorites,
  getPhotosByTopics,
  onSelectPhoto, 
  updateToFavPhotoIds
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavPhotoExist={favorites.length} getPhotosByTopics={getPhotosByTopics}/>
      <PhotoList 
        photos={photos}
        favorites={favorites}
        updateToFavPhotoIds={updateToFavPhotoIds}
        onSelectPhoto={onSelectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
