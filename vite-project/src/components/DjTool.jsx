import React from 'react'
import './DjTool.css'
import Divine from '../assets/divine.png'
import toolfirst from '../assets/djtool1.png'
import tooltwo from '../assets/djtool2.png'
import toolthree from '../assets/djtool3.png'

import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import './Testimonial.css'
const DjTool = () => {
  var settings = {
    dots: false,
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
          dots: true
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
    <div className='DjTool-main'>
      <div className='container'>
          <div className='search-box-main'>
            <img src={Divine} alt="" />
            <TextField
      variant="outlined"
      placeholder="Search Venues & DJs"
      className='search'
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton className='search-icon'>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
          </div>
      </div>
      <div className="container">
        <div className="slider-container">
          <Slider {...settings} className="col-12 slider-main">
          
            
                  <div className="col-12 col-sm-4 slider-card">
                  <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={toolfirst} alt="" className='imgdj' />
                  </div>
                  <div className="col-12 col-sm-4 slider-card">
                  <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={tooltwo} alt="" className='imgdj'/>
                  </div> <div className="col-12 col-sm-4 slider-card">
                  <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={toolthree} alt="" className='imgdj'/>
                  </div>
                    <div className="col-12 col-sm-4 slider-card">
                    <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={toolfirst} alt="" className='imgdj'/>
                  </div>
                  <div className="col-12 col-sm-4 slider-card">
                  <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={tooltwo} alt="" className='imgdj'/>
                  </div> <div className="col-12 col-sm-4 slider-card">
                  <div className='tool-web-dj'>
               <h4>24 Jun 23</h4>
               <h3>DJ Deep Bhamra</h3>
               <p>Badmaash Bangalore, India</p>
            </div>
                   <img src={toolthree} alt="" className='imgdj'/>
                  </div>
             
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default DjTool
