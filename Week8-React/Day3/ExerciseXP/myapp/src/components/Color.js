import React from "react";

class Color extends React.Component {

    constructor() {
        super();
        this.state = { favouriteColor : 'red', show : true};
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({favouriteColor:'yellow'});
        },2000);
    }

    getSnapshotBeforeUpdate(prev_props,prev_state) {
        document.querySelector('#mydiv').innerHTML = 'Before the update, the favorite was ' + prev_state.favouriteColor;


    }

    componentDidUpdate() {
        // document.querySelector('#mydiv').innerHTML = 'My Favorite color is ' + this.state.favouriteColor;
        document.querySelector('#mydiv2').innerHTML = 'The updated favorite is ' + this.state.favouriteColor;
    }

    changeFavColor = () => {
        this.setState({favouriteColor:'blue'});
    }

    onClick = () => {
        this.setState({show : false})
    }

    render() {
        if (this.state.show)
            return(
                <>
                <h1>My favourite color is {this.state.favouriteColor}</h1>
                <button onClick={this.changeFavColor}>CHANGE FAV COLOR</button>
                <div id="mydiv"></div>
                <div id="mydiv2"></div>
                <Child/>
                <button onClick={this.onClick}>DELETE</button>
                </>
            )
        else
        return(
            <>
            <h1>My favourite color is {this.state.favouriteColor}</h1>
            <button onClick={this.changeFavColor}>CHANGE FAV COLOR</button>
            <div id="mydiv"></div>
            <div id="mydiv2"></div>
            <button onClick={this.onClick}>DELETE</button>
            </>
        )

    }
}

class Child extends React.Component {

    componentWillUnmount() {
        alert('unmounted');
    }

    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

export default Color;