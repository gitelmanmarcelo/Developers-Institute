import logo from './logo.svg';
import './App.css';
import {useState, useEffect, createContext } from 'react';
import ChangeName from './components/ChangeName'
import MathCalc from './components/MathCalc';
// useSelector, useNavigate, useDispatch, useParams
// createContext, useContext

export const AppContext = createContext(null);

function App() {
  const [name,setName] = useState('test');
  return (
    <div className="App">
      {/* <ChangeName setName={setName}/> */}
      {/* {name}
      <AppContext.Provider value={{setName, name}}>
        <ChangeName/>
      </AppContext.Provider> */}
      <MathCalc/>
    </div>
  );
}

export default App;
