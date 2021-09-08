// Action Types
import * as Actions from './action-types';
// Initial State
const initialState = {
    processing: false,
    authenticated: false,
    userData: null,
    token: null,
    data: []
};
// Reducer
const reducer = (state = initialState, action) => {
    const newState = {...state};

    const {type, payload} = action; // action.type -> type

    // action => type, payload

    switch (type) {
        case Actions.SET_PROCESSING:
            newState.processing = payload;
            break;

        case Actions.SET_USER_DATA:
            newState.data = payload;
            break;

        case Actions.SET_AUTHENTICATED:
            newState.authenticated = payload;
            break;

        case Actions.SET_AUTHENTICATED_USERDATA:
            newState.userData = payload;
            break;

        case Actions.SET_TOKEN:
            newState.token = payload;
            break;

        default:
            return newState;
            break;
    }


    return newState;
};

export default reducer;
