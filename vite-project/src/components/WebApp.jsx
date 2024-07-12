import React from 'react'
import './WebApp.css'
import phone from '../assets/phone.png'
import Slider from "react-slick";

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className='WebApp-Wrapper'>
       <div className='container' >
       {/* <Slider {...settings} className=" row slider-main-web">

           <div className='phone-web'>
            <img src={phone} alt="" />
           </div>
         </Slider> */}
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
       </div>
    </div>
  )
}

export default WebApp
