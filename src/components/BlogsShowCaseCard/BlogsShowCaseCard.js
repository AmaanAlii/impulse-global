import React from "react";

function BlogsShowCaseCard({ blog }) {
  return (
    <div className=" flex flex-col w-[100%] sm:w-[42vw] justify-center items-start text-left gap-5">
      <div className=" relative w-[100%]">
        <img className=" w-[100%] rounded-sm" src={blog.img} alt="Blog" />
        <span className=" p-3 bg-primaryWhite text-primaryHighlight font-bold absolute top-0 right-0">
          {blog.date}
        </span>
      </div>

      <h5 className=" text-2xl font-bold">{blog.title}</h5>
      <span>{blog.shortDesc}</span>
    </div>
  );
}

export default BlogsShowCaseCard;
