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

  const updateFavorites = (id) => {
    setFavorites(preFavorites => {
      console.log(preFavorites)
      if (preFavorites.includes(id)) {
        
        return preFavorites.filter((favoritesitems) => favoritesitems !== id);
      } else {
        
        return [...preFavorites, id]
      }
    })
  };


  return (
    <div className="App">
    
    <HomeRoute photos= {photos} 
    topics={topics} 
    favorites={favorites}
    updateFavorites= {updateFavorites}
    setDisplayModal={setDisplayModal} 
    setPhotoSelected= {setPhotoSelected}
    

    />
    {displayModal && <PhotoDetailsModal 
    setDisplayModal={setDisplayModal} 
    photoSelected={photoSelected}
    setPhotoSelected ={setPhotoSelected}
    favorites={favorites}
    updateFavorites={updateFavorites}
   
    
    
    />}
    
    </div>
  );
};

export default App;
