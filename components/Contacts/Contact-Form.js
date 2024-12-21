import Image from "next/image";

import img from "../../public/images/about/contact_2.jpg";
import { useState } from "react";

const ContactForm = ({ gap }) => {

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
      <div className={`rbt-contact-address ${gap}`}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail">
                <Image
                  className="w-100 radius-6"
                  src={img}
                  alt="Contact Images"
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                <div className="section-title text-start">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                </div>
                <h3 className="title">
                  Get in touch with Us
                </h3>
                <form
                  id="contact-form"
                  method="POST"
                  action="/contact"
                  className="rainbow-dynamic-form max-width-auto"
                  onSubmit={(e)=>{
                    handleSubmit(e)
                  }}
                >
                  <div className="form-group">
                    <input
                      name="contact-name"
                     
                      type="text"
                      placeholder="Name"
                      id="name" onChange={(e)=>{handleChange(e)}}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      name="contact-phone"
                      type="number"
                      placeholder="Phone Number"
                      id="phone" onChange={(e)=>{handleChange(e)}}
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      id="location" onChange={(e)=>{handleChange(e)}}
                      name="Location" 
                      placeholder="Location"
                    />
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="contact-message"
                      id="message" onChange={(e)=>{handleChange(e)}}
                      placeholder="Message"
                    ></textarea>
                    <span className="focus-border"></span>
                  </div>
                  <div className="form-submit-group">
                    <button
                      name="submit"
                      type="submit"
                      id="submit"
                      className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
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
        </div>
      </div>
    </>
  );
};

export default ContactForm;
