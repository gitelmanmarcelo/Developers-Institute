import robots from '../robots.json'

const initState = {
    robots: robots,
    filter: ''
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case 'SEARCH':
            console.log('reduce = search')
            console.log(action.payload)
            return {...state,filter : action.payload}
        default:
        return state;
    }
}