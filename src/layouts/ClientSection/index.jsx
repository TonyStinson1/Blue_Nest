import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
 
class ClientSection extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        const {clientList} =this.props;
        return (
            <div className="client section-padding section-dark">
              
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-theme"
                        autoplay={true} 
                        autoplayspeed={4000}
                        items={4} loop={true} margin={3} dots={false} >
                        {/* <div id="client-logo" className="owl-carousel"> */}
                            {clientList && clientList.map((client, i) =>
                                <div className="client-logo item" key={i}>
                                    <a href="#">
                                        <img className="img-fluid" src={client.image} alt="" />
                                    </a>
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
export default ClientSection;

