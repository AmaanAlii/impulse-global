import React from "react";

import BannerComp from "../../components/BannerComp/BannerComp";

import AboutBgDots from "../../Assets/About/AboutBgDots.png";

import AboutOurMissionImg from "../../Assets/About/AboutOurMissionImg.jpeg";
import AboutOurVisionImg from "../../Assets/About/AboutOurVisionImg.jpeg";
import AboutOurAchievementsImg from "../../Assets/About/AboutOurAchievementsImg.jpeg";

import AboutOurTeamImg1 from "../../Assets/About/AboutOurTeamImg1.jpeg";
import AboutOurTeamImg2 from "../../Assets/About/AboutOurTeamImg2.jpeg";
import AboutOurTeamImg3 from "../../Assets/About/AboutOurTeamImg3.jpeg";

function About() {
  return (
    <div className=" mt-[100px] w-[100%] flex flex-col justify-center items-center gap-10">
      <BannerComp
        heading="We Provide You to Reach Your Dreams"
        currentPageName="About Us"
      />
      <div className=" md:w-[90%] flex flex-col justify-center items-center bg-primaryWhite p-3 md:p-10 rounded-md text-left gap-10 shadow-2xl shadow-primaryHighlight">
        <h1 className=" flex self-start text-4xl font-semibold">
          About Company
        </h1>
        <div className=" flex flex-col gap-5">
          <p>
            With its American roots and Indian ethos, Impulse Global LLC has
            managed to make deep inroads into the trading sector in the last one
            decade. Started by two stalwart American traders, and having been
            conceived on the lines of the world class NYSE and NASDAQ trading
            cultures, Impulse Global LLC has come a long way in finding its
            footing in the still developing Indian market.
          </p>
          <p>
            After putting together two success stories in America, it was an
            inspired decision to venture into the Indian market. And thus, in
            the year, 2020, Impulse Global LLC came into existence as a small
            one point set up in India. Starting out in India had its own
            challenges, as is the case when you embrace a new country, its
            culture, its laws and most importantly its people. Impulse Global
            LLC took the first baby steps towards becoming the leader of online
            global trading in UAE.
          </p>
          <p>
            As the years passed, Impulse Global LLC managed to convince one and
            all about the robustness of the sector and the endless possibilities
            associated with online global trading that it had thrown up for the
            aspiring Indian trader. Impulse Global LLC had found its roots, a
            lasting connect and an ever extending family.
          </p>
        </div>
        <div className=" w-[100%] flex flex-col gap-10 md:flex-row justify-between">
          <div className=" md:w-[45%] items-center md:items-start flex flex-col gap-5">
            <img
              className=" w-[300px]  md:w-[400px] md:h-[300px]"
              src={AboutOurVisionImg}
              alt="Vision"
            />
            <h3 className=" text-3xl font-semibold">Vision</h3>
            <p>
              We endeavor to help develop global business connections and
              forging novel pathways for businesses to flourish in the
              international arena.
            </p>
          </div>
          <div className=" md:w-[45%] items-center md:items-start flex flex-col gap-5">
            <img
              className=" w-[300px]  md:w-[400px] md:h-[300px]"
              src={AboutOurMissionImg}
              alt="Vision"
            />
            <h3 className=" text-3xl font-semibold">Mission</h3>
            <p>
              We uphold the value of an inclusive world where everyone can
              thrive. By pooling our efforts, we can unveil fresh global
              prospects and acquaint organizations with untapped markets. Our
              team possesses the expertise to enhance and inform your endeavors.
            </p>
          </div>
        </div>
      </div>

      {/* About Mid Section - Dots Bg */}

      <div
        className=" w-[100%] mt-[50px] pb-[100px] flex flex-col justify-center items-center bg-cover bg-no-repeat gap-16"
        style={{
          backgroundImage: `url(${AboutBgDots})`,
        }}
      >
        {/* Achievements Section */}

        <div className=" w-[95%] md:w-[80%] flex flex-col md:flex-row justify-between items-center gap-10">
          <div className=" md:w-[40%] flex flex-col">
            <img
              className=" md:w-[90%] rounded-md"
              src={AboutOurAchievementsImg}
              alt="Achievements"
            />
          </div>
          <div className=" text-primaryWhite md:w-[55%] flex flex-col text-left gap-5">
            <h3 className=" text-4xl font-semibold capitalize">
              Our achievements{" "}
            </h3>
            <p className=" text-ternaryTextGrey">
              The cornerstone of your organization's triumph is our team of
              experts. We furnish steadfast leadership, strategic rigor, and
              vigilant risk management, ensuring your organization excels in
              this dynamic market landscape.
            </p>
            <div className=" flex flex-wrap justify-between items-center gap-y-5">
              <div className=" flex flex-col min-w-[180px] gap-2">
                <h4 className=" text-4xl text-primaryHighlight font-semibold ">
                  16
                </h4>
                <span>Years of Experience</span>
              </div>
              <div className=" flex flex-col min-w-[180px] gap-2">
                <h4 className=" text-4xl text-primaryHighlight font-semibold ">
                  3450
                </h4>
                <span>Loans Approved</span>
              </div>
              <div className=" flex flex-col min-w-[180px] gap-2">
                <h4 className=" text-4xl text-primaryHighlight font-semibold ">
                  52
                </h4>
                <span>Business Partners</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}

        <div className=" text-primaryWhite w-[80%] flex flex-col gap-10 text-left">
          <h3 className=" text-4xl font-semibold">Our Team Members</h3>
          <div className=" w-[100%] flex flex-wrap justify-center gap-5 items-center gap-y-5">
            <div className=" w-[32%] min-w-[350px] flex flex-col justify-center items-center relative">
              <img
                src={AboutOurTeamImg1}
                alt="Team"
                className=" w-[100%] rounded-lg"
              />
              <div className=" w-[90%] bg-primaryHighlight flex flex-col justify-center items-center py-3 rounded-b-lg absolute bottom-5">
                <h4 className=" text-2xl font-semibold">George Jordan</h4>
                <span className=" text-gray-200">Executive Chairman</span>
              </div>
            </div>
            <div className=" w-[32%] min-w-[350px] flex flex-col justify-center items-center relative">
              <img
                src={AboutOurTeamImg2}
                alt="Team"
                className=" w-[100%] rounded-lg"
              />
              <div className=" w-[90%] bg-primaryHighlight flex flex-col justify-center items-center py-3 rounded-b-lg absolute bottom-5">
                <h4 className=" text-2xl font-semibold">Jane Cooper</h4>
                <span className=" text-gray-200">Executive Chairman</span>
              </div>
            </div>
            <div className=" w-[32%] min-w-[350px] flex flex-col justify-center items-center relative">
              <img
                src={AboutOurTeamImg3}
                alt="Team"
                className=" w-[100%] rounded-lg"
              />
              <div className=" w-[90%] bg-primaryHighlight flex flex-col justify-center items-center py-3 rounded-b-lg absolute bottom-5">
                <h4 className=" text-2xl font-semibold">Leslie Alexander</h4>
                <span className=" text-gray-200">Executive Chairman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
