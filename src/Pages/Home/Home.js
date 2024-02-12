import React from "react";

import "./Home.css";

import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import CircularCards from "../../components/Circular Cards/CircularCards";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import CorporatePartnersSec from "../../components/CorporatePartnersSec/CorporatePartnersSec";

import HomeBannerBgImg from "../../Assets/Home/HomeBannerBgImg.png";
import HomeBannerRightImg from "../../Assets/Home/HomeBannerRightImg.png";

import WelcomeCardImg1 from "../../Assets/Home/WelcomeCardImg1.jpeg";
import WelcomeCardImg2 from "../../Assets/Home/WelcomeCardImg2.jpeg";
import WelcomeCardImg3 from "../../Assets/Home/WelcomeCardImg3.jpeg";
import WelcomeCardImg4 from "../../Assets/Home/WelcomeCardImg4.jpeg";

import WelcomeSectionIcon from "../../Assets/Home/WelcomeSectionIcon.png";

import PartnersLogosImg from "../../Assets/Home/PartnersLogosImg.png";

import HomeAboutCompanyMainImg from "../../Assets/Home/HomeAboutCompanyMainImg.jpeg";
import HomeAboutCompanyEarnings from "../../Assets/Home/HomeAboutCompanyEarnings.jpeg";
import HomeAboutCompanyChatIcon from "../../Assets/Home/HomeAboutCompanyChatIcon.jpeg";
import BlogsShowCaseSection from "../../components/BlogsShowCaseSection/BlogsShowCaseSection";
import internalLinks from "../../internalLinks";
import FooterCta from "../../components/FooterCta/FooterCta";

function Home() {
  const aboutUsCardsData = [
    {
      number: "15+",
      heading: "Years in Business",
      description:
        "Started by two stalwart American traders, and having been conceived on the lines of the world class NYSE and NASDAQ trading cultures, Impulse Capital has come a long way in finding its footing in the still developing Indian market.",
    },
    {
      number: "40+",
      heading: "Companies Supported",
      description:
        "After putting together two success stories in America, it was an inspired decision to venture into the Indian market. And thus, in the year, 2020, Impulse Capital came into existence as a small one point set up in Lucknow.",
    },
    {
      number: "3M",
      heading: "Milllion USD Worth of Investments",
      description:
        "Starting out in Lucknow had its own challenges, as is the case when you embrace a new country, its culture, its laws and most importantly its people. Impulse Capital took the first baby steps towards becoming the leader of online global trading in India.",
    },
    {
      number: "15+",
      heading: "Network of Investors",
      description:
        "As the years passed, Impulse Capital managed to convince one and all about the robustness of the sector and the endless possibilities associated with online global trading that it had thrown up for the aspiring Indian trader.",
    },
  ];

  const renderedAboutUsCards = aboutUsCardsData.map((data, index) => (
    <CircularCards props={data} key={index} />
  ));

  const welcomeCardsData = [
    {
      img: WelcomeCardImg1,
      heading: "Startups",
      description:
        "Impulse Capital supports Founders seeking help in infusing fresh ideas into the business community",
    },
    {
      img: WelcomeCardImg2,
      heading: "Investors",
      description:
        "Receive Potential Business deals and inbound investment opportunities from Impulse Capital",
    },
    {
      img: WelcomeCardImg3,
      heading: "Mentors",
      description:
        "Find enthusiastic entrepreneurs seeking intellectual help to pass on your domain expertise.",
    },
    {
      img: WelcomeCardImg4,
      heading: "Partners",
      description:
        "Global Partners offering professional technical expertise and logistics for business development",
    },
  ];

  const renderedWelcomeCards = welcomeCardsData.map((props, index) => (
    <WelcomeCard props={props} />
  ));

  return (
    <div className=" home-section mt-28 md:mt-14 lg:mt-0 bg-primaryBgDark text-primaryWhite flex items-center justify-center gap-[50px] xl:gap-[100px] flex-col">
      {/* Home Banner Starts Here */}
      <div
        className=" home-banner-section flex pb-10 lg:pb-0 lg:h-80v w-11/12 bg-no-repeat bg-secondaryBgDark flex-col lg:flex-row md:px-20 md:mt-10 gap-20 "
        style={{
          backgroundImage: `url(${HomeBannerBgImg})`,
          backgroundPosition: "right",
        }}
      >
        <div className=" flex flex-col lg:w-6/12 text-left h-full items-left justify-center gap-10">
          <h1 className=" text-5xl md:text-7xl font-semibold text-primaryGreenText ">
            Investing at the edge
          </h1>
          <span className=" text-3xl">
            Backing founders building breakthroughs for a better world
          </span>
          {/* <span>Backing founders buildingbreakthroughs for a better world</span> */}
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
        <div className=" flex flex-col lg:w-6/12 h-full items-center justify-center ">
          <img className=" lg:w-8/12" src={HomeBannerRightImg} alt="invest" />
        </div>
      </div>
      {/* Home Banner Ends Here */}

      {/* Home About Us Section Starts Here*/}
      <div className=" w-full flex flex-col justify-center items-center gap-10">
        <div className=" w-[90%] flex flex-col justify-center items-center">
          <h2 className=" text-4xl font-bold mb-3">About Impulse Capital</h2>
          <span className=" md:w-3/4 text-secondaryTextGrey flex">
            With its American roots and Indian ethos, Impulse Capital has
            managed to make deep inroads into the trading sector in the last one
            decade.
          </span>
        </div>
        <div className=" w-full flex flex-wrap gap-10 justify-center items-start">
          {renderedAboutUsCards}
        </div>
      </div>
      {/* Home About Us Section Ends Here*/}

      {/* Home Welcome Section Starts Here*/}
      <div className=" w-[90%] xl:h-90v flex flex-col-reverse xl:flex-row xl:gap-0 gap-[50px] justify-center md:justify-between items-center p-[20px] bg-primaryWhite text-primaryBgDark rounded-sm">
        <div className=" flex flex-wrap xl:w-[55%] justify-center items-center gap-5 relative ">
          <div className=" h-[50%] w-[100%] bg-purple-300 absolute rounded-lg bottom-20">
            <img
              src={WelcomeSectionIcon}
              alt="icon"
              className=" absolute -bottom-12 -right-20 hidden xl:flex "
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 z-10">
            {renderedWelcomeCards}
          </div>
        </div>
        <div className=" flex flex-col text-left xl:w-[40%] h-[90%] justify-start gap-10">
          <h4 className=" text-3xl md:text-5xl font-semibold">
            Welcome To Impulse Capital
          </h4>
          <p>
            Impulse Capital brings together Entrepreneurs, Investors, Mentors
            and Partners together on one platform to help startupsmetamorphose
            into big future businesses.
          </p>
        </div>
      </div>
      {/* Home Welcome Section Ends Here*/}

      {/* Home Partenrs Section Starts Here*/}
      <CorporatePartnersSec
        heading="Our Partners"
        des=""
        logos={PartnersLogosImg}
      />
      {/* Home Partenrs Section Ends Here*/}

      {/* Home About Company Section Starts Here*/}

      <div className=" md:p-5 py-10 px-5 gap-10 flex flex-col md:flex-row justify-center md:justify-between text-left bg-primaryWhite text-ternaryTextGrey w-[90%] rounded-sm ">
        <div className=" flex flex-col md:w-[45%] gap-10">
          <h4 className=" font-bold text-4xl text-primaryBgDark">
            About Company
          </h4>
          <p>
            We are early stage investors in digital and deep science tech
            companies. We back passionate founders using technology to push
            boundaries.
          </p>
          <p>
            We are early stage investors in digital and deep science tech
            companies. We back passionate founders using technology to push
            boundaries.
          </p>
          <PrimaryBtn link={internalLinks.about}>Learn More</PrimaryBtn>
        </div>
        <div className=" flex md:w-[50%] justify-center items-center relative">
          <img
            className=" w-[100%] rounded-xl"
            src={HomeAboutCompanyMainImg}
            alt="About Us"
          />
          <img
            className=" w-[35%] absolute rounded-xl top-5 left-5"
            src={HomeAboutCompanyEarnings}
            alt="Earnings"
          />
          <img
            className="w-[15%] absolute rounded-xl bottom-[20%] left-5"
            src={HomeAboutCompanyChatIcon}
            alt="Chat"
          />
        </div>
      </div>

      {/* Home About Company Section Ends Here*/}

      <BlogsShowCaseSection />

      {/* Home Footer Section Starts Here*/}
      <FooterCta />
    </div>
  );
}

export default Home;
