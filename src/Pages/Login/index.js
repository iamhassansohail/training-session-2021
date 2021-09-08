// Library
import React, {Component} from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
// Redux Actions
import {login} from "../../Store/User/actions";

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    componentDidMount() {

        const {props} = this;
        const {authenticated} = props;
        console.log("PROPS" , authenticated, props);

        if(authenticated) {
            props.history.push("/");
        }

    }

    textChanger = (target, value) => {
        const state = this.state;
        state[target] = value;
        this.setState(state);
    }

    submitter = () => {
        const {username, password} = this.state;
        if (username && username.length >= 3 && password && password.length >= 3) {
            console.log("FOrm Submitter");
            this.props.login(username, password , (err) => {
                if(!err)  {
                    this.props.history.push("/");
                } else {
                    alert("Un authenticated");
                }
            });

        } else {
            alert("Validation Failed");
        }
    }


    render() {
        const {state, props} = this;
        const {username, password} = state;


        console.log("STATE", state);
        return (
            <>
                <Container>
                    <Row className="justify-content-md-center">

                        <Col lg={4}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={username}
                                                  onChange={(event) => this.textChanger("username", event.target.value)}/>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password}
                                                  onChange={(event) => this.textChanger("password", event.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" onClick={this.submitter}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps, {login})(LoginPage);