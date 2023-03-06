import React from 'react';
import Garage from './Garage';


class Cars extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            color: 'red'
        };
    }

    render() {
        return (
            <>
            <h1>This car is a {this.state.color} {this.props.model}</h1>
            <Garage size="small"/>
            </>
        )
    }
}

export default Cars;