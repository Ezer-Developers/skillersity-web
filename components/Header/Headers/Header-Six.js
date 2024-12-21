"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from '../../../app/popup';

import logo from "../../../public/images/logo/logo_white_111.png";
import logoLight from "../../../public/images/dark/logo/logo_111.png";

import Nav from "../Nav";
import { useAppContext } from "@/context/Context";

const HeaderSix = ({
  gapSpaceBetween,
  sticky,
  navigationEnd,
  btnClass,
  btnText,
}) => {
  const { mobile, setMobile, isLightTheme } = useAppContext();
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 180) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div
        className={`rbt-header-wrapper ${gapSpaceBetween} ${sticky} ${
          isSticky ? "rbt-sticky" : ""
        }`}
      >
        <div className="container">
          <div className={`mainbar-row ${navigationEnd} align-items-center`}>
            <div className="header-left">
              <div className="logo">
                <Link href="/">
                  {isLightTheme ? (
                    <Image
                      src={logo}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  ) : (
                    <Image
                      src={logoLight}
                      width={152}
                      height={50}
                      priority={true}
                      alt="Education Logo Images"
                    />
                  )}
                </Link>
              </div>
            </div>

            <div className="rbt-main-navigation d-none d-xl-block">
              <Nav />
            </div>

            <div className="header-right">
              <div className="rbt-btn-wrapper d-none d-xl-block">
                <button className={`rbt-btn ${btnClass}`} onClick={toggleModal}>
                  <span data-text={btnText}>{btnText}</span>
                </button>
              </div>

              <div className="mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button rbt-round-btn"
                    onClick={() => setMobile(!mobile)}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup isOpen={isModalOpen} onClose={toggleModal} />
    </>
  );
};

export default HeaderSix;
