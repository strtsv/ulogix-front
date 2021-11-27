import React from "react";

class Intro extends React.Component {
  render() {
    return (
      <section className="section section-md section-intro context-dark">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h1 className="wow fadeInLeft">
                We provide highest quality freight services
              </h1>
              <p className="block-sm wow fadeInLeft">
                With 60 years of experience, we have become one of the largest
                logistics and freight forwarding companies.
              </p>
              <a
                className="button button-lg btn-primary wow fadeInUp"
                href="#"
                data-wow-delay=".1s"
              >
                Read the full story
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Intro;
