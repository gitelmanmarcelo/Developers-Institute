import { SEARCH_MOVIES, GET_DETAILS } from "./actions";

const initState = {
    movies : [],
    details: {}
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case SEARCH_MOVIES:
            console.log(action.payload);
            return {...state,movies : action.payload};
        case    GET_DETAILS:
            console.log(action.payload);
            return {...state,details : action.payload};
        default:
            return {...state};
    }
}