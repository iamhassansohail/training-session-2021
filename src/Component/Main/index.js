// Library
import React, {Component} from 'react';
import {connect} from 'react-redux';
// Redux Action
import {getUserData} from '../../Store/User/actions';

class MainComponent extends Component {

    componentDidMount() {
        this.props.getUserData();
    }

    render() {
        console.log("PROPS", this.props);

        const {props} = this;
        return (
            <>
                {props.userData ? props.userData.map((item, key) => (
                    <>
                        <div>{item.name}</div>
                    </>
                )) : null}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("MAP STATE", state);

    return {
        userData: state.user.data,
        processing: state.user.processing
    }
};

export default connect(mapStateToProps, {getUserData})(MainComponent);