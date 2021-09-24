import React, { Component } from 'react';
import { PageLoader, MessageHistory, PageTitle, BlogPannel, InfoAndFollow } from '../../../layouts'
import StaticJson from '../../../services/StaticJSON';
import { Input } from '@material-ui/core';

import AuthorBg from '../../../assets/images/blog/author-bg.jpg';
import Author from '../../../assets/images/blog/author.jpg';
import PostImage from '../../../assets/images/blog/post-image.jpg';
import Flickr1 from '../../../assets/images/instagram/flickr.jpg';
import Flickr2 from '../../../assets/images/instagram/flickr.jpg';
import Flickr3 from '../../../assets/images/instagram/flickr.jpg';

const { getBlogPostList } = StaticJson;

class BlogSingle extends Component {
  state = {
    isLoading: true,
    name: "", email: "", website: "", message: ""
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
  }
  handleSubmitComment = () => {
    console.log("handle commit ---------------------")
  }

  render() {
    const titleScreen = { tag: 'MATERIAL BLOG', title: 'Single Post' };
    const categoryList = getBlogPostList().category;
    const messageList = getBlogPostList().messageHistory;

    const instagramList = getBlogPostList().instagramList;
    const socialIcon = [{ icon: "mdi-facebook" }, { icon: "mdi-twitter" }, { icon: "mdi-dribbble" }, { icon: "mdi-github-circle" }, { icon: "mdi-linkedin" }];
    const flickrlist = [{ image: Flickr1 }, { image: Flickr2 }, { image: Flickr3 }];

    const inputStyle= {
      color:'#5166d8'
    }

    if (this.state.isLoading) {
      return <PageLoader />;
    }
    return (
      <React.Fragment>
        <PageTitle titleScreen={titleScreen} />

        <section className="Material-blog-post-page section-padding">
          <div className="container">
            <div className="row">

              <div className="single-blog-page col-md-12 col-lg-8 col-xs-12">
                <article className="single-post wow fadeInUp animated" data-wow-delay=".2s">
                  <div className="post-image">
                    <img src={PostImage} className="img-fluid" alt="" />
                  </div>
                  <h2>The best, free Stock Photography and Video resources</h2>
                  <p><b>Lorem ipsum</b> dolor sit amet, consectetur adipisicing elit. Harum minima, earum optio quia recusandae ipsam, obcaecati! Sunt ullam nisi, ratione quisquam provident eius quae facilis eos, deserunt consequatur, officiis quos.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta reiciendis illum possimus et ducimus quia sed dolorum id cumque rerum, fuga voluptatem, fugiat quidem mollitia eos vel, nisi voluptatum corrupti eaque voluptas! Praesentium hic pariatur est voluptatibus suscipit vel tempora necessitatibus animi ratione tempore natus modi, odit, explicabo nulla laudantium veritatis dignissimos? Odit sequi, ipsam quod eligendi tempore obcaecati reprehenderit, dicta repudiandae officiis voluptatibus odio cupiditate, tempora repellat ut. Possimus odit veritatis fugiat dolorem accusamus, facilis excepturi.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni ad sapiente optio illo iste quidem quod voluptatibus, eligendi aliquid?</p>
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis harum laborum praesentium obcaecati nam explicabo?</p>
                  </blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam quas quibusdam magnam asperiores laudantium rerum a, illo illum dolore amet. Adipisci vel, vero a minus nemo voluptatem. Vel ipsa totam veniam corporis quia, ipsum asperiores rem, eveniet, hic aut fuga.</p>

                  <div className="single-post-meta">
                    <div className="post-tag">
                      <a href="#"><i className="material-icons mdi mdi-bookmark-outline"></i> Photography, Image</a>
                    </div>
                    <div className="share-post">
                      <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-google-plus"></i></a> <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                  </div>
                </article>
                <div className="users-comment-section mt-2 wow animated fadeInUp" data-wow-delay=".3s">
                  <ul>
                    {messageList.map((msg, index) => <MessageHistory key={index} message={msg} />)}
                  </ul>
                </div>
                <div className="comment-box row x mt-5 clearfix wow fadeInUp animated" data-wow-delay=".4s">
                  <div className="col-md-4 ">
                    <div className="form-group label-floating">
                      <Input placeholder="Your Name" inputProps={{ 'aria-label': 'description' }} style={inputStyle}
                        name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div className="form-group label-floating">

                      <Input placeholder="Email Address" inputProps={{ 'aria-label': 'description' }} style={inputStyle}
                        name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group label-floating">
                      <Input placeholder="Your Website" inputProps={{ 'aria-label': 'description' }} style={inputStyle}
                        name="website" value={this.state.website} onChange={(e) => this.setState({ website: e.target.value })} />
                    </div>
                  </div>
                  <div className="form-group label-floating col-md-12">
                    {/* <textarea placeholder="Type here message" id="usermessage" rows="7" required="" className="form-control"
                      value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })}
                    ></textarea> */}

                    <Input label="Message" 
                      multiline rows={7} placeholder="Type here message" 
                      inputProps={{ 'aria-label': 'description' }} style={inputStyle,{width:'100%'}}
                      name="message" value={this.state.message} onChange={(e) => this.setState({ message: e.target.value })} />

                  </div>
                  <a className="mt-3 btn btn-common" onClick={(e) => this.handleSubmitComment(e)}><i className="mdi mdi-message-text"></i> Post Comment<div className="ripple-container"></div></a>
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

    )
  }
}

export default BlogSingle;