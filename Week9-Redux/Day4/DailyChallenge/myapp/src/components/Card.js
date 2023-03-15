import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="card">
            <div style={{fontSize: '3rem'}}>{this.props.icon} {this.props.label}</div>
            <div style={{fontSize: '4rem'}}>{this.props.number}</div>
            </div>
        )
    }
}

export default Card;