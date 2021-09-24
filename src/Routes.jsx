import React, { Component } from 'react';
import { Switch, Route, HashRouter as Router, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ScrollUpButton from "react-scroll-up-button";


//commmon components
import Header from './components/Header';
import Footer from './components/Footer';

// view Home render
import Dashboard from './views/Dashboard';
import DashboardV2 from './views/Dashboard/dashboardv2';

// view page menu
import About from './views/About';
import TeamMember from './views/TeamMember';
import Services from './views/services';
import NotFound from './views/404';

// view component menu section
import {
  AlertsPage, AccordionPage, ButtonPage,
  CarouselPage, CounterPage, GoogleMapPage,
  IconsPage, PricingTablePage, TabsPage, TablesPage
} from "./views/component";

// view portfolio menu section
import { SingleColumn, TwoColumn, ThreeColumn } from "./views/Portfolio"

// view blog menu page
import { Blog, BlogSingle } from './views/Blog';

//view contact menu section
import Contact from './views/Contact';


const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  window.scrollTo(0, 0);
});


class Routes extends Component {
  
  render() {


    return (
      <Router basename={process.env.PUBLIC_URL} history={browserHistory}>
        <Switch>
          <Redirect
            exact
            from="/"
            to={"/dashboard"}
          />
          <div className="app-root">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard-v2" component={DashboardV2} />

            {/*   Page menu route */}
            <Route exact path="/about" component={About} />
            <Route exact path="/about2" component={About} />
            <Route exact path="/team-members" component={TeamMember} />
            <Route exact path="/service" component={Services} />
            <Route exact path="/not-found" component={NotFound} />

            {/*   Component menu route */}
            <Route exact path="/alert" component={AlertsPage} />
            <Route exact path="/accordions" component={AccordionPage} />
            <Route exact path="/buttons" component={ButtonPage} />
            <Route exact path="/carousel" component={CarouselPage} />
            <Route exact path="/counter" component={CounterPage} />
            <Route exact path="/google-map" component={GoogleMapPage} />
            <Route exact path="/icons" component={IconsPage} />
            <Route exact path="/pricing-table" component={PricingTablePage} />
            <Route exact path="/tabs" component={TabsPage} />
            <Route exact path="/tables" component={TablesPage} />

            {/*   portfolio menu route */}
            <Route exact path="/portfolio-single" component={SingleColumn} />
            <Route exact path="/portfolio-two" component={TwoColumn} />
            <Route exact path="/portfolio-three" component={ThreeColumn} />

            {/*   Blog menu route */}

            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog-single" component={BlogSingle} />


            {/*   conatct us menu route */}
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/contact-us2" component={Contact} />

            <Footer />

            <ScrollUpButton
              ContainerClassName="AnyClassForContainer"
              TransitionClassName="AnyClassForTransition"
            >
              <ArrowUpwardIcon />
            </ScrollUpButton>

            <ToastContainer />

          </div>
          <Redirect to="/not-found" />

        </Switch>
      </Router>
    );
  }
}
export default Routes;
