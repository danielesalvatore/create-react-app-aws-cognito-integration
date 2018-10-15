import React, {PureComponent} from "react";

class PageNotFound extends PureComponent {

    componentDidMount() {
        console.log(404)
    }

    render() {
        return (
            <div>
                Ops... 404 page not found
            </div>
        );
    }
}

export default PageNotFound;