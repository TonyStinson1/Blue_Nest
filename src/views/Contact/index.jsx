import React, { Component } from 'react';
import logo from '../../assets/images/about/video.jpg';
import { PageLoader,PageTitle, ActionSection, MapSection,ContactForm } from '../../layouts'


class Contact extends Component {
  state = {
    isLoading:true,
    conatctUs:true,
    conatctHorizentalInfo: {
      address: "4435 Berkshire Circle Knoxville",
      email: "hello@Material.com",
      phone: "879-890-9767",
      url: "http://Material.org"
    }
  }
  componentDidMount(){

    let contact =false;
    let currentUrl =window.location.href;
    currentUrl = currentUrl.split('#/')[1];
    if(currentUrl === 'contact-us'){
      contact = true;
    }

    setTimeout(()=>{this.setState({
      isLoading:false,
      conatctUs:contact
    })},1000);
  }

  handleFieldChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {

  }

  render() {
    const titleScreen = { tag: "FEEL FREE TO", title: 'Contact' };

    if(this.state.isLoading){
      return <PageLoader />
    }
    return (
      <>
        {/* <!-- Page Titile Area --> */}
        <PageTitle titleScreen={titleScreen} />

        {this.state.conatctUs?
          <>
            {/* <!-- Map Section Start --> */}
            <MapSection />
            {/* <!-- Contact Us Section --> */}
            <ContactForm conatctUsVerticalViewInfo={this.state.conatctUs} />
          </>:<>
            {/* <!-- Contact Us Section --> */}
            <ContactForm conatctUsVerticalViewInfo={this.state.conatctUs} />
            {/* <!-- Map Section Start --> */}
            <MapSection />
          </>
        }
        {/* <!-- Call to action Section --> */}
        <ActionSection />
      </>
    );
  }
}
export default Contact;
