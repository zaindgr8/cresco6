"use client";
import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Link from "next/link";
import Corousal from "../crescoComponent/corouselAmenities";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../crescoComponent/azizi-rivera_map";

const questions = [
  // Replace with your questions
  "What kind of apartments does Azizi Aliyah offer?",
  "What amenities are available at Azizi Aliyah?",
  "How close is Azizi Aliyah to major Dubai landmarks?",
  "Is Azizi Aliyah a good location for families and professionals?",
  "Does Azizi Aliyah offer any payment plans?",
];

const answers = [
  // Replace with your answers
  "Azizi Aliyah offers a variety of residences, including studios, one-bedroom, and two-bedroom apartments. Each unit features high-quality finishes, modern fixtures, and a stylish design.",
  "Residents enjoy a range of amenities, including a swimming pool, a fully equipped gym, lush green spaces, 24/7 security, and covered parking.",
  "Azizi Aliyah boasts a prime location.  Downtown Dubai, Burj Khalifa, and Dubai Mall are all within 10 kilometers.  The Dubai International Airport is just 8 kilometers away.",
  "Absolutely!  With its proximity to healthcare facilities, schools, and entertainment options, Azizi Aliyah is ideal for families and professionals seeking a well-rounded lifestyle.",
  "Yes, Azizi Developments understands that affordability is important. They offer a variety of residence options and flexible payment plans to ensure everyone has a chance to own a home at Azizi Aliyah.",
];

export default function BlogDetails() {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const shuffleQuestions = () => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const toggleAnswer = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <Layout>
      {/* Start Page Header */}
      <div className="blog-header position-relative text-white">
        <Image
          layout="fill"
          src="/assets/img/azizi/aliyah-cover.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  New Standards of Urban Life
                </div>
                <span className="vr" />
                <div>Located at Al Jadaf</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">AZIZI ALIYAH</h1>
              {/* /.End of header title */}
              {/* Start Author Info */}

              {/* /.End Author Info */}
            </div>
          </div>
        </div>
      </div>
      {/* /.End Page Header */}
      <div className="">
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-xxl-8">
              <article className="post single-post">
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="fade-down">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center ">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">ABOUT ALIYAH</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    Azizi Aliyah is one of the most luxurious places to reside
                    in Dubai, particularly the health city, Al Jaddaf. Developed
                    by Azizi Developments, one of the leading real estate
                    developers in the UAE, Azizi Aliyah features all the modern
                    values of a residence, i.e., a stress-free environment, an
                    elegant style, and convenient comfort, settling the new
                    standards of residential living in one of the busiest lands
                    in the world.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/azizi/aliya1.jpg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Azizi Aliyah , Al Jadaf
                    </figcaption>
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-2">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">
                Location and Accessibility
              </span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div className="container mx-auto mb-5">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            {/* <Image
              width={500}
              height={500}
              src="/assets/img/azizi/10.jpeg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            /> */}
            <Map />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              With its central location, healthcare access, excellent
              connectivity, and vibrant surroundings, Azizi Aliyah allows you to
              experience the best of Dubai living. Azizi Aliyah boasts a prime
              location in Dubai Healthcare City (DHCC) Phase 2, offering
              residents an unparalleled blend of convenience and urban vibrancy.
              Here's how this address elevates your lifestyle:
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>10 Minutes from Burj Khalifa</li>
              <li>8 Minutes from Dubai Mall</li>
              <li>25 Minutes from Palm Jumeira</li>
              <li>9 Minutes from Dubai Frame</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-2">
        <div className="container pt-2">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Subtitle */}
                <div className="row">
                  <div className="col-md-10 offset-md-1" data-aos="">
                    {/* Start Section Header Title */}
                    <div className="section-header text-center mb-3">
                      {/* Start Subtitle */}
                      <div className="bg-[#DAB852] d-inline-block rounded-pill section-header__subtitle text-capitalize text-gray-900">
                        <span className="font-bold text-xl">
                          AZIZI ALIYAH - AMENITIES & Lifestyle
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    Azizi Aliyah offers a lifestyle that seamlessly blends
                    comfort and convenience. Beyond the building, the vibrant Al
                    Jaddaf community offers a wealth of shops, restaurants, and
                    entertainment, while the serene landscapes and healthcare
                    access of Dubai Healthcare City create a peaceful and
                    healthy environment.
                  </p>
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <Corousal />

          {/* Our Future Aspects */}

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">WHY AZIZI ALIYAH</span>
                </div>
                {/* /. End Subtitle */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="about-text align-items-center g-4 justify-content-between row">
            <div className="col-md-12 col-lg-7">
              <div className="row g-3 g-sm-4 align-items-center">
                {/* Image */}
                <div className="col-6">
                  <div className="position-relative">
                    <div className="line-shape" />
                    <Image
                      width={500}
                      height={500}
                      src="/assets/img/azizi/al1.jpg"
                      className="img-fluid rounded-3 position-relative"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="row g-3 g-sm-4">
                    {/* Image */}
                    <div className="col-12">
                      <Image
                        height={500}
                        width={500}
                        src="/assets/img/azizi/al3.jpg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/img/azizi/al2.jpg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-5 ps-xxl-5">
              <div className="text-block">
                <h2 className="mb-2 text-lg font-bold">
                  Location and Accessibility
                </h2>
                <p className="mb-4">
                  Azizi Aliyah, situated in Al Jaddaf, one of the locations
                  everyone wishes to have a home in, benefits the residents from
                  its strategic location. For medical professionals, Azizi
                  Aliyah stands to be the best choice for their homes due to
                  being at a distance of only few kilometers from the landmarks
                  of Dubai.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Architectural Excellence
                </h2>
                <p className="mb-4">
                  The unique architectural design of Azizi Aliyah has pleased
                  everyone with its sleek lines, expansive glass facades, and
                  elegant interiors. The structure of the building allows the
                  natural light to pass more and a view of the Dubai skyline
                  further enhances the beauty.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Luxurious Residences</h2>
                <p className="mb-4">
                  Azizi Aliyah has a vast variety of residential units,
                  including studio, one-bedroom, and two-bedroom apartments,
                  with each of them designed with close attention to detail,
                  including high-quality finishes, modern fixtures, and premium
                  materials. From the bedrooms to storage spaces and kitchens to
                  bathrooms, everything in all the units features a stylish look
                  and modern appearance.
                </p>
              </div>
            </div>
          </div>

          {/* /.End Aspects */}
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-2">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block mt-3  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">BOOK NOW!</span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div className="container mx-auto mb-5">
        <div className="flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <Image
              width={500}
              height={500}
              src="/assets/img/azizi/future.jpg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="col-md-12 col-lg-5 ps-xxl-5">
            <div className="text-block">
              <p>
                So, just take your phone and call our representatives to book
                your visit to Azizi Aliyah and own a home at a strategic place
                you may never find anywhere else. Azizi Developments hears all
                your needs, requirements, and preferences, and gives you a
                variety of residence options as well as flexibility in payments,
                ensuring that everyone can own a home with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center mb-3 mt-5">
            {/* Start Subtitle */}
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">FAQ's</span>
            </div>
            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div>
        <div className="container py-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Azizi Aliyah:
                  <br /> Your Questions Answered
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Here, we've compiled a list of frequently asked questions to
                  guide you through Azizi Aliyah. <br /> If you can't find the
                  answer you're looking for, feel free to contact us.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 mb-5 max-w-3xl">
        <ul className="list-none space-y-4">
          {questions.map((question, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center justify-between focus:outline-none rounded-lg px-4 py-2 text-left shadow hover:shadow-md ${
                  activeQuestion === index
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-900"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium">{`Q${
                  index + 1
                }: ${question}`}</span>
                <svg
                  className={`h-6 w-6 transform transition duration-200 ease-in-out ${
                    activeQuestion === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === index && (
                <div className="text-base leading-6 mt-2 px-4 pb-4">
                  {answers[index]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Start Articles Section */}

      <div className="py-5 border-top">
        <div className="row">
          <div className="col-md-10 offset-md-1" data-aos="">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-3 mt-5">
              {/* Start Subtitle */}
              <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                <span className="font-bold text-xl">MORE DEVELOPERS</span>
              </div>
              {/* /. End Subtitle */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>

        <div className="container pb-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5">
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Explore more renowned <br /> developers in Dubai
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Whether you're looking for luxury real estate, innovative
                  architectural designs, or sustainable urban developments,{" "}
                  <br />
                  you'll find detailed profiles and project highlights that
                  showcase the excellence and expertise of Dubai's top
                  developers.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      {/* /. End Articles Section */}
    </Layout>
  );
}
