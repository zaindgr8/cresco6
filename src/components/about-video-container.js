"use client"

import Image from 'next/image';


export default function AboutVideoContainer() {
  
    return (
        <div className="about-video position-relative">
        {/* Image Parallax */}
        <Image
          src="/assets/img/about/d4.jpg"
          alt=""
          className="about-img image-parallax"
          width={100}
          height={100}
      unoptimized
                           layout="responsive"
        />
       
      </div>
    );
}
