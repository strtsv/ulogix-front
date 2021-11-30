import React from "react";

import i1 from "../../assets/images/brand-1-170x50.jpg";
import i2 from "../../assets/images/brand-2-170x50.jpg";
import i3 from "../../assets/images/brand-3-170x50.jpg";
import i4 from "../../assets/images/brand-4-170x50.jpg";
import i5 from "../../assets/images/brand-5-170x50.jpg";
import i6 from "../../assets/images/brand-6-170x50.jpg";
import i7 from "../../assets/images/brand-7-170x50.jpg";
import i8 from "../../assets/images/brand-8-170x50.jpg";
import i9 from "../../assets/images/brand-9-170x50.jpg";
import i10 from "../../assets/images/brand-10-170x50.jpg";

class Brands extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <h2 className="wow fadeInLeft block-md text-uppercase">
            Trusted by 7900+ happy clients including Our Official{" "}
            <span className="text-primary">Partners</span>
          </h2>
          <div className="row row-xl row-xl-70 row-narrow-100 custom-row-5 justify-content-center">
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <a className="brand-link" href="#">
                <img src={i1} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <a className="brand-link" href="#">
                <img src={i2} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <a className="brand-link" href="#">
                <img src={i3} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <a className="brand-link" href="#">
                <img src={i4} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <a className="brand-link" href="#">
                <img src={i5} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".1s"
            >
              <a className="brand-link" href="#">
                <img src={i6} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <a className="brand-link" href="#">
                <img src={i7} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <a className="brand-link" href="#">
                <img src={i8} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <a className="brand-link" href="#">
                <img src={i9} alt width={170} height={50} />
              </a>
            </div>
            <div
              className="col-lg-2 col-md-3 col-sm-4 col-6 wow fadeInUp"
              data-wow-delay="1s"
            >
              <a className="brand-link" href="#">
                <img src={i10} alt width={170} height={50} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Brands;
