import React from 'react';
import axios from 'axios';

class PostList extends React.Component {
    constructor() {
        super();
        this.state = { posts : []}
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            this.setState({posts : res.data});
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        const {posts} = this.state;
        return (
            <>
            <h1>List of posts</h1>
            {
            posts.map( post => (
                <>
                <p><strong>ID: </strong>{post.id}</p>
                <p><strong>Title: </strong>{post.title}</p>
                <p><strong>Body: </strong>{post.body}</p>
                </>
            ))
            }
            </>
        )
    }

}
export default PostList;