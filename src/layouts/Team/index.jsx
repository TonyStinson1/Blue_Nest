import React, { Component } from 'react';
class Team extends Component {
  constructor(props) {
    super(props)
  }
  render() {

    const { teamList, title } = this.props;
    return (
      <section className="team section-padding section-dark">
        <div className="container">
          {title && (<div className="row">
            {/* <!-- Section Titile --> */}
            <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
              <h1 className="section-title">{title}</h1>
            </div>
          </div>)}
          <div className="row">
            {/* <!-- Single Team Widget --> */}
            {teamList.map((tm, i) =>
              <div key={i} className="col-md-6 col-lg-3 col-xl-3 wow animated fadeInUp" data-wow-delay={tm.delay}>
                <div className="single-team-widget">
                  <img src={tm.image} className="img-fluid" alt="" />
                  <div className="team-member-info">
                    <div className="know-more">
                      <a className="btn btn-round btn-fab btn-xs" href="#"><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                    </div>
                    <h2 className="subtitle">{tm.username}</h2>
                    <p>{tm.position}</p>
                    <div className="social-profiles">
                      <a href="#"><i className="mdi mdi-twitter"></i></a>
                      <a href="#"><i className="mdi mdi-facebook"></i></a>
                      <a href="#"><i className="mdi mdi-dribbble"></i></a>
                      <a href="#"><i className="mdi mdi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    );

  }
}
export default Team;

