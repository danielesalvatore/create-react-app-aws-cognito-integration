import React, {PureComponent} from "react";
import {Row, Col, Jumbotron} from 'react-bootstrap'

class Home extends PureComponent {

    render() {
        return (
            <Row>
                <Col md={12}>
                    <Jumbotron>

                        <h1>Welcome authenticated user!</h1>

                        <p>
                           You can see this page only if you are auth!
                        </p>

                    </Jumbotron>;
                </Col>
            </Row>
        );
    }
}

export default Home;