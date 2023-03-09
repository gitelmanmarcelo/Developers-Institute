import React from 'react';
import './App.css';

let header;




class App extends React.Component {

  constructor() {
    super();
    this.state = {
      msg : ''
    }
  }

  componentDidMount = async () => {
    console.log('d');
    try {
      const res = await fetch('http://localhost:5000/api/hello')
      const data = await res.text()
      console.log(data);
      this.setState({ msg: data});
    } catch (err) {
      console.log('error:',err);
    }
  }

  onSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await fetch('http://localhost:5000/api/hello',{ 
            method: 'POST', 
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({msg : e.target.name.value})
        })
        const data = await res.text();
        console.log(data);
      } 
      catch (err) {
          console.log('error:',err);
      }
  }

  render() {
  return (
    <div className="App">
      <h1>{this.state.msg}</h1>
      <form onSubmit={this.onSubmit}>
        <input name="name" id="name"/>
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
  }
}

export default App;
