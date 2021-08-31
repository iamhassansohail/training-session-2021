// Action types
import * as Actions from './action-types';
// Library
import axios from "axios";

export const getUserData = () => {
    return (dispatch) => {

        dispatch(_setProcessing(true));

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                console.log("GET USER DATA Response => ", res);

                // dispatch({
                //     type: Actions.SET_USER_DATA,
                //     payload: res.data
                // });

                dispatch(_setUserData(res.data));
                dispatch(_setProcessing(false));

            })
            .catch(err => {
                console.error("GET USER DATA Error => ", err);
                dispatch(_setProcessing(false));
            });
    }
}


// Dispatch Functions
const _setUserData = (payload) => {
    return {
        type: Actions.SET_USER_DATA,
        payload //payload : payload
    }
};
const _setProcessing = (payload) => {
    return {
        type: Actions.SET_PROCESSING,
        payload
    }
}