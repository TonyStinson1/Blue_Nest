import React, { Component } from 'react';
import { PageLoader,PageTitle } from '../../../layouts';
import StaticJson from '../../../services/StaticJSON';

const { getAccording } = StaticJson;
const DarkArray = getAccording().darkArray;
const DefaultArray =getAccording().defaultArray;

class AccordionPage extends Component {
    state={
        isLoading:true,
        expandedPannel:null,
        expandedPannelActive:null
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handleExpandedPannelChange = (pannel,index) => {
        const {expandedPannel,expandedPannelActive} = this.state;
        let activeIndex = index;
        if(pannel ==expandedPannel && expandedPannelActive == index){
            activeIndex =null
        }
        this.setState({
            expandedPannel:pannel,expandedPannelActive:activeIndex
        });
    }
    
    renderAccording(payload) {
        const {expandedPannel,expandedPannelActive} = this.state;
        let activePannel = payload.activePannel;
        let accordingArray = payload.default ? DefaultArray:DarkArray;
        let defaultClass = payload.default ? "panel-group Material-default-accordion" : "panel-group Material-default-accordion Material-accordion-2" ;
        return (
            <div className="col-md-6 wow animated fadeInUp" data-wow-delay=".2s">
                <h3 className="small-title">{payload.default ? 'Defult Color' : 'Dark Color'}</h3>
                <div className={defaultClass} id="Material-accordion" role="tablist" aria-multiselectable="true">
                    {accordingArray.map((drk, i) =>
                        <div className="panel panel-default mb-3">
                            <div className="panel-heading" role="tab" id="headingOne2">
                                <h4 className="panel-title">
                                    <a class={(activePannel == expandedPannel && expandedPannelActive == i) ? "":"collapsed"} 
                                    role="button" data-toggle="collapse" 
                                    data-parent="#Material-accordion2" aria-expanded={activePannel ==expandedPannel ?true:false} aria-controls="collapseOne2"
                                    onClick={()=>this.handleExpandedPannelChange(activePannel,i)}>
                                        {payload.icon && (<i className={"mdi " + drk.icon}></i>)}
                                        {drk.title}
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne2" 
                                className={(activePannel == expandedPannel && expandedPannelActive == i) ?"panel-collapse collapse in show":"panel-collapse collapse in"} 
                                role="tabpanel" aria-labelledby="headingOne2">
                                <div className="panel-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                            </div>
                            
                        </div>
                    )}
                </div>
            </div>
        );
    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Accordion' };

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Accirdion Section --> */}
                <section className="Material-accordion-section section-padding">
                    <div className="container">
                        <div className="row">
                            {this.renderAccording({ activePannel:0,default:true,icon: false })}
                            {this.renderAccording({ activePannel:1,default:true,icon: true })}
                        </div>

                        <div className="mt-5"></div>
                        <div className="row">
                            {this.renderAccording({ activePannel:2,default:false,icon: true })}
                            {this.renderAccording({ activePannel:3,default:false,icon: false })}
                        </div>
                    </div>
                </section>


            </>
        );

    }
}
export default AccordionPage;

