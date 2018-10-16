import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {isAuthenticated} from '../../commons/authentication'
import {LOGIN} from "../../config/routes";


function privateRoute(BaseComponent) {
    class Private extends Component {

        componentWillMount() {
            this.checkAuthentication(this.props);
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.location !== this.props.location) {
                this.checkAuthentication(nextProps);
            }
        }

        checkAuthentication(params) {
            const {history} = params;
            const authenticated = isAuthenticated();

            if (!authenticated) {
                history.replace({pathname: LOGIN})
            }
        }

        render() {
            return <BaseComponent {...this.props} />;
        }
    }

    return withRouter(Private);
}

export default privateRoute;