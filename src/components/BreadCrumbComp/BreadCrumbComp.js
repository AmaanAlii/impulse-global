import React from "react";

import { Link } from "react-router-dom";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import internalLinks from "../../internalLinks";

function BreadCrumbComp({ currentPageName }) {
  return (
    <div>
      <span className=" text-xl flex justify-center items-center gap-5">
        <Link to={internalLinks.home}>Home</Link>
        <ArrowForwardIosRoundedIcon fontSize="small" />
        <span className=" font-semibold">{currentPageName}</span>
      </span>
    </div>
  );
}

export default BreadCrumbComp;
