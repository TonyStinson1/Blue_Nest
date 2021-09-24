import React, { Component } from 'react';
import { TextField, Input } from '@material-ui/core';
import validate from 'validate.js';
import _ from 'underscore';
import {Toast} from '../../services'
const schema = {
    name: {
        presence: { allowEmpty: false, message: 'Please enter your name' },
        length: {
            maximum: 25
        }
    },
    email: {
        presence: { allowEmpty: false, message: 'Please enter your email' },
        email: true,
        length: {
            maximum: 64
        }
    },
    subject: {
        presence: { allowEmpty: false, message: 'Please enter your subject' },
        length: {
            minimum: 2
        }
    },
    message: {
        presence: { allowEmpty: false, message: 'Write your message' },
        length: {
            minimum: 10
        }
    }
}
class ContactForm extends Component {
    state = {
        values: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        touched: {
            name: false,
            email: false,
            subject: false,
            message: false
        },
        errors: {
            name: null,
            email: null,
            subject: null,
            message: null
        },
        isValid: false,
        submitError:null,

        conatctHorizentalInfo: {
            address: "4435 Berkshire Circle Knoxville",
            email: "hello@Material.com",
            phone: "879-890-9767",
            url: "http://Material.org"
        }
    }
    validateForm = _.debounce(() => {
        const { values } = this.state;
    
        const newState = { ...this.state };
        const errors = validate(values, schema);
    
        newState.errors = errors || {};
        newState.isValid = errors ? false : true;
    
        this.setState(newState);
      }, 300);
    
      handleFieldChange = (e) => {
        let field = e.target.name, 
            value=e.target.value;
        const newState = { ...this.state };
    
        newState.submitError = null;
        newState.touched[field] = true;
        newState.values[field] = value;
    
        this.setState(newState, this.validateForm);
      };

    handleOnSubmit = (e) => {
        Toast.successToast("Successfully Send message...");
    }

    renderHorizentalInfo() {
        const { conatctHorizentalInfo } = this.state;
        return (
            <div className="col-md-6 contact-widget-section2 wow fadeInUp animated" data-wow-delay=".5s">
                <h2 className="subtitle">Find Us</h2>
                {this.props.description && (<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.</p>)}

                <div className="find-widget">
                    <a ><i className="material-icons mdi mdi-home"></i>{conatctHorizentalInfo.address} </a>
                </div>
                <div className="find-widget">
                    <a ><i className="material-icons mdi mdi-email"></i> {conatctHorizentalInfo.email}</a>
                </div>
                <div className="find-widget">
                    <a ><i className="material-icons mdi mdi-phone mr-3"></i> {conatctHorizentalInfo.phone} </a>
                </div>
                <div className="find-widget">
                    <a ><i className="material-icons mdi mdi-earth"></i> {conatctHorizentalInfo.url} </a>
                </div>
            </div>
        );
    }

    renderVerticalInfo() {
        return (
            <div className="col-md-12 col-lg-7 col-xs-12 contact-widget-section">
                <div className="row">
                    {/* <!-- Single Contact Widget --> */}
                    <div className="col-md-6 wow fadeInUp animated" data-wow-delay=".2s">
                        <div className="single-contact-widget">
                            <i className="material-icons mdi mdi-map-marker"></i>
                            <h3>Address</h3>
                            <address>
                                <p>4435 Berkshire Circle</p>
                                <p>Knoxville</p>
                                <p>TN 27912</p>
                            </address>
                        </div>
                    </div>
                    {/* <!-- Single Contact Widget --> */}
                    <div className="col-md-6 wow fadeInUp animated" data-wow-delay=".3s">
                        <div className="single-contact-widget">
                            <i className="material-icons mdi mdi-phone"></i>
                            <h3>Phone</h3>
                            <address>
                                <p>879-890-9767</p>
                                <p>234-890-1213</p>
                            </address>
                        </div>
                    </div>
                    {/* <!-- Single Contact Widget --> */}
                    <div className="col-md-6 wow fadeInUp animated" data-wow-delay=".4s">
                        <div className="single-contact-widget">
                            <i className="material-icons mdi mdi-email-open"></i>
                            <h3>Email</h3>
                            <address>
                                <p>mail@Material.com</p>
                                <p>support@Material.com</p>
                            </address>
                        </div>
                    </div>
                    {/* <!-- Single Contact Widget --> */}
                    <div className="col-md-6 wow fadeInUp animated" data-wow-delay=".5s">
                        <div className="single-contact-widget">
                            <i className="material-icons mdi mdi-clock"></i>
                            <h3>Opening Hours</h3>
                            <address>
                                <p>Mon - Fri: 8 AM - 3 PM</p>
                                <p>Sat: 8 AM - 12 PM</p>
                                <p>Sun: Closed</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderContactUsForm() {
        const { values,touched,errors,isValid,submitError } = this.state;
      
          const showNameError =
            touched.name && errors.name ? errors.name[0] : false;
          const showEmailError =
            touched.email && errors.email ? errors.email[0] : false;
          const showSubjectError =
            touched.subject && errors.subject ? errors.subject[0] : false;
            const showMessageError =
            touched.message && errors.message ? errors.message[0] : false;

        return (
            <div className="col-md-12 col-lg-5 col-xs-12 wow fadeInUp animated" data-wow-delay=".4s">
                <form className="shake" role="form" onSubmit={(e)=>this.handleOnSubmit(e)} id="contactForm" name="contact-form" data-toggle="validator">
                    {/* <!-- Name --> */}
                    <div className="form-group label-floating">
                        <TextField label="Name" style={{ width: '100%' }}
                            name="name" value={values.name} onChange={(e) => this.handleFieldChange(e)} />

                        <div className="help-block with-errors">{errors.name}</div>
                        {showNameError && (<div className="help-block with-errors" style={{display: 'block'}}>{errors.name[0]}</div>)}
                    </div>
                    {/* <!-- email --> */}
                    <div className="form-group label-floating">
                        <TextField label="Email" style={{ width: '100%' }}
                            name="email" value={values.email} onChange={(e) => this.handleFieldChange(e)} />
                    
                        {showEmailError && (<div className="help-block with-errors" style={{display: 'block'}}>{errors.email[0]}</div>)}
                    </div>
                    {/* <!-- Subject --> */}
                    <div className="form-group label-floating">
                        <TextField label="Subject" style={{ width: '100%' }}
                            name="subject" value={values.subject} onChange={(e) => this.handleFieldChange(e)} />

                        {showSubjectError && (<div className="help-block with-errors" style={{display: 'block'}}>{errors.subject[0]}</div>)}
                    </div>
                    {/* <!-- Message --> */}
                    <div className="form-group label-floating">

                        <TextField style={{ width: '100%' }}  rowsMax={7} rows={this.props.conatctUsVerticalViewInfo?8:2} multiline label="Message"

                            inputProps={{ 'aria-label': 'description' }}
                            name="message" value={values.message} onChange={(e) => this.handleFieldChange(e)} />
                        {showMessageError && (<div className="help-block with-errors" style={{display: 'block'}}>{errors.message[0]}</div>)}
                    </div>
                    {/* <!-- Form Submit --> */}
                    <div className="form-submit mt-4">
                        <button className={isValid ? "btn btn-common":"btn btn-common disabled"} type="button" id="form-submit" onClick={() => this.handleOnSubmit()}>
                            <i className="material-icons mdi mdi-message-outline"></i> Send Message</button>
                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                        <div className="clearfix"></div>
                    </div>
                </form>
            </div>
        );
    }
    render() {
        return (
            <section className="Material-contact-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="contact-title wow animated fadeInRight" data-wow-delay=".3s">We’re always here to hear form you</h1>
                        </div>
                    </div>
                    <div className="row justify-content-between mt-3">
                        {this.props.conatctUsVerticalViewInfo ? this.renderVerticalInfo() : this.renderHorizentalInfo()}
                        {this.renderContactUsForm()}
                    </div>
                </div>
            </section>
        );
    }
}
export default ContactForm;

