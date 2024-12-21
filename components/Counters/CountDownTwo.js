import React, { useState } from "react";
import CountDown from "../Maintenance/CountDonw";

const CountDownTwo = () => {
  const [formData,setFormData]=useState()
  const handleChange=(e)=>{
    const {id,value}=e.target
    setFormData((prev)=>({
      ...prev,[id]:value
    }))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(formData,"checkformData")
    const res=await fetch("https://formsubmit.co/ajax/ashik.primalcodes@gmail.com",{
      method:"POST",
      headers:{
        "Content-Type": "application/json" // Set the content type for the request
      },
      body: JSON.stringify(formData)
    })
    const responseData=await res.json()
    console.log(responseData,'checkresponsedata')

  }

  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="inner">
            <div className="section-title text-start">
              <span className="subtitle bg-white-opacity">Why Choose Us</span>
              <h2 className="title color-white">
              Transform Your Career with Experiential Learning
              </h2>
              <p className="description has-medium-font-size mt--20 mb--0 color-white opacity-7">
              Gain real-world experience, master practical skills, and build a standout portfolio to succeed in creative industries, start a business, or advance your career with SKILLERSITY.
              </p>
            </div>
            {/* <div className="countdown-style-1 mt--50">
              <div className="countdown" data-date="2025-12-30">
                <CountDown targetDate="2025-12-30" targetTime="18:00:00" />
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6">
          <div className="rbt-contact-form contact-form-style-1 w-100">
            <div className="section-title text-start">
              <span className="subtitle bg-primary-opacity">
                EDUCATION FOR EVERYONE
              </span>
            </div>
            <h3 className="title">Get in touch with Us</h3>
            <form id="contact-form" className="w-100" onSubmit={(e)=>{
              handleSubmit(e)
            }} >
              <div className="form-group">
                <input name="con_name" type="text" placeholder="Name" id="name" onChange={(e)=>{handleChange(e)}} />
                <span className="focus-border"></span>
              </div>
              <div className="form-group">
                <input name="con_email" type="email" placeholder="Email" id="email" onChange={(e)=>{handleChange(e)}} />
                <span className="focus-border"></span>
              </div>
              <div className="form-group">
                <input type="text" placeholder="Phone" id="phone" onChange={(e)=>{handleChange(e)}} />
                <span className="focus-border"></span>
              </div>
              <div className="form-submit-group mt--40">
                <button
                  type="submit"
                  className="rbt-btn btn-gradient hover-icon-reverse w-100"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">GET IT NOW</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownTwo;
