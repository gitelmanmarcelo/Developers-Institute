export const searchArticle = (text) => {
    return {
        type : 'SEARCH',
        payload : text
    }
}