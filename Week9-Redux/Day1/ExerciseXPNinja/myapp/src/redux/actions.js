export const addToDo = (text) => {
    console.log('add - text=',text)
    return {
        type : 'ADD',
        payload : text
    }
}

export const toggleToDo = (index) => {
    console.log('toffle')
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

export const viewCompleted = () => {
    return {
        type : 'VIEW_COMPLETED'
    }
}

export const viewActive = () => {
    return {
        type : 'VIEW_ACTIVE'
    }
}

