import React,{Component} from 'react';

class TitleSection extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {titleScreen}=this.props;
        return (
            <section className="page-title-section section-padding">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="title-center">
                      <div className="title-middle">
                        <h2 className="page-tagline">{titleScreen.tag}</h2>
                        <h1 className="page-title">{titleScreen.title}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        );

    }
}
export default TitleSection;

