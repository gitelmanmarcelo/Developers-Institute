export const search = (text) => {
    return {
        type : 'SEARCH',
        payload : text
    }
}

export const loadRobots = () => (dispatch) => {
    console.log('action')
    dispatch({type : 'LOADING_START'});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( res => res.json())
    .then(data => {
        console.log('data:',data);
        dispatch({type : 'LOADING_SUCCESS', payload : data});
    })
    .catch(err => {
        dispatch({type : 'LOADING_ERROR', payload : err});
    })

}