import React, { useState } from "react";
import "./Navbar.css";
import whatsapp from "../assets/whatsapp.png";
import { MdOutlineMail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogInOutline } from "react-icons/io5";
import djicon from "../assets/djicon.png";
import Loader from "../assets/Loaders/loader";
import girlabove from "../assets/djgirl.png";
import girlbelow from "../assets/djgirl2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="Navbar-main">
      <div className="top-Navbar">
        <div className="container Navbar-contact col-12">
          <div className="col-6 nav-top-left">
            <div className="nav-whatsapp">
              <img
                src={whatsapp}
                alt=""
                style={{ width: "16px", height: "16px" }}
              />
              <span>WhatsApp Support</span>
            </div>
            <div className="nav-mail">
              <MdOutlineMail />
              <span>team@djfyapp.com</span>
            </div>
            <div className="nav-call">
              <IoCall style={{ fontsize: "100px" }} />
              <span>+001 2345 6789 90</span>
            </div>
          </div>
          <div className="col-6 nav-top-right">
            <div className="nav-login">
              <IoLogInOutline className="icon" />
              <span>Login / Register</span>
            </div>
            <div className="nav-icon">
              <FaFacebookF style={{ marginRight: "1rem" }} />
              <FaTwitter style={{ marginRight: "1rem" }} />
              <FaLinkedinIn style={{ marginRight: "1rem" }} />
              <IoLogoInstagram />
            </div>
          </div>
        </div>
        <div className="nav-line"></div>
        <div className="container">
          <div className="nav-tab">
            <div className="hide-list">
              <div>
                <li className="d-flex justify-content-center align-items-center">
                  <img src={djicon} alt="" />
                </li>
              </div>
            </div>
            <div className="list">
              <li>
                <a href="">About us</a>
              </li>
              <li>
                <a href="">Use Cases</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <div>
                <li className="d-flex justify-content-center align-items-center">
                  <img src={djicon} alt="" />
                </li>
              </div>
              <li>
                <a href="">Web App</a>
              </li>
              <li>
                <a href="">Faq</a>
              </li>
              <li>
                <a href="">contact us</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="container djfy-main">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="about-dj-main">
              <h2>
                About <span>DJFY</span>
              </h2>
              <Loader />
              <p>
                Introducing DJFY, the ultimate platform revolutionizing the
                music industry by offering a seamless alternative stream of
                income for DJs, live musicians/bands, and street
                performers/musicians. With DJFY, every artist and venue owner
                can easily create a free account and receive a unique QR code to
                share with their audience, unlocking the power of interactive
                music experiences like never before.
              </p>
              <br />
              <p className="p-two">
                With DJFY, artists and venues can tap into a new revenue stream
                while providing an immersive and interactive music experience
                for their audience. Join DJFY today and unlock the potential of
                your performances like never before!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="dj-girl-main">
              <img src={girlabove} alt="" className="above" />
              <img src={girlbelow} alt="" className="below" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
