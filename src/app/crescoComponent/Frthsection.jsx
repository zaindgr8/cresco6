"use client"
import React from 'react'
import Regions from "@/components/Regions";
import SectionHeader from "@/components/section-header";

const Frthsection = () => {
  
  return (
    <div className="bg-white py-5 border-bottom">
      <div className="container py-4">
        <SectionHeader />
        <Regions />

        <div className="text-center mt-5" data-aos="fade-up">
        </div>
      </div>
    </div>
  );
}

export default Frthsection