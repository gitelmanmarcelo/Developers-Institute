const initState = {
    age : 20,
    showLogo : false
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
        case 'INC':
            return {...state,age: state.age+1};
        case 'DEC':
            return {...state,age: state.age-1};
        case 'LOGO_ON':
            return {...state,showLogo: true};
        case 'LOGO_OFF':
            return {...state,showLogo : false};
        default:
            return state;
    }
    
}