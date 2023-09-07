import React from "react";
import Logo from "../Assets/logo.svg";


const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-left">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="footer-section-right">
        <div className="footer-section-links">
          <span><a href="/#about">About</a></span>
        </div>
        <div className="footer-section-links">
          <span><a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noreferrer">Chrome store</a></span>
        </div>
        <div className="footer-section-links">
          <span><a href="/#contact">Contact us</a></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;