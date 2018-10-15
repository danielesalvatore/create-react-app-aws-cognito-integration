import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {isAuthenticated} from '../../utils/authentication';
import PublicItems from './PublicItems'
import PrivateItems from './PrivateItems'
import {bindActionCreators} from "redux";
import {Navbar} from "react-bootstrap";
import {Link} from 'react-router-dom';
import {HOME} from '../../config/routes'

class TopMenu extends PureComponent {

    render() {
        const {isAuthenticated} = this.props;

        return (<Navbar fixedTop>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to={HOME}>FAO</Link>
                </Navbar.Brand>
            </Navbar.Header>

            {isAuthenticated ? <PrivateItems/> : <PublicItems/>}

        </Navbar>);
    }
}


const mapStateToProps = () => ({
    isAuthenticated: isAuthenticated()
});
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

TopMenu = connect(mapStateToProps, mapDispatchToProps)(TopMenu);

export default TopMenu;