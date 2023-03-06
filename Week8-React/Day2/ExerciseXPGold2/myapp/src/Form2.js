import React from 'react';
import './form2.css'

class Form2 extends React.Component {

    constructor() {
        super();
        this.state = { state : 'form'};
    }

    onSubmit = (e) => {
        const form = e.currentTarget;
        const data = {fname : form.fname.value, lname: form.lname.value, phone: form.phone.value, email: form.email.value};
        this.setState({data : data});
        this.setState({state: 'data'});
        console.log('data:',data);

    }

    onReset = () => {
        this.setState({state : 'form'});
    }

    display = () => {
        if (this.state.state === 'form') {
            return (
                <>
                <h1>Welcome!</h1>
                <h3>Please provide your information bellow:</h3>
                <form  onSubmit={this.onSubmit}>
                    <input placeholder="First Name" id="fname"/><br/>
                    <input placeholder="Last Name" id="lname"/><br/>
                    <input placeholder="Phone Number" id="phone"/><br/>
                    <input placeholder="Email Address" id="email"/><br/><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                </>            
            )
        } else {
            return (
                <>
                <p>{this.state.data.lname},{this.state.data.fname}</p><br/><br/>
                <p>{this.state.data.phone} | {this.state.data.email}</p><br/><br/>
                <button onClick={this.onReset}>Reset</button>
                </>
            )
        }
    }

    render() {
        return (
            <>
            {this.display()}
            </>
        )

    }
}

export default Form2;