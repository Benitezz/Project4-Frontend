import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useState, useEffect} from 'react'

import Layout from './components/Layout';
import Home from './pages/Home';
import Top10 from './pages/TopTen'
import Favorites from './pages/Favorites'
import ViewRestaurant from './pages/ViewRestaurant'
import AddRestaurant from './pages/AddRestaurant';

function App() {

  const [restaraunts, setRestaraunts] = useState([])
  const [favorites, setFavorites] = useState([])


  useEffect(() => {
    fetch('http://localhost:8000/restaraunt')
    .then(res => res.json())
    .then(Restaraunts => setRestaraunts(Restaraunts))
    .catch(function(error){
      console.log('Failed', error)
    })

  }, [])

  useEffect(() => {
    fetch('http://localhost:8000/favorites')
    .then(res => res.json())
    .then(Favorites => setFavorites(Favorites))
    .catch(function(error){
      console.log('Failed', error)
    })

  }, [])

  const updateRestaurantState = (id) =>{
    setRestaraunts(restaraunts.filter(restaurant => restaurant._id !==id))
  }

  const addNewRestaurant = (restaurant) => {
    setRestaraunts([...restaraunts, restaurant])
  }

  const addNewFavorite = (favorite) => {
    setFavorites([...favorites, favorite])
  }

  return (
  
  <Layout>
    <Routes>

      <Route path='/' element={< Home restaraunts={restaraunts} updateRestaurantState={updateRestaurantState} />} />
      <Route path='/top10' element={< Top10/>} />
      <Route path='favorites' element={< Favorites/>} />
      <Route path='/add-restaurant' element={< AddRestaurant addRestaurant={addNewRestaurant}/>} />
      <Route path='view-restaurant/:id' element={< ViewRestaurant viewRestaurant={restaraunts}/>} />

    </Routes>
  </Layout>



  );
}

export default App;
