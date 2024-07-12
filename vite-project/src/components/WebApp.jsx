import React from "react";
import "./WebApp.css";
import phone from "../assets/phone.png";
import Slider from "react-slick";
import Loader from "../assets/Loaders/loader";
import { MdOutlinePhoneIphone } from "react-icons/md";

const WebApp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <div className="WebApp-Wrapper">
      <div className="container d-flex flex-column " style={{ height: "100%" }}>
        <div className="d-flex flex-column align-items-center mb-5">
          <MdOutlinePhoneIphone style={{ fontSize: "48px", color: "#fff" }} />
          <div className="video-head-text d-flex justify-content-center">
            <h2>
              Web<span>Apps</span>
            </h2>
          </div>
          <Loader />
          <p className="videopara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <Slider {...settings} className="slider-main-web">
          <div className="phone-web first-screen">
            <img src={phone} alt="Phone screen 1" />
          </div>
          <div className="phone-web second-screen">
            <img src={phone} alt="Phone screen 2" />
          </div>
          <div className="phone-web third-screen">
            <img src={phone} alt="Phone screen 3" />
            <div className="overlay"></div>
          </div>
          <div className="phone-web first-screen">
            <img src={phone} alt="Phone screen 1" />
          </div>
          <div className="phone-web second-screen">
            <img src={phone} alt="Phone screen 2" />
          </div>
          <div className="phone-web third-screen">
            <img src={phone} alt="Phone screen 3" />
            <div className="overlay"></div>
          </div>
        </Slider>
        <div className="webappbtn d-flex justify-content-center mt-5">
          <button style={{ marginRight: "2rem" }}>Sign Up as User</button>
          <button>Sign Up as DJ</button>
        </div>
      </div>
    </div>
  );
};

export default WebApp;
