import React from 'react';
import User from './component/User';
import './App.css';
// import users from './users.json'
import UserC from './component/UserC';
import SearchBox from './component/SearchBox'

class App extends React.Component  {

  constructor() {
    super();
    this.state = {
      users_arr : [],
      color: 'yellow',
      search_txt : ''
    }
    console.log('constructor');
  }

  componentDidMount() {
   console.log('didmount');
  //  this.setState({users_arr : users});
    setTimeout(() => {
      this.setState({color: 'red'});
    }, 2000);
  }

  showUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then (data => {this.setState({users_arr : data});})
  }

  onSearchChange = (e) => {
    console.log('here');
    this.setState({search_txt : e.currentTarget.value});
    console.log(this.users_arr.filter(item => {
      return true }));
    // this.setState({users_arr : this.users_arr.filter(item => {
      // item.name.includes(text);
    // })})
  }

  render() {
    console.log('render');

    const filtered_array = this.state.users_arr.filter(item => {
      return item.name.toLowerCase().includes(this.state.search_txt.toLowerCase());
    });

    return (
      <div style={{backgroundColor : this.state.color}} className="App">
        <button onClick={this.showUsers}>Show Users</button>
        <SearchBox handleChange={this.onSearchChange}/>    
        { 
            filtered_array.map( (user,index) => {
            return (
              <>
              <UserC key={index} name={user.name} email={user.email}/>  
              </>
            )
          } )


        // users.map((user,index) => {
        //   return (
        //     <UserC key={index} name={user.name} email={user.email}/>
        //   )
        // })
        }
      </div>
    );
  }
}

export default App;
