import  React,{useState} from 'react';  
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favorites, setFavorites] = useState([])
  const [selected, setSelected] = useState(false); // favrite button
  const [displayModal, setDisplayModal] = useState(false);
  const [photoSelected, setPhotoSelected] = useState();
  return (
    <div className="App">
    
    <HomeRoute photos= {photos} 
    topics={topics} 
    favorites={favorites}
    setFavorites= {setFavorites}
    setDisplayModal={setDisplayModal} 
    setPhotoSelected= {setPhotoSelected}
    selected={selected}
    setSelected={setSelected}

    />
    {displayModal && <PhotoDetailsModal 
    setDisplayModal={setDisplayModal} 
    photoSelected={photoSelected}
    setPhotoSelected ={setPhotoSelected}
    setFavorites={setFavorites}
    selected={selected}
    setSelected= {setSelected}
    
    
    />}
    
    </div>
  );
};

export default App;
