"use client"
import React from 'react'
import Corousel from "./corouselTeam"
// import localFont from "next/font/local";

// const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
// const roboto2 = localFont({ src: "../fonts/Roboto-Regular.ttf" });




const TSection = () => {

  return (
    <>
      <div className="py-5 bg-gray-100">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div
                  id="agents"
                  className="bg-[#DAB852] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900"
                >
                  <span id="teamwork" >
                    Get to Know Us
                  </span>
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  <span >
                    Meet the Faces Behind
                  </span>
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  <p >
                    Discover luxury real estate in Dubai with our expert team.
                    Specializing in opulent living spaces
                    <br className="d-none d-lg-block" /> and trusted projects,
                    we offer transparency, integrity, and excellence.
                  </p>
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <Corousel />

          {/* Start Button */}

          {/* /.End Button */}
        </div>
      </div>
    </>
  );
}

export default TSection