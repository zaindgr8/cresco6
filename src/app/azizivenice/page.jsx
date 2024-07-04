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
  "What kind of properties are available at Azizi Venice?",
  "What amenities are included at Azizi Venice?",
  " Is Azizi Venice a good investment opportunity?",
  "When will Azizi Venice be completed and how can I learn more?",
  "How close is Azizi Venice to key Dubai locations?",
];

const answers = [
  // Replace with your answers
  "Azizi Venice offers a variety of residential options, including studios, one, two, and three-bedroom apartments, waterfront apartments, and even waterfront villas.",
  "The development boasts a wide range of amenities, including:Retail and dining options like cafes, restaurants, and boutique shops. Fitness facilities like gyms and swimming pools Relaxation areas with parks and green spaces. Waterfront features like a promenade and an 18-km lagoon.Community spaces with BBQ areas, playgrounds, and clubhouses.Security features with 24/7 security and concierge services.",
  "With its prime location, world-class amenities, and growing demand, Azizi Venice is considered a promising investment opportunity for long-term growth and rental income.",
  "The project is expected to be finished in 2026. You can contact Azizi Developments to schedule a visit or learn more about available properties and investment opportunities.",
  "The development enjoys a central location in Meydan One, offering easy access to various Dubai hotspots:- Dubai Mall: A short drive away for extensive shopping and entertainment. Dubai Creek: Close by for a cultural and scenic experience. Business Bay: Convenient for business professionals with a quick commute. Dubai International Airport: Offers easy access for frequent travelers.",
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
          src="/assets/img/azizi/venice-cover-main.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  A Venetian Oasis in Dubai
                </div>
                <span className="vr" />
                <div>Located at Dubai South</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">AZIZI VENICE</h1>
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
                        <span className="font-bold text-xl">ABOUT VENICE</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    Welcome to Azizi Venice – where your residence dream meets
                    with peace, charm, beauty, and luxurious lifestyle.
                    Beautiful views, peace-showering waterways, a luxurious
                    lifestyle, and a good climatic environment – whatever you
                    can imagine, Azizi Venice brings you to Meydan One, a
                    vibrant district of Dubai. <br />
                    <br />
                    This AED 30 billion project is set to be completed in 2026.
                    It includes 100 mid-sized apartment buildings, 69 waterfront
                    apartments, and 261 waterfront villas. Residents will enjoy
                    an 18 km lagoon with a depth of 1.5 meters, featuring sweet
                    water and artificial waves, providing a seaside experience
                    right at their doorstep. Azizi Venice is designed to attract
                    residents, visitors, and tourists alike.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/azizi/venice-cover.jpg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Azizi Venice , Dubai South
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
              Azizi Venice is located in South Dubai, right next to Al Maktoum
              International Airport, offering excellent connectivity and easy
              access to various facilities and services. This waterfront
              community includes a mix of villas, mansions, and apartments,
              making it an ideal place for different lifestyles.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>5 Minutes from Metro Station</li>
              <li>7 Minutes from Al Makhtoum Airport</li>
              <li>15 Minutes from Palm Jebel Ali</li>
              <li>20 Minutes from IMG Worlds of Adventure</li>
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
                          EXCEPTIONAL AMENITIES & WORLD CLASS FACILITIES
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    At Azizi Venice, we believe in offering more than just a
                    home. Our world-class amenities are designed to enhance your
                    lifestyle. Azizi Venice will continue to evolve with the
                    addition of more amenities and facilities throughout time.
                    We plan to add more facilities, such as a shopping mall with
                    a variety of items available and healthcare facilities. In
                    addition to that, Azizi Developments aims to introduce
                    sports facilities, including basketball and tennis courts,
                    to facilitate communication between the residents, allowing
                    them to create memorable entertaining moments.
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
                    Comunity Living & Modern Infrastuctrue
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
                  Anyone who resides at Azizi Venice feels like a part of their
                  community. Along with a luxurious lifestyle, Azizi Venice can
                  be your ideal residence if you want to make new friends and
                  relax in a peaceful environment. From lively neighborhood
                  events to peaceful moments by the canal, life at Azizi Venice
                  is rich with experiences.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    <b>The Boulevard:</b> The 700-meter boulevard is expected to
                    become a major attraction in Dubai. It features a retail
                    market, making it convenient for residents to get everything
                    they need with ease.
                  </li>
                  <li>
                    <b> Cultural Center:</b> Azizi Venice also includes a
                    1,500-seat multi-purpose cultural center or opera house,
                    which will be Dubai's second opera house. If you want to
                    enjoy regular comedy shows and theater performances, or even
                    host your own events, such as wedding ceremonies, Azizi
                    Venice has the facilities you are looking for.
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
                  <span className="font-bold text-xl">WHY AZIZI VENICE</span>
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
                  High Return On Investment
                </h2>
                <p className="mb-4">
                  The Azizi Venice project is set to be ready by 2026, and it’s
                  currently being viewed as one of the best investment
                  opportunities for entrepreneurs and investors. Due to having
                  world-class amenities and facilities, the demand for
                  residences at Azizi Venice is increasing with each passing
                  day, week, and month. If you are looking to invest your
                  capital, this project can be the ideal one for you, as it
                  offers excellent potential for long-term growth and rental
                  income.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Your Dream Home Awaits
                </h2>
                <p className="mb-4">
                  Ready to experience luxury living in the core of residential
                  locations as well as business hubs of Dubai? Contact us today
                  to learn more about Azizi Venice and schedule a visit. Your
                  dream home is just a call away.
                </p>
                <hr className="mt-3 mb-3" />
              
              </div>
            </div>
          </div>

          {/* /.End Aspects */}
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
                  Azizi Venice:
                  <br /> Your Questions Answered
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Here, we've compiled a list of frequently asked questions to
                  guide you through Azizi Venice. <br /> If you can't find the
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
