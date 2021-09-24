import React, { Component } from 'react';

class PageLoader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                {/* <!-- Preloader --> */}
                <div id="preloader">
                    <div className="loader" id="loader-1"></div>
                </div>
            </>
        );

    }
}
export default PageLoader;

