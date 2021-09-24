import React, { Component } from 'react';
import { PageLoader,PageTitle, Counter, Team,ActionSection,ServicesSection,ClientSection } from '../../layouts'
import StaticJson from '../../services/StaticJSON/index';

const {getTeamMember,getCounter,getServices,getClientList} = StaticJson;

class Services extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    render() {
        const titleScreen = { tag: "KNOW ABOUT OUR", title: 'Services' };
        const teamList = getTeamMember().mainList;
        const counterList = getCounter().list1;
        const servicesList = getServices().servicesList1;
        const clientList=getClientList();

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Services Section --> */}
                <ServicesSection title={"Why Choose"} servicesList={servicesList} iconRound={false}   />

                {/* <!-- Counter section --> */}
                <Counter counterList={counterList} />

                {/* <!-- Our Team Section --> */}
                <Team teamList={teamList} title={'Our Team'} />

                {/* <!-- Start Client Section --> */}
                <ClientSection clientList ={clientList} />
                
                {/* <!-- Call to action Section --> */}
                <ActionSection/>
            </>
        );

    }
}
export default Services;

