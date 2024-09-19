import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ClientTestimonialCard from "../ClientTestimonialCard/ClientTestimonialCard";

import ClientTestimonialImg1 from "../../Assets/ClientTestimonial/ClientTestimonialImg1.jpeg";

import testimonialData from "./ClientsTestimonialData";

import "./ClientsTestimonialShowcase.css";

function ClientsTestimonialShowcase() {
  const data = {
    clientName: "Clay Johnson",
    clientDes: "Business Owner at Wax Inc",
    clientMessage:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,",
    clientImg: ClientTestimonialImg1,
  };
  return (
    <div className=" flex justify-center items-center w-full py-10 bg-gradient-to-t from-primaryHighlight to-primaryBgDark to-95%">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-[90vw] bg-transparent flex justify-center items-center"
      >
        {testimonialData.map((data, index) => (
          <SwiperSlide key={index} className=" w-[60vw] p-0 mb-16">
            <ClientTestimonialCard key={index} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientsTestimonialShowcase;
