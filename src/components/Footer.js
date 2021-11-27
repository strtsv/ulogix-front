import React from "react";

import i1 from "../assets/images/logo-default-242x88.png";
import i2 from "../assets/images/logo-inverse-242x88.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark">
        <div className="container">
          <div className="row row-30 justify-content-between">
            <div className="col-lg-3 wow fadeInLeft">
              {}
              <a className="brand" href="index.html">
                <img
                  className="brand-logo-dark"
                  src={i1}
                  alt
                  width={121}
                  height={44}
                />
                <img
                  className="brand-logo-light"
                  src={i2}
                  alt
                  width={121}
                  height={44}
                />
              </a>
              <ul className="contact-list">
                <li>178 West 27th Street, Suite 527 New York NY 10012</li>
                <li>
                  <a className="phone-link" href="tel:">
                    +1 000 10 87 000
                  </a>
                </li>
                <li>
                  <a className="link-inverse" href="mailto:">
                    mail@demolink.org
                  </a>
                </li>
              </ul>
              <ul className="social-list">
                <li>
                  <a href="#">
                    <span className="icon fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon fa fa-linkedin-square" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="newsletter-subscription">
                <div className="row row-narrow-50 row-30 align-items-end">
                  <div className="col-md-6 wow fadeInRight">
                    <div className="footer-title big text-primary">
                      Newsletter subscription
                    </div>
                    <p>
                      Sign up today to receive the latest news and updates from
                      ULogix team to your inbox.
                    </p>
                  </div>
                  <div
                    className="col-md-6 wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    <form
                      className="rd-form rd-mailform rd-form-inline subscribe-form-modern"
                      data-form-output="form-output-global"
                      data-form-type="subscribe"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div className="form-wrap">
                        <input
                          className="form-input"
                          id="subscribe-form-email-2"
                          type="email"
                          name="email"
                          data-constraints="@Email @Required"
                        />
                        <label
                          className="form-label"
                          htmlFor="subscribe-form-email-2"
                        >
                          Your email*
                        </label>
                        <div className="form-button">
                          <button className="button btn-primary" type="submit">
                            <span className="square-figure">
                              <svg
                                xmlns="https://www.w3.org/2000/svg"
                                width={16}
                                height={12}
                                viewBox="0 0 16 12"
                                fill="#fff"
                              >
                                <path d="M15.5 0H0.5C0.364583 0 0.244792 0.0520833 0.140625 0.15625C0.046875 0.25 0 0.364583 0 0.5V11.5C0 11.6354 0.046875 11.7552 0.140625 11.8594C0.244792 11.9531 0.364583 12 0.5 12H15.5C15.6354 12 15.75 11.9531 15.8438 11.8594C15.9479 11.7552 16 11.6354 16 11.5V0.5C16 0.364583 15.9479 0.25 15.8438 0.15625C15.75 0.0520833 15.6354 0 15.5 0ZM14.2812 2.42188L8.28125 6.42188C8.23958 6.44271 8.19271 6.46354 8.14062 6.48438C8.09896 6.49479 8.05208 6.5 8 6.5C7.94792 6.5 7.89583 6.49479 7.84375 6.48438C7.80208 6.46354 7.76042 6.44271 7.71875 6.42188L1.71875 2.42188C1.60417 2.33854 1.53125 2.22917 1.5 2.09375C1.47917 1.95833 1.50521 1.83333 1.57812 1.71875C1.66146 1.60417 1.77083 1.53646 1.90625 1.51562C2.04167 1.48438 2.16667 1.50521 2.28125 1.57812L8 5.40625L13.7188 1.57812C13.8333 1.50521 13.9583 1.48438 14.0938 1.51562C14.2292 1.53646 14.3385 1.60417 14.4219 1.71875C14.4948 1.83333 14.5156 1.95833 14.4844 2.09375C14.4635 2.22917 14.3958 2.33854 14.2812 2.42188Z" />
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="footer-nav">
                <div className="row row-narrow-180 row-40">
                  <div
                    className="col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div className="footer-title">Our Services</div>
                    <ul className="nav-list">
                      <li>
                        <a href="single-service.html">Road Freight</a>
                      </li>
                      <li>
                        <a href="single-service.html">Air Freight</a>
                      </li>
                      <li>
                        <a href="single-service.html">Sea Freight</a>
                      </li>
                      <li>
                        <a href="single-service.html">Projects and Fine Art</a>
                      </li>
                      <li>
                        <a href="single-service.html">Warehousing</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="footer-title">Company</div>
                    <ul className="nav-list">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">How We Work</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-md-4 col-sm-6 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="footer-title">Help</div>
                    <ul className="nav-list">
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Customer Support</a>
                      </li>
                      <li>
                        <a href="contacts.html">Contacts</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="rights">
                <span>©  </span>
                <span className="copyright-year" />
                <span> </span>
                <span>ULogix</span>
                <span>. </span>
                <span>
                  All Rights Reserved.<span> </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
