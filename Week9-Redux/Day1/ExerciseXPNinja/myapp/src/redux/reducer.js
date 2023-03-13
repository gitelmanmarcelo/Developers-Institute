const InitState = {
    todo : [{name: 'a'},{name: 'b'},{name: 'c'},{name: 'd'}],
    filter : 'all'
}

export const reducer = (state = InitState,action={}) => {
    console.log('reduce',state.todo)
    console.log('filter',state.filter)
    switch (action.type) {
        case 'ADD' :
            console.log('reduce - payloaf=',action.payload)
            const newtd = [...state.todo];
            newtd.push({name: action.payload, status: 'active'});
            return {...state,todo:newtd }
        case 'TOGGLE':
            console.log('case toggle')

        const newtd2 = [...state.todo];
        newtd2[action.payload].status = newtd2[action.payload].status === 'completed' ? 'active' : 'completed';
        console.log(state.todo);
            return {...state,todo : newtd2}
        case 'VIEW_ALL':
            return {...state,filter: 'all'};
        case 'VIEW_ACTIVE':
            return {...state,filter: 'active'};
        case 'VIEW_COMPLETED':
            return {...state,filter: 'completed'};
        default : 
        return state;
    }
    
}