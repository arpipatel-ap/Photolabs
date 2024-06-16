import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import useApplicationData from 'hooks/useApplicationData';

const HomeRoute = () => {
  const { state } = useApplicationData();
  const photos = state.photoData;
  const topics = state.topicData;

  return (
    <div className="home-route">
      <TopNavigation  topics ={topics} />
      <PhotoList 
      photos = {photos}
      
      />
    </div>
  );
};

export default HomeRoute;
