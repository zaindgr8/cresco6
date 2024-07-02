
import AboutVideoContainer from "@/components/about-video-container";
import ReusableCountUp from "@/components/counter";

import Footer from "@/components/Footer";
import Testimonial1 from "../crescoComponent/Testimonial";
import TSection from "../crescoComponent/TSection";

import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* <FSection /> */}
      {/* Start Main Content */}
      <div className="main-content ">
        <div className="py-5">
          <div className="container py-4">
            <div className="row">
              <div className="col-xl-8 mb-5">
                {/* Start Title */}
                <h1 className="display-4 font-semibold">
                  Redefine luxury living in Dubai
                </h1>
                {/* /.End Title */}
                {/* Start Short Sescription */}
                <p className="fs-17 mb-0">
                  Trust our premium real estate agency to guide you seamlessly
                  through <br /> the process of finding your dream home in
                  Dubai's most sought-after locations.
                </p>
                {/* /.End Short Sescription */}
              </div>
            </div>
            {/* Start Counter */}
            <div className="counter-content_about bg-gray-100 mb-5 rounded-3">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="g-4 justify-content-center row">
                    <div className="col-sm-6 col-xl-3 text-center text-[#DAB852]">
                      <div className="display-4 fw-semibold numscroller  justify-content-center d-flex gap-1">
                        <span className="counter">
                          {" "}
                          <ReusableCountUp
                            separator=""
                            decimals={""}
                            decimal=""
                            start={0}
                            end={2500}
                          />{" "}
                        </span>
                        +
                      </div>
                      <h5 className="mt-3 mb-0">Properties Listed</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center text-[#DAB852]">
                      <div className="display-4 fw-semibold numscroller  justify-content-center d-flex gap-1">
                        <span className="counter">
                          {" "}
                          <ReusableCountUp
                            separator=""
                            decimals={""}
                            decimal=""
                            start={0}
                            end={5500}
                          />{" "}
                        </span>
                        +
                      </div>
                      <h5 className="mt-3 mb-0">Satisfied Clients</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center text-[#DAB852]">
                      <div className="display-4 fw-semibold numscroller justify-content-center d-flex gap-1">
                        <span className="counter">
                          <ReusableCountUp
                            separator=""
                            decimals={1}
                            decimal="."
                            start={0.0}
                            end={6.8}
                          />
                        </span>
                        B +
                      </div>
                      <h5 className="mt-3 mb-0">Total sales since 2023</h5>
                    </div>
                    <div className="col-sm-6 col-xl-3 text-center">
                      <div className="display-4 fw-semibold numscroller text-[#DAB852] justify-content-center d-flex gap-1">
                        <span className="counter">
                          <ReusableCountUp
                            separator=""
                            decimals={""}
                            decimal=""
                            start={0}
                            end={50}
                          />{" "}
                        </span>
                        +
                      </div>
                      <h5 className="mt-3 mb-0">Total Agents</h5>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.End Counter */}
            </div>
            {/* /. End Counter */}
            <div className="about-text align-items-center g-4 justify-content-between row">
              <div className="col-md-12 col-lg-7">
                <div className="row g-3 g-sm-4 align-items-center">
                  {/* Image */}
                  <div className="col-6">
                    <div className="position-relative">
                      <div className="line-shape" />
                      <Image
                        src="assets/img/about/d1.jpg"
                        className=" rounded-3 position-relative"
                        alt=""
                        width={100}
                          height={100}
                          unoptimized
                           layout="responsive"
                      />
                    </div>
                  </div>
                  
                  <div className="col-6">
                    <div className="row g-3 g-sm-4">
                      {/* Image */}
                      <div className="col-12">
                        <Image
                          src="assets/img/about/d2.jpg"
                          className=" rounded-3"
                          alt=""
                          width={100}
                          height={100}
                          unoptimized
                           layout="responsive"
                        />
                      </div>
                      {/* Image */}
                      <div className="col-12">
                        <Image
                          src="assets/img/about/d3.jpg"
                          className=" rounded-3"
                          alt=""
                          width={100}
                          height={100}
                          unoptimized
                           layout="responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-5 ps-xxl-5">
                <div className="text-block">
                  <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-[#DAB852] text-uppercase">
                    About
                  </h6>
                  <h2 className="mb-4">
                    We'll help you find the property that suits your lifestyle.
                  </h2>
                  <p className="mb-4">
                    At Cresco, we strive to inspire greatness in every aspect of
                    our work.With years of experience and a steadfast commitment
                    to excellence, our team embodies this ethos daily. We're
                    deeply grateful for your trust and partnership, and we're
                    committed to continuing to serve you with integrity and
                    dedication.
                  </p>
                  <ul className="list-checked mb-9 mb-md-10 ps-0">
                    <li>
                      Our years of experience ensure unmatched insight and
                      results.
                    </li>
                    <li>We tailor our approach to meet your unique needs.</li>
                    <li>
                      We're committed to staying ahead with cutting-edge
                      strategies.
                    </li>
                  </ul>
                  <hr className="mt-5" />
                  <blockquote className="blockquote quote-text">
                    <p className="fst-italic mb-0 text-[#DAB852]">
                      “Real estate isn't just about buying a property; it's
                      about investing in possibilities, planting roots, and
                      building futures.”
                    </p>
                    <cite className="fs-14 fw-semibold quote-attribution text-dark">
                      — Umer Shauket, CEO
                    </cite>
                    <div className="mt-3 signature">
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start About Video Section */}
        <AboutVideoContainer />
        {/* /. End About Video Section */}
        {/* Start Customers Section */}
     <Testimonial1/>
        {/* /. End Customers Section */}
        {/* Start Team Content */}
       <TSection/>
        {/* /. End Team Content */}
      </div>
      {/* /. End Main Content */}
      <Footer />
    </div>
  );
}
