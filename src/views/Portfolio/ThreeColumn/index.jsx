import React, { Component } from 'react';
import { PageLoader,PageTitle,Portfolio,ActionSection} from '../../../layouts'
import StaticJson from '../../../services/StaticJSON';

const { getPortfolioList } = StaticJson;

class ThreeColumn extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange=()=>{

    }
    render() {
        const titleScreen = { tag: "OUR RECENT", title: 'Works' };
        const filter =[{name:'All'},{name:'Business'},{name:'Development'},{name:'Creative'},{name:'More'}]
        const portfolioList = getPortfolioList().portfolioList;
        
        if (this.state.isLoading) {
            return <PageLoader />;
          }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen}  column={3} />
                
                {/* <!-- Portfolio Section --> */}
                <Portfolio column={3} title={"Featured Works"} filterOptions={filter} portfolioList={portfolioList} />

                {/* <!-- Call to action Section --> */}
                <ActionSection />

            </>
        );

    }
}
export default ThreeColumn;

