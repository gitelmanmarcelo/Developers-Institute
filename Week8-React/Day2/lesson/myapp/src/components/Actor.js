import React from "react";

class Actor extends React.Component {
    
    constructor() {
        super();
        this.state = {
            firstName: "Tom",
            lastName: "Hanks",
            image: "https://assets.cdn.moviepilot.de/files/42a98be9213ebc1ba1416411c2a1165d697cc16c1f0a575cbad969c82093/fill/157/157/e-mail-f_r-dich-13.jpg"  
           }
    }
    render() {
        return (
            <>
                    <ul>    
                        <li>{this.state.firstName}</li>
                        <li>{this.state.lastName}</li>
                        <img src={this.state.image} alt='teste'/>
                    </ul>
            </>
        )    
    }
}

export default Actor

