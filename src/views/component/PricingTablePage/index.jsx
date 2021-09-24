import React, { Component } from 'react';
import { PageLoader,PageTitle } from '../../../layouts';
import StaticJson from '../../../services/StaticJSON';

const { getPrices } = StaticJson;

class PricingTablePage extends Component {
    state = {
        isLoading:true,
        priceBlock1: getPrices().priceBlock1,
        priceBlock2: getPrices().priceBlock2,
        priceBlock3: getPrices().priceBlock3
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange = () => {

    }

    renderPrice1() {
        const { priceBlock1 } = this.state;
        return (
            <div className="row gg-pricing-table icon-table">
                {/* <!-- Single Table --> */}
                {priceBlock1.map((pri, i) =>
                    <div key={i} className="col-md-4 wow fadeInUp animated" data-wow-delay=".3s">
                        <div className="single-pricing-table text-center clearfix">
                            {/* <!-- Heading --> */}
                            <div className="pricing-table-heading">
                                <div className="pricing-icon">
                                    <img src={pri.image} alt="" className="center-block img-fluid" />
                                </div>
                                <h2>{pri.plan}</h2>
                            </div>
                            {/* <!-- Price --> */}
                            <div className="price">
                                <span>${pri.price}</span>
                            </div>
                            {/* <!-- Price Item --> */}
                            <div className="pricing-item">
                                <ul>
                                    <li><p><strong>{pri.user}</strong> User</p></li>
                                    <li><p><strong>{pri.projects}</strong> Projects</p></li>
                                    <li><p><strong>{pri.storage}</strong> Storage</p></li>
                                </ul>
                            </div>
                            {/* <!-- Button --> */}
                            <div className="pricing-button">
                                <a href="javascript:void(0)" className="btn btn-common"><i className="fa fa-check"></i> Buy Now<div className="ripple-container"></div></a>
                            </div>
                        </div>
                    </div>)};
                {/* <!-- Single Table --> */}
            </div>
        );
    }
    renderPrice2() {
        const { priceBlock2 } = this.state;
        return (
            <div class="row">
                {/* <!-- Single Table --> */}
                {priceBlock2.map((pri, i) =>
                    <div class="col-md-4 wow fadeInUp animated" data-wow-delay=".3s">
                        <div class="pricing-table">
                            <div class="pricing-header">
                                <h1>{pri.plan}</h1>
                            </div>
                            <div class="pricing-sub">
                                <h1>${pri.price}<span>/Monthly</span></h1>
                            </div>
                            <ul class="features">
                                <li>{pri.plan} Live Support</li>
                                <li>{pri.user} Users</li>
                                <li>{pri.track}</li>
                                <li>{pri.setup} setup</li>
                            </ul>
                            <div class="pricing-footer">
                                <a href="#link" class="btn btn-common">Purchase Now</a>
                            </div>
                        </div>
                    </div>
                )};
            </div>
        );
    }
    renderPrice3() {
        const { priceBlock3 } = this.state;
        return (
            <div class="row">
                {priceBlock3.map((pri, i) =>
                <div class="col-md-4 wow fadeInUp animated" data-wow-delay=".3s">
                    <div class="pricing-table pricing-table-3 text-center">
                        <div class="table-header">
                            <h3>
                                {pri.plan}
                            </h3>
                        </div>
                        <div class="plan">
                            <h3 class="price">
                                ${pri.price}
                            </h3>
                            <p class="period">
                                {pri.offer}
                            </p>
                        </div>
                        <div class="plan-info">
                            <p>
                                {pri.support} Live Support
                            </p>
                            <p>
                                {pri.user} Users
                            </p>
                            <p>
                                {pri.track}
                            </p>
                            <p>
                                {pri.setup} setup
                            </p>
                            <div class="button-area">
                                <a href="#" class="btn btn-common btn-lg">
                                    Purchase Now
                  </a>
                            </div>
                        </div>
                    </div>
                </div>
                )};
            </div>
        );
    }
    renderpriceBlock(block) {
        return (
            <h1 className="section-title text-center">
                Pricing Block {block}
            </h1>
        );
    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Pricing' };
        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Material Pricing  --> */}
                <section className="Material-pricing-table-section section-padding">
                    <div className="container">
                        {/* <!-- Material Pricing Table1 --> */}
                        {this.renderpriceBlock(1)}
                        {this.renderPrice1()}

                        {/* <!-- Material Pricing Table2 --> */}
                        {this.renderpriceBlock(2)}
                        {this.renderPrice2()}

                        {/* <!-- Material Pricing Table3 --> */}
                        {this.renderpriceBlock(3)}
                        {this.renderPrice3()}


                    </div>
                </section>

            </>
        );

    }
}
export default PricingTablePage;

