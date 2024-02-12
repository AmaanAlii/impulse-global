import React, { useState, useEffect } from "react";

import internalLinks from "../../internalLinks";

import MainLogoImg from "../../Assets/Logos/MainLogoImg.png";

import { NavLink } from "react-router-dom";

import MainEnqBtn from "../MainEnqBtn/MainEnqBtn";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./navBar.css";

function NavBar() {
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

  const closeMobMenu = () => {
    setMobMenuOpen(false);
  };

  return (
    <nav className=" w-[95%] lg:w-full px-6 rounded-lg lg:rounded-none py-1 lg:p-0 bg-primaryWhite flex items-center self-center justify-between lg:justify-around fixed top-2 z-50 shadow-primaryHighlight shadow-md lg:top-0">
      <img
        className=" w-[15%] sm:w-[12%] md:w-[8%]"
        src={MainLogoImg}
        alt="logo"
      />
      <ul className="lg:flex hidden items-center justify-around w-6/12 ">
        <li>
          <NavLink
            to={internalLinks.home}
            onClick={() => {
              setIsNavActive(internalLinks.home);
            }}
            className={
              navActive === internalLinks.home ? "active-link" : "inactive-link"
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
                ? "active-link"
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
                ? "active-link"
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
              navActive === internalLinks.blog ? "active-link" : "inactive-link"
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
                ? "active-link"
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
                ? "active-link"
                : "inactive-link"
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

      <div className=" hidden lg:flex">
        <MainEnqBtn link={internalLinks.contact}>Enquire Now</MainEnqBtn>
      </div>

      {/* For Mobile Menu  */}

      <div className=" flex lg:hidden">
        <MenuIcon fontSize="large" onClick={handleMobMenuToggle} />
      </div>

      <ul
        className={`lg:hidden absolute flex flex-col
       items-start justify-center gap-y-5 w-[60%] sm:w-[60%] md:w-[50%] bg-primaryBgDark text-primaryHighlight shadow-primaryHighlight shadow-inner p-10 rounded-lg text-xl font-semibold transition-all ease-in-out duration-500  ${
         mobMenuOpen
           ? " flex top-5 right-1"
           : " top-5 -right-[90%] sm:-right-[65%] md:-right-[60%]"
       } `}
      >
        <li
          className={`flex self-end ${
            mobMenuOpen ? " animate-spin-slow-stop" : ""
          }`}
        >
          <CloseIcon sx={{ fontSize: 50 }} onClick={handleMobMenuToggle} />
        </li>
        <li>
          <NavLink
            to={internalLinks.home}
            onClick={() => {
              setIsNavActive(internalLinks.home);
              handleMobMenuToggle();
            }}
            className={
              navActive === internalLinks.home ? "active-link" : "inactive-link"
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
                ? "active-link"
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
                ? "active-link"
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
              navActive === internalLinks.blog ? "active-link" : "inactive-link"
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
                ? "active-link"
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
                ? "active-link"
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
