import React from "react";

import Marquee from "react-fast-marquee";

function CorporatePartnersSec({ heading, des, logos }) {
  return (
    <div className=" flex flex-col justify-center items-center w-[90%] gap-10">
      <div className=" flex flex-col justify-center items-center gap-5">
        <h4 className=" text-4xl font-bold">{heading}</h4>
        <span className=" text-secondaryTextGrey">{des}</span>
      </div>
      <div>
        <Marquee>
          <img src={logos} alt="Partners" />
        </Marquee>
      </div>
    </div>
  );
}

export default CorporatePartnersSec;
