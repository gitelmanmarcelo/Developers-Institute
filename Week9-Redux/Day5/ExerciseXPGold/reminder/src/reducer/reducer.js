import { ADD_REMINDER, DEL_REMINDER } from "../constants";

const initState = {
    reminders : []
}

export const reducer = (state=initState, action={}) => {
    switch (action.type) {
        case ADD_REMINDER:
            const temp = [...state.reminders];
            temp.push({text : action.payload.text, time : action.payload.time});
            return {...state,reminders : temp}
        case DEL_REMINDER:
            const temp2 = [...state.reminders];
            temp2.splice(action.payload,1);
            return {...state,reminders : temp2}
        default: 
            return state;
    }
}