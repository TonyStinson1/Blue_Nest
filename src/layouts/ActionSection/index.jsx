import React, { Component } from 'react';

class ActionSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <section className="call-to-action-section">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-8 col-lg-8 col-xs-12 text-left wow animated fadeInLeft" data-wow-delay=".2s">
                                <h1>Call Us @02-9114147</h1>
                                <h3>Enjoy our 24/7 support</h3>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xs-12 mt-4 text-right wow animated fadeInRight" data-wow-delay=".3s">
                                <a href="#" className="animated4 btn btn-common"><i className="material-icons mdi mdi-phone"></i> Contact us</a>
                            </div>
                        </div>
                    </div>
                </section>
        );

    }
}
export default ActionSection;

