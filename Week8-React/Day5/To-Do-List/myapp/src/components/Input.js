import React from 'react';
import "./Input.css"

class Input extends React.Component {

    constructor() {
        super();

    }

    render() {

        return (
            <>
            <p>Add a new todo:</p>
            <form onSubmit={this.props.onSubmit}>
                <input name="todo"/>
            </form>
            </>
        )
    }
}

export default Input;