import './App.css';
import React from 'react';
import Grid from './components/Grid';
import Header from './components/Header';
import { connect } from 'react-redux';
import { loadRobots } from './redux/actions';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.loadRobots();
  }

  render() {
    if (this.props.isLoading)
      return (
        <>
          <Header/>
          <h1 style={{textAlign : 'center'}}>Loading...</h1>
        </>
      )
    else
      return (
        <div className="App">
          <Header/>
          <Grid/>
        </div>
      );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRobots : () => {dispatch(loadRobots())}
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading : state.isLoading
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
