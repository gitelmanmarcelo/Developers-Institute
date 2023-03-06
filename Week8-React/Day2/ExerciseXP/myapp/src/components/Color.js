import React from "react";

class Color extends React.Component {

    constructor() {
        super();
        this.state = { favouriteColor : 'red'};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favouriteColor:'yellow'});
        },2000);
    }

    changeFavColor = () => {
        this.setState({favouriteColor:'blue'});
    }

    render() {
        return(
            <>
            <h1>My favourite color is {this.state.favouriteColor}</h1>
            <button onClick={this.changeFavColor}>CHANGE FAV COLOR</button>
            </>
        )
    }
}

export default Color;