import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from "./actions"
import {Row, Col} from 'react-bootstrap';

class Logout extends PureComponent {

    componentDidMount() {

        const {logout, history} = this.props;
        logout({history});
    }

    render() {
        return <Row>
            <Col md={12}>
                <p>Bye bye...</p>
            </Col>
        </Row>;
    }

}

const mapDispatchToState = () => ({
    logout
});


Logout = withRouter(connect(undefined, mapDispatchToState())(Logout));

export default Logout;