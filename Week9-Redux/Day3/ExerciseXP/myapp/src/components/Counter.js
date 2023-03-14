import React from 'react';
import { connect } from 'react-redux';
import { inc, dec } from '../redux/actions';

class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    incrementIfOdd = () => {
        if (this.props.counter%2)
            this.props.inc();
    }



    render() {
        return (
            <div>
                <p>Clicked {this.props.counter} times</p>
                <button onClick={this.props.inc}>+</button>
                <button onClick={this.props.dec}>-</button>
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
                <button onClick={() => {setTimeout(() => {
                    this.props.inc();
                }, 1000);}}>Increment async</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc : () => {dispatch(inc())},
        dec : () => {dispatch(dec())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);