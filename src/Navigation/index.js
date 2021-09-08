// Library
import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";
// Pages
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";

class Navigation extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>

                        <Route path="/login" component={LoginPage}/>
                        <Route path="/" component={HomePage}/>

                    </Switch>
                </BrowserRouter>

            </>
        )
    }
}


export default Navigation;