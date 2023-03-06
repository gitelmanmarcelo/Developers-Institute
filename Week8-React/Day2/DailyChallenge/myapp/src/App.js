import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaSript", votes: 0},
          {name: "Java", votes: 0}
      ],
  }
  }
   
  addVote = (e) => {
    const voted_lang = e.currentTarget.id;
    const new_languages = [];
    this.state.languages.forEach( (el,i) => {
      new_languages.push(this.state.languages[i]);
      if (i == voted_lang) {
        new_languages[i].votes++;
      }
    })
    this.setState({ languages : new_languages });

  }

  render() {
    const lang = this.state.languages;
    return (
      <div className="App">
        <div class="row">
          <div>
          <p>{lang[0].votes}</p>
          </div>
          <div>
            <p>{lang[0].name}</p>
          </div>
          <div>
            <button id="0" onClick={this.addVote}>Click Here</button>
          </div>           
        </div>
        <div class="row">
          <div>
          <p>{lang[1].votes}</p>
          </div>
          <div>
            <p>{lang[1].name}</p>
          </div>
          <div>
            <button id="1" onClick={this.addVote}>Click Here</button>
          </div>           
        </div>
        <div class="row">
          <div>
          <p>{lang[2].votes}</p>
          </div>
          <div>
            <p>{lang[2].name}</p>
          </div>
          <div>
            <button id="2" onClick={this.addVote}>Click Here</button>
          </div>           
        </div>
        <div class="row">
          <div>
          <p>{lang[3].votes}</p>
          </div>
          <div>
            <p>{lang[3].name}</p>
          </div>
          <div>
            <button id="3" onClick={this.addVote}>Click Here</button>
          </div>           
        </div>
      </div>
    );
  }

}

export default App;
