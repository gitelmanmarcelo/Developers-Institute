import React from 'react';
import axios from 'axios';

class Form2 extends React.Component {
    constructor(){
        super();
        this.state = {userID : '', title : '', body: ''};
    }

    onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('https://jsonplaceholder.typicode.com/users/',
            this.state);
            console.log(res.data);   
        } catch (err) {
            console.log(err);
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    render() {
        return(
            <>
            <form onSubmit={this.onSubmit}>
                <input name="userID" placeholder='userID' onChange={this.handleChange}/><br/>
                <input name="title" placeholder='title' onChange={this.handleChange}/><br/>
                <input name="body" placeholder='body' onChange={this.handleChange}/><br/>
               <input type="submit" value="submit" name="submit"/>
            </form>
            </>
        )
    }
}

export default Form2;