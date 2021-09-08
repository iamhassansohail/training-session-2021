// Library
import React, {Component} from "react";
import {Provider} from 'react-redux';
// Store
import store from "./Store";

// Component
import Navigation from "./Navigation";
class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <>
                    <Navigation/>
                </>
            </Provider>
        )
    }
}

export default App