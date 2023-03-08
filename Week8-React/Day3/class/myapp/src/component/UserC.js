import React from 'react'

class UserC extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div style={{
                display : 'inline-block',
                padding: '10px',
                margin: '10px',
                border: '1px solid grey'
            }}>

            <h1>{this.props.name}</h1>
            <h1>{this.props.email}</h1>
            <h1>{this.props.username}</h1>
        </div>
        )
    }
}

export default UserC;