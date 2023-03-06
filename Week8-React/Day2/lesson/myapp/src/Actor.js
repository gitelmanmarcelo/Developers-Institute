import React from "react";

class Actor extends React.Component {
    
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            image: ""
        }
    }
    render() {
        return (
            <>
            {
                props.actors.map(actor => (
                    <ul>    
                        <li>{this.state.firstName}</li>
                        <li>{this.state.lastName}</li>
                        <img src={this.state.image} alt='teste'/>
                    </ul>
                ))
                
                
            }
            </>
        )    
    }
}

export default Actor

