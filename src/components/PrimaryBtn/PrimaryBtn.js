import React from "react";

import { Link } from "react-router-dom";

function PrimaryBtn(props) {
  return (
    <Link to={props.link}>
      {props.bgColor === "dark" ? (
        <button className="w-40 py-3 rounded-lg font-semibold bg-primaryBgDark text-primaryHighlight hover:animate-wiggle">
          {props.children}
        </button>
      ) : (
        <button className="w-40 py-3 rounded-lg font-semibold bg-primaryHighlight text-primaryWhite hover:animate-wiggle">
          {props.children}
        </button>
      )}
    </Link>
  );
}

export default PrimaryBtn;
