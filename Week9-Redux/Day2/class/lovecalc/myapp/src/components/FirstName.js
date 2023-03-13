import { connect } from 'react-redux';
import { setFirstName } from '../redux/actions';

const FirstName = (props) => {
    return (
        <>
        <input onChange={props.setFirstName} />
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFirstName : (e) => { dispatch(setFirstName(e.target.value))}
    }
}

export default connect(null,mapDispatchToProps)(FirstName);