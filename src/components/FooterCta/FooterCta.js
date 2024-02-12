import React from "react";

import CtaSectionBgImg from "../../Assets/CTAsection/CtaSectionBgImg.jpeg";
import internalLinks from "../../internalLinks";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

function FooterCta() {
  return (
    <div
      className=" w-[90%] h-[55vh] bg-cover bg-no-repeat rounded-md text-primaryBgDark flex flex-col justify-center items-center gap-10"
      style={{ backgroundImage: `url(${CtaSectionBgImg})` }}
    >
      <h5 className=" text-4xl font-bold">We'd love to hear from you</h5>
      <span className=" md:w-[40%]">
        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
        tempor incididunt
      </span>
      <PrimaryBtn link={internalLinks.contact} bgColor="dark">
        Contact Us
      </PrimaryBtn>
    </div>
  );
}

export default FooterCta;
