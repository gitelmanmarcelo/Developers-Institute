import logo from './logo.svg';
import './App.css';
import Cars from './components/Cars';
import Events from './components/Events';
import Phone from './components/Phone';
import Color from  './components/Color';

const carInfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <Cars model = {carInfo.model}/>
      <Events/>
      <Phone/>
      <Color/>
    </div>
  );
}

export default App;
