import './App.css';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import TransactionList from './components/TransactionList';
import { getUsers } from './actions/transactionActions';

function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch()

  //like component did mount
  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => {
      // dispatch(getUsers(data));
      dispatch(getUsers());
    // })
  },[])

  return (
    <div className="App">
      {/* <h1>Transactions</h1> */}
      {/* <TransactionList/> */}
      {
        users.map((item,i) => <p>{item.name}</p>)
      }
    </div>
  );
}

export default App;
