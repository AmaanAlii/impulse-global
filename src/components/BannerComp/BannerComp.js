import React from "react";
import BreadCrumbComp from "../BreadCrumbComp/BreadCrumbComp";

function BannerComp({ heading, currentPageName }) {
  return (
    <div
      className=" w-[90%] h-[50vh] bg-gradient-to-t from-primaryHighlight to-primaryGreenText 
    flex flex-col justify-center items-center gap-14 rounded-lg"
    >
      <h3 className=" text-2xl sm:text-5xl font-semibold">{heading}</h3>
      <BreadCrumbComp currentPageName={currentPageName} />
    </div>
  );
}

export default BannerComp;
