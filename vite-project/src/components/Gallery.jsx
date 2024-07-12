import React from 'react'
import './Gallery.css'
import Loaders from '../assets/Loaders/loader'
import box from '../assets/box.png'
import { LuLayoutGrid } from "react-icons/lu";
import gli1 from '../assets/gli1.png'
import gli2 from '../assets/gli2.png'
import gli3 from '../assets/gli3.png'
import gli4 from '../assets/gli4.png'
import gli5 from '../assets/gli5.png'
import gli10 from '../assets/gli10.png'
import gli6 from '../assets/gli6.png'
import gli7 from '../assets/gli7.png'
import gli8 from '../assets/gli8.png'
import gli9 from '../assets/gli9.png'

const Gallery = () => {
  return (
    <div className='Gallery-wrapper'>
      <div className='container Gallery-main'>
     
<LuLayoutGrid className='gicon'/>
           <div className='gallery-head-text d-flex justify-content-center'>
    <h2><span>Gallery</span></h2>
       </div>
       <Loaders/>
       <p className='gallerypara'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply
       dummy text of the printing and typesetting industry.</p>
       <div className='row gallery-list'>
          <div className='col-2'>
             <img src={gli1} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli2} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli3} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli4} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli5} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli6} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli7} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli8} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli9} alt="" />
          </div>
          <div className='col-2'>
             <img src={gli10} alt="" />
          </div>
      </div> </div>
     
    </div>
  )
}

export default Gallery
