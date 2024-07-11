"use client";
import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Link from "next/link";
import Corousal from "../crescoComponent/corousalEllingtonP";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const questions = [
  // Replace with your questions
  "What makes Ellington Properties' homes stand out in terms of construction quality?",
  "Does Ellington Properties offer customization options for residences?",
  "What are the typical timelines for project completion and handover for Ellington Properties' developments?",
  "What financing options does Ellington Properties offer for potential buyers?",
  "What are the benefits of choosing an Ellington Properties' residence in a specific location like Downtown Dubai or Palm Jumeirah?",
];

const answers = [
  // Replace with your answers
  "Ellington Properties prioritizes exceptional quality using premium materials and rigorous construction standards. We go beyond the basics with advanced building materials and a multi-tiered quality control process.",
  "Yes, depending on the project and stage. Options might include interior finishes and smart home technology packages.",
  "We're committed to timely delivery with specific timelines in the sales agreement. Expect regular updates and on-time handover (or minimal delays).",
  "We offer flexible financing solutions: in-house financing, partnerships with lenders, and connections to financial advisors.",
  "Prime locations offer exceptional benefits. Downtown Dubai: vibrant city life and amenities. Palm Jumeirah: beachfront living, luxury, and prestige. All locations boast potential property value appreciation and cater to specific lifestyles.",
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
          src="/assets/img/azizi/7.jpeg"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0 left-0"
        />
        <div className="container position-relative z-1">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-17 gap-2 hstack justify-content-center mb-1 text-capitalize">
                <div className="text-white fw-medium">
                  Luxurious and Distinctive Developer
                </div>
                <span className="vr" />
                <div>Established in 2014</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                Ellington Properties
              </h1>
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
                        <span className="font-bold text-xl">ABOUT US</span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="entry-content">
                  <p className="mt-2">
                    Founded in 2014, Ellington Properties has earned a good
                    reputation in the real estate industry of Dubai by
                    constructing high-quality and beautiful homes in the prime
                    locations of various cities. The homes we create prove to be
                    luxurious, filled with stunning color combinations and
                    beautiful views of different sceneries. To meet the diverse
                    needs of the residents of Dubai, we personalize our plans to
                    design homes just how the clients want, with a strict focus
                    on elegant designs and durable architecture.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/ellington/robert.jpg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      Robert D. Booth , CEO , Ellington Properties
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
              <span className="font-bold text-xl">OUR VISION</span>
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
              src="/assets/img/ellington/vision.jpg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              We believe in partnering with our customers – a partnership that
              never ends, even after we hand over the keys to you. Clear
              communication, timely delivery, and respect for your preferences
              help us stand out among real estate giants in Dubai. Paying
              attention to what we are building, including the designs,
              architecture, colors, and views of the homes, and ensuring the
              smooth construction process is what Ellington Properties believes
              to work on most. More than that, we provide you with warranties to
              demonstrate our long-lasting commitment to the quality of our
              construction projects. We are on a mission to transform dream
              homes into reality.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                To redefine luxury living in Dubai by creating homes that
                seamlessly blend exquisite design
              </li>
              <li>
                To become the leading purveyor of exceptional living experiences
                in Dubai.
              </li>
              <li>
                To elevate Dubai's real estate landscape by crafting iconic and
                timeless residential communities.
              </li>
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
                          OUR NOTEABLE PROJECTS
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    Ellington Properties has changed the way Dubai’s real estate
                    market used to be. We have constructed beautiful homes at
                    prime locations in Dubai while keeping the diverse needs and
                    preferences of Dubai’s residents.
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
                  <span className="font-bold text-xl">What we offer?</span>
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
                  We realize that everyone has their own needs and preferences,
                  and that’s the reason we offer a variety of residence options.
                  You can choose from our long list of one-bedroom and
                  two-bedroom apartments, villas, and studios – whatever you
                  want, we already have it on our list at Ellington Properties.
                  On top of that, all of our projects are situated in areas
                  where everyone dreams to reside, such as Palm Jumeirah,
                  Mohammed Bin Rashid City (MBR), Downtown Dubai, and Jumeirah
                  Village Circle (JVC).
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>Diverse Selection</li>
                  <li>Dream Locations</li>
                  <li>Something for Everyone</li>
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/img/ellington/offer.jpg" // Assuming assets folder is at root
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
                  <span className="font-bold text-xl">
                    Why Ellington Properties
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
                      src="/assets/img/ellington/e1.jpg"
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
                        src="/assets/img/ellington/e2.jpg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <Image
                        width={500}
                        height={500}
                        src="/assets/img/ellington/e3.jpg"
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
                <h2 className="mb-2 text-lg font-bold">Leadership</h2>
                <p className="mb-4">
                  Robert D. Booth, the man behind the idea of all the innovative
                  approaches at Ellington Properties, believes in a team of
                  working professionals who work to make a living and help
                  others create their dream homes. Under his leadership, we have
                  developed numerous high-end projects with attractive looks, a
                  peaceful environment, and an elegant feel of residence. Robert
                  D. Booth, formerly with Emaar’s Real Estate Division, has the
                  remarkable skills to bring dream homes to life.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  We’re a Developer with a Global Perspective
                </h2>
                <p className="mb-4">
                  Ellington Properties is more than just a constructor or a
                  developer for your home. We design your homes with all our
                  hearts, giving attention to every step of the construction
                  process. From the beginning of the construction with the
                  initial ideas to the final touches of the house and handing
                  over the keys to you, we keep all the processes transparent
                  and accountable. Moreover, Ellington Properties is not a
                  company with the best designs and architectural strategies
                  only, but we keep all our services budget-friendly, allowing a
                  diverse client network to get their dream home with us.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Current and Future Projects
                </h2>
                <p className="mb-4">
                  As of 2023, Ellington Properties has completed numerous luxury
                  projects in sought-after locations such as Downtown, MBR City,
                  Palm Jumeirah, and Emirates Hills. Our recent developments
                  include an ultra-luxury apartment on Palm Jumeirah and a
                  striking twin tower project in Jumeirah Lake Towers.
                  Additionally, Ellington Properties has high aspirations with
                  strong ambitions to develop more interesting, durable,
                  fantastic, and beautiful projects in the near future.
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
              <span className="font-bold text-xl">What makes us unique?</span>
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
              src="/assets/img/ellington/unique.jpg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                Focus on Design and Quality: Our team consists of professionals
                with years of experience and dedication in the real estate
                industry.
              </li>
              <li>
                Experienced Team: Ellington Properties has a reputation for
                delivering projects on time, ensuring higher customer
                satisfaction.
              </li>
              <li>
                Prime Locations: Our projects are located in some of Dubai's
                most desirable areas, such as Downtown Dubai, Palm Jumeirah, MBR
                City, and JVC.
              </li>
              <li>
                Trusted Reputation: We have built a strong reputation for
                reliability and excellence in the Dubai real estate market.
              </li>
              <li>
                Comprehensive Warranty: Ellington Properties offers a
                comprehensive two-year warranty on homes for added peace of
                mind.
              </li>
            </ul>
          </div>
        </div>
      </div>

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
                        <span className="font-bold text-xl">
                          Your Dream Home Awaits
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    So, this is the opportunity for you to turn your dreams into
                    reality. Ellington Properties is here to make dream homes
                    for you, having elegant looks, a peaceful environment, and
                    prime locations. We’re always committed to delivering
                    high-quality projects based on what our client’s needs and
                    preferences tell us. Contact us today to grab this
                    opportunity to find your dream home with Ellington
                    Properties.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
                      src="/assets/img/ellington/contact.jpg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
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
                  Unveiling Luxury Living:
                  <br /> Your Ellington Properties FAQs
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Ellington Properties is dedicated to crafting exceptional
                  living experiences in Dubai. We understand you might have
                  questions about our residences, the buying process, and the
                  Ellington lifestyle. Explore our comprehensive FAQs to find
                  answers and unlock a world of luxury living in Dubai.
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
                <span className="font-bold text-xl">FAQ's</span>
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
