import { useReducer } from "react";

const initialState = {
    calc : 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {...state,calc : state.calc+1}
        case 'sub':
            return {...state,calc : state.calc-1}
        case 'div':
            return {...state,calc : state.calc/2}
        case 'mul':
            return {...state,calc : state.calc*2}
        default:
            return state;
    }
}

const MathCalc = (props) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <>
        <h2>Simple Calculator</h2>
        Result: {state.calc}<br/>
        <button onClick={() => dispatch({type: 'add'})}>Add 1</button><br/>
        <button onClick={() => dispatch({type: 'sub'})}>Subtract 1</button><br/>
        <button onClick={() => dispatch({type: 'div'})}>Divide by 2</button><br/>
        <button onClick={() => dispatch({type: 'mul'})}>Multiply by 2</button><br/>
        </>
    )
}

export default MathCalc;