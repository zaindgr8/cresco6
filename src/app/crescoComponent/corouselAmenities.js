"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaLocationArrow, FaLocationPin, FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";
import localFont from "next/font/local";
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
              src="/assets/img/azizi/dining.jpg"
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
              <span className="text-lg font-bold">Retail and Dining</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            Azizi Venice has a vibrant street dedicated to charming cafes,
            gourmet restaurants, and boutique shops. These facilities will let
            you enjoy a variety of dining options and unique shopping
            experiences right in your building. <br/>
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
              src="/assets/img/azizi/fitness.jpg"
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
              <span className="text-lg font-bold">Fitness and Recreation</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            We take care of your diverse preferences, and that’s the reason this
            building has a space dedicated to state-of-the-art fitness centers,
            refreshing swimming pools, and peaceful wellness areas.
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
              src="/assets/img/azizi/parks.jpg"
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
              <span className="text-lg font-bold">Parks and Green Spaces</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            With decent and mind-refreshing green gardens available right in the
            building, you and your family can have a peaceful walk while
            enjoying nature, allowing you to get a peaceful retreat from the
            hustle and bustle of city life.
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
              src="/assets/img/azizi/waterfront.jpg"
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
            <span className="text-lg font-bold">Waterfront Living</span>
          </h5>
          <div className="flex items-center gap-x-2">
            Enjoy your free time in our beautifully designed waterfront
            promenade along the Dubai Canal. It is particularly ideal for
            relaxing walks and outdoor activities, adding a unique charm to your
            family as well as the whole community.
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
              src="/assets/img/azizi/community.jpg"
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
            <span className="text-lg font-bold">Community Spaces</span>
          </h5>
          <div className="flex items-center gap-x-2">
            Azizi Venice features BBQ areas, playgrounds, and community clubs to
            help you connect with your friends and family. These spaces remain
            open day and night, allowing you to have quick snacks as well as
            entertaining activities.
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
              src="/assets/img/azizi/security.jpg"
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
            <span className="text-lg font-bold">24/7 Security</span>
          </h5>
          <div className="flex items-center gap-x-2">
            Safety and security are one of our top priorities. We have
            round-the-clock security systems and concierge services to help you
            have a peaceful, secure, and risk-free environment at Azizi Venice.
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default Carousel;
