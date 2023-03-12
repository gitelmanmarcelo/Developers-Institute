import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import UsersList from './components/UsersList';

function App() {
  return (
    <div className="App">
      <>
      <PostList/>
      <UsersList/>
      </>
    </div>
  );
}

export default App;
