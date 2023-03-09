import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      message: '',
      color: '',
      onoff : false
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({[e.target.name] : value});
  }

  render() {
    return (
      <div className="App">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='email' name="email" onChange={this.handleChange}/><br/>
          <input type="text" placeholder='username' name="username" onChange={this.handleChange}/><br/>
          <textarea name="message" onChange={this.handleChange}/><br/>
          <select name="color" value="red" onChange={this.handleChange}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
          </select>
          On/Off<input name="onoff" type="checkbox" onChange={this.handleChange}/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );  
  }
}

export default App;
