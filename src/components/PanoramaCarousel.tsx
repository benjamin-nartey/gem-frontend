"use client";
import React, { useEffect } from "react";

const Panorama = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://panorama-slider.uiinitiative.com/assets/index.c1d53924.css";
    document.head.appendChild(link);

    // Add the module preload link
    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://panorama-slider.uiinitiative.com/assets/vendor.dba6b2d2.js";
    document.head.appendChild(preloadLink);

    // Add the external script
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      "https://panorama-slider.uiinitiative.com/assets/index.d2ce9dca.js";
    document.body.appendChild(script);

    // Cleanup script and links on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="panorama-slider  ">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2023/07/19/12/16/car-8136751_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2023/03/22/07/52/lizard-7868932_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2023/10/19/21/08/ai-generated-8327632_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2016/05/18/10/52/buick-1400243_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2023/03/27/08/53/woman-7880177_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2019/08/08/23/33/car-4393990_1280.jpg"
                alt=""
              />
            </div>
            <div className="swiper-slide">
              <img
                className="slide-image"
                src="https://cdn.pixabay.com/photo/2019/09/04/02/52/forest-4450611_1280.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </>
  );
};

export default Panorama;
