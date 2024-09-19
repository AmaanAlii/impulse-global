import React from "react";
import BannerComp from "../../components/BannerComp/BannerComp";
import MainForm from "../../components/MainForm/MainForm";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import companyData from "../../companyData";
import CareersForm from "../../components/CareersForm/CareersForm";

function Contact() {
  return (
    <div className=" w-[100%] mt-[100px] flex flex-col gap-10 justify-center items-center">
      <BannerComp heading="Let's talk with Us" currentPageName="Contact Us" />

      {/* form section */}

      <div className=" w-[95%] lg:w-[90%] bg-primaryWhite rounded-md text-left py-10 px-3 lg:p-10 flex flex-col gap-10 lg:flex-row lg:gap-0 justify-between items-center">
        <div className=" flex flex-col w-[100%] lg:w-[65%] gap-5">
          <h1 className=" text-4xl font-semibold">Contact Us</h1>
          <span>
            Reach out to us to discover how we can assist you in business
            funding and expansion into the markets of the UAE!
          </span>
          <div className=" flex flex-col w-[100%]">
            <CareersForm />
          </div>
        </div>

        <div className=" lg:w-[30%] flex flex-wrap lg:flex-nowrap lg:flex-col justify-start lg:justify-center items-start gap-10">
          <div className=" flex flex-col justify-center items-start gap-3 ">
            <span className=" font-semibold text-xl flex justify-center items-center gap-5">
              <AccessTimeRoundedIcon
                fontSize="large"
                className=" text-primaryHighlight"
              />
              Open Hours
            </span>
            <span>{companyData.companyOpneHrs}</span>
          </div>
          <div className=" flex flex-col justify-center items-start gap-3 ">
            <span className=" font-semibold text-xl flex justify-center items-center gap-5">
              <EmailOutlinedIcon
                fontSize="large"
                className=" text-primaryHighlight"
              />
              Email
            </span>
            <span className=" text-primaryHighlight font-semibold">
              <a href={`mailto:${companyData.companyEmail}`}>
                {companyData.companyEmail}
              </a>
            </span>
          </div>
          <div className=" flex flex-col justify-center items-start gap-3 ">
            <span className=" font-semibold text-xl flex justify-center items-start gap-5">
              <LocalPhoneOutlinedIcon
                fontSize="large"
                className=" text-primaryHighlight"
              />
              Phone
            </span>
            <span className=" text-primaryHighlight font-semibold">
              {" "}
              <a href={`tel:${companyData.companyPhone}`}>
                {companyData.companyPhone}
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className=" w-[90%] h-50v rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.688417759563!2d80.93829697538654!3d26.84986086278891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd603b29ca41%3A0x605772f5be1ef12e!2simpulse%20capital!5e0!3m2!1sen!2sin!4v1707822241727!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
          className=" rounded-lg"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
