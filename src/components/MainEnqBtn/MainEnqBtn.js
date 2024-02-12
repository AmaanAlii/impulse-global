import React from "react";

import { Link } from "react-router-dom";

function MainEnqBtn(props) {
  return (
    <Link to={props.link}>
      <button className="px-5 py-2 bg-transparent border-2 border-primaryHighlight text-primaryHighlight rounded-md hover:bg-primaryBgDark hover:text-primaryHighlight hover:border-transparent transition-all ease-in-out duration-500 hover:animate-wiggle">
        {props.children}
      </button>
    </Link>
  );
}

export default MainEnqBtn;
