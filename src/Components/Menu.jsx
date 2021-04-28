import React, { useEffect } from "react";
import "../css/bootstrap.css";
import "../css/style.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

export default function Menu() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header-grid">
            <div
              data-aos="fade-right"
              className="header-grid-left "
              data-wow-delay=".5s"
            >
              <ul>
                <li>
                  <i
                    className="glyphicon glyphicon-envelope"
                    aria-hidden="true"
                  ></i>
                  <Link to="mailto:info@example.com">info@rkeneitshop.com</Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-earphone"
                    aria-hidden="true"
                  ></i>
                  +509 3839 6075
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-log-in"
                    aria-hidden="true"
                  ></i>
                  <Link to="login.html">Login</Link>
                </li>
                <li>
                  <i
                    className="glyphicon glyphicon-book"
                    aria-hidden="true"
                  ></i>
                  <Link to="register.html">Register</Link>
                </li>
              </ul>
            </div>

            <div data-aos="fade-left" className="header-grid-right ">
              <ul className="social-icons">
                <li>
                  <Link to="/" className="facebook"></Link>
                </li>
                <li>
                  <Link to="/" className="twitter"></Link>
                </li>
                {/* <li>
                  <Link to="/" className="g">
                    G
                  </Link>
                </li> */}
                <li>
                  <Link to="/" className="instagram"></Link>
                </li>
              </ul>
            </div>

            <div className="clearfix"></div>
          </div>

          <div className="logo-nav">
            <div data-aos="zoom-in" className="logo-nav-left ">
              <h1>
                <Link to="index.html">
                  RKENEITH <span> Shop anywhere</span>
                </Link>
              </h1>
            </div>

            <div className="logo-nav-left1">
              <nav className="navbar navbar-default">
                {/* Brand and toggle get grouped for better mobile display  */}
                <div className="navbar-header nav_2">
                  <button
                    type="button"
                    className="navbar-toggle collapsed navbar-toggle1"
                    data-toggle="collapse"
                    data-target="#bs-megadropdown-tabs"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="bs-megadropdown-tabs"
                >
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to="index.html" className="act">
                        Home
                      </Link>
                    </li>
                    {/* Mega Menu */}
                    <li className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Products <b className="caret"></b>
                      </Link>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="row">
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Men's Wear</h6>
                              <li>
                                <Link to="products.html">Clothing</Link>
                              </li>
                              <li>
                                <Link to="products.html">Wallets</Link>
                              </li>
                              <li>
                                <Link to="products.html">Shoes</Link>
                              </li>
                              <li>
                                <Link to="products.html">Watches</Link>
                              </li>
                              <li>
                                <Link to="products.html">Accessories</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Women's Wear</h6>
                              <li>
                                <Link to="products.html">Clothing</Link>
                              </li>
                              <li>
                                <Link to="products.html">Wallets,Bags</Link>
                              </li>
                              <li>
                                <Link to="products.html">Footwear</Link>
                              </li>
                              <li>
                                <Link to="products.html">Watches</Link>
                              </li>
                              <li>
                                <Link to="products.html">Accessories</Link>
                              </li>
                              <li>
                                <Link to="products.html">Jewellery</Link>
                              </li>
                              <li>
                                <Link to="products.html">
                                  Beauty & Grooming
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Kid's Wear</h6>
                              <li>
                                <Link to="products.html">
                                  Kids Home Fashion
                                </Link>
                              </li>
                              <li>
                                <Link to="products.html">Boy's Clothing</Link>
                              </li>
                              <li>
                                <Link to="products.html">Girl's Clothing</Link>
                              </li>
                              <li>
                                <Link to="products.html">Shoes</Link>
                              </li>
                              <li>
                                <Link to="products.html">Brand Stores</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link
                        to="/"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Furniture <b className="caret"></b>
                      </Link>
                      <ul className="dropdown-menu multi-column columns-3">
                        <div className="row">
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Home Collection</h6>
                              <li>
                                <Link to="furniture.html">Cookware</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Sofas</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Dining Tables</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Shoe Racks</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Home Decor</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Office Collection</h6>
                              <li>
                                <Link to="furniture.html">Carpets</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Tables</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Sofas</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Shoe Racks</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Sockets</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">
                                  Electrical Machines
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                              <h6>Decorations</h6>
                              <li>
                                <Link to="furniture.html">Toys</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Wall Clock</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Lighting</Link>
                              </li>
                              <li>
                                <Link to="furniture.html">Top Brands</Link>
                              </li>
                            </ul>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </ul>
                    </li>
                    <li>
                      <Link to="short-codes.html">Short Codes</Link>
                    </li>
                    <li>
                      <Link to="mail.html">Mail Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            <div
              className="logo-nav-right"
              style={{ border: "1px solid green", float: "right" }}
            >
              <div className="search-box">
                <div id="sb-search" className="sb-search">
                  <form>
                    <input type="text" className="form-control"></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
}
