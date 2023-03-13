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
            const text = e.target.item.value;
            e.target.item.value = "";
            dispatch(addToDo(text));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddToDo);