import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {USER_POOL_CLIENT_ID, REDIRECT_URI, COGNITO_URL} from '../../config'

class Login extends PureComponent {

    componentDidMount() {
        // Redirect to AWS Cognito
        const loginUri = `${COGNITO_URL}/login?response_type=token&client_id=${USER_POOL_CLIENT_ID}&redirect_uri=${encodeURI(REDIRECT_URI)}`;

        window.location = loginUri;
    }

    render() {
        return <Row>
            <Col md={12}>
                You will now be redirected to AWS Cognito login page...
            </Col>
        </Row>;
    }

}

const mapDispatchToState = () => ({});

Login = connect(undefined, mapDispatchToState())(Login);

export default Login;