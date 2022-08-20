import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Rakshit Gautam
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/rakshitgautam28/">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/rakshitgautam28/">
          <FiLinkedin />
        </a>
        <a href="https://github.com/Rakshitgautam28">
          <FiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Rakshit Gautam. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
