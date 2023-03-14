const InitState = {
    firstName : '',
    secondName : '',
    result : ''
};

export const reducer =  (state = InitState, action = {}) => {
    switch (action.type) {
        case 'SET_FNAME':
            return {...state,firstName : action.payload}
        case 'SET_SNAME':
                        console.log('state:',state);

            return {...state,secondName : action.payload }
        case 'SUBMIT':
            return {...state,result : action.payload }
        default:
            console.log('default')
        return state;
    
    }
}

const getData = async (fname,sname) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5e5ab6c5e0mshcbe9fa99d64b85cp1f5a5cjsn4a8d898647c6',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    }
    const res = await fetch(
       `https://love-calculator.p.rapidapi.com/getPercentage?sname=${fname}&fname=${sname}}`, options)
    const data = await res.json()
    console.log('data.result:',data.result)
    return data;
    
}