"use client"
import Layout from "@/components/Layout";
import Carousel from "@/components/corousel";
import Link from "next/link";
import Corousal from "../crescoComponent/corousalProjects"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const questions = [
  // Replace with your questions
  "What types of properties does Azizi Developments offer in Dubai?",
  "How does Azizi Developments ensure the quality and sustainability of its projects?",
  "What are some of the key projects by Azizi Developments in Dubai?",
  "How does Azizi Developments cater to the needs of its customers?",
  "What are the future plans of Azizi Developments?",
];

const answers = [
  // Replace with your answers
  "The write-up mentions Azizi Riviera (luxurious waterfront living in Meydan One), Azizi Mina (beachfront apartments and penthouses on Palm Jumeirah), and Azizi Aliyah (modern apartments near Dubai Healthcare City).",
  "The company integrates eco-friendly practices like solar panels and advanced waste management systems to reduce their environmental impact.",
  "They offer personalized services, flexible payment plans, and prioritize client needs, leading to high customer satisfaction and loyalty.",
  "Yes, they participate in CSR activities like sponsoring local events and supporting educational programs. The chairman, Mirwais Azizi, has also donated to healthcare facilities in Afghanistan.",
  "They aim to:Expand within Dubai and explore new markets. Launch more innovative projects for modern urban living.Open offices internationally (London, Europe, US, Canada). Venture into hospitality with 50 five-star hotels and one seven-star hotel. Complete 10,000 units by 2025 and 31,000 units by 2028."
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
                  thousands of residential and commercial properties delivered
                </div>
                <span className="vr" />
                <div>over 17 years of experience</div>
              </div>
              {/* /.End Meta Info */}
              <h1 className="fw-semibold display-4 text-white">
                AZIZI DEVELOPMENT
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
                    Mirwais Azizi founded Azizi Developments in 2007 and it has
                    since established itself as Dubai's best real estate
                    developer. His nationality is Afghan. He began his
                    entrepreneurial path in Afghanistan, then moved on to
                    Central Asia and Eastern Europe before arriving in Dubai.
                    Azizi has had a considerable impact on Dubai's real estate
                    market by delivering a diversified portfolio of residential
                    and commercial properties. It is known for its devotion to
                    quality, prompt delivery, and innovative design.
                  </p>

                  <figure className="caption aligncenter w-[500px]">
                    <Image
  
                      src="/assets/img/azizi/owner.jpeg"
                      className="img-fluid rounded-3 "
                      alt=""
                      width={500}
                      height={500}
                    />
                    <figcaption className="caption-text fs-11 text-center text-muted text-uppercase mt-2">
                      MIRWAIS AZIZI , CHAIRMAN, AZIZI DEVELOPMENTS
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
              src="/assets/img/azizi/10.jpeg" // Assuming assets folder is at root
              alt="Blog Image"
              className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
            />
          </div>
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <p className="text-gray-700 mb-4">
              Mirwais Azizi's mission for Azizi Developments was to design
              high-quality living environments that met the different needs of
              Dubai's citizens. The company's strategy is upon improving the
              lifestyles of its consumers through creative, sustainable
              development processes and a focus on customer happiness. Over the
              years, Azizi has grown from a modest startup into a powerhouse in
              the real estate industry, with projects that epitomize luxury. We
              have delivered thousands of homes to local and international
              investors and end users.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
              <li>
                We have the privilege to build the second highest tall
                skyscraper in Dubai.
              </li>
              <li>
                Azizi homes are the most sought after homes in Dubai made for
                residential and commercial purposes.
              </li>
              <li>
                Azizi Developments goes beyond construction, crafting coveted
                living spaces that cater to the evolving needs of Dubai's
                residents
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
                          OUR KEY PROJECTS
                        </span>
                      </div>
                      {/* /. End Subtitle */}
                    </div>
                    {/*/. End Section Header */}
                  </div>
                </div>

                <div className="sub-title fs-16">
                  <p>
                    Azizi Developments boasts an extensive portfolio of projects
                    across prime locations in Dubai, <br />
                    including Al Furjan, Palm Jumeirah, Dubai Healthcare City,
                    and Meydan. Some standout projects include:
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
                    OUR FUTURE PROSPECTS
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
                  Looking ahead, Azizi Developments plans to continue its
                  expansion within Dubai and explore opportunities in other
                  emerging markets. The company aims to introduce more
                  innovative projects that cater to the evolving needs of modern
                  urban living. The company plans to launch offices in different
                  parts of the world. We have a goal to open an office in London
                  to expand its business and then after this they hope to launch
                  offices in Europe, US and Canada.
                </p>
                <ul className="list-checked mb-9 mb-md-10 ps-0 text-gray-800">
                  <li>
                    We plan to venture into hospitality. Fifty 5 star hotels and
                    one 7 star hotel are in future plans.
                  </li>
                  <li>
                    10,000 units are currently under construction which will be
                    completed by 2025
                  </li>
                  <li>
                    31,000 units worth billions of US dollars are in plans to be
                    completed by 2028.
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <Image
                width={500}
                height={500}
                  src="/assets/img/azizi/10.jpeg" // Assuming assets folder is at root
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
                    WHY AZIZI DEVELOPMENTS
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
                      src="/assets/img/azizi/10.jpeg"
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
                        src="/assets/img/azizi/8.jpeg"
                        className="img-fluid rounded-3"
                        alt=""
                      />
                    </div>
                    {/* Image */}
                    <div className="col-12">
                      <Image
                      width={500}
                      height={500}
                        src="/assets/img/azizi/11.jpeg"
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
                  Commitment to High Quality
                </h2>
                <p className="mb-4">
                  Azizi Developments is dedicated to maintaining the highest
                  quality standards in all its projects. Additionally, Azizi
                  emphasizes sustainability by integrating eco-friendly
                  practices and energy-efficient technologies into its
                  buildings, such as solar panels and advanced waste management
                  systems.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Customer-Centric Approach
                </h2>
                <p className="mb-4">
                  A key factor behind Azizi Developments' success is its
                  customer-centric approach. The company prioritizes the needs
                  and preferences of its clients, offering personalized services
                  and flexible payment plans. This dedication to customer
                  satisfaction has earned Azizi a loyal client base and numerous
                  industry awards.
                </p>
                <hr className="mt-3 mb-3" />
                <h2 className="mb-2 text-lg font-bold">
                  Community and Social Responsibility
                </h2>
                <p className="mb-4">
                  Azizi is committed to giving back to the community. The
                  company engages in various CSR initiatives, including
                  sponsoring local events and supporting educational programs.
                  The chairman, Mirwais Azizi donated millions of dollars to
                  establish a cancer hospital, maternity center and dialysis
                  center in Afghanistan, where Azizi belongs to.
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
                  Azizi Developments: <br /> Guide to Luxury Living in Dubai
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Discover why Azizi Developments is a leading name in Dubai's
                  real estate landscape. We offer a diverse portfolio <br /> of
                  luxury properties, innovative designs, and a commitment to
                  sustainability. Explore our FAQs to learn more
                  <br /> about our approach and the benefits of owning an Azizi
                  property in Dubai.
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
                  architectural designs, or sustainable urban developments, <br/>
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