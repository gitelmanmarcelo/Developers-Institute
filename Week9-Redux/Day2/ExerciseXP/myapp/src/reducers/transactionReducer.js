let initialState = {
    currentIndex : -1,
    list: [{account: 1, FSC: 1, name: 1, amount: 1}, 
        {account: 2, FSC: 2, name: 2, amount: 2}, 
        {account: 32, FSC: 32, name: 32, amount: 32}],
    editing : {account: '', FSC: '', name: '', amount: ''}
    }

export const transactionReducer = (state=initialState,action={}) => {
    switch (action.type) {
        case 'INSERT':
            if (state.currentIndex == -1) {
                const temp = [...state.list]
                temp.push(action.payload);            
                return  {...state,list:temp, editing: {account: '', FSC: '', name: '', amount: ''}};    
            } else {
                const temp = [...state.list]
                temp.splice(state.currentIndex,1,action.payload);            
                return  {...state,list:temp, currentIndex : -1, editing: {account: '', FSC: '', name: '', amount: ''}};    
            }
        case 'UPDATE':
            const editing = state.list[action.payload];
            return  {...state,currentIndex : action.payload, editing : editing};    
        case 'INPUT':
            console.log('input')
            const editing2 = state.editing;
            editing2[action.payload.target.id] += action.payload.key;
            console.log('input')
            return  {...state, editing : editing2};    
        case 'DELETE':
            const temp2 = [...state.list]
            temp2.splice(action.payload,1);
            return  {...state,list:temp2};
        default:
            console.log('default')
            return state;
    }
}