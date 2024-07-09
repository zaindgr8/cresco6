"use client";
import React from "react";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { IoMdArrowDropdownCircle } from "react-icons/io";


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
            className="h-100 w-100 object-fit-cover position-absolute oblique-image top-0 video"
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
              <h1 className="text-white font-bold text-5xl">
                <span>
                  Unlock the Door <br /> To Your Dream Home
                </span>
              </h1>
              <h2 className="text-white text-2xl"></h2>
            </div>
          </div>
        </div>

        <div className="arrow-container position-absolute bottom-0 w-100 text-center mb-5">
          <IoMdArrowDropdownCircle className="text-white text-5xl animate-bounce" />
        </div>
      </div>

      <style jsx>{`
        .arrow-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </>
  );
};

export default FSection;
