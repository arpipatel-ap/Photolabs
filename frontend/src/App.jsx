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
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
    
    <HomeRoute photos= {photos} 
    topics={topics} 
    favorites={state.favorites}
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
