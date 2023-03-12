import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import Child from './component/Child.js'
import { changePropOne } from './redux/actions';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      property_one : 'text one'
    }
  }

  handleChange = (e) => {
    this.setState({property_one : e.target.value});
  
  }


  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Simple Redux Example</h2>
          <div>{this.state.property_one}</div>
          <div>{this.props.a}</div>
          <div>{this.props.b}</div>
          <input name="name" placeholder='change local' onChange={this.handleChange}/>
          <input name="name" placeholder='change store' onChange={this.props.changePropA}/>
          <Child prop_one={this.state.property_one}/>
        </header>
      </div>
    );
  }
  
}

const mapStateToProps = (state) => {
  return {
    a : state.property_one
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePropA : (e) => {
      dispatch(changePropOne(e.target.value))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
