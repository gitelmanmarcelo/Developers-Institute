import './App.css';
import { useState, useContext } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Favorites from './components/Favorites'

export const AppContext = createContext(null);

function App() {
  const [city,setCity] = useState('Tel Aviv');
  const [currWeather,setCurrWeather] = useState({});
  const [weather5d,setWeather5d] = useState([]);
  const [favCities,setFavCities] = useState([]);
  return (
  <AppContext.Provider value={{setCity, city, setCurrWeather,currWeather,setWeather5d,weather5d,favCities,setFavCities}}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>

      </div>
    </AppContext.Provider>
  );
}

export default App;
