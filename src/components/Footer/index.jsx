import React, { Component } from 'react';
import {  Input } from '@material-ui/core';
import post1 from "../../assets/images/art/a1.jpg";
import post2 from "../../assets/images/art/a2.jpg";
import post3 from "../../assets/images/art/a3.jpg";

class Footer extends Component {
    constructor(props){
        super(props);
        this.state={
            email:''
        }
    }
    handleSubmit=()=>{

    }
    render() {
        let currentUrl =window.location.href;
        currentUrl = currentUrl.split('#')[0];
        const footerArray = {
            socialIcon: ["facebook", "twitter", "dribbble", "github-circle", "linkedin"],
            post: [
                { img: post1, title: 'Fusce gravida tortor felis', date: '12 Jan 2019' },
                { img: post2, title: 'Ornare Nullam Risus Cursus', date: '12 Jan 2019' },
                { img: post3, title: 'Euismod Nullam Fusce Dapibus', date: '12 Jan 2019' }
            ],
            details: {
                email: 'mail@material.com',
                location: '548 San Francisco, CA',
                phone: '+00 (123) 456 78 90',
                cell: '+00 (121) 455 47 54'
            }
        };
        return (
            <footer className="page-footer center-on-small-only  pt-0 footer-widget-container">
                {/* <!--Footer Links--> */}
                <div className="container pt-5 mb-5">
                    <div className="row">
                        {/* <!--        <!--/.Footer Links--> First column--> */}
                        <div className="col-md-6 col-lg-3 col-xl-3 footer-contact-widget">
                            <h3 className="footer-title">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates eos minus expedita illo recusandae esse labore obcaecati nisi amet quia odio sapiente! Fugiat, voluptatibus nemo necessitatibus porro.</p>
                            <ul>
                                {footerArray.socialIcon.map((socialIcon,i) => (
                                    <li key={i}>
                                        <a href="#"><i className={"mdi mdi-"+socialIcon}></i></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <!--/.First column--> */}

                        {/* <!--Second column--> */}
                        <div className="col-md-6 col-lg-3 col-xl-3 recent-widget">
                            <h3 className="footer-title">Recent Posts</h3>
                            <ul className="image-list">
                                {footerArray.post.map((post,i) => (
                                    <li key={i}>
                                        <figure className="overlay">
                                            <img className="img-fluid" src={post.img} alt="" />
                                            <figcaption><a href="blog-single.html"><i className="mdi mdi-link-variant from-top icon-xs"></i></a></figcaption>
                                        </figure>
                                        <div className="post-content">
                                            <h6 className="post-title"> <a href="blog-single.html">{post.title}</a> </h6>
                                            <div className="meta"><span className="date">{post.date}</span></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* <!--/.Second column--> */}

                        {/* <!--Third column--> */}
                        <div className="col-md-6 col-lg-3 col-xl-3 link-widget">
                            <h3 className="footer-title">Get in Touch</h3>
                            <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus.</p>
                            <div className="mt-3"></div>
                            <ul className="icon-list">
                                <li><i className="mdi mdi-map-marker"></i> {footerArray.details.location}</li>
                                <li><i className="mdi mdi-email"></i> <a href="mailto:+footerArray.details.email+" className="nocolor">{footerArray.details.email}</a> </li>
                                <li><i className="mdi mdi-phone-classic"></i> {footerArray.details.phone} </li>
                                <li><i className="mdi mdi-cellphone-iphone"></i> {footerArray.details.cell} </li>
                            </ul>
                        </div>
                        {/* <!--/.Third column--> */}

                        {/* <!--Fourth column--> */}
                        <div className="col-md-6 col-lg-3 col-xl-3 footer-contact">
                            <h3 className="footer-title">Subscribe</h3>
                            <div className="widget">
                                <div className="newsletter-wrapper">
                                    <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                                        <div className="form-group">
                                            <input type="email" value={this.state.email} name="EMAIL" className="email form-control" id="EMAIL" placeholder="Email Address" onChange={(e)=>this.setState({email:e.target.value})} />

                                            {/* <Input className="email form-control" placeholder="Email Address" inputProps={{ 'aria-label': 'description' }}
                                            name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /> */}

                                            <button type="button" name="subscribe" id="subscribe" className="btn btn-common pull-right" onClick={()=>this.handleSubmit()}>Join</button>
                                            <div className="clearfix"></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- /.widget --> */}
                            <div className="widget">
                                <h5 className="widget-title">Useful Links</h5>
                                <ul className="unordered-list">
                                    <li><a href="#" className="nocolor">Terms of Use</a></li>
                                    <li><a href="#" className="nocolor">Privacy Policy</a></li>
                                    <li><a href="#" className="nocolor">Company Profile</a></li>
                                    <li><a href="#" className="nocolor">Why Choose Us</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!--/.Fourth column--> */}

                    </div>
                </div>
                {/* <!--/.Footer Links--> */}

                {/* <!-- Copyright--> */}
                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>&copy; 2020 Material Studio, All right reserved. Designed with <i className="mdi mdi-heart"></i> by <a href="#">UIdeck</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.Copyright --> */}

            </footer>
        )

    }
}

export default Footer;
