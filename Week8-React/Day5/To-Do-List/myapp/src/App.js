import React from 'react';
import './App.css';
import Task from './components/Task';
import Input from './components/Input';

class App extends React.Component {

  constructor() {
    super();
    this.state = {tasks : [{name: 'd', status: 'pending'},
    {name: 'd',status: 'pending'},{name: 'd',status: 'pending'}], a:0}
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.state.tasks.push({name : e.target.todo.value, status : 'pending'});
    this.setState({a:1});
  }

  onClick = (task) => {
    console.log(task.status)
    if (task.status == 'pending')
      task.status = 'done';
    else{
        task.status = 'deleted';
    }
    this.setState({a:0});
}


  render() {
    return (
      <div className="App">
        <h1>Todo's</h1>
        {
        this.state.tasks.map(task => (
          <Task onClick={() => {this.onClick(task)}} {...task}/>
        ))
        }
        <Input onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default App;
