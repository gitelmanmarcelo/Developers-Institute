export const addToDo = (text) => {
    console.log('add - text=',text)
    return {
        type : 'ADD',
        payload : text
    }
}

export const toggleToDo = (index) => {
    return {
        type : 'TOGGLE',
        payload : index
    }
} 

export const viewAll = () => {
    return {
        type : 'VIEW_ALL'
    }
}

export const viewDone = () => {
    return {
        type : 'VIEW_DONE'
    }
}

export const viewActive = () => {
    return {
        type : 'VIEW_ACTIVE'
    }
}

