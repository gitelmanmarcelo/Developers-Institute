export const inc = () =>  {
    console.log('action')
    return {
        type : 'AGE_UP'
    }
}

export const dec = () => {
    return {
        type : 'DEC'
    }
}