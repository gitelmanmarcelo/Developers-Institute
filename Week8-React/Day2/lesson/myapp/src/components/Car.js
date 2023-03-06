import React from 'react';

class Car extends React.Component {

    constructor() {
        super();
        this.state = {
            color: 'red',
            brand: 'GM',
            model: 'Spin',
            year: 2021
        };
    }

    render() {
        return (
            <>
                <h2> I am a {this.state.color} car</h2>
                <h2> I am a {this.state.brand} car</h2>
            </>
        )
    }
}

export default Car;