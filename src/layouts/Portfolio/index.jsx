import React, { Component } from 'react';
import FlipMove from 'react-flip-move';

class Portfolio extends Component {
    state = {
        activeFilter: 'All'
    }
    constructor(props) {
        super(props)
    }
    handleFilterChange = (item) => {
        this.setState({ activeFilter: item });
    }
    filterList = (array)=>{
        const {activeFilter} =this.state; 
        let filterArray =  array.filter((i)=>{
            if (i.type == activeFilter) return i;
        });
        return filterArray;
    }
    handleSelectPortfolio = () => { }
    handleExplore = () => { }
    render() {
        const { column, title, filterOptions,portfolioList } = this.props;
        const { activeFilter } = this.state;
        let filterportfolioList =portfolioList || [];
        if(activeFilter !=='All'){
            filterportfolioList = this.filterList(portfolioList)
        }
        let classPortfolio = column == 2 ? "col-md-6 col-sm-6 col-xs-12 pb-4 mix business" :"col-md-6 col-lg-4 col-xl-4 pb-4 mix business blog";
        let imageRasio = filterportfolioList.length == 1 ? column ==2 ? '70%':'45%' : '100%' ;
        return (
            <section className="Material-portfolio-section section-padding section-dark">
                <div className="container">
                    <div className="row">
                        {/* <!-- Section Titile --> */}
                        <div className="col-md-4 col-lg-4 col-xl-6  Material-title-section wow animated fadeInLeft" data-wow-delay=".2s">
                            <h1 className="section-title">{title}</h1>
                        </div>
                        {/* <!-- Section Quote --> */}
                        <div className="col-md-8 col-lg-8 col-xl-6  portfolio-nav mt-3 mb-3 wow animated fadeInRight" data-wow-delay=".2s">
                            <ul className="nav nav-pills">
                                {filterOptions.map((flr, i) =>
                                    <li key={i}><a className={activeFilter === flr.name ? "filter active" : "filter"} data-filter={flr.name} onClick={() => this.handleFilterChange(flr.name)}>{flr.name}</a></li>
                                )}
                            </ul>
                        </div>
                        <div className="portfolio-item-wrapper clearfix wow animated fadeInUp" data-wow-delay=".5s" id="Material-portfolio">
                            {/* <!-- Single Portfolio Image --> */}
                            <FlipMove delay={10} duration={500}>

                            {filterportfolioList.map((prt, index) =>
                                <div key={index} className={classPortfolio} style= {{display: filterportfolioList.length === 1 ? 'inline' : 'inline-block'}}>

                                    <figure className="single-portfolio" style={{width:imageRasio}}>
                                        <img className="img-fluid" src={prt.image} alt=""  />

                                        <figcaption className="hover-content">
                                            <a className="btn btn-round btn-fab btn-xs"><i className="material-icons mdi mdi-arrow-right"></i><div className="ripple-container"></div></a>
                                            <a href="#" onClick={() => this.handleSelectPortfolio(prt)}>
                                                <h2 className="subtitle">{prt.title}</h2>
                                            </a>
                                            <p>{prt.location}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            )}
                                  </FlipMove>

                        </div>
                    </div>
                    <div className="row mt-4 wow animated fadeInUp" data-wow-delay=".3s">
                        <div className="col-md-12 text-center">
                            <a  className="animated4 btn btn-common" data-ripple-color="#000" onClick={()=>this.handleExplore()}><i className="material-icons mdi mdi-lightbulb-outline"></i> Explore more work<div className="ripple-container"></div></a>
                        </div>
                    </div>
                </div>
            </section>
        );

    }
}
export default Portfolio;

