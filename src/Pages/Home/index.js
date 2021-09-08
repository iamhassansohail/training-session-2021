// Library
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";


class HomePage extends Component {

    componentDidMount() {
        const {props} = this;
        const {authenticated} = props;
        console.log("PROPS" , authenticated, props);

        if(!authenticated) {
            props.history.push("/login");
        }

    }


    render() {
        const {props} = this;
        const {authenticated} = props;
        console.log("PROPS" , authenticated, props);
        return (
            <>
                <span>Home Page</span>
                <Link to={"/login"}>Login </Link>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    }
}
export default connect(mapStateToProps)(HomePage);