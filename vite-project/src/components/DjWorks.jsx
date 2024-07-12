import React from "react";
import "./Djworks.css";
import { Audio } from "react-loader-spinner";
import account from "../assets/account.svg";
import qr from "../assets/qrcode.svg";
import money from "../assets/money.svg";
import playlist from "../assets/playlist.svg";
import song from "../assets/song.svg";
import Loaders from "../assets/Loaders/loader";
const DjWorks = () => {
  return (
    <div className="DjWorks-wrapper-main">
      <div className="DjWorks-main container">
        <div className="Djworks-head">
          <h2>
            Here's how <span>DJFY works</span>
          </h2>
          <div>
            <Loaders />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="djworks-card-main mb-5 col-12 col-md-6 col-lg-4">
            <div className="djworks-card">
              <div className="djworks-card-icon">
                <img src={account} alt="" />
              </div>
              <h3>Free Account Creation</h3>
              <p>
                DJs, live musicians/bands, and venue owners can sign up for a
                free account on DJFY, gaining instant access to a world of new
                opportunities.
              </p>
            </div>
          </div>
          <div className="djworks-card-main mb-5 col-12 col-md-6 col-lg-4">
            <div className="djworks-card">
              <div className="djworks-card-icon">
                <img src={qr} alt="" />
              </div>
              <h3>QR Code Sharing</h3>
              <p>
                Upon registration, users receive a personalized QR code that
                they can share with their audience. This QR code acts as a
                gateway for guests to submit song requests and interact with the
                performance in real-time.
              </p>
            </div>
          </div>
          <div className="djworks-card-main mb-5 col-12 col-md-6 col-lg-4">
            <div className="djworks-card">
              <div className="djworks-card-icon">
                <img src={money} alt="" />
              </div>
              <h3>Flexible Monetization Options</h3>
              <p>
                Musicians have full control over their earnings with DJFY. They
                can set a minimum bidding amount for each song request or offer
                free requests to their audience. Additionally, guests have the
                option to tip the performers, further enhancing the artist's
                revenue potential.
              </p>
            </div>
          </div>
          <div className="djworks-card-main mb-5 col-12 col-md-6 col-lg-4">
            <div className="djworks-card">
              <div className="djworks-card-icon">
                <img src={playlist} alt="" />
              </div>
              <h3>Customizable Playlist:</h3>
              <p>
                Artists can curate their playlist on DJFY, giving guests the
                freedom to choose which songs they want to hear during the
                performance. This interactive feature enhances audience
                engagement and ensures a memorable experience for everyone
                involved.
              </p>
            </div>
          </div>
          <div className="djworks-card-main mb-5 col-12 col-md-6 col-lg-4">
            <div className="djworks-card">
              <div className="djworks-card-icon">
                <img src={song} alt="" />
              </div>
              <h3>Song Request Management:</h3>
              <p>
                DJs and musicians have the final say on song requests. They can
                accept or reject requests based on their preferences and the
                overall vibe of the event. For paid requests, guests will only
                be charged if the DJ accepts the request and plays the song
                within 30 minutes, ensuring a fair and efficient process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DjWorks;
