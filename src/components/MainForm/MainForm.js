import React from "react";

import { useForm } from "react-hook-form";

// ------   Not in Use .. Instead Careers Form Is Used ------

function MainForm() {
  const { validate } = useForm();
  return (
    <form noValidate action="" className=" flex flex-col w-[100%] gap-5 ">
      <div className="flex flex-col lg:flex-row w-[100%] gap-5 lg:gap-0 justify-between items-center">
        <input
          type="text"
          name="fName"
          placeholder="Full Name"
          required
          className=" border-solid border-[1px] border-neutral-300 rounded-md p-2 outline-none w-[100%] lg:w-[48%]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="border-solid  border-[1px] border-neutral-300 rounded-md p-2 outline-none w-[100%] lg:w-[48%]"
        />
      </div>

      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
        required
        className="border-solid border-[1px] border-neutral-300 rounded-md p-2 outline-none"
      />
      <button
        type="submit"
        className="w-40 py-3 rounded-lg font-semibold bg-primaryHighlight text-primaryWhite hover:animate-wiggle"
      >
        Send Message
      </button>
    </form>
  );
}

export default MainForm;
