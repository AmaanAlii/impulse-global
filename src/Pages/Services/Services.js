import React from "react";

import internalLinks from "../../internalLinks";

import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import BannerComp from "../../components/BannerComp/BannerComp";
import ServicesCard from "../../components/ServicesCard/ServicesCard";
import CorporatePartnersSec from "../../components/CorporatePartnersSec/CorporatePartnersSec";

import ServicesBgDots from "../../Assets/Services/ServicesBgDots.png";
import ServicesMainImg from "../../Assets/Services/ServicesMainImg.jpeg";

import ServicesInvestStarterImg from "../../Assets/Services/ServicesInvestStarterImg.png";
import ServicesFundingImg from "../../Assets/Services/ServicesFundingImg.png";
import ServicesMentoringImg from "../../Assets/Services/ServicesMentoringImg.png";
import ServicesInvestmentImg from "../../Assets/Services/ServicesInvestmentImg.png";
import ServicesRaiseMoneyImg from "../../Assets/Services/ServicesRaiseMoneyImg.png";
import ServicesMergerImg from "../../Assets/Services/ServicesMergerImg.png";

import ServicesContactMainImg from "../../Assets/Services/ServicesContactMainImg.jpeg";
import PartnersLogosImg from "../../Assets/Home/PartnersLogosImg.png";
import FooterCta from "../../components/FooterCta/FooterCta";

function Services() {
  const servicesCardsData = [
    {
      img: ServicesInvestStarterImg,
      heading: "INVESTMENT STARTER KIT & FINANCIAL DOCUMENTATION",
      desc: "Pitch Deck Preparations & Presentations Creation of Business Plans, Financial Projections & Models, Unit Economics, Investor FAQ’s Company Valuation Term Sheet, Due Diligence, and Shareholder’s Agreement Advisory",
    },
    {
      img: ServicesFundingImg,
      heading: "FUNDING ASSISTANCE",
      desc: "Relationship with 450+ Venture Capital Funds, Family Offices, Private Equity Funds Globally Raise Funds for your Company through Angel Investment, Venture Capital, or Private Equity Funds Raise Debt including Venture Debt, Working Capital, Secured or Unsecured Debt, Revenue-Based Financing",
    },
    {
      img: ServicesMentoringImg,
      heading: "MENTORING",
      desc: "Mentoring on Financial Aspects of your Company Growth Strategies & Planning Go-To-Market Strategies & Marketing Strategies Startup Execution Advisory",
    },
    {
      img: ServicesInvestmentImg,
      heading: "INVESTMENT MANAGEMENT",
      desc: "Get your money wisely invested in exciting startups with top-notch potential",
    },
    {
      img: ServicesRaiseMoneyImg,
      heading:
        "RAISE MONEY FOR YOUR VENTURE CAPITAL (VC) FUND OR PRIVATE EQUITY (PE) FUND",
      desc: "Get Money for your Venture Capital (VC) Fund from LP’s (Limited Partners), Family Offices, Angel Investors, HNI’s (High Networth Individuals), and Global Financial Institutions",
    },
    {
      img: ServicesMergerImg,
      heading: "MERGERS & ACQUISITIONS",
      desc: "Get Buy-Side Advisory Financial & Deal Documentation",
    },
  ];

  const renderedServicesCards = servicesCardsData.map((data, index) => (
    <ServicesCard
      key={index}
      heading={data.heading}
      img={data.img}
      desc={data.desc}
    />
  ));

  return (
    <div className=" w-[100%] mt-[100px] flex flex-col justify-center items-center gap-10">
      <BannerComp
        heading="Best Service to Provide Your Dreams"
        currentPageName="Our Services"
      />
      {/* Services With Bg Sections */}
      <div
        style={{ backgroundImage: `url(${ServicesBgDots})` }}
        className=" w-[100%] bg-cover bg-no-repeat flex flex-col justify-center items-center gap-20"
      >
        {/* Services Intro Section */}
        <div className=" w-[90%] flex flex-col justify-center items-center gap-10 gap-y-5 ">
          <h1 className=" text-4xl text-primaryWhite font-semibold lg:w-[50%]">
            BECOME FUNDING READY RAISE FUNDS
          </h1>
          <div className=" w-[100%] flex flex-col md:flex-row justify-between items-center  gap-y-10 ">
            <div className=" w-[95%] md:w-[50%] flex flex-col justify-center items-start text-secondaryTextGrey gap-10 text-left ">
              <h3 className=" text-2xl">
                GET VENTURE CAPITAL & ANGEL INVESTMENT
              </h3>
              <p>
                Impulse Global LLC has expertise in raising funds for Companies
                and Startups by leveraging its network of Angel Investors and
                450+ VC/PE Funds globally. The firm also specializes in growth
                and strategic advisory, enabling companies to become funding
                ready and scaling up.
              </p>
              <p>
                Impulse Global LLC has expertise in raising funds for Companies
                and Startups by leveraging its network of Angel Investors and
                450+ VC/PE Funds globally. The firm also specializes in growth
                and strategic advisory, enabling companies to become funding
                ready and scaling up.
              </p>
            </div>
            <div className=" md:w-[40%]">
              <img
                className=" w-[100%] rounded-lg"
                src={ServicesMainImg}
                alt="Services"
              />
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className=" w-[90%] flex flex-col text-left gap-10 border-b-2 pb-10 ">
          <h3 className=" text-3xl text-primaryWhite font-semibold">
            Services & Offerings
          </h3>
          <div className=" w-[100%] flex flex-wrap gap-5 gap-y-5 justify-center items-center">
            {renderedServicesCards}
          </div>
        </div>
      </div>

      {/* Services Contact Section */}

      <div className=" w-[90%] flex flex-col lg:flex-row justify-between items-start mt-[50px] gap-y-10 ">
        <div className=" lg:w-[40%] flex flex-col gap-5 text-primaryWhite text-left text-lg">
          <p>
            A VC Funding is a form of investment fund that makes investments in
            early-stage startup companies with high return potential but
            significant risk. A venture capital firm manages the fund, and the
            investors are typically institutions or high-net-worth individuals.
          </p>
          <p>
            As your firm expands, you may begin to wonder if it's time to seek
            your own investment to help you expand, based on all of the Silicon
            Valley stories you've heard. There are a variety of ways to receive
            finance, but working with a venture capital fund organization may be
            precisely what your business needs to move forward.
          </p>
          <p>
            Impulse Global LLC are an equity funding and VC funding India
            services provider. The firm also focuses on growth and strategic
            advisory, which helps businesses get ready for investment and
            scale-up.
          </p>
          <br />
          <PrimaryBtn link={internalLinks.contact}>Contact Us</PrimaryBtn>
        </div>
        <div className=" sm:w-[70%] lg:w-[48%] flex place-self-center ">
          <img
            className=" w-[100%] rounded-lg"
            src={ServicesContactMainImg}
            alt="Contact"
          />
        </div>
      </div>

      <CorporatePartnersSec
        heading="Our Partners"
        desc=""
        logos={PartnersLogosImg}
      />
      <FooterCta />
    </div>
  );
}

export default Services;
