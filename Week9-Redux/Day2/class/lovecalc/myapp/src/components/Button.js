import { connect } from 'react-redux';
import { submit } from '../redux/actions';

const Button = (props) => {
    return (
        <>
        <button onClick={props.submit}>Submit</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit : () => { dispatch(submit())}
    }
}

export default connect(null,mapDispatchToProps)(Button);