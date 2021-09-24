import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import OwlCarousel from 'react-owl-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import slide1 from '../../assets/images/slider/slider-bg1.jpg';
import slide2 from '../../assets/images/slider/slider-bg2.jpg';
import slide3 from '../../assets/images/slider/slider-bg3.jpg';
import "./style.css"
// var Carousel = require('react-responsive-carousel').Carousel;
class Carousels extends Component {
  state = {
    activeSilde: 0,
  }
  carouselList = [
    { image: slide1, title: "Crafted with Bootstrap 4", icon: "mdi-lightbulb-outline", delay: "", description: "" },
    { image: slide2, title: "Refreshing Material Design", icon: "", delay: "", description: "" },
    { image: slide3, title: "Multi-purpose Template", icon: "mdi-lightbulb-outline", delay: "", description: "" }
  ];

  handleSlideSelect = () => {

  }

  render() {
    const responsive = {
      desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
      mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 }
    }

    const CustomLeftArrow = ({ onClick }) => (
      <button className="arrow left" onClick={onClick}>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control" aria-hidden="true">
            <i className="mdi mdi-arrow-left" data-ripple-color="#F0F0F0" style={{ color: '#fff' }}></i>
          </span>
          <span className="sr-only">Previous</span>
        </a>
      </button>
    );

    const CustomRightArrow = ({ onClick }) => (
      <button className="arrow right" onClick={onClick}>
        <a className="carousel-control-next" role="button" data-slide="next">
          <span className="carousel-control" aria-hidden="true"><i className="mdi mdi-arrow-right" data-ripple-color="#F0F0F0" style={{ color: '#fff' }}></i></span>
          <span className="sr-only">Next</span>
        </a>
      </button>
    );

    return (
      // <!-- Main Carousel Section Start -->
      <div id="main-slide" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">

          <Carousel responsive={responsive}
            additionalTransfrom={0}
            arrows
            autoPlay={true}
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >

            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="First slide" />
              <div className="carousel-caption d-md-block">
                <h1 className="animated wow fadeInDown hero-heading" data-wow-delay=".4s">Crafted with Bootstrap 4</h1>
                <h5 className="animated fadeInUp wow hero-sub-heading" data-wow-delay=".6s">Material Design Meets With The Power of Bootstrap 4</h5>
                <a className="animated fadeInUp wow btn btn-common" data-wow-delay=".8s"><i className="material-icons mdi mdi-lightbulb-outline"></i> Explore<div className="ripple-container"></div></a>
              </div>
            </div>
            <div className="carousel-item active ">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
              <div className="carousel-caption d-md-block">
                <h1 className="animated wow fadeInLeft hero-heading" data-wow-delay=".7s">Refreshing Material Design</h1>
                <h5 className="animated wow fadeInRight hero-sub-heading" data-wow-delay=".9s">Extensively Customizable Tons of UI Elements</h5>
                <a className="animated fadeInUp wow btn btn-common" data-wow-delay=".6s"><i className="material-icons mdi mdi-cart-outline"></i> Purchase</a>
                <a className="animated fadeInUp wow btn btn-border" data-wow-delay=".8s"><i className="material-icons mdi mdi-lightbulb-outline"></i> Learn More <div className="ripple-container"></div></a>
              </div>
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
              <div className="carousel-caption d-md-block">
                <h1 className="animated wow fadeInDown hero-heading" data-wow-delay=".6s">Multi-purpose Template</h1>
                <h5 className="animated fadeInUp wow hero-sub-heading" data-wow-delay=".8s">Ready to Use for Business, Agency, Startup, Portfolio Sites and More...</h5>
                <a className="animated fadeInUp wow btn btn-common" data-wow-delay=".8s"><i className="material-icons mdi mdi-arrow-collapse-down"></i> Download Now</a>
              </div>
            </div>
          </Carousel>
        </div>



      </div>
      /* <!-- Main Carousel Section End --> */
    );

  }
}
export default Carousels;