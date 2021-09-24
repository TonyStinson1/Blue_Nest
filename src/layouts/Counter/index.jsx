import React, { Component } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class Counter extends React.Component {

  render() {

    const { counterList } = this.props;
    return (

      <section className="work-counter-section section-padding">
        <div className="container">
          <div className="row">
            {counterList.map((cnt, i) =>
              <div key={i} className="col-md-3 col-sm-6 work-counter-widget text-center wow animated fadeInUp" data-wow-delay={cnt.delay}>
                <div className="counter">
                  <div className="icon"><i className={"material-icons mdi " + cnt.icon}></i></div>

                  <CountUp start={0} end={cnt.timer} delay={0} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <div ref={countUpRef} className="timer">
                          {cnt.timer}
                          </div>
                      </VisibilitySensor>
                    )}
                  </CountUp>
                  <p>{cnt.title}</p>
                </div>
              </div>)}

          </div>
        </div>
      </section>
    );

  }
}
export default Counter;

