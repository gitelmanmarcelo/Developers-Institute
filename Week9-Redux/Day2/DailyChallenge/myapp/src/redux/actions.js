export const search = (text) => {
    return {
        type : 'SEARCH',
        payload : text
    }
}