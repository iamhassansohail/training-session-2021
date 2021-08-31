// Library
import React, {Component} from "react";
import {Provider} from 'react-redux';
// Store
import store from "./Store";

// Component
import MainComponent from "./Component/Main";
class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <>
                    <MainComponent/>
                </>
            </Provider>
        )
    }
}

export default App