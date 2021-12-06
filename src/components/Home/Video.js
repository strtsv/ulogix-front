import React from "react";

class Video extends React.Component {
  render() {
    return (
      <section className="section section-lg section-double-bg section-lg">
        <div className="container">
          <div className="row row-xl-60 justify-content-center">
            <div className="col-lg-8 context-dark text-center">
              <h2 className="text-uppercase">
                We open unlimited opportunities for the development of Your
                business!
              </h2>
              <p>
                With ULogix, your business gets extra opportunities for faster
                business development worldwide. Watch the video below to find
                out more about our partnership program!
              </p>
            </div>
            <div className="col-lg-8">
              <div className="video-wrap vide" data-vide-bg="video/video-1" />
            </div>
            <div className="col-xl-8">
              <div className="counters-xl-wrap">
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">60</div>
                    <div className="counter-postfix">+</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Years of experience</p>
                </div>
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">30</div>
                    <div className="counter-postfix">mln+</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Tons of cargo transported</p>
                </div>
                {}
                <div className="box-counter">
                  <div className="box-counter-main">
                    <div className="counter">200</div>
                    <div className="counter-postfix">+</div>
                  </div>
                  <div className="box-counter-divider" />
                  <p className="box-counter-title">Partners worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Video;
