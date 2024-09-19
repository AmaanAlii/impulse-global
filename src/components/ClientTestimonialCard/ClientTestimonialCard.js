import React from "react";

function ClientTestimonialCard({ data }) {
  return (
    <div className=" flex flex-col-reverse lg:flex-row justify-between items-center w-[90%] lg:py-16 gap-10 lg:gap-0">
      <div className=" flex justify-center flex-col lg:w-[50%] gap-24">
        <p className=" text-2xl text-left">"{data.clientMessage}"</p>
        <div className=" w-[100%] text-left flex flex-col gap-2">
          <span className=" text-2xl">{data.clientName}</span>
          <span>{data.clientDes}</span>
        </div>
      </div>

      <div className=" flex justify-center items-center lg:w-[40%]">
        <img
          className=" w-[90%] rounded-lg shadow-primaryBgDark shadow-2xl"
          src={data.clientImg}
          alt="Client"
        />
      </div>
    </div>
  );
}

export default ClientTestimonialCard;
