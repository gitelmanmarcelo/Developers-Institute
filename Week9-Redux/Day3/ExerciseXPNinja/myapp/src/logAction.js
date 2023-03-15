export const logAction = (store) => (next) => (action) => {
    console.log('caught in the middleware:',store.getState());
    next(action);
}