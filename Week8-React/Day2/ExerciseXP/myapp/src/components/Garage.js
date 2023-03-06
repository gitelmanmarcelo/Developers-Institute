import React from "react";

class Garage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <h1>Who lives in my {this.props.size} garage?</h1>
            </>
        )
    }
}

export default Garage;