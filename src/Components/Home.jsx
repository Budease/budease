import React from 'react'
import NavBar from './NavBar';
import HeroBackground from "../Assets/hero-background.svg";
import HeroImage from "../Assets/hero-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container" id="home" >
        <NavBar/>
        <div className="hero-container">
        <div className="heroImage-container">
          <img src={HeroBackground} alt="" />
        </div>
        <div className="hero-text-section">
          <h1 className="primary-heading">
            Simplifying online shopping across your favourite sites
          </h1>
          <p className="primary-text">
            An easy to use browser plug-in that let's you save time and shop more sustainably by customizing your shopping experience.
          </p>
          <button className="secondary-button" onClick={e=>window.open('https://www.azlyrics.com/lyrics/rickastley/nevergonnagiveyouup.html', '_blank', 'noopener,noreferrer')}>
            Try it today! <FiArrowRight />{" "}
          </button>
        </div>
        <div className="hero-image-section">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home;