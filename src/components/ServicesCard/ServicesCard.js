import React from "react";

function ServicesCard({ heading, img, desc }) {
  return (
    <div className=" w-[32%] min-w-[360px] min-h-[450px] bg-primaryWhite flex flex-col justify-start items-center gap-y-5 p-5 rounded-lg  ">
      <div className=" w-[100%] flex flex-col lg:flex-row justify-center items-center bg-primaryHighlight px-3 py-10 rounded-lg text-primaryWhite gap-5">
        <img src={img} alt="Services" />
        <h3 className=" text-xl font-semibold">{heading}</h3>
      </div>
      <div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default ServicesCard;
