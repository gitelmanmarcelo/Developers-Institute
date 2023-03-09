import React from 'react';
import './Task.css'

class Task extends React.Component {

    constructor(props) {
        super(props);
    }
   
        render() {
        let statusClass;
        if (this.props.status == 'pending')
            statusClass = "pending";
        else if (this.props.status == 'done')
            statusClass = "done";
        else if (this.props.status == 'deleted')
            statusClass = "deleted";
        return (
            <div className={statusClass}  onClick={this.props.onClick}>
                <p>{this.props.name} </p>
            </div>
        )
    }
}

export default Task;