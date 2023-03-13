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