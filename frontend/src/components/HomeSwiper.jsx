import { Carousel } from "react-responsive-3d-carousel";

import {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
} from "../assets/images/index";

function HomeSwiper() {
  return (
    <div className="home-swiper">
      <img
        src={portfolio1}
        alt="example-image-1"
        className="home-swiper-image-1"
      />
      <img
        src={portfolio2}
        alt="example-image-1"
        className="home-swiper-image-2"
      />
      <img
        src={portfolio3}
        alt="example-image-1"
        className="home-swiper-image-3"
      />
      <img
        src={portfolio4}
        alt="example-image-1"
        className="home-swiper-image-4"
      />
      <img
        src={portfolio5}
        alt="example-image-1"
        className="home-swiper-image-5"
      />
      {/* <img
        src={portfolio6}
        alt="example-image-1"
        className="home-swiper-image-6"
      /> */}
      <img
        src={portfolio7}
        alt="example-image-1"
        className="home-swiper-image-7"
      />
      <img
        src={portfolio8}
        alt="example-image-1"
        className="home-swiper-image-8"
      />
      <img
        src={portfolio9}
        alt="example-image-1"
        className="home-swiper-image-9"
      />
    </div>
  );
}

export default HomeSwiper;
