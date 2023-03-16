import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";


const Post = (props) => {
    let {id} = useParams();
    console.log(id);
    const post = props.posts.find(post => post.id === id);
    if (post)
        return (
            <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => {props.delete(id)}}>Delete</button>
            </>
        )
    else
        return (
            <>
            <h1>No posts</h1>
            </>
        )
}


const mapStateToProps = (state) => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete : (id) => {dispatch(deletePost(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post);