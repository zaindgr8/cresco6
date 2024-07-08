"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaLocationArrow, FaLocationPin, FaPhone } from "react-icons/fa6";
import Image from "next/image";
FaLocationPin;

// const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
// const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/amenities/pool.jpg"
              className=" object-cover"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className="text-lg font-bold">Infinity Pool</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            The neat and clean waters of Palm Jumeirah, when contracted into a
            luxurious swimming pool at Azizi Mina, take all your exhaustion of
            the day and allow you to have a freshening feel. <br />
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/amenities/beach.jpg"
              className=" object-cover"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className="text-lg font-bold">Private Beach Access</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            Azizi Mina cares for its residents, and that’s the reason we have a
            private beach dedicated to only the residents of Azizi Mina. Being a
            perfect place for water activities, it allows you to relax and your
            kids to play with nature.
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/amenities/fitness.jpg"
              className=" object-cover"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className="text-lg font-bold">
                Fitness, SPA, and Wellness Centers
              </span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            For those handsome males who want to maintain their muscle mass, we
            have a featured and fully-equipped gymnasium, while the beautiful
            ladies can take advantage of rejuvenating treatments at the on-site
            spa and wellness centers.
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/amenities/garden.jpg"
              className=" object-cover"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center justify-center flex-col">
          <h5 className="mt-3 mb-1">
            <span className="text-lg font-bold">Nature-Filled Gardens</span>
          </h5>
          <div className="flex items-center gap-x-2">
            The lush greenery, blowing winds of Palm Jumeirah, and extraordinary
            walking paths give you a chance to feel nature at Azizi Mina.
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default Carousel;
