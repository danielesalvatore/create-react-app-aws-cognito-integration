import React, {PureComponent} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {REGISTER, LOGIN} from '../../config/routes'

class PublicItems extends PureComponent {

    render() {

        return (
            <Nav>

                <LinkContainer to={LOGIN}>
                    <NavItem>Login</NavItem>
                </LinkContainer>

                <LinkContainer to={REGISTER}>
                    <NavItem>Register</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default PublicItems;