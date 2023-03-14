export const submit = (data) => {
    return {
        type: 'INSERT',
        payload: data
    }
}

export const edit = (index) => {
    return {
        type: 'UPDATE',
        payload: index           
    }
}

export const del = (id) => {
    return {
        type: 'DELETE',
        payload: id        
    }
}

export const input = (e) => {
    return {
        type : 'INPUT',
        payload : e
    }
}

export const getUsers = () => (dispatch,getState) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        dispatch(
         {
            type: 'USERS',
            payload: data
        })
    })
}