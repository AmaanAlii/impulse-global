import React from "react";

import { Link } from "react-router-dom";
import internalLinks from "../../internalLinks";

import MainLogoWhiteImg from "../../Assets/Logos/MainLogoWhiteImg.png";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import companyData from "../../companyData";

function Footer() {
  return (
    <div className=" flex justify-center items-center w-[100%] min-h-[80vh] bg-primaryBgDark pt-20">
      <div className=" flex flex-col w-[95%] h-[90%] gap-10 md:gap-5 rounded-md justify-center md:justify-around items-center bg-secondaryBgDark text-primaryWhite">
        <div className=" flex w-[90%] md:w-[85%] flex-wrap justify-center md:justify-between xl:gap[15%] gap-y-10 items-center">
          {" "}
          <div className=" w-[100%] md:w-56 flex flex-col gap-5 md:gap-10 text-left">
            <div className=" md:w-[100%]">
              <Link to={internalLinks.home} className=" md:w-[100%]">
                <img
                  src={MainLogoWhiteImg}
                  alt="Logo"
                  className=" w-[50%] md:w-[70%]"
                />
              </Link>
            </div>
            <span>
              It was an inspired decision to venture into the Indian market. And
              thus, in the year, 2020, Impulse Global LLC came into existence as
              a small one point set up in India.
            </span>
          </div>
          <div className=" w-[100%] md:w-56 flex flex-col gap-2 md:gap-10 text-left">
            <h5 className=" text-2xl font-bold">Company</h5>
            <ul className="w-[100%] flex flex-col gap-5 text-left ">
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.about}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.blog}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.contact}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className=" w-[100%] md:w-56 flex flex-col gap-2 md:gap-10 text-left">
            <h5 className=" text-2xl font-bold">Legal</h5>
            <ul className="w-[100%] flex flex-col gap-5 text-left ">
              <li>
                <Link to={internalLinks.termsOfUse}>Terms Of Use</Link>
              </li>
              <li>
                <Link to={internalLinks.privacyPolicy}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={internalLinks.termsAndConditions}>
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div> */}
          <div className=" w-[100%] md:w-56 flex flex-col gap-3 text-left">
            <h5 className=" text-2xl font-bold">Our Services</h5>
            <ul className="w-[100%] flex flex-col gap-[1px] gap-y-2 text-left list-disc ">
              <li>
                <Link
                  className=" hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  INVESTMENT STARTER KIT
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  FUNDING ASSISTANCE
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  MENTORING
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  INVESTMENT MANAGEMENT
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  RAISE MONEY
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primaryHighlight"
                  to={internalLinks.services}
                >
                  MERGERS & ACQUISITIONS
                </Link>
              </li>
            </ul>
          </div>
          <div className=" w-[100%] md:w-56 flex flex-col gap-3 text-left">
            <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left ">
              <LocationOnOutlinedIcon />
              <a
                href="https://maps.app.goo.gl/6qBNLVGanYxMt6uS9"
                target="_blank"
                className=" hover:text-primaryHighlight"
              >
                {companyData.companyAddress}
              </a>
            </span>
            <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
              <MailOutlineOutlinedIcon />
              <a
                className=" hover:text-primaryHighlight"
                href={`mailto:${companyData.companyEmail}`}
              >
                {companyData.companyEmail}
              </a>
            </span>
            <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
              <PhoneIcon />
              <a
                className=" hover:text-primaryHighlight"
                href={`tel:${companyData.companyPhone}`}
              >
                {companyData.companyPhone}
              </a>
            </span>
            {/* <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
              <FacebookIcon />
              <YouTubeIcon />
            </span> */}
          </div>
        </div>
        {/* <div className=" flex w-[85%] flex-wrap gap-y-5 justify-between items-center">
          <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
            <LocationOnOutlinedIcon />
            <a href="https://maps.app.goo.gl/scp3wp75xVfCycqp9" target="_blank">
              {companyData.companyAddress}
            </a>
          </span>
          <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
            <MailOutlineOutlinedIcon />
            <a href={`mailto:${companyData.companyEmail}`}>
              {companyData.companyEmail}
            </a>
          </span>
          <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
            <PhoneIcon />
            <a href={`tel:${companyData.companyPhone}`}>
              {companyData.companyPhone}
            </a>
          </span>
          <span className=" flex  w-[100%] md:w-56 gap-2 justify-start items-center text-left">
            <FacebookIcon />
            <YouTubeIcon />
          </span>
        </div> */}
        <span>©2024 - All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
