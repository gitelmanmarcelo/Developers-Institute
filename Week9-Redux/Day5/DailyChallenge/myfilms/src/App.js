import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import SearchMovies from './components/SearchMovies';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchMovies/>}/>
        <Route path='/details/:id' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
