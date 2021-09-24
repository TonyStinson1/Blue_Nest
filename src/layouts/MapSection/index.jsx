import React, { Component } from 'react';
import { compose, withProps } from "recompose";
import Geocode from "react-geocode";

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker, 
} from "react-google-maps";

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

const style = {
    border: 0, height: '450px', width: '100%'
}

const googleAPIKEY = "AIzaSyCe8vRJlvTmWX84gYj05l0zTHxp3BUt_I0";
Geocode.setApiKey(googleAPIKEY);
Geocode.setLanguage("en");

class MapSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {
                lat: 31.6829146, lng: -106.406756
            },
            address: null
        }
        //this.loadAddress();

    }
    loadAddress = () => {
        const { lat, lng } = this.state.location;
        Geocode.fromLatLng(lat, lng).then(
            response => {
                const address = response.results[0].formatted_address;
                console.log(response, "load address-----------------------", address);
                this.setState({ address: address })
            },
            error => {
                console.error("load address error", error);
            }
        );
    }
    render() {
        const { isGoogle } = this.props;
        //const isGoogle = true;
        return (
            <section id="google-map-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            {isGoogle ?
                                <MyMapComponent isMarkerShown
                                    location={this.state.location} /> :

                                <object style={style}
                                    data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34015.943594576835!2d-106.43242624069771!3d31.677719472407432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75d90e99d597b%3A0x6cd3eb9a9fcd23f1!2sCourtyard+by+Marriott+Ciudad+Juarez!5e0!3m2!1sen!2sbd!4v1533791187584">
                                </object>
                            }
                        </div>
                    </div>
                </div>
            </section>

        );

    }
}
export default MapSection;

const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?key=" + googleAPIKEY + "&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        defaultZoom={13}
        defaultCenter={props.location}
        defaultOptions={{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: true,
            mapTypeControlOptions: {
               style: window.google.maps.MapTypeControlStyle.DEFAULT,
                position: window.google.maps.ControlPosition.LEFT_BOTTOM,
                mapTypeIds: [window.google.maps.MapTypeId.ROADMAP, window.google.maps.MapTypeId.SATELLITE]
        
            },
            mapTypeId: window.google.maps.MapTypeId.ROADMAP
        }}
    >
        <InfoBox
            defaultPosition={new window.google.maps.LatLng(props.location.lat, props.location.lng)}
            options={{ closeBoxURL: ``, enableEventPropagation: true }}
        >
            <div style={{ background: `white`, border: `1px solid #ccc`, marginLeft: `-175%`, marginTop: `-75%`, padding: 15, float: 'left' }}>
                <h1>OverlayView</h1>
                <button style={{ height: 60 }}>
                    I have been clicked {props.count} time{props.count > 1 ? `s` : ``}
                </button>
            </div>
        </InfoBox>
        {props.isMarkerShown && (
            <Marker position={props.location} >

            </Marker>
        )}
    </GoogleMap>
));



