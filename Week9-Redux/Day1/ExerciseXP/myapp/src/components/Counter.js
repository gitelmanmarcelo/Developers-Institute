import { connect } from 'react-redux'
import { incCounter } from '../redux/actions';
import { decCounter } from '../redux/actions';

const Counter = (props) => {
return (
    <div>
    <button style={{fontSize : '3rem'}}onClick={props.dec}>-</button>
    <input style={{fontSize : '3rem'}} readonly value={props.c}/>
    <button style={{fontSize : '3rem'}}onClick={props.inc}>+</button>
    </div>
)
}

const mapStateToProps = (state) => {
    return { c : state.counter};
}

const mapDispatchToProps = (dispatch) => {
    return {
        inc : () => { dispatch(incCounter())},
        dec : () => { dispatch(decCounter())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);
