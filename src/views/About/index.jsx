import React, { Component } from 'react';
import { PageLoader,PageTitle, AboutSection, WelcomeSection, Counter, Portfolio, Team, ActionSection } from '../../layouts'
import StaticJson from '../../services/StaticJSON/index';

const {getTeamMember,getCounter,getPortfolioList} = StaticJson;

class About extends Component {
    state = {
        aboutUs: true, isLoading:true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({isLoading:false})}, 1000);
        let currentUrl = window.location.href;
        currentUrl = currentUrl.split('#/')[1];
        if (currentUrl === 'about') {
            this.setState({ aboutUs: true })
        } else {
            this.setState({ aboutUs: false })
        }
    }
    render() {
        const { aboutUs,isLoading } = this.state;
        const titleScreen = { tag: "Who we are", title: aboutUs ? 'About Us' : 'About Us 2' };
        const teamList = getTeamMember().mainList;
        const counterList =getCounter().list2;
        const filter = [{ name: 'All' }, { name: 'Business' }, { name: 'Creative' }, { name: 'Education' }, { name: 'Blog' }, { name: 'Free' }, { name: 'More' }]
        const portfolioList = getPortfolioList().portfolioList;
        if (isLoading) {
            return <PageLoader />;
          }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />
                {/* <!-- About Section --> */}
                <AboutSection />

                {/* <!-- Welcome Section Start --> */}
                <WelcomeSection contentView={aboutUs} />

                {/* <!-- work-counter area --> */}
                {aboutUs && <Counter counterList={counterList} />}

                {/* <!-- Portfolio Section --> */}
                {aboutUs && <Portfolio column={3} title={"Portfolio"} filterOptions={filter} portfolioList={portfolioList} />}

                {/* <!-- Our Team Section --> */}
                <Team teamList={teamList} title={'Our Team'} />

                {/* <!-- Call to action Section --> */}
                <ActionSection />
            </>
        );

    }
}
export default About;