import React from "react";

import "./WelcomeCard.css";

function WelcomeCard({ props }) {
  return (
    <div className="card-border-gradient w-64 h-80 flex flex-col justify-center items-center bg-primaryWhite border border-blue-500 rounded-lg p-[10px] hover:border-8 hover:border-purple-200 ease-in-out duration-300">
      <img src={props.img} alt="icon" />
      <div className=" flex flex-col justify-around items-center h-[50%] w-[90%]">
        <h5 className=" text-xl font-semibold">{props.heading}</h5>
        <span className=" text-sm">{props.description}</span>
      </div>
    </div>
  );
}

export default WelcomeCard;
