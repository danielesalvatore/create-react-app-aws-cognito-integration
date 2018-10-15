import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {logout} from "./actions"

class Logout extends PureComponent {

    componentDidMount() {

        const {logout, history} = this.props;
        logout({history});
    }

    render() {
        return <span/>;
    }

}

const mapDispatchToState = () => ({
    logout
});


Logout = withRouter(connect(undefined, mapDispatchToState())(Logout));

export default Logout;