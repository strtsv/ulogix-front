import React from "react";
import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-242x88.png";
import i2 from "../assets/images/logo-inverse-242x88.png";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="section page-header header-absolute">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
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
                  </div>
                  <div className="rd-navbar-main-element">
                    <div className="rd-navbar-nav-wrap">
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active">
                          <a className="rd-nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="about-us.html">
                            About Us
                          </a>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="services.html">
                            Services
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown">
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="single-service.html"
                              >
                                Single service
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="news.html">
                            News
                          </a>
                          <ul className="rd-menu rd-navbar-dropdown">
                            <li className="rd-dropdown-item">
                              <a
                                className="rd-dropdown-link"
                                href="news-post.html"
                              >
                                News post
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-nav-item">
                          <a className="rd-nav-link" href="contacts.html">
                            Contacts
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <a className="request" href="contacts.html">
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
                  <span>Request a quote</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
