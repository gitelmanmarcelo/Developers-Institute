export const inc = () =>  {

    dispatch({type : 'LOGO_ON'});
    setTimeout(() => {
        dispatch({type : 'LOGO_OFF'});
        dispatch({type : 'INC'});    
    },5000)

}

export const dec = () => {
    return {
        type : 'DEC'
    }
}