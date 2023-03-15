import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import { inc, dec } from './redux/actions';

function App(props) {
  let cl;
  if (props.showLogo) {
    cl = 'App-logo';
  } else {
    cl = 'hidden';
  }
  return (
    <div className="App">
      <h1>your age: {props.age}</h1>
      <img src={logo} className={cl} alt="logo" />
      <button onClick={() => props.inc()} style={{padding:'16px'}}>Age UP</button>
      <button onClick={() => props.dec()} style={{padding:'16px'}}>Age Down</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    age : state.age,
    showLogo : state.showLogo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inc : () => dispatch(inc()),
    dec : () => dispatch(dec())
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
