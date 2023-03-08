import React from 'react';

class BuggyCounter extends React.Component {

    constructor() {
        super();
        this.state = {counter:0}
    }

    onClick = () => {
        this.setState({counter:this.state.counter+1});
    }

    render() {
        if (this.state.counter > 2)
            throw Error("Something happened :(");
        return (
            <>
            <h1 onClick={this.onClick}>{this.state.counter} </h1>
            </>
        )
    }

}

export default BuggyCounter;