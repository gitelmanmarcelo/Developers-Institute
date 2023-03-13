import logo from './logo.svg';
import './App.css';
import FirstName from './components/FirstName';
import SecondName from './components/SecondName';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
      <br/>
      <FirstName/><br/><br/>
      <SecondName/><br/><br/>
      <Button/><br/>
      <Display/>
    </div>
  );
}

export default App;
