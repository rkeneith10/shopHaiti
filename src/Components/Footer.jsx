import React, { useEffect } from "react";
import "../css/style.css";
import "../css/bootstrap.css";
import Aos from "aos";
import "aos/dist/aos.css";

import image13 from "../images/13.jpg";
import image14 from "../images/14.jpg";
import image15 from "../images/15.jpg";
import image16 from "../images/16.jpg";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-grids">
            <div className="col-md-3 footer-grid " data-aos="fade-right">
              <h3>About Us</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse.
                <span>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit.
                </span>
              </p>
            </div>
            <div className="col-md-3 footer-grid " data-aos="fade-right">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <i
                    className="glyphicon glyphicon-map-marker"
                    aria-hidden="true"
                  ></i>
                  F66, Ruelle Champin, <span>Cap-haitien,Haiti.</span>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <a href="mailto:info@example.com">info@rkeneitshop.com</a>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +509 3839 6075
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-grid" data-aos="fade-right">
              <h3>Flickr Posts</h3>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image13} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image14} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image15} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image16} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image13} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image16} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image16} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image16} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image13} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image13} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image15} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="footer-grid-left">
                <a href="single.html">
                  <img src={image16} alt=" " className="img-responsive" />
                </a>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="col-md-3 footer-grid" data-aos="fade-right">
              <h3>Blog Posts</h3>
              <div className="footer-grid-sub-grids">
                <div className="footer-grid-sub-grid-left">
                  <a href="single.html">
                    <img
                      src="images/9.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="footer-grid-sub-grid-right">
                  <h4>
                    <a href="single.html">culpa qui officia deserunt</a>
                  </h4>
                  <p>Posted On 25/3/2016</p>
                </div>
                <div className="clearfix"> </div>
              </div>
              <div className="footer-grid-sub-grids">
                <div className="footer-grid-sub-grid-left">
                  <a href="single.html">
                    <img
                      src="images/10.jpg"
                      alt=" "
                      className="img-responsive"
                    />
                  </a>
                </div>
                <div className="footer-grid-sub-grid-right">
                  <h4>
                    <a href="single.html">Quis autem vel eum iure</a>
                  </h4>
                  <p>Posted On 25/3/2016</p>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="footer-logo " data-aos="fade-up">
            <h2>
              <a href="index.html">
                RKENEITH <span>shop anywhere</span>
              </a>
            </h2>
          </div>
          <div className="copy-right">
            <p>
              &copy 2021 rkeneith. All rights reserved | Design by{" "}
              <a href="http://w3layouts.com/">Keneith Romain</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
