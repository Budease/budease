import React from "react";
import SpaIcon from '@mui/icons-material/Spa';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AboutBackground from "../Assets/work-wave.svg";

const Work = () => {
  const workInfoData = [
    {
      icon: <ShoppingCartIcon />,
      title: "Faster",
      text: "Compare your carts across websites",
    },
    {
      icon: <SpaIcon/>,
      title: "Sustainable",
      text: "Nudges you to make eco-friendly shopping choices",
    },
    {
      icon: <SentimentSatisfiedAltIcon/>,
      title: "Customized",
      text: "Find what works best for your preferences",
    },
  ];
  return (
    <div className="work-section-container">
      <div className="work-wave-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="work-section-top">
        <p className="primary-subheading">Discover</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Enter in your details and browse your favourite shopping sites. When a match is found,
          your best fit items are highlighted. Add to cart and compare across websites.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-icons-container">
              <div className="info-boxes-icon">{data.icon}</div>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;