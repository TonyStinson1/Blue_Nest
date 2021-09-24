import React, { Component } from 'react';
import { PageLoader, PageTitle } from '../../../layouts';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import fullSlid1 from '../../../assets/images/slider/slider-bg1.jpg';
import fullSlid2 from '../../../assets/images/slider/slider-bg2.jpg';
import fullSlid3 from '../../../assets/images/slider/slider-bg3.jpg';

import materImag1 from '../../../assets/images/portfolio/work1.jpg';
import materImag2 from '../../../assets/images/portfolio/work2.jpg';
import materImag3 from '../../../assets/images/portfolio/work3.jpg';
import materImag4 from '../../../assets/images/portfolio/work4.jpg';
import materImag5 from '../../../assets/images/portfolio/work5.jpg';

import StaticJson from '../../../services/StaticJSON';

const { getTeamMember } = StaticJson;
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
class CarouselPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange = () => {

    }

    renderMaterialCarousel() {
        const upperCarousel = [
            { image: materImag1 }, { image: materImag2 }, { image: materImag3 },
            { image: materImag4 }, { image: materImag5 }
        ];


        return (
            <Carousel infinite responsive={responsive} id="Material-image-carousel" className="owl-carousel owl-theme">

                {upperCarousel.map((sld, i) =>
                    <div key={i} className="item active">
                        <img src={sld.image} className="img-thumbnail" alt="" />
                    </div>
                )}

            </Carousel>
        );
    }
    renderTeamSlider() {

        const teamList = getTeamMember().mainList;



        const CustomDot = ({ onMove, index, onClick, active }) => {
            return (
                <li
                    className={active ? "active" : "inactive"}
                    onClick={() => onClick()}
                >
                    1
                    {/* <div class="owl-dots "><button role="button" class="owl-dot active"><span></span></button></div> */}
                </li>
            );
        };
        return (
            <div className="container">
                {/* <Carousel
                    id="team-carousel" className="owl-carousel owl-theme"
                    additionalTransfrom={0}
                    responsive={responsive}
                    arrows={false}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    centerMode={false}
                    dotListClass="owl-pagination"
                    draggable
                    focusOnSelect={false}
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                    infinite={true}
                    swipeable
                    showDots ={true}
                    items={4} loop={true} margin={10}
                > */}
                <OwlCarousel
                    autoplay={true}
                    autoplaySpeed={1000}
                    items={4} loop={true} margin={3}
                    dotListClass="owl-dots"
                    // customDot={<CustomDot />}

                dots={true} dotsEach={true} dotData={true}
                >
                    {teamList.map((sld, i) =>
                        <div className="item active" key={i}>
                            <div className="single-team-widget" >
                                <img src={sld.image} className="img-thumbnail" alt="" />
                                <div className="team-member-info">
                                    <div className="know-more">
                                        <a className="btn btn-round btn-fab btn-xs" ><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                                    </div>
                                    <h2 className="subtitle">{sld.username}</h2>
                                    <p>{sld.position}</p>
                                    <div className="social-profiles">
                                        <a href="#"><i className="mdi mdi-twitter"></i></a>
                                        <a href="#"><i className="mdi mdi-facebook"></i></a>
                                        <a href="#"><i className="mdi mdi-dribbble"></i></a>
                                        <a href="#"><i className="mdi mdi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </OwlCarousel>
                {/* </Carousel> */}
            </div>
        );
    }
    renderFullSliderCarousel() {
        const lowerCarousel = [
            { class: "item active", image: fullSlid1 }, { class: "item", image: fullSlid2 }, { class: "item", image: fullSlid3 }
        ];
        const responsive = {
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1, partialVisibilityGutter: 30 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 1, partialVisibilityGutter: 30 }

        }

        return (
            <Carousel
                additionalTransfrom={0}
                responsive={responsive}
                id="carousel-full" className=""
                arrows={false}
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                dotListClass=""
                draggable
                focusOnSelect={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                infinite={true}
                itemClass=""
                swipeable
            >
                {lowerCarousel.map((sld, i) =>
                    <div key={i} className={sld.class} >
                        <img className="img-fluid" src={sld.image}
                            style={{
                                display: 'block',
                                margin: 'auto'
                            }} alt="" />
                    </div>
                )}
            </Carousel>
        );
    }
    render() {
        const titleScreen = { tag: "TEMPLATE SHORTCODE", title: 'Carousel' };
        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />



                {/* <!-- Material Carousel Section  --> */}
                <section className="Material-carousel-section section-padding">
                    <div className="container">
                        <div className="row wow animated fadeInUp" data-wow-delay=".2s">
                            <div className="col-md-12">
                                <h3 className="small-title">Carousel With Image</h3>
                                {this.renderMaterialCarousel()}
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- Team Carousel --> */}
                <section id="team-slide" className="section-padding section-dark">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="row wow animated fadeInUp" data-wow-delay=".3s">
                                <h3 className="small-title">Carousel With Team</h3>
                                {this.renderTeamSlider()}
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- Full Carousel Slider Start --> */}
                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="small-title">Full-width carousel</h3>
                                {this.renderFullSliderCarousel()}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );

    }
}
export default CarouselPage;

