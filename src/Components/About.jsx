import React from "react";
import AboutBackground from "../Assets/about-wave.svg";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-container" id="about">

      <div className="about-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Personalize Your Online Shopping Experience
        </h1>
        <p className="primary-text">
        Are you tired of spending hours scrolling through endless 
        online stores, overwhelmed by the choices, and unsure 
        if your purchase aligns with your values? Look no further! 
        </p>
        <p className="primary-text">
        Say goodbye to endless product searches! With Budeasy, 
        simply input your preferences and body dimensions, 
        and watch as it curates a tailored shopping experience just for you.
        
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>

      <div className="about-wave-container">
        <img src={AboutBackground} alt="" />
      </div>

    </div>
  );
};

export default About;