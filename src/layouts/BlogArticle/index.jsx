import React, { Component } from 'react';

class BlogPostSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { article } = this.props;
        return (
            <>
                {this.props.article && (
                    <article className="single-blog-post">
                        {/* <!-- Featured Image --> */}
                        <div className="featured-image">
                            <a href="#">
                                <img src={article.image} alt="" />
                            </a>
                        </div>
                        {/* <!-- Post Meta --> */}
                        <div className="post-meta">
                            <div className="post-date">
                                <span><b>{article.date}</b></span>
                            </div>
                            {/* <!-- Title --> */}

                            <a ><h2 className="subtitle">{article.title}</h2></a>
                            <p>{article.description}</p>
                        </div>
                        <div className="meta-tags">
                            <span className="comments"><a href="#"><i className="mdi mdi-comment-outline"></i> {article.comment} Comments</a></span>
                            {/* <!-- Read More --> */}
                            <a className="btn btn-round btn-fab" href="blog-single.html"><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                        </div>
                    </article>)}
            </>
        );

    }
}
export default BlogPostSection;

