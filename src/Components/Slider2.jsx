import React from "react";
import Slider from "react-slick";
import bytewise2 from "../assets/bytewise2.png";
import mlsa2 from "../assets/mlsa2.png";
import google from "../assets/google.png";
import gdsc2 from "../assets/gdsc2.png";

function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1, // Number of slides shown per viewport
    slidesToScroll: 1,
    slidesPerRow: 1, // One image per row
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
    <div className="mt-7 mx-12 md:mx-20">
      <Slider {...settings}>
        <img src={bytewise2} alt="Bytewise" className="bg-contain" />
        <img src={mlsa2} alt="MLSA" className="" />
        <img src={gdsc2} alt="MLSA" className="" />
        <img src={google} alt="MLSA" className="" />
        {/* Add more image elements here as needed */}
      </Slider>
    </div>
  );
}

export default Responsive;
