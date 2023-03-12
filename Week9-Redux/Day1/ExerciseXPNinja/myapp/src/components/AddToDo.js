import { connect } from "react-redux";
import { addToDo } from "../redux/actions";

const AddToDo = (props) => {
    return (
        <>
        <form onSubmit={props.add}>
        <input id="item"/>
        <button>Add Todo</button>
        </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (e) => {
            e.preventDefault();
            dispatch(addToDo(e.target.item.value));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddToDo);