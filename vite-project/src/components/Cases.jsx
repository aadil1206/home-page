import React from 'react'
import uscfirst from '../assets/uc1.png'
import './Cases.css'
import Loaders from '../assets/Loaders/loader'

const Cases = () => {
  return (
    <div className='use-cases-parent'>
      
      <div className='container use-cases-main'>
          <div className='use-cases-card-main'>
             <div className='row justify-content-center '>
             <div className='col-12 use-card-head'>
                <h2>Use <span>Cases</span></h2>
                <Loaders/>
             </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center pb-5'>
                   
                    <img src={uscfirst} alt="" />
                    <div className='usecase-text-right'>
                      <h2>Bar/Club/Venue DJ</h2>
                      <p>In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out.</p>
                      <button>Register</button>
                   </div>
                </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center pb-5'>
                   
                    
                    <div className='usecase-text-left'>
                      <h2>Musicians / Bands</h2>
                      <p>In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out.</p>
                      <button>Register</button>
                   </div>
                   <img src={uscfirst} alt="" />
                </div>
                <div className='col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center pb-5'>
                   
                   <img src={uscfirst} alt="" />
                   <div className='usecase-text-right'>
                     <h2>Bar/Club/Venue DJ</h2>
                     <p>In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out.</p>
                     <button>Register</button>
                  </div>
               </div>
               <div className='col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center pb-5'>
                  
                   
                   <div className='usecase-text-left'>
                     <h2>Musicians / Bands</h2>
                     <p>In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out.</p>
                     <button>Register</button>
                  </div>
                  <img src={uscfirst} alt="" />
               </div>
               <div className='col-12 d-flex flex-column flex-lg-row justify-content-between align-items-center pb-5'>
                   
                   <img src={uscfirst} alt="" />
                   <div className='usecase-text-right'>
                     <h2>Bar/Club/Venue DJ</h2>
                     <p>In bars and clubs, our app empowers guests to influence the music and request their song. With a simple scan and tap, they request songs from Spotify or Youtube library, while DJs curate a playlist that keeps the dance floor packed. It's a seamless experience that adds excitement to every night out.</p>
                     <button>Register</button>
                  </div>
               </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default Cases
