import React from "react";

import i1 from "../../assets/images/index-1-490x367.jpg";
import i2 from "../../assets/images/index-2-301x226.jpg";
import i3 from "../../assets/images/index-3-211x158.jpg";

class About extends React.Component {
  render() {
    return (
      <section className="section section-lg">
        <div className="container">
          <div className="row align-items-center row-40">
            <div className="col-lg-6 text-center text-xl-left">
              <h2 className="wow fadeInLeft">About our company</h2>
              <p className="wow fadeInLeft">
                We work for the accurate and brilliant transportation of all
                your goods. For 60+ years of constant & reliable work, our
                logistic company has received lots of positive feedback from our
                satisfied clients.
              </p>
              <a
                className="link-creative wow fadeInUp"
                href="about-us.html"
                data-wow-delay=".1s"
              >
                Learn More
                <span className="square">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    width={16}
                    height={10}
                    viewBox="0 0 16 10"
                    fill="#fff"
                  >
                    <path d="M11 10V6H0V4H11V0L16 5L11 10Z" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="about-us-media-box text-center">
                <img src={i1} alt width={490} height={367} />
                <div
                  className="float-item-1"
                  data-parallax-scroll="{'x':100,'smoothness':30}"
                >
                  <img src={i2} alt width={301} height={226} />
                </div>
                <div
                  className="float-item-2"
                  data-parallax-scroll="{'y':40,'smoothness':30}"
                >
                  <img src={i3} alt width={211} height={158} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
