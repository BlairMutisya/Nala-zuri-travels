import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";
import { Pagination, Autoplay } from "swiper";


const Testimonials = () => {
  return (
    <section className="testimonials">
      {/* <h2 className="text-center text-red-600 font-bold text-2xl mb-4">
        Our Guest Testimonials
      </h2> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <blockquote className="text-center">
            Traveling with Nalazuri was an absolute delight! From the moment we
            booked, everything was perfectly organized, and the team went above
            and beyond to ensure our trip was unforgettable.
            <cite className="block mt-4 font-bold">Emily Carter</cite>
            <cite2>Wildlife safari 2024</cite2>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="text-center">
            It's impossible to watch a sunset and not dream of Africa.
            <cite className="block mt-4 font-bold">Piper Mackay</cite>
            <cite2>Wildlife safari 2024</cite2>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="text-center">
            The world is a book, and those who do not travel read only one page.
            <cite className="block mt-4 font-bold">
              Kenya Safari Enthusiast
            </cite>
            <cite2>Wildlife safari 2024</cite2>
          </blockquote>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
