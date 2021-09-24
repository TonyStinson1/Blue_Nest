import React, { Component } from 'react';
import { PageTitle,PageLoader } from '../../layouts';

class NotFound extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 1000);
    }
    handlePageChange=()=>{

    }
    render() {
        const titleScreen = { tag: "MATERIAL ERROR PAGE", title: '404' };
        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- error section --> */}
                <section className="Material-error-section section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="wow animated fadeInRight" data-wow-delay=".2s">404</h1>
                                <h2 className="wow animated fadeInRight" data-wow-delay=".4s">Page not found! :(</h2>
                                <a href="#" className="wow animated fadeInUp btn btn-common mt-5" data-wow-delay=".6s" onClick={()=>this.handlePageChange()} ><i className="material-icons mdi mdi-home"></i> Back to home<div className="ripple-container"></div></a>
                                );
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default NotFound;

