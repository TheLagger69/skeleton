const initialState = {
    users:[],
    type:'INITIAL'
};
export default (state,action) => {
    if (typeof state === 'undefined') {
        return initialState
    }

    return {
        users:action.users
    }
}