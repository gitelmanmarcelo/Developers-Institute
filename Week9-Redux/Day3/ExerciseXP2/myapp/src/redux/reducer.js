const initState = {
    age : 20
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case 'INC':
            return {...state,age: state.age+1};
        case 'DEC':
            return {...state,age: state.age-1};
        default:
            return state;
    }
    
}