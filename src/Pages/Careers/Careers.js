import React from "react";
import BannerComp from "../../components/BannerComp/BannerComp";

import CareersIntroImg from "../../Assets/Careers/CareersIntroImg.jpeg";
import CareersBgImg from "../../Assets/Careers/CareersBgImg.png";
import CareersForm from "../../components/CareersForm/CareersForm";

function Careers() {
  return (
    <div
      className=" mt-28 w-[100%] flex flex-col justify-center items-center gap-16 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${CareersBgImg})` }}
    >
      <BannerComp
        currentPageName="Careers"
        heading="Let's Join Us and Work Together"
      />

      {/* careers sub section */}

      <div className=" w-[100%] flex flex-col justify-center items-center gap-10 text-primaryWhite">
        {/* careers intro section */}
        <div className=" w-[90%] flex flex-col lg:flex-row justify-center items-start gap-10">
          <div className=" w-[100%] lg:w-[50%] flex flex-col justify-center items-center lg:items-start gap-10">
            <img
              src={CareersIntroImg}
              alt="Career"
              className=" w-[100%] lg:w-[90%] rounded-lg shadow-primaryHighlight shadow-lg"
            />

            <span className=" p-5 bg-primaryWhite text-primaryBgDark w-[90%] rounded-lg">
              Reach out to us directly with your brief details and resume, on
              Email -{" "}
              <span className=" text-primaryHighlight">
                hr@impulsecapital.co
              </span>
            </span>
          </div>
          <div className=" w-[100%] lg:w-[50%] flex flex-col justify-start items-start text-left gap-5">
            <h2 className=" text-4xl font-bold">Apply For A Position</h2>
            <p>
              Write to us with your brief profile and CV. We will revert back if
              your profile seems to be a good fit for our organization.
            </p>
            <p>
              seems to be a good fit for our organization. Reach out to us
              directly with your brief details and resume, on Email -
              hr@impulsecapital.co
            </p>
            <p>
              India is one of the world's fastest-growing economies, attracting
              a large number of international investors. Whereas the Silicon
              Valley boom of the 1990s drove Indian entrepreneurs in the
              technology and science industries to the United States to start
              businesses and raise startup funding, private investors who have
              had success in markets such as the United States and the United
              Kingdom are now looking to India for their next big bet.
            </p>
            <p>
              Angel Investment has been an influential source for equity
              financing in recent years and will continue to be so for years to
              come. At Impulse Global LLC, you can easily be in touch with
              several angel investors as they have a large connection base.
            </p>
            <p>
              Due to the fact that angel investors are often rich individuals,
              it's fairly uncommon for business entrepreneurs to seek investment
              from them. Impulse Global LLC is one of the most effective ways to
              find angel investors and effectively plan out a firm. The global
              investment management organization focuses on making firms'
              financing ready and securing capital for them by employing its
              ecosystem, which includes 650+ global investors.
            </p>
            <p>
              At Impulse Global LLC, you can also become a professional by
              contacting us on the given email as we are looking for talented
              and expert candidates to add value to our firm.
            </p>
          </div>
        </div>
        <div className=" w-[90%] h-[1px] bg-primaryHighlight rounded-lg"></div>
        <div className=" w-[90%] sm:w-[60%]">
          <CareersForm sendFileField={true} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Careers;
