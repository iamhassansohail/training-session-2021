// Action Types
import * as Actions from './action-types';
// Initial State
const initialState = {
    processing: false,
    data: []
};
// Reducer
const reducer = (state = initialState, action) => {
    const newState = {...state};

    const {type, payload} = action; // action.type -> type

    // action => type, payload

    switch (type)
    {
        case Actions.SET_PROCESSING:
            newState.processing = payload;
            break;

        case Actions.SET_USER_DATA:
            newState.data = payload;
            break;

        default:
            return newState;
            break;
    }




    return newState;
};

export default reducer;
