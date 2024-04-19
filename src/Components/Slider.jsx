import React from "react";
import Slider from "react-slick";
import blogw from "../assets/blogw.png"
import bmw from "../assets/bmw.png"
import weather from "../assets/weather.png"
import gym from "../assets/gym.png"
import medium from "../assets/medium.png"
import pricing from "../assets/pricing.png"
function Responsive() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mt-7 mx-12 md:mx-20">
            {/* <h2 className="text-center mt-16 font-bold text-3xl pb-10">Slider</h2> */}
            {/* <div> */}
            <Slider {...settings}>
                {/* Each slide should directly contain the content (e.g., images) */}
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">React-Blog-Website</h2>
                        <img src={blogw} alt="" className="pt-3" />
                        <a href="https://react-blog-website-nine.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-3 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">3D-BMW-Website</h2>
                        <img src={bmw} alt="" className="pt-4" />
                        <a href="https://bmw-3d.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-6 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">Weather App</h2>
                        <img src={weather} alt="" className="bg-contain pt-4" />
                        <a href="https://weather-app-one-ashy-79.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-7 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">React-Gym-Website</h2>
                        <img src={gym} alt="" className="pt-3" />
                        <a href="https://react-gym-website.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-6 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">Medium.com</h2>
                        <img src={medium} alt="" className="pt-3" />
                        <a href="https://medium-com-about-page-clone.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-4 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
                <div className="ml-8 md:ml-10">
                    <div className="w-48 h-40 bg-grey">
                        <h2 className="text-black text-sm font-bold pl-2 pt-2">React-Pricing-Website</h2>
                        <img src={pricing} alt="" className="pt-3" />
                        <a href="https://pricing-react-website.vercel.app/" target="_blank">
                            <button className="bg-blue font-Montserrat font-normal text-sm leading-7 px-10 ml-7 mt-5 mb-2">Live link</button>
                        </a>
                    </div>
                </div>
            </Slider>

        </div>
    );
}

export default Responsive;
