import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {onLoginSuccess, onLoginError} from "./actions"
import {Row, Col} from 'react-bootstrap';
import {HOME, LOGIN} from "../../config/routes";

class Redirect extends PureComponent {

    getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, "\\$&");
        let regex = new RegExp("[?#&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    componentDidMount() {
        const {history, onLoginSuccess, onLoginError} = this.props;

        const authToken = this.getParameterByName("id_token");
        const cognitoError = this.getParameterByName("error");

        if (cognitoError != null && cognitoError !== "") {
            const error = this.getParameterByName("error_description");
            onLoginError({error});
            return;

        }
        if (authToken === null || authToken === "") {
            history.push(LOGIN);
            return;
        }

        onLoginSuccess({token: onLoginSuccess});

        history.push(HOME)
    }

    render() {
        return <Row>
            <Col md={12}>
                You are logout now
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