import './App.css';
import NavBar from './components/NavBar';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from './components/Home';
import Post from "./components/Post";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/post/:id' element={<Post/>} />
          </Routes>
    </div>
  );
}

export default App;
