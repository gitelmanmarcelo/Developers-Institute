import React from 'react';
import data from '../data.json'

class PostList extends React.Component {

    constructor() {
        super();

    }

    render() {
        return (
            <>
                <h1>Hi This is a title</h1>
                {data.map(item => (
                    <>
                    <h2>{item.title}</h2>
                    <h2>{item.content}</h2>
                    </>
                ))
            }
            </>
        )
    }
}

export default PostList;