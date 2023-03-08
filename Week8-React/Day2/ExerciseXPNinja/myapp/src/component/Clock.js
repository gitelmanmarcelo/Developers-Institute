import React from 'react';

class Clock extends React.Component {

    constructor() {
        super();
        let time = new Date().toTimeString().slice(0,8);
        this.state = {curr_time : time,
                    timer_id : null }
    }

    tick() {
        let time = new Date().toTimeString().slice(0,8);
        this.setState({curr_time:time});
    }

    componentDidMount() {
        const timer_id = setInterval(() => {
            this.tick()
        }, 1000);
        this.setState({timer_id : timer_id});
    }

    componentWillUnmount() {
        clearInterval(this.state.timer_id)
    }
    
    render() {
        return (
            <>
            <h1>Hello World</h1>
            <h2>It Is {this.state.curr_time}</h2>
            </>
        )
    }
}

export default Clock;