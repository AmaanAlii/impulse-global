import React from "react";

import { BlogsData } from "../../Pages/Blog/BlogsData";
import BlogsShowCaseCard from "../BlogsShowCaseCard/BlogsShowCaseCard";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";

import internalLinks from "../../internalLinks";

function BlogsShowCaseSection() {
  const topTwoBlogs = BlogsData.slice(0, 2);

  return (
    <div className=" flex flex-col w-[90%] gap-10">
      <div className=" flex w-[100%] justify-between items-center ">
        <div className=" flex flex-col text-left gap-5">
          <h4 className=" text-4xl font-bold text-primaryHighlight">
            Our Blog
          </h4>
          {/* <span className=" text-secondaryTextGrey w-[60%] md:w-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </span> */}
        </div>
        <PrimaryBtn link={internalLinks.blog}>See More</PrimaryBtn>
      </div>
      <div className=" w-[100%] flex flex-col justify-between items-start gap-10 sm:gap-0 sm:flex-row">
        {topTwoBlogs.map((blog, index) => (
          <BlogsShowCaseCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default BlogsShowCaseSection;
