import { connect } from "react-redux";

const Home = (props) => {
    console.log(props.posts)
    return (
        <>
        <h1>Home</h1>
        {
            props.posts ? props.posts.map( post => (
                <>
                <img src='../blog.png' alt=''/>
                <a href={'/post/'+post.id}><h1 key={post.id}>{post.title}</h1></a>
                </>
            )) : <h1>No posts yet</h1>
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        posts : state.posts,
    }
}

export default connect(mapStateToProps)(Home);
