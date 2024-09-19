import React from "react";

import { BlogsData } from "./BlogsData";
import BlogsCards from "./BlogsCards";

import BgImg from "../../Assets/Careers/CareersBgImg.png";
import BannerComp from "../../components/BannerComp/BannerComp";

function Blogs() {
  return (
    <div
      className=" mt-28 w-[100%] flex flex-col gap-16 justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <BannerComp heading="Our Latest News" currentPageName="Blog" />
      <div className=" w-[95%] sm:w-[90%] bg-primaryWhite rounded-lg flex justify-center items-start flex-wrap gap-5 gap-y-10 py-5 p-2 sm:p-10">
        {BlogsData.map((blog, index) => (
          <BlogsCards
            key={index}
            title={blog.title}
            img={blog.img}
            shortDesc={blog.shortDesc}
            date={blog.date}
            id={blog.id}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Blogs;
