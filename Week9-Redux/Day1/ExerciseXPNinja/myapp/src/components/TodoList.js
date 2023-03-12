import { connect } from "react-redux";

const TodoList = (props) => {
    return (
        <>
        <ul>
        {
            props.list.map( item => (
                <li>{item.name}</li>
            ))
        }
        </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return {list : state.todo}
}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);