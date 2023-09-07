import React,{useState} from "react";
import ContactBackground from "../Assets/contact-background.svg";
import axios from 'axios';

const Contact = () => {
const [email, setEmail] = useState("");

const handleChange = (event) => {
    const {value } = event.target;
    setEmail(value)
  };

 const handleSubmit = async (event) => {
    event.preventDefault();
    const baseUrl = "https://script.google.com/macros/s/AKfycbwXF7ljcdP2FulBwI3f_dyEHCOrWChJqSmeyLlDj7T8UPEhTeQmv9qJJRJnj-Vy-5mn5g/exec"
    try{
    console.log({"email":email})
    const response = await axios.post(baseUrl,{"email":email})
    console.log(response)
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