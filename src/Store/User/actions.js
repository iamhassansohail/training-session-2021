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

export const login = (username, password, cb) => {
    return (dispatch) => {
        dispatch(_setProcessing(true));

        axios.post("http://clipboard.hl7i.com/api/v1/user/login", {
            username, password
        })
            .then(res => {
                console.log("USER LOGIN RESPONSE" , res.data);
                const content = res.data.content;

                dispatch(_setAuthenticatedUserData(content));
                dispatch(_setToken(content.token));
                dispatch(_setAuthenticated(true));


                dispatch(_setProcessing(false));


                cb && cb();

            })
            .catch(err => {
                console.error("USER_LOGIN ERROR" , err);

                dispatch(_setAuthenticated(false));
                dispatch(_setProcessing(false));

                cb && cb(err);
            })

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
const _setAuthenticated = (payload) => {
    return {
        type: Actions.SET_AUTHENTICATED,
        payload
    }
}
const _setAuthenticatedUserData = (payload) => {
    return {
        type: Actions.SET_AUTHENTICATED_USERDATA,
        payload
    }
}
const _setToken = (payload) => {
    return {
        type: Actions.SET_TOKEN,
        payload
    }
}