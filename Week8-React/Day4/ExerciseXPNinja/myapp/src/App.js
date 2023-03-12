import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {users : []};
  }
  
  componentDidMount = async () => {
    try {
      const res = await fetch('http://localhost:5000');
      console.log('aaaa',res);
      const data = await res.json();  
      this.setState({users : data});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
        {
          this.state.users.map( user => (
            <li>{user.username}</li>
          ))
        }
        </ul>
      </div>
    );
  }
  
}

export default App;
