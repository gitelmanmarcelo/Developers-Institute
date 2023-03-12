import React from 'react';
import axios from 'axios'

class UsersList extends React.Component {
    constructor() {
        super();
        this.state = {users : [], loaded : false}
    }

    componentDidMount = async () => {
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            this.setState({users : res.data, loaded : true});
        } catch (err) {
            console.log(err);
        }

    }

    render() {
        const {users, loaded} = this.state;
        if (loaded) {
            return(
                <>
                <h1>List of users:</h1>
                {
                    users.map( user => (
                        <>
                        <p><strong>ID:</strong>{user.id}</p>
                        <p><strong>Name:</strong>{user.name}</p>
                        <p><strong>Username:</strong>{user.username}</p>
                        <p><strong>Email:</strong>{user.email}</p>
                        <p><strong>City:</strong>{user.city}</p>
                        </>
                    ))
                }
                </>
            );
    
        } else {
            return (<h1>Loading...</h1>)
        }
    }
}

export default UsersList;