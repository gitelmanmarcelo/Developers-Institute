export const first = (store) => (next) => (action) => {
    console.log('middleware');
    console.log('store',store.getState());
    next(action);
}

