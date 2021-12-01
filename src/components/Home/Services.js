import React from "react";

import i1 from "../../assets/images/service-1-390x250.jpg";
import i2 from "../../assets/images/service-2-390x250.jpg";
import i3 from "../../assets/images/service-3-390x250.jpg";
import i4 from "../../assets/images/service-4-390x250.jpg";
import i5 from "../../assets/images/service-5-390x250.jpg";
import i6 from "../../assets/images/service-6-390x250.jpg";

class Services extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-light">
        <div className="container">
          <h2 className="text-center">Global logistics services</h2>
          <div className="row row-xl-50 row-xl row-narrow-50">
            <div className="col-md-6 col-lg-4 wow fadeInUp">
              <div className="service-box-classic">
                <img src={i1} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="single-service.html">
                    Supply Chain
                    <br />
                    Management
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <div className="service-box-classic">
                <img src={i2} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="single-service.html">
                    Transportation & Distribution
                    <br />
                    Services
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="service-box-classic">
                <img src={i3} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="single-service.html">
                    Temperature Controlled
                    <br />
                    Services
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-classic">
                <img src={i4} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="single-service.html">
                    Ocean Freight
                    <br />
                    Forwarding
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="service-box-classic">
                <img src={i5} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="#">
                    Customs House
                    <br />
                    Brokerage
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-classic">
                <img src={i6} alt width={390} height={250} />
                <div className="service-box-classic__caption">
                  <a href="#">
                    Comprehensive Warehousing
                    <br />
                    Management
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                className="offset-xl-20 button button-md btn-deep-blue wow fadeInUp"
                href="services.html"
                data-wow-delay=".1s"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
