import React, { Component } from 'react';

class ServicesSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {title,servicesList,iconRound} =this.props;
        return (
            <section className="Material-service-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Titile --> */}
                        <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 className="section-title">{title}</h1>
                        </div>
                    </div>
                    {/* <!-- Services Widget Section --> */}

                    <div className="row">
                        {/* <!-- Service Widgets --> */}
                        {servicesList.map((serv, key) =>
                            <div key={key} className={"col-md-6 col-lg-4 col-xl-4 single-service-widget animated fadeInUp "+ (iconRound ?"wow features-block":"wow")} data-wow-delay={serv.delay}>
                                <div className="media">
                                    <div className="media-left">
                                        <i className={"material-icons pulse-shrink mdi " + serv.icon}></i>
                                    </div>
                                    <div className="media-body">
                                        <h2 className="subtitle"><a href="#">{serv.title}</a></h2>
                                        <p>{serv.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
export default ServicesSection;

