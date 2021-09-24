import React, { Component } from 'react';

class InfoAndFollow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { delay, image, backGroundimage } = this.props;
    return (
      <React.Fragment>
        <aside className="col-md-12 single-sidebar-widget author-widget no-padding wow animated fadeInUp" data-wow-delay={delay}>
          <div className="author-bg">
            <img src={backGroundimage} alt="" />
          </div>
          <div className="author-info">
            <div className="author-name">
              <div className="author-intro">
                <h3>Jhon Doe</h3>
                <p>Front End Developer</p>
              </div>
              <div className="author-image">
                <img src={image} className="img-circle" alt="" />
              </div>
            </div>
            <div className="author-bio">
              <p>While you are planning for a trip then you always
              search for a best place to visit because that time you
              have looked for many of places in your mind. Same time,
              when the thought of Shimla comes in your mind,
                                       you stop the thoughts about other places because the gorgeousness of natural beauty of Shimla.</p>
            </div>
          </div>
        </aside>
      </React.Fragment>
    );
  }
}
export default InfoAndFollow;