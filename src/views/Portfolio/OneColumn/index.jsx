import React, { Component } from 'react';
import { PageLoader, PageTitle } from '../../../layouts'
import portfDetailsImg from '../../../assets/images/portfolio/portfolio-details.png';

import port1 from "../../../assets/images/portfolio/work1.jpg";
import port2 from "../../../assets/images/portfolio/work2.jpg";
import port3 from "../../../assets/images/portfolio/work3.jpg";

const listWork = [
    { title: "Business Cards", image: port1, description: "Asus Inc.", class: 'pb-4 business' },
    { title: "Brochure Design", image: port2, description: "Tesla Motors", class: 'development more' },
    { title: "Coffee Cup", image: port3, description: "Starbucks USA", class: 'creative business' }
];
class SingleColumn extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange = () => {

    }

    renderPortDetails() {

        return (
            <section className="portfolio-details-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 portfolio-details-iamge wow animated fadeInUp" data-wow-delay=".6s">
                            <img src={portfDetailsImg} className="img-fluid" alt="" />
                            <h2>Project Info:</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam laudantium provident cum beatae deserunt, doloribus esse eaque obcaecati, qui aut dicta reprehenderit incidunt, illum aliquid excepturi non inventore optio, ratione. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dignissimos alias, vel perferendis aut laudantium voluptatem, eius animi tempore voluptatibus enim neque, veniam maxime! Non, ipsa excepturi obcaecati in nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita corrupti rerum ratione. Quisquam accusantium, neque non porro quo voluptatibus nobis quod obcaecati. Laborum nobis, similique rem assumenda at dolor fuga.</p>
                        </div>
                        <div className="col-md-4 portfolio-details wow animated fadeInUp" data-wow-delay=".6s">
                            <div className="portfolio-category">
                                <a href="#"><i className="material-icons mdi mdi-bookmark-outline"></i> Wordpress Theme</a>
                            </div>
                            <h2>CONBIZ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            <ul className="portfolio-meta clearfix">
                                <li><span> Client </span> XYZ</li>
                                <li><span> Created by </span> John Doe</li>
                                <li><span> Completed on </span> 15 Nov 2017</li>
                                <li><span> Skills </span> WordPress / PHP / CSS3</li>
                                <li><span> Share </span>
                                    <a href="#"><i className="mdi mdi-facebook"></i></a>
                                    <a href="#"><i className="mdi mdi-twitter"></i></a>
                                    <a href="#"><i className="mdi mdi-linkedin"></i></a>
                                    <a href="#"><i className="mdi mdi-dribbble"></i></a>
                                </li>
                            </ul>
                            <a className="mt-3 btn btn-common btn-block"><i className="material-icons mdi mdi-eye"></i> Live Demo<div className="ripple-container"></div></a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    renderPortfolioSection1() {
        return (
            <section className="Material-portfolio-section section-padding section-dark">
                <div className="cotainer">
                    <div className="row">
                        {/* <!-- Section Titile --> */}
                        <div className="col-md-4 col-lg-4 col-xl-6  Material-title-section wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 className="small-title">Related Work</h1>
                        </div>
                        {/* <!-- Single Portfolio Image --> */}
                        <div className="portfolio-item-wrapper clearfix wow animated fadeInUp"
                            data-wow-delay=".5s" id="Material-portfolio">
                            {listWork.map((payload, i) =>
                                <div key={i} className={"col-md-6 col-lg-4 col-xl-4 mix " + payload.class} >
                                    <figure className="single-portfolio">
                                        <img className="img-fluid" src={payload.image} alt="" />
                                        <figcaption className="hover-content">
                                            <a className="btn btn-round btn-fab btn-xs" href="portfolio-single.html"><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                                            <a href="portfolio-single.html"><h2 className="subtitle">{payload.title}</h2></a>
                                            <p>{payload.description}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        );
    }
    renderPortfolioSection() {
        return (
            <section className="Material-portfolio-section section-padding section-dark">
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Titile --> */}
                        <div className="col-md-4 col-lg-4 col-xl-6  Material-title-section wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 className="small-title">Related Work</h1>
                        </div>
                        {/* <!-- Single Portfolio Image --> */}
                        <div className="portfolio-item-wrapper clearfix wow animated fadeInUp" data-wow-delay=".5s" id="Material-portfolio" >
                            {listWork.map((payload, i) =>
                            
                                <div key={i} className={"col-md-6 col-lg-4 col-xl-4 pb-4 mix "+payload.class} style={{display:'inline-block'}}>
                                    <figure className="single-portfolio">
                                        <img className="img-fluid" src={payload.image} alt="" />
                                        <figcaption className="hover-content">
                                            <a className="btn btn-round btn-fab btn-xs" href="portfolio-single.html"><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                                            <a href="portfolio-single.html"><h2 className="subtitle">{payload.title}</h2></a>
                                            <p>{payload.description}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
    render() {
        const titleScreen = { tag: "WORKS IN DETAILS", title: 'Portfolio Details' };

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Portfolio Details Section --> */}
                {this.renderPortDetails()}

                {/* <!-- Portfolio Section --> */}
                {this.renderPortfolioSection()}
            </>
        );
    }
}
export default SingleColumn;

