import React, { Component } from 'react';
import { PageLoader,PageTitle } from '../../../layouts';
import StaticJson from '../../../services/StaticJSON';

const { getButton } = StaticJson;
class ButtonPage extends Component {
    state = {
        isLoading: true
    }
    componentDidMount() {
        setTimeout(() => { this.setState({ isLoading: false }) }, 1000);
    }
    handlePageChange = () => {

    }
    render() {
        const titleScreen = { tag: "TEMAPLATE SHORTCODE", title: 'Buttons' };

        const btnList =getButton();

        if (this.state.isLoading) {
            return <PageLoader />;
        }
        return (
            <>
                {/* <!-- Page Titile Area --> */}
                <PageTitle titleScreen={titleScreen} />

                {/* <!-- Material Buttons Section --> */}

                <div className="Material-buttons-section section-padding section-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button Default</h3>
                                {['btn-xs', 'btn-sm', '', 'btn-lg'].map((btn, i) =>
                                    <a key={i} className={"animated4 btn btn-common " + btn}>Explore
                                        <div className="ripple-container"></div>
                                    </a>
                                )}

                            </div>

                            <div className="col-md-6  wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button ICONS</h3>
                                {['btn-xs', 'btn-sm', '', 'btn-lg'].map((btn, i) =>
                                    <a key={i} className={"animated4 btn btn-common " + btn}>
                                        <i className="material-icons mdi mdi-lightbulb-outline"></i>Explore
                                        <div className="ripple-container"></div>
                                    </a>
                                )}
                            </div>

                            <div className="col-md-6 mt-5 wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button ROUND</h3>
                                {btnList.map((btn, i) =>
                                    <a key={i} className={"btn btn-fab " + btn.color}><i className={"material-icons mdi " + btn.icon}></i></a>

                                )}
                            </div>

                            <div className="col-md-6 mt-5 wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button COLOR</h3>
                                {btnList.map((btn, i) =>
                                    <a key={i} className={"btn btn-raised " + btn.color} ><code>{btn.name}</code></a>
                                )}
                            </div>

                            <div className="col-md-6 mt-5 wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button SIZES</h3>
                                {[1,2,3].map((btn, i) =>
                                    <a key={i} className="btn btn-common btn-lg " >Large Size</a>
                                )}
                                <br />
                                {[1,2,3].map((btn, i) =>
                                    <a key={i} className="btn btn-common" >Default</a>
                                )}
                                <br />
                                {[1,2,3].map((btn, i) =>
                                    <a key={i} className="btn btn-common btn-sm " >Small Size</a>
                                )}
                                <br />
                                {[1,2,3].map((btn, i) =>
                                    <a key={i} className="btn btn-common btn-xs" >Extra Small Size</a>
                                )}
                                <br />
                                
                            </div>

                            <div className="col-md-6 mt-5 wow animated fadeInLeft" data-wow-delay=".2s">
                                <h3 className="small-title">Button PAGINATION</h3>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        {[1, 2, 3, 4, 5].map((number, i) =>
                                            <li key={i} className="page-item"><a className="page-link" >{number}</a></li>
                                        )}

                                        <li className="page-item">
                                            <a className="page-link"  aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );

    }
}
export default ButtonPage;

