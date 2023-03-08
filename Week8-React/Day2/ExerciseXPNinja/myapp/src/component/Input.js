import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

    }

    onChange = (e) => {
        const text = e.currentTarget.value.length;
        if ( text === 0)
            this.setState({ message : this.props.label + " is required"});
        else {
            if (this.props.type==='email') {
                if ( /\S+@\S+\.\S+/.test(text))
                    this.setState({message : ""});
                else
                    this.setState({message : "Invalid email"});
            }
            else if (this.props.id === 'phone') {
                if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(text))
                    this.setState({message : ""});
                else
                    this.setState({message : "Invalid phone"});

            } else
                this.setState({message : ""});
        }  
            

    }


    render() {

        return (
            <>
            <label htmlFor='{this.props.id}'>{this.props.label}</label><br/>
            <input id={this.props.id} type={this.props.type} onChange={this.onChange}/><br/>
            <p>{this.state.message}</p>
            </>
        )
    }
}

export default Input;