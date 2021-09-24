import React, { Component } from 'react';
import { PageLoader,PageTitle,Team,ActionSection } from '../../layouts'
import StaticJson from '../../services/StaticJSON/index';

const {getTeamMember} = StaticJson;

class TeamMember extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    render() {
        const titleScreen = { tag: "MEET OUR", title: 'Team' };
        const teamList = getTeamMember().mainList;
        
        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />
              

                {/* <!-- Our Team Section --> */}
                <Team teamList={teamList} />

                {/* <!-- Call to action Section --> */}
                <ActionSection/>
            </>
        );

    }
}
export default TeamMember;

