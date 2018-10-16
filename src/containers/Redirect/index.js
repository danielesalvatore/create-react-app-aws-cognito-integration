import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {onLoginSuccess, onLoginError} from "./actions"
import {Row, Col} from 'react-bootstrap';
import {HOME, LOGIN} from "../../config/routes";

class Redirect extends PureComponent {

    getParameterByName(name, url) {
        if (!url) url = window.location.hash;

        const hash2Obj = url.substr(1)
            .split("&")
            .map(v => v.split("="))
            .reduce((pre, [key, value]) => ({...pre, [key]: value}), {});

        console.log(hash2Obj)

        return hash2Obj[name] ? decodeURIComponent(hash2Obj[name]) : undefined;
    }

    componentDidMount() {
        const {history, onLoginSuccess, onLoginError} = this.props;

        const idToken = this.getParameterByName("id_token");
        const accessToken = this.getParameterByName("access_token");
        const cognitoError = this.getParameterByName("error");

        if (cognitoError) {
            const error = this.getParameterByName("error_description");
            onLoginError({error});
            return;
        }


        if (!idToken) {
            history.push(LOGIN);
            return;
        }

        onLoginSuccess({idToken, accessToken});

        history.push(HOME)
    }

    render() {
        return <Row>
            <Col md={12}>
                Redirecting to home...
            </Col>
        </Row>;
    }

}

const mapDispatchToState = () => ({
    onLoginSuccess,
    onLoginError
});


Redirect = connect(undefined, mapDispatchToState())(Redirect);

export default Redirect;