import React from 'react';

class Form extends React.Component {
    constructor(){
        super();
        this.state = {user : '', email : ''};
    }

    onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users/',
            {   method: 'POST', 
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify(this.state)
            });
            const data = await res.json();
            console.log(data);   
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
                <input name="user" placeholder='user' onChange={this.handleChange}/><br/>
                <input type="email" name="email" placeholder='email' onChange={this.handleChange}/><br/>
               <input type="submit" value="submit" name="submit"/>
            </form>
            </>
        )
    }
}

export default Form;