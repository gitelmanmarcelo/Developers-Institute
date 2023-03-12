import React from 'react';
import countries from '../Countries.js';
import './AutoCompletedText.css'

class AutoCompletedText extends React.Component {

    constructor() {
        super();
        this.state = { suggestions: [], text: ''};
    }

    componentDidMount = () => {
        this.setState({suggestions : countries});
    }

    handleChange = (e) => {
        this.setState({text : e.target.value});
        this.setState({suggestions : countries.filter( country => {
            return country.slice(0,e.target.value.length).toLowerCase() ===
            e.target.value.toLowerCase(); } ) });
    }

    handleClick = (country) => {
        this.setState({suggestions : [], text : country});
    }

    render() {
        if (this.state.suggestions.length === 0) {
            return (
                <div className="main">
                <h1>Auto Completed</h1>
                <input onChange={this.handleChange} value={this.state.text}/>
                <div className="suggestions">
                </div>
                <p className='footer'>suggestions: {this.state.suggestions.length}</p>
                </div>
            )
    
        } else {
            return (
                <div className="main">
                <h1>Auto Completed</h1>
                <input onChange={this.handleChange}/>
                <div className="suggestions">
                {
                    this.state.suggestions.map( country => (
                        <p  className="item" onClick={() => {this.handleClick(country) }}>{country}</p>
                    ))
                }
                </div>
                <p className='footer'>suggestions: {this.state.suggestions.length}</p>
                </div>
            )

        }
    }
        
}

export default AutoCompletedText;