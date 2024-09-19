import React, { useState, useEffect } from "react";

import internalLinks from "../../internalLinks";

import MainLogoImg from "../../Assets/Logos/MainLogoImg.png";

import { NavLink, useLocation } from "react-router-dom";

import MainEnqBtn from "../MainEnqBtn/MainEnqBtn";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./navBar.css";
import EnquiryModal from "../EnquiryModal/EnquiryModal";

function NavBar() {
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPath]);

  const [navActive, setIsNavActive] = useState(internalLinks.home);

  const [mobMenuOpen, setMobMenuOpen] = useState(false);

  useEffect(() => {
    if (mobMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobMenuOpen]);

  const handleMobMenuToggle = () => {
    setMobMenuOpen(!mobMenuOpen);
  };

  return (
    <nav className=" w-[95%] lg:w-full px-6 rounded-lg lg:rounded-none py-1 lg:p-0 bg-primaryWhite flex items-center self-center justify-between lg:justify-around fixed top-2 z-50 shadow-primaryHighlight shadow-md lg:top-0">
      <NavLink
        to={internalLinks.home}
        className="w-[15%] sm:w-[12%] md:w-[6%] "
      >
        <img className=" w-[100%]" src={MainLogoImg} alt="logo" />
      </NavLink>
      <ul className="lg:flex hidden items-center justify-around w-6/12 ">
        <li>
          <NavLink
            to={internalLinks.home}
            onClick={() => {
              setIsNavActive(internalLinks.home);
            }}
            className={
              navActive === internalLinks.home
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={internalLinks.services}
            onClick={() => {
              setIsNavActive(internalLinks.services);
            }}
            className={
              navActive === internalLinks.services
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Our Services
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.careers}
            onClick={() => {
              setIsNavActive(internalLinks.careers);
            }}
            className={
              navActive === internalLinks.careers
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Careers
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.blog}
            onClick={() => {
              setIsNavActive(internalLinks.blog);
            }}
            className={
              navActive === internalLinks.blog
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={internalLinks.about}
            onClick={() => {
              setIsNavActive(internalLinks.about);
            }}
            className={
              navActive === internalLinks.about
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            About
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.contact}
            onClick={() => {
              setIsNavActive(internalLinks.contact);
            }}
            className={
              navActive === internalLinks.contact
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className=" hidden lg:flex">
        <EnquiryModal>
          <div>
            <MainEnqBtn>Enquire Now</MainEnqBtn>
          </div>
        </EnquiryModal>
      </div>

      {/* For Mobile Menu  */}

      <div className=" flex lg:hidden">
        <MenuIcon fontSize="large" onClick={handleMobMenuToggle} />
      </div>

      <ul
        className={`lg:hidden absolute flex flex-col
       items-start justify-center gap-y-5 w-[60%] sm:w-[60%] md:w-[50%] bg-primaryBgDark text-primaryWhite shadow-primaryHighlight shadow-inner p-10 pb-16 rounded-lg text-xl font-semibold transition-all ease-in-out duration-500  ${
         mobMenuOpen
           ? " flex top-5 right-1"
           : " top-5 -right-[90%] sm:-right-[65%] md:-right-[60%]"
       } `}
      >
        <li
          className={`flex self-end text-primaryHighlight ${
            mobMenuOpen ? " animate-spin-slow-stop" : ""
          }`}
        >
          <CloseIcon sx={{ fontSize: 60 }} onClick={handleMobMenuToggle} />
        </li>
        <li>
          <NavLink
            to={internalLinks.home}
            onClick={() => {
              setIsNavActive(internalLinks.home);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.home
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={internalLinks.services}
            onClick={() => {
              setIsNavActive(internalLinks.services);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.services
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Our Services
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.careers}
            onClick={() => {
              setIsNavActive(internalLinks.careers);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.careers
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Careers
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.blog}
            onClick={() => {
              setIsNavActive(internalLinks.blog);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.blog
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to={internalLinks.about}
            onClick={() => {
              setIsNavActive(internalLinks.about);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.about
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            About
          </NavLink>
        </li>{" "}
        <li>
          <NavLink
            to={internalLinks.contact}
            onClick={() => {
              setIsNavActive(internalLinks.contact);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.contact
                ? "active-link text-primaryHighlight font-bold"
                : "inactive-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
