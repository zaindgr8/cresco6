"use client";
import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Corousal from "../crescoComponent/MinaAmenities";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Map from "../crescoComponent/azizi-rivera_map";

const questions = [
  // Replace with your questions
  "What type of property Aziz Mina is?",
  "What amenities does Azizi Mina offer?",
  "Does Azizi Mina have a pool?",
  "How close is Azizi Mina to the beach?",
  "Is Azizi Mina a good investment?",
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
          src="/assets/img/azizi/mina-cover.jpg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">Live The Luxury</div>
                <span className="vr" />
                <div>Located at Palm Jumeira</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">AZIZI MINA</h1>
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
                        <span className="font-bold text-xl">ABOUT MINA</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    Azizi Mina, an example of luxury living with modern designs
                    and endless amenities available, is situated in the core of
                    Palm Jumeirah, one of Dubai’s most sought-after locations.
                    Azizi Developments has the privilege to offer such an
                    extraordinary opportunity to own your houses nowhere but in
                    Palm Jumeirah, in the Azizi Mina.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/azizi/mina-1.webp"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Azizi Mina , Palm Jumeira
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
              Situated in Palm Jumeirah, Azizi Mina connects you to most of
              Dubai’s strategic places. The Arabian Gulf, Dubai Marina, Mall of
              the Emirates, and most of Dubai’s attractive places are just 2 to
              5 kilometers away from Azizi Mina. Guess what? The iconic Burj
              Khalifa and The Dubai Mall are just minutes away, so close that
              you can see them from your balcony or the terrace. For business
              persons, Azizi Mina proves to be a strategic location as it’s
              close to airports, railway stations, and key marketplaces.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>23 minutes from The View at the Palm</li>
              <li>27 minutes from Aquaventure World</li>
              <li>32 minutes from Jumeirah Boardwalk</li>
              <li>22 Minutes from Al Ittihad Park</li>
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

          {/* Our Future Aspects */}

          <div className="row">
            <div className="col-md-10 offset-md-1" data-aos="">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-3 mt-5">
                {/* Start Subtitle */}
                <div className="bg-[#DAB852] d-inline-block  mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                  <span className="font-bold text-xl">
                    What Makes Azizi Mina Special?
                  </span>
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
                      src="/assets/img/amenities/mina1.jpg"
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
                        src="/assets/img/amenities/mina2.webp"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/img/amenities/mina3.webp"
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
                  Brilliant Architecture
                </h2>
                <p className="mb-4">
                  We bet you get a true elegance and feeling at Azizi Mina only.
                  From clean roadlines, expansive glass windows, and spacious
                  balconies, Azizi Mina allows you to experience natural light
                  and panoramic views. Moreover, the building is structured in a
                  way that makes your moods happy, having the strength of an
                  unimaginable lifetime.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">Luxurious Residences</h2>
                <p className="mb-4">
                  Azizi Mina features beautiful homes of one-, two-, and
                  three-bedroom apartments, penthouses, villas, and much more.
                  All of our residences are constructed with premium materials
                  and finished with high-quality appliances. The open-plan
                  layouts create a sense of space and fluidity, whereas the
                  beautiful interior designs provide you with seamless comfort.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Sustainability & Continuous Innovation
                </h2>
                <p className="mb-4">
                  Azizi Developments is on a mission to keep the environment
                  neat and clean as well as believes in keeping the Earth
                  liveable forever. That’s why we have incorporated the optional
                  as well as included features of energy-efficient systems,
                  water conservation measures, and eco-friendly materials in all
                  of our projects, including Azizi Mina. We feel it our
                  responsibility to contribute to a greener and more sustainable
                  future.
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
              <span className="font-bold text-xl">Secure Your Chance Now!</span>
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
              <p className="mb-4">
                Don’t wait to book your desired dream home at Azizi Rivera,
                situated at the most strategic location of Dubai, The Palm
                Jumeirah, where you are facilitated with all your needed
                amenities. Contact us now to get more information about Azizi
                Mina, and Azizi Developments, and secure your chance to have a
                brilliant home there.
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
                  Azizi Mina:
                  <br /> Your Questions Answered
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Here, we've compiled a list of frequently asked questions to
                  guide you through Azizi Mina. <br /> If you can't find the
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
