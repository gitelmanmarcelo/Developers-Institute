import { connect } from "react-redux";
import image from './blog.png'
import { Link } from "react-router-dom";

const Home = (props) => {
    console.log(props.posts)
    return (
        <>
        <h1>Home</h1>
        {
            props.posts ? props.posts.map( (post,index) => (
                <div key={index}>
                <img style={{display: 'block', width : '200px', height: '200px'}} src={image} alt='error in image'/>
                <Link to={'/post/'+post.id}><h1 key={post.id}>{post.title}</h1></Link>
                </div>
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
