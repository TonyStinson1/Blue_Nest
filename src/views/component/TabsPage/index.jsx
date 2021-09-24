import React, { Component } from 'react';
import { PageLoader,PageTitle } from '../../../layouts';
import StaticJson from '../../../services/StaticJSON';

const { getTabs } = StaticJson;

class TabsPage extends Component {
    state = {
        activeTab: "home",
        isLoading:true
    }
    
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handleTabChange = (tab) => {
        this.setState({ activeTab: tab })
    }
    renderVision1() {
        const { activeTab,isLoading} =this.state;
        if (isLoading) {
            return <PageLoader />;
        }
        return (
            <div className="row mt-2 wow animated fadeInUp" data-wow-delay=".4s">
                <div className="col-md-12">
                    <div className="Material-tab-default">
                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs text-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className={activeTab == "home"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('home')}>Design</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "profile"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('profile')}>Development</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "messages"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('messages')}>Marketing</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "settings"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('settings')}>UI & UX</a>
                            </li>
                        </ul>
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                            {this.renderTabpanel()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    renderTabpanel() {
        const tabArray = getTabs().tabList;
        return (
            <>
                {tabArray.map((tab, i) => tab.id == this.state.activeTab && (
                    <div key={i} className={"tab-pane fade show active"} id={tab.id} role="tabpanel">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={tab.img} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h2 className="subtitle">{tab.title}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nesciunt dolores quibusdam, officia sed mollitia, illo, quis, vel veniam officiis qui repellendus. Perferendis et, veritatis enim voluptatem libero consequuntur eveniet alias nesciunt fugit doloremque tempora id, impedit sed earum voluptatum itaque at. Expedita impedit facere magnam commodi sed dolorem adipisci.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut ut totam quam inventore suscipit ullam nostrum quisquam corrupti nesciunt voluptas necessitatibus, ab porro cupiditate optio mollitia, expedita, omnis? Quasi.</p>
                            </div>
                        </div>
                    </div>

                ))}
            </>
        );
    }
    renderVision2() {
        const { activeTab} =this.state;
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="Material-tab">
                        {/* <!-- Nav tabs --> */}
                        <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className={activeTab == "home"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('home')}><i className="mdi mdi-account-multiple-outline" /><br />Business</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "profile"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('profile')}><i className="mdi mdi-flash-outline"></i><br />Startup</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "messages"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('messages')}><i className="mdi mdi-all-inclusive"></i><br />Agency</a>
                            </li>
                            <li className="nav-item">
                                <a className={activeTab == "settings"?"nav-link active":"nav-link" } data-toggle="tab" role="tab" onClick={() => this.handleTabChange('settings')}><i className="mdi mdi-cloud-outline"></i><br />SaaS</a>
                            </li>
                        </ul >
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="business" role="tabpanel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nesciunt dolores quibusdam, officia sed mollitia, illo, quis, vel veniam officiis qui repellendus. Perferendis et, veritatis enim voluptatem libero consequuntur eveniet alias nesciunt fugit doloremque tempora id Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem modi maxime non nam sed voluptatum accusamus, minus, perspiciatis esse eveniet itaque voluptates quas dignissimos, voluptas quasi dolor. Quam, nesciunt, sapiente.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, aut ut totam quam inventore suscipit ullam nostrum quisquam corrupti nesciunt voluptas necessitatibus, ab porro cupiditate optio mollitia, expedita, omnis? Quasi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur soluta, incidunt, facere, praesentium nisi blanditiis in magni quis quasi fugiat possimus quod quos illum maiores minus at assumenda sed numquam.</p>
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        );
    }
    renderVision3() {
        const { activeTab} =this.state;
        return (
            <div className="Material-tab-default tabs-style-2">
                <div className="row">
                    <div className="col-lg-3 col-xs-12">
                        <div className="nav flex-column nav-pills nav-vertical" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className={activeTab == "home"?"nav-link active show":"nav-link"} id="v-pills-home-tab" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="false" onClick={() => this.handleTabChange('home')}>Home</a>
                            <a className={activeTab == "profile"?"nav-link active show":"nav-link" } id="v-pills-profile-tab" data-toggle="pill" role="tab" aria-controls="v-pills-profile" aria-selected="false" onClick={() => this.handleTabChange('profile')}>Profile</a>
                            <a className={activeTab == "messages"?"nav-link active show":"nav-link" } id="v-pills-messages-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-messages" aria-selected="true" onClick={() => this.handleTabChange('messages')}>Messages</a>
                            <a className={activeTab == "settings"?"nav-link active show":"nav-link" } id="v-pills-settings-tab" data-toggle="pill"  role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => this.handleTabChange('settings')}>Settings</a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xs-12">
                        {/* <!-- Tab panes --> */}
                        <div className="tab-content" id="v-pills-tabContent">
                            {this.renderTabpanel()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderSection(title) {
        return (
                <section className="Material-tabs-section section-padding">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Section Titile --> */}
                            <div className="col-md-12 material-title-section wow animated fadeInLeft" data-wow-delay=".2s">
                                <h1 className="section-title">Vision {title}</h1>
                            </div>
                        </div>
                        {title == 1 ? this.renderVision1() : title == 2 ? this.renderVision2() : this.renderVision3()}
                    </div>
                </section>
        );
    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Tabs' };
        return (
                <>
                    {/* <!-- Page Titile Area --> */}
                    <PageTitle titleScreen={titleScreen} />

                    {/* <!-- Tabs Section --> */}
                    {this.renderSection(1)}
                    {this.renderSection(2)}
                    {this.renderSection(3)}

                </>
        );

    }
}
export default TabsPage;

