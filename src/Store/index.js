// Redux
import thunk from 'redux-thunk';
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose
} from 'redux';
// Stores
import user from './User/reducer';


const reducer = combineReducers({
    user,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer(
        applyMiddleware(thunk)
    )
);


export default store;
