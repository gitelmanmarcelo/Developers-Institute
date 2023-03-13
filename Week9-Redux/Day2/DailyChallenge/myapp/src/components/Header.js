import { connect } from 'react-redux';
import { search } from '../redux/actions'

const Header = (props) => {
    return (
        <div style={{height: '17vh'}}>
            <h1>RobotFriends</h1>
            <input onChange={props.handleChange} id="search"/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange : (e) => dispatch(search(e.target.value))
    }
}

export default connect(null,mapDispatchToProps)(Header);