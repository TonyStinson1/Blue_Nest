import React, { Component } from 'react';
import { PageLoader,PageTitle,MapSection } from '../../../layouts';

class GoogleMapPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange=()=>{

    }
    render() {
        const titleScreen = { tag: "MATERIAL SHORTCODE", title: 'Google Map' };

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Map Section Start --> */}
                <MapSection />
            

            </>
        );

    }
}
export default GoogleMapPage;

