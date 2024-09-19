import React from "react";

import { Link } from "react-router-dom";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import internalLinks from "../../internalLinks";

function BlogsCards({ img, date, title, shortDesc, id }) {
  return (
    <div className=" flex flex-col justify-start items-start text-left w-[360px] h-[500px] gap-2">
      <img className=" w-[100%] rounded-lg" src={img} alt="Blog" />
      <div className=" flex flex-col gap-2">
        <h4 className=" text-sm font-semibold">{date}</h4>
        <h3 className=" font-bold text-xl">{title}</h3>
        <span>{shortDesc}</span>
      </div>
      <Link to={`${internalLinks.singleBlog}/${id}`}>
        <button className=" border-none text-primaryHighlight text-xl">
          Read More <ArrowForwardIosRoundedIcon />{" "}
        </button>
      </Link>
    </div>
  );
}

export default BlogsCards;
