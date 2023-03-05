import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UserFavoriteColors from './UserFavoriteColors'
import Exercise4 from './Exercise4 ';

  // const myelement = React.createElement('h1', {}, 'I do not use JSX!');
  // ReactDOM.render(myelement, document.getElementById('root'));

  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

function App() {
  return (
    <div className="App">
      <p>Hello world</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteColors user={user}/>
      <Exercise4/>
    </div>
  );
}

export default App;
