import React from 'react'

class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            username : '',
            age : null,
            errormessage : ''
        }
    }

    onChange = (e) => {
        this.setState({username : e.currentTarget.value})
    }
    
    onChangeAge = (e) => {
        if (isNaN(Number(e.currentTarget.value))) {
            this.setState({errormessage : 'Not a number'});
        }
        else {
            this.setState({errormessage : ''});
            this.setState({age : e.currentTarget.value})
        }
    }

    mySubmitHandler = () => {
        alert('You are submitting ' + this.state.username);
    }

    render() {
        let header;
        if (this.state.username && this.state.age)
            header = 'Hello ' + this.state.username + ' ' + this.state.age;
        return (
            <>
            <h1>{header}</h1>
            <form onSubmit={this.mySubmitHandler}> 
                <label for="name">Enter your name:</label><br/><br/>
                <input type="text" id="name" name="name" onChange={this.onChange}/><br/><br/>
                <label for="age">Enter your age:</label><br/><br/>
                <input type="text" id="age" name="age" onChange={this.onChangeAge}/><br/><br/>
                <textarea name="area" value="some text in the textarea"></textarea><br/><br/>
                <select value="Volvo">
                    <option>Ford</option>
                    <option>Volvo</option>
                    <option>Fiat</option>
                </select><br/><br/>
                <input type="submit" value="Submit"/>
                <span>{'  ' + this.state.errormessage}</span>
            </form>
            </>
        )
    }
}

export default Form;