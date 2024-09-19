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
      <h5 className=" text-4xl font-bold">We'd Love to Hear From You</h5>
      <span className=" md:w-[40%] ">
        Reach out to discover how we can assist you in business funding and
        expansion into the markets of the UAE!
      </span>
      <PrimaryBtn link={internalLinks.contact} bgColor="dark">
        Contact Us
      </PrimaryBtn>
    </div>
  );
}

export default FooterCta;
