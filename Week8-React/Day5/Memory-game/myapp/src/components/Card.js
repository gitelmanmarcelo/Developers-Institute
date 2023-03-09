import React from 'react'
import './Card.css'

class Card extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="card" onClick={() => {this.props.onClick(this.props.id)}}>
                <img src={this.props.image} alt=""/>
                <p>Name: {this.props.name}</p>
                <p>Occupation: {this.props.occupation}</p>
            </div>

        )
    }

}

export default Card;