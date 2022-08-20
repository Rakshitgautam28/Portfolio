import React from "react";
import "./Testimonial.css";
import Sachin from "../../assets/Sachin.jpg";
import Supriya from "../../assets/Supriya.jpg";
import Akshat from "../../assets/Akshat.jpg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Sachin,
    name: "Sachin Gautam",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, architecto? Velit sapiente commodi nulla quaerat voluptatibus eaque excepturi, eum itaque earum cumque iste repellendus perspiciatis.",
  },
  {
    avatar: Supriya,
    name: "Supriya Bhutta",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, architecto? Velit sapiente commodi nulla quaerat voluptatibus eaque excepturi, eum itaque earum cumque iste repellendus perspiciatis.",
  },
  {
    avatar: Akshat,
    name: "Akshat Kataria",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, architecto? Velit sapiente commodi nulla quaerat voluptatibus eaque excepturi, eum itaque earum cumque iste repellendus perspiciatis.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
