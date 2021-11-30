import React from "react";

class Responsibility extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-deep-blue">
        <div className="container context-dark">
          <h2 className="wow fadeInUp text-center text-uppercase">
            Social responsibility
          </h2>
          <div className="row">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay=".1s">
              <p>
                The corporate social responsibility policy of ULogix is embedded
                in our
                <a className="text-link" href="#">
                  {" "}
                  company values
                </a>
                guided by standards and best practices, and driven by our
                aspiration for excellence in the overall performance of our
                business.
              </p>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay=".2s">
              <p>
                ULogix is responsible for the implementation of this policy and
                will make the necessary resources available to fulfil our
                responsibilities. The responsibility for our performance on this
                policy rests with all our employees.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Responsibility;
