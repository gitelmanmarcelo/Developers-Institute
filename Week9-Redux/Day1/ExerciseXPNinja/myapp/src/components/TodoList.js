import { connect } from "react-redux";
import { toggleToDo } from "../redux/actions";
import './ToDoList.css'

const TodoList = (props) => {
    console.log('onClick={',props.toggle)
    if (props.filter === 'all')
        return (
            <>
            <ul>
            {
                props.list.map( (item,index) => (
                    <li id={index} className={item.status} onClick={props.toggle}>{item.name}</li>
                ))
            }
            </ul>
            </>
        )
    else
    return (
        <>
        <ul>
        {
            props.list.filter(el => el.status === props.filter).map( (item,index) => (
                <li id={index} className={item.status} onClick={props.toggle}>{item.name}</li>
            ))
        }
        </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {list : state.todo, filter : state.filter}
}

const mapDispatchToProps = (dispatch) => {
    return {
    toggle : (e) => {dispatch(toggleToDo(e.target.id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);