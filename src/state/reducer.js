const initialState = {
    vacation: []
};
 
const reducer = (state = initialState, action) => {

    let newState = {};
    switch (action.type) {
        
        
        case 'VACATION_LOADED':
            newState = Object.assign({}, state, {
                vacation: action.data
            });
            return newState;


        default:
            return state;
    }
};
export default reducer;