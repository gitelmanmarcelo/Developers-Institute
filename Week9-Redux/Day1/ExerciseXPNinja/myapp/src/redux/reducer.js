const InitState = {
    todo : [{name: 'a'},{name: 'b'},{name: 'c'},{name: 'd'}]
}

export const reducer = (state = InitState,action={}) => {
    switch (action.type) {
        case 'ADD' :
            console.log('reduce - payloaf=',action.payload)
            const newtd = [...state.todo];
            newtd.push({name: action.payload, status: 'active'});
            return {...state,todo:newtd }
        default : 
        return {...state};
    }
    
}