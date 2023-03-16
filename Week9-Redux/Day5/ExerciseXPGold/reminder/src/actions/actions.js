import { ADD_REMINDER, DEL_REMINDER } from "../constants"

export const addReminder = (text,time) => {
    return {
        type : ADD_REMINDER,
        payload: {text , time }
    }
}

export const delReminder = (id) => {
    return {
        type : DEL_REMINDER,
        payload: id
    }
}

