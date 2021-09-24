import React, { Component } from 'react';
import { PageLoader,PageTitle,Counter } from '../../../layouts';
import StaticJson from '../../../services/StaticJSON';

const { getCounter } = StaticJson;
class CounterPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange=()=>{

    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Counter' };
        const counterList = getCounter().list1;

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />
                
                {/* <!-- Counter section --> */}
                <Counter counterList={counterList} />

            

            </>
        );

    }
}
export default CounterPage;

