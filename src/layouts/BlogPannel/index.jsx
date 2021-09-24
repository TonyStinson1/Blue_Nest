import React, { Component } from 'react';
import {  Input } from '@material-ui/core';

class BlogPannel extends Component {
    state = {
        email: ''
    }
    handleSubmit() {
        console.log("submit--------")
    }
    renderSubscribe() {

        return (
            <>
                <div className="social-profiles clearfix">
                    <div className="footer-contact-widget">
                        <ul>
                            {this.props.items.map((social, i) =>
                                <li key={i}>
                                    <a href="#"><i className={"mdi " + social.icon}></i></a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="subscribe-box">
                    <p>Sign up for new Shelver content, updates,<br />surveys & offers.</p>
                    <div className="input-group">
                    <Input placeholder="type your email" inputProps={{ 'aria-label': 'description' }} style={{fontWeight:'bolder'}}
                        name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                        
                        <span className="input-group-btn">
                            <button className="btn btn-round btn-fab" type="button" onClick={() => this.handleSubmit()} style={{bottom:'0px'}}><i className="material-icons mdi mdi-arrow-right"></i></button>
                        </span>
                    </div>
                </div>
            </>
        );
    }
    rendercategory() {
        return (
            <ul className="categories-list">
                {this.props.items.map((cat, i) =>
                    <li key={i}><a >{cat.name}</a></li>
                )}
            </ul>
        );
    }
    renderInstagram() {
        return (
            <div className="instagram-feed clearfix">
                <ul>
                    {this.props.items.map((inst, i) =>
                        <li key={i}><a><img src={inst.image} alt="" /></a></li>
                    )}
                </ul>
            </div>
        );
    }
    renderFlickr() {
        return (
            <div className="flickr-feed clearfix">
                <div id="flickr-carousel" className="owl-carousel owl-theme">
                    {this.props.items.map((flkr, i) =>
                        <div key={i} className={i === 0 ? "item active" : "item"}>
                            <img className="img-fluid" src={flkr.image} alt="" />
                        </div>
                    )}
                </div>
            </div>
        );
    }
    render() {
        const { pannelTitle, type, delay, widetClass } = this.props;

        return (
            <aside className={"col-md-12 single-sidebar-widget "+widetClass+ " subscribe-widget no-padding wow animated fadeInUp " } data-wow-delay={delay}>
                <div className="sidebar-widget-title">
                    <h2>{pannelTitle}</h2>
                </div>
                {
                    type == "subscribe" ? this.renderSubscribe() :
                        type == "categories" ? this.rendercategory() :
                            type == "instagram" ? this.renderInstagram() :
                                this.renderFlickr()
                }
            </aside>
        );
    }
}

export default BlogPannel;