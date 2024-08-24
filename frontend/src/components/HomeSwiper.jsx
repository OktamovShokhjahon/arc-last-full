import { Carousel } from "react-responsive-3d-carousel";
import { NavLink } from "react-router-dom";

import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio7,
  portfolio8,
  portfolio9,
} from "../assets/images/index";

function HomeSwiper() {
  return (
    <>
      <div className="home-swiper">
        <div className="home-swiper-image-1-container home-swiper-image-container">
          <img
            src={portfolio1}
            alt="example-image-1"
            className="home-swiper-image-1"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-2-container home-swiper-image-container">
          <img
            src={portfolio2}
            alt="example-image-1"
            className="home-swiper-image-2"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-3-container home-swiper-image-container">
          <img
            src={portfolio3}
            alt="example-image-1"
            className="home-swiper-image-3"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-4-container home-swiper-image-container">
          <img
            src={portfolio4}
            alt="example-image-1"
            className="home-swiper-image-4"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-5-container home-swiper-image-container">
          <img
            src={portfolio5}
            alt="example-image-1"
            className="home-swiper-image-5"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-7-container home-swiper-image-container">
          <img
            src={portfolio7}
            alt="example-image-1"
            className="home-swiper-image-7"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-8-container home-swiper-image-container">
          <img
            src={portfolio8}
            alt="example-image-1"
            className="home-swiper-image-8"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>
        <div className="home-swiper-image-9-container home-swiper-image-container">
          <img
            src={portfolio9}
            alt="example-image-1"
            className="home-swiper-image-9"
          />

          <NavLink to={"/projects"}>Batafsil</NavLink>
        </div>

        <marquee
          className="home-swiper-marquee"
          behavior=""
          direction=""
          scrollamount="22"
        >
          <h1>PROJECTS</h1>
        </marquee>
      </div>
    </>
  );
}

export default HomeSwiper;
