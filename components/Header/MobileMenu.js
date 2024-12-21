"use client";
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo/logo_white_111.png";

import Nav from "./Nav";
import { useAppContext } from "@/context/Context";
import Popup from "../../app/popup";

const MobileMenu = () => {
  const { isLightTheme, mobile, setMobile } = useAppContext();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsPopupOpen(true);
    setMobile(false);
  };

  return (
    <>
      <div className={`popup-mobile-menu ${mobile ? "" : "active"}`}>
        <div className="inner-wrapper">
          <div className="inner-top">
            <div className="content">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={logo}
                    width={137}
                    height={45}
                    alt="Education Logo Images"
                  />
                </Link>
              </div>
              <div className="rbt-btn-close">
              {isLightTheme ? (
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                >
                  <i className="feather-x"></i>
                </button>
              ) : (
                <button
                  className="close-button rbt-round-btn"
                  onClick={() => setMobile(!mobile)}
                  style={{ background:'#192335' }}
                >
                  <i className="feather-x"></i>
                </button>
              )}
              </div>
            </div>
            <p className="description">
            Advancing Your Career with Practical Learning
            </p>
            <ul className="navbar-top-left rbt-information-list justify-content-start">
              <li>
                <Link href="mailto:Info@skillersity.com">
                  <i className="feather-mail"></i>Info@skillersity.com
                </Link>
              </li>
              <li>
                <Link href="tel:919605662277">
                  <i className="feather-phone"></i>+91 9605 66 22 77
                </Link>
              </li>
            </ul>
          </div>

          <Nav />

          <div className="mobile-menu-bottom">
            <div className="rbt-btn-wrapper mb--20">
              <button
                className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center"
                onClick={handleEnrollClick}
              >
                <span>Enroll Now</span>
              </button>
            </div>

            <div className="social-share-wrapper">
              <span className="rbt-short-title d-block">Find With Us</span>
              <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
                <li>
                  <Link href="https://www.facebook.com/">
                    <i className="feather-facebook"></i>
                  </Link>
                </li>
                {/* <li>
                  <Link href="https://www.twitter.com">
                    <i className="feather-twitter"></i>
                  </Link>
                </li> */}
                <li>
                  <Link href="https://www.instagram.com/">
                    <i className="feather-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkdin.com/">
                    <i className="feather-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default MobileMenu;
