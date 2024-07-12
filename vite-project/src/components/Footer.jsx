import React from "react";
import "./Footer.css";
import fmlogo from "../assets/fmlogo.png";
import whats from "../assets/whatsapp.png";
import { MdOutlineMail } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="Footer-main-wrapper">
        <div className="foot-line"></div>
        <div className="container flex-sm-wrap">
          <div className="footer-logo-main col-12 col-sm-12 col-md-6 col-lg-4">
            <img src={fmlogo} alt="" />
            <p>
              Connecting DJs and music enthusiasts for seamless event
              experiences and vibrant community engagement.
            </p>
            <div>
              <button style={{ marginRight: "1rem" }}>Sign Up as User</button>
              <button>Sign Up as DJ</button>
            </div>
          </div>
          <div className="footer-about-main d-flex flex-column col-12 col-sm-12 col-md-6 col-lg-2">
            <p>Under the Hood</p>
            <ul
              className="d-flex flex-column "
              style={{ listStyleType: "none", paddingLeft: "0px" }}
            >
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Uses Case</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Web Apps</a>
              </li>
              <li>
                <a href="">Usage Video</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Clients Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-form-main col-12 col-sm-12 col-lg-6 col-md-12">
            <p>HelpDesk</p>
            <div className="d-flex justify-content-between col-8">
              <div>
                <img src={whats} alt="" />
                <span className="whatscall">+91 1234 5678 90 </span>
              </div>
              <div className="footer-mail">
                <MdOutlineMail />
                <span>team@djfyapp.com</span>
              </div>
            </div>
            <div className="footer-farm">
              <div className="form-footer">
                <p>Send Us your Message</p>
                <div className="form">
                  <div className="row d-flex">
                    <div className="col-12 col-sm-6">
                      {" "}
                      <div className="d-flex flex-column">
                        <span>Name</span>
                        <input
                          type="text"
                          className="smallin"
                          placeholder="Enter your name"
                        />{" "}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      {" "}
                      <div className="d-flex flex-column">
                        <span>Name</span>
                        <input
                          type="text"
                          className="smallin"
                          placeholder="Enter your email"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex flex-column">
                      <span>Name</span>
                      <input
                        type="text"
                        placeholder="Write message"
                        className="bigin"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between pt-3 formrecap">
                <div className="recaptcha">
                  <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
                </div>
                <button className="subbtn">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between">
          <p>© 2024 DjFy. All Rights Reserved</p>
          <div className="footer-icon">
            <span>Connect-</span>
            <FaFacebookF style={{ marginRight: "1rem" }} />
            <FaTwitter style={{ marginRight: "1rem" }} />
            <FaLinkedinIn style={{ marginRight: "1rem" }} />
            <IoLogoInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
