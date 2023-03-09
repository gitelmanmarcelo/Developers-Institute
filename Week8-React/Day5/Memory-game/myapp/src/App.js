import React from 'react'
import './App.css';
import heroes from './superheroes.json'
import Card from './components/Card';
import Header from './components/Header';


class App extends React.Component {

  constructor() {
    super();
    this.h = heroes.superheroes;
    this.sequence = [0,1,2,3,4,5,6,7,8,9,10,11];
    this.clicked = [false,false,false,false,false,false,false,false,false,false,false,false];
    this.state = { score: 0,
                  topScore: 0,}
  }

  handleClick = (id) => {
    if (this.clicked[id-1]){
      if (this.state.score > this.state.topScore)
        this.setState({topScore:this.state.score});
      this.setState({score:0});
      this.clicked.forEach( (el,i) => {this.clicked[i] = false});
    } else {
      this.setState({score:this.state.score+1});
      this.clicked[id-1] = true;
    }
    this.shuffleCards();
  }

  shuffleCards = () => {
      for (let i = this.sequence.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); 
            
        [this.sequence[i], this.sequence[j]] = [this.sequence[j], this.sequence[i]];
      }
  }


  render() {
    return (
      <div className="App">
        <Header score={this.state.score} topScore={this.state.topScore}/>
        <div id="grid">
        {
          this.sequence.map(index => (
            <Card onClick={this.handleClick} {...this.h[index]}/>
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;
