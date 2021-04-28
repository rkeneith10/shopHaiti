import React, { useEffect } from "react";
import "../css/style.css";
import "../css/bootstrap.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-info" data-aos="zoom-in" data-wow-delay=".5s">
          <h3>Free Online Shopping</h3>
          {/* <h4>
            Up to{" "}
            <span>
              50% <i>Off/-</i>
            </span>
          </h4> */}
          {/* <div className="wmuSlider example1">
            <div className="wmuSliderWrapper">
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="banner-info1">
                    <p>T-Shirts + Formal Pants + Jewellery + Cosmetics</p>
                  </div>
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="banner-info1">
                    <p>Toys + Furniture + Lighting + Watches</p>
                  </div>
                </div>
              </article>
              <article
                style={{ position: "absolute", width: "100%", opacity: 0 }}
              >
                <div className="banner-wrap">
                  <div className="banner-info1">
                    <p>Tops + Books & Media + Sports</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <script src="js/jquery.wmuSlider.js"></script>
          <script>$('.example1').wmuSlider();</script> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
