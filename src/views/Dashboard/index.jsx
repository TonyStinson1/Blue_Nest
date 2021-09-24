import React, { Component } from 'react';

import {
  PageLoader,
  CarouseSlide, AboutSection, WelcomeSection, ServicesSection,
  Portfolio, Team, Counter, ContactForm,TestimonialSection,ClientSection,BlogArticle
} from '../../layouts';

import StaticJson from '../../services/StaticJSON/index';

const {getBlogPostList,getTeamMember,getCounter,getServices,getClientList,getPortfolioList} = StaticJson;

class Dashboard extends Component {
  state = {
    isLoading:true,
    conatctHorizentalInfo: {
      address: "4435 Berkshire Circle Knoxville",
      email: "hello@Material.com",
      phone: "879-890-9767",
      url: "http://Material.org"
    }
  }
  componentDidMount(){
    setTimeout(() => { this.setState({isLoading:false})}, 1000);
  }

  render() {
    const teamList = getTeamMember().mainList;
    const blogList = getBlogPostList().mainBlog;
    const counterList =getCounter().list1;
    const servicesList = getServices().servicesList1;
    const clientList=getClientList();
    const portfolioList = getPortfolioList().portfolioList;
    const filter = [{ name: 'All' }, { name: 'Business' }, { name: 'Creative' }, { name: 'Education' }, { name: 'Blog' }, { name: 'Free' }, { name: 'More' }]

    
    if (this.state.isLoading) {
      return <PageLoader />;
    }
    return (
      <>
        {/* <!-- Main Carousel Section Start --> */}
        <CarouseSlide slideImage={[]} />
        {/* <!-- Main Carousel Section End -->  */}

        {/* <!-- About Section --> */}
        <AboutSection />

        {/* <!-- Welcome Section Start --> */}
        <WelcomeSection contentView={false} />

        {/* <!-- Services Section --> */}
        <ServicesSection title={"Why Choose"} servicesList={servicesList} iconRound={false} />

        {/* <!-- Portfolio Section --> */}
        <Portfolio column={3} title={"Featured Works"} filterOptions={filter} portfolioList={portfolioList} />


        {/* <!-- work-counter area --> */}
        <Counter counterList={counterList} />

        {/* <!-- Our Team Section --> */}
        <Team teamList={teamList} title={'Meet The Team'} />

        {/* <!-- Start Testimonial Section  --> */}
        <TestimonialSection />

        {/* <!-- Start Client Section --> */}
        <ClientSection clientList ={clientList}/>

        {/* <!-- Blog Post Section --> */}
        {/* <BlogArticle column={3} /> */}
        <section className="Material-blog-section section-padding">
          <div className="container">
            <div className="row">
              {/* <!-- Section Titile --> */}
              <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
                <h1 className="section-title">From The Blog</h1>
              </div>
            </div>
            <div className="row">
              {/* <!-- Single Article --> */}
              {blogList.map((blog, i) =>
                <div key={i} className="col-md-6 col-lg-4 col-xl-4 wow animated fadeInUp" data-wow-delay=".3s">
                  <BlogArticle article={blog} />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* <!-- contact-us Section --> */}
        <ContactForm conatctUsVerticalViewInfo={false} description={true} />
        
      </>
    );

  }
}
export default Dashboard;

