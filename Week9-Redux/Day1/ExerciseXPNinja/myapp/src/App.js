import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import AddToDo from './components/AddToDo';

function App() {
  return (
    <div className="App">
      <AddToDo/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
