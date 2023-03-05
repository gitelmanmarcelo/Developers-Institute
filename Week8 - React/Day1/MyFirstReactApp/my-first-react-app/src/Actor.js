import React from "react";

const Actor = (props) => {
    return (
        <>
        {
            props.actors.map(actor => (
                <ul>    
                    <li>{actor.firstName}</li>
                    <li>{actor.lastName}</li>
                    <img src={actor.image} alt='teste'/>
                </ul>
            ))
            
            
        }
        </>
    )
}

export default Actor

