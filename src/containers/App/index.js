import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router'
import {history} from "../../store";
import {HOME, REDIRECT, LOGIN, LOGOUT} from '../../config/routes';
import makePrivate from '../PrivateRoute';
import TopMenu from '../TopMenu'
import {Grid} from 'react-bootstrap';

// sections
import Home from '../Home';

import Login from '../Login';
import Logout from '../Logout';
import Redirect from '../Redirect';
import PageNotFound from '../PageNotFound'

class App extends Component {
    render() {
        return (
            <Grid>
                <ConnectedRouter history={history}>
                    <div>
                        <TopMenu/>

                        <Switch>

                            <Route exact path={HOME} component={makePrivate(Home)}/>
                            <Route path={REDIRECT} component={Redirect}/>
                            <Route path={LOGIN} component={Login}/>
                            <Route path={LOGOUT} component={Logout}/>

                            <Route component={PageNotFound}/>

                        </Switch>
                    </div>
                </ConnectedRouter>
            </Grid>
        );
    }
}

export default App;
