import React, { Component } from 'react';
import Videoimage from '../../assets/images/about/video.jpg'
class WelcomeSection extends Component {
    state = {
        activeTab: "business"
    }
    handleTabChange = (tab) => {
        this.setState({ activeTab: tab })
    }

    renderTab() {
        const { activeTab} =this.state;

        return (
            <div className="Material-tab">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className={activeTab == "business"?"nav-link active":"nav-link" } data-toggle="tab" onClick={() => this.handleTabChange('business')} role="tab"><i className="mdi mdi-account-multiple-outline"></i><br />Business</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeTab == "startup"?"nav-link active":"nav-link" } data-toggle="tab" onClick={() => this.handleTabChange('startup')} role="tab"><i className="mdi mdi-flash-outline"></i><br />Startup</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeTab == "agency"?"nav-link active":"nav-link" } data-toggle="tab" onClick={() => this.handleTabChange('agency')} role="tab"><i className="mdi mdi-all-inclusive"></i><br />Agency</a>
                    </li>
                    <li className="nav-item">
                        <a className={activeTab == "saas"?"nav-link active":"nav-link" } data-toggle="tab" onClick={() => this.handleTabChange('saas')} role="tab"><i className="mdi mdi-cloud-outline"></i><br />SaaS</a>
                    </li >
                </ul >
                {/* < !--Tab panes-- > */}
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="business" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nesciunt dolores quibusdam, officia sed mollitia, illo, quis, vel veniam officiis qui repellendus. Perferendis et, veritatis enim voluptatem libero consequuntur eveniet alias nesciunt fugit doloremque tempora id Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut ut totam quam inventore suscipit ullam nostrum quisquam corrupti nesciunt voluptas necessitatibus, ab porro cupiditate optio mollitia, expedita, omnis? Quasi.</p>
                    </div>
                </div>
            </div >
        )
    }
    renderContent() {
        return (
            <div className="welcome-content">
                <div className="text">
                    <h1>Create Stunning Websites in Easier and Effecient Way!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently. Excepteur sint occaecat cupi datat non proidt, sunt in culpa qui offi cia deserunt</p>
                </div>
                <div className="button">
                    <a href="" className="btn btn-common">
                        Know More
                        <div className="ripple-container"></div>
                    </a>
                </div>
            </div>
        );
    }
    render() {
        const { contentView } = this.props;
        return (
            <section className="welcome-section section-padding section-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-7 col-xs-12">
                            {contentView ? this.renderContent() : this.renderTab()}
                        </div>
                        <div className="col-md-5 col-lg-5 col-xs-12 welcome-column">
                            <div className="video-gallery">
                                <img className="img-fluid" src={Videoimage} alt="" />
                                <div className="overlay-gallery">
                                    <div className="icon-holder">
                                        <div className="icon">
                                            <a href="https://www.youtube.com/watch?v=r44RKWyfcFw" className="video-popup wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0.3s">
                                                <i className="mdi mdi-play-circle-outline"></i>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}
export default WelcomeSection;

