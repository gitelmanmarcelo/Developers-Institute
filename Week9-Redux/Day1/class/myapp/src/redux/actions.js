export const changePropOne = (value) => {
    return {
        type : 'PROP_ONE',
        payload: value
    }
}

export const changePropTwo = (value) => {
    return {
        type : 'PROP_TWO',
        payload: value
    }
}

export const switchProps = () => {
    console.log('switchprops')
    return {
        type : 'SWITCH',
        payload: null
    }
}