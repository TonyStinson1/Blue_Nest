import React, { Component } from 'react';
// import Alert from '@material-ui/lab/Alert';
import { PageLoader, PageTitle } from '../../../layouts';

const aletBoxList = [
    { name: "Success",active:true, classsColor: "alert-success", message: "Well done! You successfully read this important alert message." },
    { name: "Info",active:true, classsColor: "alert-info", message: "Heads up! This alert needs your attention, but it's not super important." },
    { name: "Warning",active:true, classsColor: "alert-warning", message: "Warning! Better check yourself, you're not looking too good." },
    { name: "Danger",active:true, classsColor: "alert-danger", message: "Oh snap! Change a few things up and try submitting again." },
];

class AlertPage extends Component {
    state = {
        isLoading: true,
        aletBoxList:aletBoxList
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handleClose = (item,index) => {
        let { aletBoxList } =this.state;
        aletBoxList =  aletBoxList.map((box,i)=>{
            if (i == index)  box.active=false;
            return box
        });

        this.setState({aletBoxList:aletBoxList})
    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Alerts' };

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Alert Section --> */}

                <section className="Material-alert-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 wow animated fadeInUp" data-wow-delay=".2s">

                                {aletBoxList.map((box, i) =>
                                    <div key={i} className={"alert " + box.classsColor} role="alert">
                                        <a className="alert-link">{box.message}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 wow animated fadeInUp" data-wow-delay=".4s">
                                {aletBoxList.map((boxClose, i) =>
                                    boxClose.active && 
                                    (<div key={i} className={"alert alert-dismissible "+ boxClose.classsColor}>
                                        <button type="button" className="close" data-dismiss="alert" onClick={()=>this.handleClose(boxClose,i)}>×</button>
                                        <h4>{boxClose.name}!</h4>

                                        <p>Well done! You successfully read this important alert message.
                                            <a className="alert-link">vel scelerisque nisl consectetur et</a>.
                                        </p>
                                    </div>
                                    )
                                    
                                )}
                                
                            </div>
                        </div>
                    </div>
                </section>


            </>
        );

    }
}
export default AlertPage;

