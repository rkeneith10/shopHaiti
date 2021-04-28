import React, { useEffect } from "react";
import "../css/style.css";
import Aos from "aos";
import "../css/bootstrap.css";
import "aos/dist/aos.css";
import image4 from "../images/4.jpg";
import image3 from "../images/3.jpg";
import image2 from "../images/2.jpg";
import image1 from "../images/1.jpg";

const BannerBottom = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className="banner-bottom">
        <div className="container">
          <div className="banner-bottom-grids">
            <div className="banner-bottom-grid-left" data-aos="fade-left">
              <div className="grid">
                <figure className="effect-julia">
                  <img src={image4} alt=" " className="img-responsive" />
                  <figcaption>
                    <h3>
                      Best <span>Store</span>
                      <i> in online shopping</i>
                    </h3>
                    <div>
                      <p>Cupidatat non proident, sunt</p>
                      <p>Officia deserunt mollit anim</p>
                      <p>Laboris nisi ut aliquip consequat</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div
              className="banner-bottom-grid-left1 animated wow slideInUp"
              data-wow-delay=".5s"
            >
              <div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
                <div className="banner-bottom-grid-left-grid1">
                  <img src={image1} alt=" " className="img-responsive" />
                </div>
                <div className="banner-bottom-grid-left1-pos">
                  <p>Discount 45%</p>
                </div>
              </div>
              <div className="banner-bottom-grid-left-grid left1-grid grid-left-grid1">
                <div className="banner-bottom-grid-left-grid1">
                  <img src={image2} alt=" " className="img-responsive" />
                </div>
                <div className="banner-bottom-grid-left1-position">
                  <div className="banner-bottom-grid-left1-pos1">
                    <p>Latest New Collections</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="banner-bottom-grid-right animated wow slideInRight"
              data-wow-delay=".5s"
            >
              <div className="banner-bottom-grid-left-grid grid-left-grid1">
                <div className="banner-bottom-grid-left-grid1">
                  <img src={image3} alt=" " className="img-responsive" />
                </div>
                <div className="grid-left-grid1-pos">
                  <p>
                    top and classNameic designs <span>2016 Collection</span>
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

export default BannerBottom;
