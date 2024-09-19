import React from "react";

import { useParams } from "react-router-dom";

import { BlogsData } from "./BlogsData";
import BannerComp from "../../components/BannerComp/BannerComp";

function SingleBlog() {
  const { id } = useParams();

  const currentBlog = BlogsData.find((blog) => blog.id === parseInt(id));

  return (
    <div className=" mt-28 w-[100%] flex flex-col justify-center items-center gap-16">
      <BannerComp heading={currentBlog.title} currentPageName="Blog" />

      <div
        className=" w-[95%] sm:w-[90%] bg-primaryWhite px-2 py-10 sm:p-10 rounded-lg 
      flex flex-col justify-center items-start text-left gap-8"
      >
        {/* <p className=" font-semibold text-left">{currentBlog.shortDesc}</p> */}
        {currentBlog.mainContent.map((data, index) => (
          <div key={index} className=" flex flex-col gap-2 text-left w-[100%]">
            <h3 className=" text-xl font-bold">{data.heading}</h3>
            {data.paras.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleBlog;
