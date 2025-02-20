import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import logo from "../../src/logo.jpeg"; 
import "./Footer.css";
// import { FaMapMarkerAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Nalazuri Travels Logo" />
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Safaris</h3>
            <ul>
              <li>
                <a href="#">Luxury Safaris</a>
              </li>
              <li>
                <a href="#">Family Safaris</a>
              </li>
              <li>
                <a href="#">Photographic Safaris</a>
              </li>
              <li>
                <a href="#">Wildlife Expeditions</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Travel Style</h3>
            <ul>
              <li>
                <a href="#">Private Tours</a>
              </li>
              <li>
                <a href="#">Small Group Tours</a>
              </li>
              <li>
                <a href="#">Adventure Travel</a>
              </li>
              <li>
                <a href="#">Honeymoon Safaris</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Tour Destinations</h3>
            <ul>
              <li>
                <a href="#">Maasai Mara National Reserve</a>
              </li>
              <li>
                <a href="#">Amboseli National Park</a>
              </li>
              <li>
                <a href="#">Tsavo National Parks (East & West)</a>
              </li>
              <li>
                <a href="#">Lake Nakuru National Park</a>
              </li>
              <li>
                <a href="#">Nairobi National Park</a>
              </li>
              <li>
                <a href="#">Meru National Park</a>
              </li>
            </ul>
          </div>

          {/* <div className="footer-column">
            <h3>Giving Back</h3>
            <ul>
              <li>
                <a href="#">Conservation</a>
              </li>
              <li>
                <a href="#">Community Support</a>
              </li>
              <li>
                <a href="#">Eco-Tourism</a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <FaMapMarkerAlt /> Nairobi, Kenya
          </p>
          <p>
            <FaEnvelope /> info@nalazuritravels.com
          </p>
          <p>
            <FaPhone /> +254 700 123 456
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Nalazuri Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
