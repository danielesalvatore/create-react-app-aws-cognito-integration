import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'react-bootstrap';
import {AUTH_DOMAIN_PREFIX, AWS_COGNITO_REGION, USER_POOL_ID, REDIRECT_URI} from '../../config'

class Redirect extends PureComponent {

    componentDidMount() {
        // Redirect to AWS Cognito
        const loginUri = `https://${AUTH_DOMAIN_PREFIX}.auth.${AWS_COGNITO_REGION}.amazoncognito.com/login?response_type=token&client_id=${USER_POOL_ID}&redirect_uri=${encodeURI(REDIRECT_URI)}`;

        window.location = loginUri;
    }

    render() {
        return <Row>
            <Col md={12}>
               You will now be redirected to AWS Cognito login page.
            </Col>
        </Row>;
    }

}

const mapDispatchToState = () => ({});

Redirect = connect(undefined, mapDispatchToState())(Redirect);

export default Redirect;