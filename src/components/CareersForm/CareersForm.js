import React from "react";
import { useForm } from "react-hook-form";

function CareersForm({ sendFileField, isModal }) {
  const { register, handleSubmit, control, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  return (
    <div
      className={` w-[100%] h-[100%] flex flex-col justify-start items-start ${
        isModal
          ? " text-primaryWhite bg-primaryBgDark"
          : "text-primaryBgDark bg-primaryWhite"
      }  rounded-lg py-10 px-5 gap-y-10`}
    >
      {isModal && (
        <h2 className=" text-3xl font-bold uppercase ">Get in touch</h2>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={` ${
          isModal ? " text-primaryWhite" : "  text-primaryBgDark"
        } k text-sm flex flex-col w-[100%] gap-5 `}
      >
        <div className=" w-[100%] flex flex-col lg:flex-row gap-5 justify-center items-center text-left ">
          <div className=" w-[100%] lg:w-[50%] flex flex-col gap-2">
            <label className=" font-bold" htmlFor="fname">
              Full Name
            </label>
            <input
              className=" w-[100%] flex py-2  px-3 border rounded-lg outline-none text-primaryBgDark"
              type="text"
              placeholder="Your Full Name"
              name="fname"
              {...register("fname", {
                required: {
                  value: true,
                  message: "Full name is required",
                },
              })}
            />
            <p className=" text-red-600">{errors.fname?.message}</p>
          </div>
          <div className=" w-[100%] lg:w-[50%] flex flex-col gap-2">
            <label className=" font-bold" htmlFor="email">
              Email
            </label>
            <input
              className=" w-[100%] flex py-2  px-3 border rounded-lg outline-none text-primaryBgDark"
              type="email"
              placeholder="Your Email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            <p className=" text-red-600">{errors.email?.message}</p>
          </div>
        </div>
        <div className=" w-[100%] flex flex-col lg:flex-row gap-10 justify-start items-center text-left ">
          <div className=" w-[100%] lg:w-[50%] flex flex-col gap-2">
            <label className=" font-bold" htmlFor="mobnumber">
              Mobile Number
            </label>
            <input
              className=" w-[100%] flex py-2  px-3 border rounded-lg outline-none text-primaryBgDark"
              type="text"
              placeholder="Your Mobile Number"
              name="mobileNumber"
              {...register("mobileNumber", {
                required: {
                  value: true,
                  message: "Mobile Number is required",
                },
                pattern: {
                  value: /^([+]\d{2})?\d{10}$/,
                  message: "Please enter a valid mobile number",
                },
              })}
            />
            <p className=" text-red-600">{errors.mobileNumber?.message}</p>
          </div>
          {sendFileField === true && (
            <div className=" w-[100%] lg:w-[50%] flex flex-col gap-2">
              <label className=" font-bold" htmlFor="pdfLink">
                Upload File (PDF)
              </label>
              <input
                className=" w-[100%] flex py-2  px-3 border rounded-lg outline-none text-primaryBgDark"
                type="file"
                placeholder="File"
                accept=".pdf"
                name="resume"
                {...register("resume", {
                  required: {
                    value: true,
                    message: "Resume is required",
                  },
                })}
              />
              <p className=" text-red-600">{errors.resume?.message}</p>
            </div>
          )}
        </div>

        <div className=" w-[100%] flex flex-col gap-2 text-left">
          <label className=" font-bold" htmlFor="message">
            Message
          </label>
          <textarea
            className=" w-[100%] h-16 sm:h-28 flex py-2  px-3 border rounded-lg outline-none text-primaryBgDark"
            name="message"
            {...register("message", {
              required: {
                value: true,
                message: "Message is required",
              },
            })}
            id=""
          ></textarea>
          <p className=" text-red-600">{errors.message?.message}</p>
        </div>
        <button className=" w-48 px-3 py-4 font-bold text-primaryWhite bg-primaryHighlight rounded-md text-base ">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default CareersForm;
