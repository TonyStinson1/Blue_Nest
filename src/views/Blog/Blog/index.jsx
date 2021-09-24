import React, { Component } from 'react';
import {  PageLoader, BlogArticle, PageTitle, BlogPannel, InfoAndFollow } from '../../../layouts';
import AuthorBg from '../../../assets/images/blog/author-bg.jpg';
import Author from '../../../assets/images/blog/author.jpg';
import Flickr1 from '../../../assets/images/instagram/flickr.jpg';
import Flickr2 from '../../../assets/images/instagram/flickr.jpg';
import Flickr3 from '../../../assets/images/instagram/flickr.jpg';

import StaticJson from '../../../services/StaticJSON';

const { getBlogPostList } = StaticJson;

class Blog extends Component {
  state={
    isLoading:true,
  }

  componentDidMount(){
    setTimeout(() => { this.setState({isLoading:false})}, 1000);
  }
  render() {
    const titleScreen = { tag: 'KNOW ABOUT OURSELVES', title: 'Our Stories' };
    const categoryList = getBlogPostList().category;
    const instagramList = getBlogPostList().instagramList;
    const blogPostwithImage = getBlogPostList().postwithImage;
    const blogPostwithoutImage = getBlogPostList().postwithoutImage;
    const socialIcon =[ {icon:"mdi-facebook"}, {icon:"mdi-twitter"}, {icon:"mdi-dribbble"}, {icon:"mdi-github-circle"}, {icon:"mdi-linkedin"} ]
    const flickrlist=[{image:Flickr1},{image:Flickr2},{image:Flickr3}];

    if (this.state.isLoading) {
      return <PageLoader />;
    }
    return (
      <React.Fragment>
        <PageTitle titleScreen={titleScreen} />
        <section className="Material-blog-post-page section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-8 col-xs-12 blog-post-column">
                <div className="row">
                  <div className="col-md-6 wow animated fadeInUp">
                    {blogPostwithImage.map((blogpost,j) => <BlogArticle key={j} article={blogpost} />)}
                  </div>

                  <div className="col-md-6 wow animated fadeInUp ">
                    {blogPostwithoutImage.map((blogpost,i) => <BlogArticle key={i} article={blogpost} />)}
                  </div>
                  <div className="col-md-12 text-center mt-3 blog-pagination wow animated fadeInUp" data-wow-delay=".4s">
                    <a className="btn btn-common"><i className="material-icons mdi mdi mdi-autorenew"></i> Load More Stories<div className="ripple-container"></div></a>
                  </div>

                </div>
              </div>


              <div className="col-md-12 col-lg-4 col-xs-12 blog-sidebar-column">

                <InfoAndFollow delay={".2s"} image={Author} backGroundimage={AuthorBg} />


                <BlogPannel pannelTitle={"Follow & Subscribe"}
                  class={"subscribe-widget"}
                  type={"subscribe"} items={socialIcon} delay={".3s"}
                />
                <BlogPannel widetClass={"flickr-widget"} pannelTitle={"Categories"} type={"categories"} items={categoryList} delay={".4s"} />
                <BlogPannel widetClass={"instagram-widget"} pannelTitle={"Instagram Feed"} type={"instagram"} items={instagramList} delay={".3s"} />
                <BlogPannel widetClass={"flickr-widget"} pannelTitle={"Flickr Slider"} type={"flickr"} items={flickrlist} delay={".4s"} />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Blog;
