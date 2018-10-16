import React, {PureComponent} from "react";
import {Row, Col, Jumbotron, Alert, ListGroup, ListGroupItem} from 'react-bootstrap'
import {isAuthenticated} from "../../commons/authentication";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import {fetchUserInfo} from './actions'
import {getAuthenticationError, getAuthenticationIsFetching, getAuthUser} from "../../commons/authentication";


class Home extends PureComponent {

    componentDidMount() {

        const {fetchUserInfo} = this.props;

        fetchUserInfo();
    }

    printUserInfo() {

        const {authUser} = this.props;
        const keys = Object.keys(authUser);

        return (<ListGroup>
            {keys.map((k, i) => <ListGroupItem key={i}><b>{k}</b>: {authUser[k]}</ListGroupItem>)}
        </ListGroup>)
    }

    render() {

        const {error, isFetching, authUser} = this.props;

        return (
            <Row>
                <Col md={12}>

                    {error && <Alert bsStyle="danger">{error}</Alert>}

                    {isFetching && <div>loading...</div>}

                    {authUser && authUser.name && <Jumbotron>

                        <h1>Welcome {authUser.name}!</h1>

                        <br/>

                        {this.printUserInfo()}

                    </Jumbotron>}

                </Col>
            </Row>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: isAuthenticated(),
    authUser: getAuthUser(state),
    isFetching: getAuthenticationIsFetching(state),
    error: getAuthenticationError(state)
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchUserInfo
}, dispatch);

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;