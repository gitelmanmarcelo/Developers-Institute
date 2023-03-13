export const setFirstName = (name) => {
    return {
        type : 'SET_FNAME',
        payload : name
    }
}

export const setSecondName = (name) => {
    return {
        type : 'SET_SNAME',
        payload : name
    }
}

export const submit = () => {
    return {
        type : 'SUBMIT'
    }
}
