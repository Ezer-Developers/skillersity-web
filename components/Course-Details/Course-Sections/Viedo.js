"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "venobox/dist/venobox.min.css";

import { useAppContext } from "@/context/Context";
import Popup from "../../../app/popup"; // Import the Popup component

const Viedo = ({ checkMatchCourses }) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const isCourseDetailsPage = pathname.startsWith("/course-detail-2");

  // For video PopUp
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isHide = currentScrollPos > 200;

      setHideOnScroll(isHide);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleEnrollClick = () => {
    setIsPopupOpen(true); // Open the popup
  };

  return (
    <>
      <div className="content-item-content">
        <div className="add-to-card-button mt--15">
          <Link
            className="rbt-btn btn-gradient icon-hover w-100 d-block text-center"
            href="#"
            onClick={() => handleEnrollClick()} // Open the popup when Enroll Now is clicked
          >
            <span className="btn-text">Enroll Now</span>
            <span className="btn-icon">
              <i className="feather-arrow-right"></i>
            </span>
          </Link>
        </div>

        <div className={`rbt-widget-details has-show-more ${toggle ? "active" : ""}`}>
          <ul className="rbt-course-details-list-wrapper">
            {checkMatchCourses &&
              checkMatchCourses.roadmap.map((item, innerIndex) => (
                <li key={innerIndex}>
                  <span>{item.text}</span>
                  <span className="rbt-feature-value rbt-badge-5">{item.desc}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="social-share-wrapper mt--30 text-center">
          <div className="rbt-post-share d-flex align-items-center justify-content-center">
            <ul className="social-icon social-default transparent-with-border justify-content-center">
              <li>
                <Link href=" https://www.facebook.com/share/1Abr7TXj2h/?mibextid=LQQJ4d">
                  <i className="feather-facebook"></i>
                </Link>
              </li>
              {/* <li>
                <Link href="https://www.twitter.com">
                  <i className="feather-twitter"></i>
                </Link>
              </li> */}
              <li>
                <Link href="https://www.instagram.com/skillersity?igsh=aWtnemU2dm42cmJv">
                  <i className="feather-instagram"></i>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/skillersity/">
                  <i className="feather-linkedin"></i>
                </Link>
              </li>
            </ul>
          </div>
          <hr className="mt--20" />
          <div className="contact-with-us text-center">
            <p>For details about the course</p>
            <p className="rbt-badge-2 mt--10 justify-content-center w-100">
              <i className="feather-phone mr--5"></i> Call Us:
              <Link href="tel:919605662277">
                <strong>+91 9605 66 22 77</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        selectedCourseId={checkMatchCourses.id}
        selectedCourseName={checkMatchCourses.name}
      />
    </>
  );
};

export default Viedo;
