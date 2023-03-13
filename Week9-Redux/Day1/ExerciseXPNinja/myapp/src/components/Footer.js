import { connect } from "react-redux";
import { viewActive, viewAll, viewCompleted } from "../redux/actions";

const Footer = (props) => {
    return (
        <div>
            <span>Show: </span>
            <button onClick={props.showAll}>All</button>
            <button onClick={props.showActive}>Active</button>
            <button onClick={props.showCompleted}>Completed</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAll: () => {dispatch(viewAll())}, 
        showActive: () => {dispatch(viewActive())}, 
        showCompleted: () => {dispatch(viewCompleted())}
    }
}


export default connect(null,mapDispatchToProps)(Footer);