import React, {Component} from 'react';
import Form from './form'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {HOME} from '../../config/routes'
import {getAuthenticationError, getAuthUser, getToken} from '../../utils/authentication'; // 1. import Auth User selectors
import {login} from './actions';
import {Row, Col, Alert} from 'react-bootstrap';

class Login extends Component {

    goToDefaultRoute() {
        const {history} = this.props;
        history.push(HOME);
    }

    componentDidUpdate() {

        const {token} = this.props;

        /**
         *   If user has a token (valid or not) redirect to home
         *   If the token is not valid,
         *   the axios interceptor will redirect user to login page
         */
        if (token) {
            this.goToDefaultRoute()
        }
    }

    componentDidMount() {

        const {token} = this.props;

        if (token) {
            this.goToDefaultRoute()
        }
    }

    shouldComponentUpdate(nextProps) {
        const {token, authUser, loginError} = this.props; //3. access auth user object

        return (JSON.stringify(token) !== JSON.stringify(nextProps.token)) ||
            JSON.stringify(nextProps.authUser) !== JSON.stringify(authUser) ||
            JSON.stringify(nextProps.loginError) !== JSON.stringify(loginError);
    }


    render() {
        const {loginError, onSubmit} = this.props;

        return (
            <Row>
                <Col xs={1} md={4}/>
                <Col md={4}>

                    {loginError && <Alert bsStyle="danger">
                        Username or password is incorrect</Alert>}

                    <Form
                        onSubmit={onSubmit}
                    />

                </Col>
                <Col xs={1} md={4}/>
            </Row>
        );
    }

}

const mapStateToProps = (state) => ({
    authUser: getAuthUser(state), //2. add auth user to component props
    loginError: getAuthenticationError(state),
    token: getToken()
});

const onSubmit = (payload) => (dispatch) => {

    const credentials = {
        username: payload.username,
        password: payload.password,
    };

    login({credentials, dispatch});

};

Login = withRouter(connect(
    mapStateToProps,
    {onSubmit}
)(Login));

export default Login