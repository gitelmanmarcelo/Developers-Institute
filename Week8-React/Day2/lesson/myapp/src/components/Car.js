import React from 'react';

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            brand: 'GM',
            model: 'Spin',
            year: 2021
        };
    }

    changeColor = () => {
        this.setState({color:'blue'});
    }

    changeRandomColor = () => {
        let {colors} = this.props;
        let randomColor = colors[Math.floor(Math.random()*colors.length)];
        this.setState({color:randomColor});
    }

    render() {
        return (
            <>
                <h2> I am a {this.state.color} car</h2>
                <h2> I am a {this.state.brand} car</h2>
                <button style={{padding:'20px'}} onClick={this.changeColor}>CHANGE COLOR</button>
                <button style={{padding:'20px'}} onClick={this.changeRandomColor}>CHANGE RANDOM COLOR</button>
            </>
        )
    }
}

export default Car;