"use client";
import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Link from "next/link";
import Corousal from "../crescoComponent/corouselReviera";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../crescoComponent/azizi-rivera_map"

const questions = [
  // Replace with your questions
  "What types of properties are available in Azizi Riviera?",
  "Is Azizi Riviera completed?",
  "What are some of the amenities offered at Azizi Riviera?",
  "Is Azizi Riviera freehold?",
  "Where is Azizi Riviera located?",
];

const answers = [
  // Replace with your answers
  "Azizi Riviera offers studios, one to three-bedroom apartments, with varying sizes ",
  "No, Azizi Riviera is a multi-phase project. Phases 1 and 2 are nearing completion, while phases 3 and 4 are under construction with a target completion date of Q3 and Q4 2024 respectively",
  "The development features a variety of amenities including swimming pools, gardens, play areas, sports facilities, and entertainment areas ",
  "Yes, Azizi Riviera is a freehold development, meaning you will have complete ownership of your property",
  "Azizi Riviera is situated in Meydan City, Dubai, offering easy access to the Meydan Racecourse and other leisure facilities",
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
          src="/assets/img/azizi/a-riveraa.jpeg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  Style Meets Modern Comfort
                </div>
                <span className="vr" />
                <div>Located at Meydan One</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">AZIZI RIVERA</h1>
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
                        <span className="font-bold text-xl">ABOUT RIVERA</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    Azizi Riviera stands as a premier residential community
                    developed by Azizi Developments in Meydan District One,
                    Mohammed Bin Rashid City (MBR City), Dubai. It seamlessly
                    combines French Mediterranean design with contemporary
                    architecture, offering an ideal place to live and find
                    property for sale in Dubai.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/azizi/ar1.jpeg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Azizi Rivera , Meydan District One, MBR City
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
              Situated in Meydan, Azizi Riviera enjoys proximity to Meydan
              Racecourse, The Dubai World Cup, and various sports and leisure
              facilities. Its location near Downtown Dubai and Dubai
              International Airport makes it a convenient choice for those
              seeking property for sale in Dubai.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>10 Minutes from Sheikh Zayed Road</li>
              <li>10 Minutes from Downtown Dubai</li>
              <li>15 Minutes from Dubai Internation Airport DXB</li>
              <li>22 Minutes from Palm Jumeira</li>
              <li>1 Minute from Al Khail Road</li>
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
                          AZIZI RIVIERA - FEATURED PROPERTIES
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    The Azizi Riviera in Dubai is a multi-phase development with
                    a Mediterranean theme offering thousands of residences,{" "}
                    <br /> with phases 1 and 2 nearing completion and phases 3
                    and 4 progressing towards their Q3 and Q4 2024 completion
                    targets.
                  </p>
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <Corousal />

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">
                    Key Features and Amenities
                  </span>
                </div>
                {/* /. End Subtitle */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="container mx-auto mb-5">
            <div className="flex flex-col md:flex-row overflow-hidden">
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <p className="text-gray-700 mb-4">
                  Azizi Riviera Crows a vibrant retail district, offering
                  dining, and diverse options, and shopping experiences.
                  Residents can enjoy scenic views, community parks, and a
                  relaxed lifestyle. It's an attractive option for property for
                  sale in Dubai.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    Feel of the French Riviera with modern architecture and a
                    focus on Community Living
                  </li>
                  <li>
                    Swimming pools, BBQ areas, zen gardens, yoga zones, pet
                    agility areas, movie lounges, and outdoor chess areas.
                  </li>
                  <li>
                    Residents will have easy access to entertainment and
                    sporting attractions.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/img/azizi/key.jpg" // Assuming assets folder is at root
                  alt="Blog Image"
                  className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Our Future Aspects */}

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">WHY AZIZI RIVIERA</span>
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
                      src="/assets/img/azizi/azizi-why1.jpg"
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
                        src="/assets/img/azizi/azizi-why2.jpg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/img/azizi/azizi-why3.jpg"
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
                  Architecture and Design
                </h2>
                <p className="mb-4">
                  Comprising 69 mid-rise buildings designed to blend
                  respectfully with the surroundings, Azizi Riviera features
                  integrated retail spaces, attractive waterfront views, and
                  lush gardens, creating a tranquil oasis in the bustling city.
                  It's a sought-after destination for property for sale in
                  Dubai.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Residential Options</h2>
                <p className="mb-4">
                  Offering a range of residences including studios, 1-bedroom,
                  and 2-bedroom apartments designed for comfort and style, Azizi
                  Riviera caters to individuals, couples, and families looking
                  for property for sale in Dubai. The homes prioritize safety
                  and practicality.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Commitment to High Quality
                </h2>
                <p className="mb-4">
                  Azizi Developments is committed to maintaining high standards
                  across all its projects. Azizi Riviera exemplifies this
                  commitment through its thoughtful design, quality
                  construction, and attention to detail, ensuring a premium
                  living experience for residents.
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
            <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
              <span className="font-bold text-xl">
                OUR VALUES & FUTURE ASPECTS
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
              <h2 className="mb-2 text-lg font-bold">Our Values</h2>
              <p className="mb-4">
                At Azizi Developments, we uphold values of integrity,
                transparency, and customer-centricity. These values guide our
                approach to creating communities like Azizi Riviera, where every
                resident can feel at home and experience exceptional quality of
                life.
              </p>
              <hr className="mt-3 mb-3" />
              <h2 className="mb-2 text-lg font-bold">
                Future Prospects of Azizi Developments
              </h2>
              <p className="mb-4">
                Looking ahead, Azizi Developments plans to expand its footprint
                in Dubai and explore opportunities in other emerging markets.
                The company aims to introduce more innovative projects that
                cater to evolving lifestyles and preferences, enhancing its
                reputation as a leader in property development.
              </p>
              <hr className="mt-3 mb-3" />
              <h2 className="mb-2 text-lg font-bold">What Makes Us Unique</h2>
              <p className="mb-4">
                Azizi Riviera offers luxurious living in Dubai, blending elegant
                design with modern comforts. As Azizi Developments continues to
                grow, Riviera reflects our dedication to creating exceptional
                homes and property for sale in Dubai, setting new benchmarks for
                community living.
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
                  Azizi Riviera:
                  <br /> Your Questions Answered
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Here, we've compiled a list of frequently asked questions to
                  guide you through Azizi Riviera. <br/> If you can't find the answer
                  you're looking for, feel free to contact us.
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
