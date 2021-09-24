import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Routes
import Routes from './Routes';

// load css
import "./assets/css/animate.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/color-switcher.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/material.min.css";
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/responsive.css";
import "./assets/css/ripples.min.css";
import "./assets/css/slicknav.css";
import "./assets/css/style.css";

//import  "./assets/css/colors/blue.css";
// import  "./assets/css/colors/color.css"
// import  "./assets/css/colors/deep-purple.css";
// import  "./assets/css/colors/green.css";
import "./assets/css/colors/indigo.css";
// import  "./assets/css/colors/pink.css";
// import  "./assets/css/colors/purple.css";
// import  "./assets/css/colors/red.css";
// import  "./assets/css/colors/yellow.css";

// Browser history
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Routes />
      </Router>
    );
  }
}