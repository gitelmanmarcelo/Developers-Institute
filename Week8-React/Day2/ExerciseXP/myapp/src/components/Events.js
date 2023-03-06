import React from "react";

class Events extends React.Component {

    constructor() {
        super();
        this.state = {isToggledOn : true};
    }

    clickMe = () => {
        alert("I was clicked");
    }

    handleKeyPress = (e) => {
        if (e.which === 13)
            alert("The Enter key was pressed, your input is " + e.currentTarget.value);
    }

    toggle = () => {
        this.setState({isToggledOn : this.state.isToggledOn === true ? false : true});
    }

    render() {
        return (
            <>
            <button onClick={this.clickMe}>CLICK ME</button>
            <input type={"text"} onKeyPress={this.handleKeyPress}/>
            <button onClick={this.toggle}>TOGGLE</button>
            <div><p>Exercise 9: {this.state.isToggledOn ? "ON" : "OFF"}</p></div>
            </>
        )
    }
}

export default Events;