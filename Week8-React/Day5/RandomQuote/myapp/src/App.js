import quotes from './QuotesDatabase';
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      quote : 'Click the button bellow',
      author: 'Marcelo Gitelman',
      backColor : 'blue'
    }
  }

  handleClick = () => {
    if (!quotes.length)
      return;
    const rnd = Math.round(Math.random()*quotes.length) + 1;
    this.setState({quote : quotes[rnd].quote, 
                  author : quotes[rnd].author,
                  backColor : 'rgb('+Math.round(Math.random()*255) + ',' 
                  +Math.round(Math.random()*255) + ','+Math.round(Math.random()*255) + ')'})
    quotes.splice(rnd,1);
  }

  render() {
  return (
    <div className="App" style={{backgroundColor:this.state.backColor, width: '100vw', height: '100vh',margin:0,display:'flex'}}>
      <div id="box">
        <div id="quote"><p>"{this.state.quote}"</p></div>
        <div id="author"><p>-{this.state.author}</p></div>
        <div><button onClick={this.handleClick}>New quote</button></div>
      </div>
    </div>
  )
  }
}

export default App;
