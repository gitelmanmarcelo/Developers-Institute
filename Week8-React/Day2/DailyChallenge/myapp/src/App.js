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
      a : 9
  }
  }
   
  addVote = (el) => {
    console.log('a');
    el.votes++;
    this.setState({a:40});
    // const voted_lang = e.currentTarget.id;
    // const new_languages = [];
    // this.state.languages.forEach( (el,i) => {
    //   new_languages.push(this.state.languages[i]);
    //   if (i == voted_lang) {
    //     new_languages[i].votes++;
    //   }
    // })
    // this.setState({ languages : new_languages });
  }

  render() {
    const lang = this.state.languages;
    return (
      <div className="App">
        {
          lang.map((el,index) => (
            <>
            <div class="row">
              <div>
                <p>{el.votes}</p>
              </div>
              <div>   
                <p>{el.name}</p>
              </div>
              <div>
                <button id={index} onClick={(e) => {this.addVote(el)}}>Click Here</button>
              </div>           
            </div>
            </>
        ))
        }
      </div>
    )
  }

}

export default App;
