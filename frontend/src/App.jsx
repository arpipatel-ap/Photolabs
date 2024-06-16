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
    favorites,
    displayModal,
    updateToFavPhotoIds,
    onSelectPhoto,
    onClosePhotoDetailsModal
  } = useApplicationData();

  return (
    <div className="App">
    
    <HomeRoute photos= {photos} 
    topics={topics} 
    favorites={favorites}
    onSelectPhoto
    onClosePhotoDetailsModal
    

    />
    {displayModal && <PhotoDetailsModal 
    setDisplayModal={setDisplayModal} 
    photoSelected={photoSelected}
    setPhotoSelected ={setPhotoSelected}
    favorites={favorites}
    updateToFavPhotoIds ={updateToFavPhotoIds}
    onSelectPhoto ={onSelectPhoto}
    onClosePhotoDetailsModal ={onClosePhotoDetailsModal}
   
    
    
    />}
    
    </div>
  );
};

export default App;
