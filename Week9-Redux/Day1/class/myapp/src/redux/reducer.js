const initState = {
    property_one : 'text one from store',
    property_two : 'text two from store'
}

export const reducer = (state=initState,action={}) => {
    console.log('action.type: ',action.type)
    switch (action.type) {
        case 'PROP_ONE':
            return {...state,property_one : action.payload}
        case 'PROP_TWO':
            return {...state,property_two : action.payload}
        case 'SWITCH':
            console.log('swiooip')
            return {...state, property_one: state.property_two, property_two: state.property_one};
        default: 
            return {...state};
    }
    
}