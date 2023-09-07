import React,{useState} from "react";
import ContactBackground from "../Assets/contact-background.svg";

const Contact = () => {
const [email, setEmail] = useState("");

const handleChange = (event) => {
    const {value } = event.target;
    setEmail(value)
  };

 const handleSubmit = async (event) => {
    event.preventDefault();
    var baseUrl = "https://script.google.com/macros/s/AKfycbwqsrz55Bu5p_WXNk8nUErrmCkP8blMiZkccynrk_pqxNcDlXxGDrFVczOlqdJxKLhW8w/exec"
    try{
    fetch(baseUrl, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(email),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    })
  }
    catch(error){
      console.log(`The error is: ${error}`);
    }
    setEmail("")
};

  return (
    <div className="contact-page-container" id="contact">
      <div className="contact-background-container">
        <img src={ContactBackground} alt="" />
      </div>
      <h1 className="primary-heading">Looking to try budeasy?</h1>
      <h1 className="primary-heading">Sign up for our release!</h1>
      <form className="contact-form-container" onSubmit={handleSubmit}>
        <input type="email" name="Email" placeholder="yourmail@gmail.com" value={email} onChange={handleChange}/>
        <button className="secondary-button" type="submit">Submit</button>  
      </form>
    </div>
  );
};

export default Contact;