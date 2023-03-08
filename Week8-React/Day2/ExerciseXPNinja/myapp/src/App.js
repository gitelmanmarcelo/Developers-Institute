import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';
import Input from './component/Input';
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <Clock/>
      <Input label="First Name: " id="fname" type="text"/>
      <Input label="Last Name: " id="lname" type="text"/>
      <Input label="Phone: " id="phone" type="text"/>
      <Input label="Email: " id="lname" type="email"/>
    </div>
  );
}

export default App;
