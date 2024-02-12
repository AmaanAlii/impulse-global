import React from "react";

function CircularCards({ props }) {
  console.log(props);
  return (
    <div className=" group w-60 h-auto flex flex-col gap-5 justify-start items-center">
      <h4 className=" group-hover:border-l-[15px] ease-in-out duration-300 border-primaryHighlight text-3xl font-bold text-primaryHighlight bg-primaryWhite h-[120px] w-[120px] rounded-full flex justify-center items-center">
        {props.number}
      </h4>
      <div className="flex flex-col justify-center items-center gap-5">
        <h3 className=" text-xl font-semibold">{props.heading}</h3>
        <span className=" text-xs text-secondaryTextGrey">
          {props.description}
        </span>
      </div>
    </div>
  );
}

export default CircularCards;
