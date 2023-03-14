const initState = {
    robots: [],
    filter: '',
    isLoading : false
}

export const reducer = (state = initState, action={}) => {
    console.log('reducer');
    switch (action.type) {
        case 'SEARCH':
            console.log('reduce = search')
            console.log(action.payload)
            return {...state,filter : action.payload}
        case 'LOADING_START':
            console.log('load start')
            return {...state,isLoading : true};
        case 'LOADING_SUCCESS':
            return {...state,isLoading : false, robots : action.payload};
        case 'LOADING_ERROR':
        default:
        return state;
    }
}