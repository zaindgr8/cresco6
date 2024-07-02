"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";
import localFont from "next/font/local";
import Image from "next/image";

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
      1200: {
        items: 4,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/1.jpg"
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
              <span>Mohammad Azam Tariq</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Director
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971521307749
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/2.jpg"
              className=" object-cover  "
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
              <span>Sabrine Touati</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Manager
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971545666510
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}

      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/5.jpg"
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
              <span>Waleed Khan</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Consultant
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971521543532
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/6.jpg"
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
              <span>Doua Reina</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971544834967
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/7.jpg"
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
              <span>Osama Khalifa</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971527608166
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/assets/img/avatar/8.jpg"
              className=" object-cover "
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
              <span>Shifa</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971525347803
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/achref.jpeg"
              className=" "
              alt="Gulraiz"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span>Achref</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971 58 138 4010
          </div>
        </div>
      </div>

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/omar.jpg"
              className=" "
              alt="Omar Akram"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Omar Akram</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Consultant
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971987654321
          </div>
        </div>
      </div> */}

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/achref.jpg"
              className=" "
              alt="Achref"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Achref</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Manager
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971654321987
          </div>
        </div>
      </div> */}

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/hossam.jpg"
              className=" "
              alt="Hossam"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Hossam</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Consultant
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971321654987
          </div>
        </div>
      </div> */}

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/gida.jpg"
              className=" "
              alt="Gida"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Gida</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971951753852
          </div>
        </div>
      </div> */}

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/jasmine.jpg"
              className=" "
              alt="Jasmine"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Jasmine</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Consultant
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971951357852
          </div>
        </div>
      </div> */}

      {/* <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[65vh] overflow-hidden">
            <img
              src="assets/img/avatar/ismail.jpg"
              className=" "
              alt="Ismail"
            />
          </div>
        </div>
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span >Ismail</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971951753123
          </div>
        </div>
      </div> */}
    </OwlCarousel>
  );
};
export default Carousel;
