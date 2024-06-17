import  React,{useState} from 'react';  
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    getPhotosByTopics,
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
    
    <HomeRoute 
    photos= {state.photoData} 
    topics={state.topicData} 
    favorites={state.favorites}
    getPhotosByTopics={getPhotosByTopics}
    onSelectPhoto ={onSelectPhoto}
    onClosePhotoDetailsModal ={onClosePhotoDetailsModal}
    

    />
    {state.displayModal && <PhotoDetailsModal 
    state ={state}
    updateToFavPhotoIds ={updateToFavPhotoIds}
    onSelectPhoto ={onSelectPhoto}
    onClosePhotoDetailsModal ={onClosePhotoDetailsModal}
   
    
    
    />}
    
    </div>
  );
};

export default App;
