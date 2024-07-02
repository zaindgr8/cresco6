'use client'
// import React from "react";
// import localFont from "next/font/local";
import Image from "next/image";
// // Load fonts with font-display: swap
// const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf", display: 'swap' });

const FSection = () => {
  return (
    <>
      <div
        className="align-items-center d-flex hero-header overflow-hidden position-relative"
        style={{ height: "100vh", width: "100vw" }}
      >
        
        <div>
        
          <Image
            src="/assets/img/bg-cresco.jpg"
            layout="fill"
            alt="Hero GIF"
            className="h-100 w-100 object-fit-cover position-absolute  oblique-image top-0 video"
          />
        </div>
        
        <div
          className="container text-center flex items-center justify-center position-relative"
          style={{ height: "100%", width: "100%" }}
        >
          <div>
            <div>
              <div className="bg-[#E1B958] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                Cresco Real Estate LLC
              </div>
              <h1 className=" text-white  font-bold  text-5xl ">
                <span >
                  Unlock the Door <br /> To Your Dream Home
                </span>
              </h1>
              <h2 className="text-white text-2xl"></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FSection;
