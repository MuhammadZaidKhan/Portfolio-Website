import React from "react";
import Slider from "react-slick";
import bytewise2 from "../assets/bytewise2.png";
import mlsa2 from "../assets/mlsa2.png";
import google from "../assets/google.png";
import gdsc2 from "../assets/gdsc2.png";
import atomcampp from "../assets/atomcampp.png";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-7 mx-auto max-w-3xl">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <img
            src={atomcampp}
            alt="Atomcamp"
            className="max-w-full h-auto object-contain mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={bytewise2}
            alt="Bytewise"
            className="max-w-full h-auto object-contain mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={mlsa2}
            alt="MLSA"
            className="max-w-full h-auto object-contain mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={gdsc2}
            alt="GDSC"
            className="max-w-full h-auto object-contain mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={google}
            alt="Google"
            className="max-w-full h-auto object-contain mx-auto"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Responsive;
