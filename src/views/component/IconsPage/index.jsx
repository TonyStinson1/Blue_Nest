import React, { Component } from 'react';
import { PageLoader,PageTitle } from '../../../layouts'
import StaticJson from '../../../services/StaticJSON';

const { getIconsList } = StaticJson;

class IconsPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Icons' };
        const iconList = getIconsList();

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                <section className="Material-icons-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center wow fadeInUp animated" data-wow-delay=".2s">
                                <h3 className="small-title text-center mb-3">Icon Round</h3>
                                {iconList.map((i, index) =>
                                    <a key={index}><i className={"material-icons icon-round mdi " + i.icon}></i></a>
                                )}
                            </div>
                            <div className="col-md-12 mt-5 text-center wow fadeInUp animated" data-wow-delay=".4s">
                                <h3 className="small-title text-center mb-3">Default Icons</h3>
                                {iconList.map((i, index) =>
                                    <a key={index}><i className={"material-icons icon-common mdi " + i.icon}></i></a>
                                )}
                            </div>
                            <div className="col-md-12 mt-5 text-center wow fadeInUp animated" data-wow-delay=".6s">
                                <h3 className="small-title text-center mb-3">Default Icons</h3>
                                {iconList.map((i, index) =>
                                    <a key={index}><i className={"material-icons icon-box mdi " + i.icon}></i></a>
                                )}

                                <div className="text-center">
                                    <a className="btn btn-common" href="https://materialdesignicons.com/">Browse All Available Icons</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );

    }
}
export default IconsPage;

