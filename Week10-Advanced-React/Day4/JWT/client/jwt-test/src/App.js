import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import LoginRegister from './components/LoginRegister';
import Nav from './components/Nav';
import { Route, Routes} from 'react-router-dom';
import { useState, createContext } from 'react';
import { Auth } from './auth/auth';

export const AppContext = createContext(null);

function App() {
  const [accessToken,setAccessToken] = useState();
  return (
    <AppContext.Provider value={{accessToken,setAccessToken}}>
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/login' element={<LoginRegister title={"Login"}/>} />
        <Route path='/register' element={<LoginRegister title={"Register"}/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<Auth><About/></Auth>} />
      </Routes>
    </div>
    </AppContext.Provider>
  );
}

export default App;
