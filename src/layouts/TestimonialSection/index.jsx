import React, { Component } from 'react';
import image1 from "../../assets/images/testimonial/author1.jpg";
import OwlCarousel from 'react-owl-carousel';

class TestimonialSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const testimonialList = [
            { userName: "Adam Schwartz", position: "Software Articulate, Google", image:image1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
            { userName: "Clark Brown", position: "Brand Managerr", image:image1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" },
            { userName: "Ana Blunt", position: "Creative Director", image:image1, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's" }
        ];
        return (
            <div className="testimonial section-padding">
                <div className="container">
                    <div className="row">
                        {/* <!-- Testimonial section  --> */}
                        <OwlCarousel className="owl-theme" 
                            autoplay={true} 
                            autoplayspeed={4000}
                            items={1} loop={true} margin={12}  >
                        {/* <div className="testimonials-carousel owl-carousel"> */}
                            {testimonialList.map((tml, i) =>
                                <div key={i} className="item">
                                    <div className="testimonial-item">
                                        <div className="datils">
                                            <h5>{tml.userName}</h5>
                                            <span>{tml.position}</span>
                                            <p>{tml.description} <br /> standard dummy text ever since the 1500s Lorem Ipsum.</p>
                                        </div>
                                        <div className="img">
                                            <a><img className="img-fluid" src={tml.image} alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                            )}
                        {/* </div> */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        );

    }
}
export default TestimonialSection;

