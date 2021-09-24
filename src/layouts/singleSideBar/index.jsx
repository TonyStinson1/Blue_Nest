import React, { Component } from 'react';

class SingleSideBar extends Component {

	render() {
    const { widgetName, headTitle, classHead1, classHead2, listHead, dataDelay, items } = this.props;
		return (
			<aside className="col-md-12 single-sidebar-widget {widgetName}-widget no-padding wow animated fadeInUp"  data-wow-delay={dataDelay}>
        <div className="sidebar-widget-title">
          <h2>{headTitle}</h2>
        </div>
        <div className={`${classHead1} ${classHead2}`}>
          <ul className={listHead}>
            {items.map((item, index) => 
               (<li key={index}><a href="#">
                <img src={item.src} style={{width:97, height:89}} alt="" />
                </a>{item.listDetail}</li>
              ))}
          </ul>
        </div>
      </aside>
			);
	}
}

export default SingleSideBar;