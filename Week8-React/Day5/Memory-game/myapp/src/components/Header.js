import React from 'react'
import './Header.css'

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="header">
                <div id="titleDiv">
                    <div id="title"><p>Superheroes Memory Game</p></div>                    
                    <div id="score"><p>Score: {this.props.score} | Top score: {this.props.topScore}</p></div>
                </div>
                <div id="messageDiv">
                    <p>Get points by clicking on an image but don't click on any more than once</p>
                </div>
            </div>
        )
    }
}

export default Header;