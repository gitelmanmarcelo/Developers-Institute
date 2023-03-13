import { connect } from 'react-redux';
import { setSecondName } from '../redux/actions';

const SecondName = (props) => {
    return (
        <>
        <input onChange={props.setSecondName}/>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSecondName : (e) => { dispatch(setSecondName(e.target.value))}
    }
}

export default connect(null,mapDispatchToProps)(SecondName);