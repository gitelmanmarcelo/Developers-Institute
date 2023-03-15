import React from 'react';
import './App.css';
import { createClient } from 'pexels';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      pictures : [],
      searchText : 'Mountain'
    }
    this.getPictures('mountain');
  }

  getPictures = (text) => {
    this.setState({searchText : text});
    const client = createClient('EDE6Arx2crqotnrbPMkM3GoORD8av12GxHbAU7eYRTASOn3khnhLNrrR');
    const query = text;

    client.photos.search({ query, per_page: 30 })
    .then(photos => {
      this.setState({ pictures : photos.photos.map(el => el.src.medium)})
      console.log(photos);
    });
  }
  
  submit = (e) => {
    e.preventDefault();
    this.setState({searchText : e.currentTarget.search.value});
    this.getPictures(e.currentTarget.search.value)
    e.currentTarget.search.value = '';
  }

  render() {
  return (
    <div className="App">
      <h1>SnapShot</h1>
      <form onSubmit={(e) => this.submit(e)}>
        <input id="search" placeholder="Search"/>
        <button  ><i class="fa-solid fa-magnifying-glass"></i></button><br/><br/>
      </form>
      <button onClick={() => this.getPictures('Mountains')}>Mountain</button>
      <button onClick={() => this.getPictures('Rocks')}>Rocks</button>
      <button onClick={() => this.getPictures('Birds')}>Birds</button>
      <button onClick={() => this.getPictures('Food')}>Food</button>
      <p>{this.state.searchText} Pictures</p>
      <div id="pictures">
        {
          this.state.pictures.map(picture => (
            <div><img src={picture} alt=""/></div>
          ))
        }

      </div>


    </div>
  );
  }

}

export default App;
