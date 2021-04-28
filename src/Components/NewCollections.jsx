import React, { useEffect } from "react";
import "../css/style.css";
import "../css/bootstrap.css";
import Aos from "aos";
import "aos/dist/aos.css";

import image1png from "../images/1.png";
import image2png from "../images/2.png";
import image7 from "../images/7.jpg";

const NewCollections = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="new-collections">
        <div className="container">
          <h3 data-aos="zoom-in">New Collections</h3>
          <p className="est " data-aos="zoom-in">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div className="new-collections-grids">
            <div className="col-md-3 new-collections-grid">
              <div data-aos="fade-up" className="new-collections-grid1">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image">
                    <img src={image7} alt=" " className="img-responsive" />
                  </a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                </div>
                <h4>
                  <a href="single.html">Formal Shirt</a>
                </h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p>
                    <i>$325</i> <span className="item_price">$250</span>
                    <a className="item_add" href="#">
                      add to cart{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 new-collections-grid">
              <div data-aos="fade-up" className="new-collections-grid1">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image">
                    <img src={image7} alt=" " className="img-responsive" />
                  </a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                </div>
                <h4>
                  <a href="single.html">Formal Shirt</a>
                </h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p>
                    <i>$325</i> <span className="item_price">$250</span>
                    <a className="item_add" href="#">
                      add to cart{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 new-collections-grid">
              <div data-aos="fade-up" className="new-collections-grid1">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image">
                    <img src={image7} alt=" " className="img-responsive" />
                  </a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                </div>
                <h4>
                  <a href="single.html">Formal Shirt</a>
                </h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p>
                    <i>$325</i> <span className="item_price">$250</span>
                    <a className="item_add" href="#">
                      add to cart{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3 new-collections-grid">
              <div data-aos="fade-up" className="new-collections-grid1">
                <div className="new-collections-grid1-image">
                  <a href="single.html" className="product-image">
                    <img src={image7} alt=" " className="img-responsive" />
                  </a>
                  <div className="new-collections-grid1-image-pos">
                    <a href="single.html">Quick View</a>
                  </div>
                </div>
                <h4>
                  <a href="single.html">Formal Shirt</a>
                </h4>
                <p>Vel illum qui dolorem eum fugiat.</p>
                <div className="new-collections-grid1-left simpleCart_shelfItem">
                  <p>
                    <i>$325</i> <span className="item_price">$250</span>
                    <a className="item_add" href="#">
                      add to cart{" "}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollections;
