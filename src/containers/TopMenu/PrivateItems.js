import React, {PureComponent} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {HOME, LOGOUT} from '../../config/routes'

class PrivateItems extends PureComponent {

    render() {

        return (
            <Nav>
                <LinkContainer to={HOME}>
                    <NavItem>Home</NavItem>
                </LinkContainer>

                <LinkContainer to={LOGOUT}>
                    <NavItem>Logout</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default PrivateItems;