import React, { Component } from 'react';

class AboutSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = [
            { title: "Bootstrap 4", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-layers", delay: ".2s" },
            { title: "Material Design", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-cards-playing-outline", delay: ".3s" },
            { title: "Fast and Clean", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-alarm-check", delay: ".4s" },
            { title: "Fully Responsive", description: "Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui.", icon: "mdi-responsive", delay: ".5s" }
        ];
        return (
            <section className="Material-about-section section-padding">
                <div className="container">
                    <div className="row">
                        {/* <!-- Single About --> */}
                        {list.map((abt, index) =>
                            <div key={index} className="col-md-6 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay={abt.delay}>
                                <div className="about-single">
                                    <i className={"material-icons mdi " + abt.icon}></i>
                                    <h2 className="subtitle">{abt.title}</h2>
                                    <p>{abt.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );

    }
}
export default AboutSection;

