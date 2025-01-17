import React from "react";

import { FaQuoteLeft } from "react-icons/fa6";
import Slider from "react-slick";
import "./Testimonial.css";
import man from "../assets/manager.png";
import ceo from "../assets/ceo.png";
import md from "../assets/md.png";
import Loader from "../assets/Loaders/loader";
import { MdOutlinePhoneIphone } from "react-icons/md";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  const data = [1, 2, 3];
  return (
    <div className="testimonial-wrapper">
      <div className="container">
        <div className="d-flex flex-column align-items-center mb-5">
          <MdOutlinePhoneIphone style={{ fontSize: "48px", color: "#fff" }} />
          <div className="video-head-text d-flex justify-content-center align-items-center text-center">
            <h2 style={{ textAlign: "center" }}>
              Client <span>Testimonials</span>
            </h2>
          </div>
          <Loader />
          <p className="videopara">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings} className="col-12 slider-main">
            <div className="col-12 col-sm-4 slider-card">
              <div className="testicard-man">
                <img src={man} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Elessa Berg</h3>
                  <span>-Manager @Club</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-ceo">
                <img src={ceo} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Mark jhon</h3>
                  <span>-CEO @Pentagon</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 px3 slider-card">
              <div className="testicard-md">
                <img src={md} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Tom Kelvis</h3>
                  <span>--MD @Hexn</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-man">
                <img src={man} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Elessa Berg</h3>
                  <span>-Manager @Club</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-ceo">
                <img src={ceo} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Mark jhon</h3>
                  <span>-CEO @Pentagon</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 px3 slider-card">
              <div className="testicard-md">
                <img src={md} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Tom Kelvis</h3>
                  <span>--MD @Hexn</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 slider-card">
              <div className="testicard-man">
                <img src={man} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Elessa Berg</h3>
                  <span>-Manager @Club</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-ceo">
                <img src={ceo} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Mark jhon</h3>
                  <span>-CEO @Pentagon</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 px3 slider-card">
              <div className="testicard-md">
                <img src={md} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Tom Kelvis</h3>
                  <span>--MD @Hexn</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 slider-card">
              <div className="testicard-man">
                <img src={man} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Elessa Berg</h3>
                  <span>-Manager @Club</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-ceo">
                <img src={ceo} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Mark jhon</h3>
                  <span>-CEO @Pentagon</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 px3 slider-card">
              <div className="testicard-md">
                <img src={md} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Tom Kelvis</h3>
                  <span>--MD @Hexn</span>
                </div>
              </div>
            </div>{" "}
            <div className="col-12 col-sm-4 slider-card">
              <div className="testicard-man">
                <img src={man} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Elessa Berg</h3>
                  <span>-Manager @Club</span>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-4 px3 slider-card">
              <div className="testicard-ceo">
                <img src={ceo} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Mark jhon</h3>
                  <span>-CEO @Pentagon</span>
                </div>
              </div>
            </div>
            <div className="col-4 col-sm-4 px3 slider-card">
              <div className="testicard-md">
                <img src={md} alt="" />
                <div className="slider-card-text">
                  <FaQuoteLeft className="slide-icon" />
                  <p>
                    I am very happy the way you present your daily info. And
                    also it helps me save time to pick right stock with success.
                  </p>
                  <h3>Tom Kelvis</h3>
                  <span>--MD @Hexn</span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
