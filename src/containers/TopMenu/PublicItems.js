import React, {PureComponent} from 'react';
import {Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {LOGIN} from '../../config/routes'

class PublicItems extends PureComponent {

    render() {

        return (
            <Nav>
                <LinkContainer to={LOGIN}>
                    <NavItem>Login</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default PublicItems;