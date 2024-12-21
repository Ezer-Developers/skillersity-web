import React, { useState, useEffect } from "react";

const Popup = ({ isOpen, onClose, selectedCourseId, selectedCourseName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    courseId: selectedCourseId || '', // Default to selectedCourseId passed from the parent
    courseName: selectedCourseName || '', // Optionally pass course name
  });

  const courses = [
    { id: 1, name: 'Advanced Diploma in Digital Marketing in Kerala' },
    { id: 2, name: 'Advanced Diploma in Graphic Designing in Kerala' },
    { id: 3, name: 'Advanced Diploma in Video Editing in Kerala' },
    { id: 4, name: 'Advanced Diploma in Graphic Designing & Video Editing' },
    { id: 5, name: 'The Ultimate Creator Course! Advanced Diploma in Digital Marketing with Graphic Designing & Video Editing' },
    { id: 6, name: 'Advanced Diploma in Graphic Designing & Video Editing' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    const res=await fetch("https://formsubmit.co/ajax/ashik.primalcodes@gmail.com",{
      method:"POST",
      headers:{
        "Content-Type": "application/json" // Set the content type for the request
      },
      body: JSON.stringify(formData)
    })
    const responseData=await res.json()
    console.log(responseData,'checkresponsedata')
    // Add form submission logic here (e.g., API call)
    onClose(); // Close the modal on successful submission
  };

  if (!isOpen) return null;
  

  return (
    <div className="popup-overlay">
      <div className="popup-content rbt-contact-form contact-form-style-1 w-100">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h3 className="title">Enroll Now</h3>
        <form id="contact-form" className="w-100" onSubmit={handleSubmit}>
          <div className="row">
            <div className="form-group col-6">
              <input 
                name="name" 
                type="text" 
                placeholder="Name"  
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group col-6">
              <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <input 
              name="mobile" 
              type="tel" 
              placeholder="Phone"  
              value={formData.mobile}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <select
              name="courseId"
              value={formData.courseId}
              onChange={handleChange}
              required
            >
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell us more about your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-submit-group mt--40">
            <button
              type="submit"
              className="rbt-btn btn-gradient hover-icon-reverse w-100"
            >
              <span className="icon-reverse-wrapper">
                <span className="btn-text">Submit</span>
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

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: #fff;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          text-align: center;
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 15px;
          right: 25px;
          background: #ffff;
          border: none;
          font-size: 3rem;
          cursor: pointer;
          border-radius: 7px;
        }
        .row {
          display: flex;
          justify-content: space-between;
        }
        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1.5rem;
        }
        .form-group textarea {
          resize: none;
          height: 100px;
        }
        .form-submit-group {
          margin-top: 1rem;
        }
        .rbt-btn {
          background: linear-gradient(45deg, #567c8d, #c4c2c2);
          color: #fff;
          border: none;
          padding: 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .rbt-btn .btn-text {
          margin-right: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default Popup;
