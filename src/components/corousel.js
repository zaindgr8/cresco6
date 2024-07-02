"use client"
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import Image from "next/image";

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



const Carousel = () => {
    const options = {
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    };

    return (
      <OwlCarousel className="owl-theme blog-carousel" {...options}>
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <div className="w-full h-[45vh] overflow-hidden">
                <Image
                  layout="responsive"
                  src="/assets/img/projects/ellington-img.jpg"
                  className=" object-cover  "
                  alt=""
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Explore More
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-[#DAB852] fw-medium">
                  ELLINGTON DEVELOPERS
                </div>
                {/* <span className="vr" />
                            <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">Crafting Luxury Living Experiences</Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <div className="w-full h-[45vh] overflow-hidden">
                <Image
                  layout="responsive"
                  src="/assets/img/projects/danube-img.jpg"
                  className=" object-cover  "
                  alt=""
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>

              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Explore More
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-[#DAB852] fw-medium">DANUBE</div>
                {/* <span className="vr" />
                            <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">Building Dreams, One Property at a Time</Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <div className="w-full h-[45vh] overflow-hidden">
                <Image
                  layout="responsive"
                  src="/assets/img/projects/damac-img.jpg"
                  className=" object-cover  "
                  alt=""
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Explore More
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-[#DAB852] fw-medium">DAMAC PROPERTIES</div>
                {/* <span className="vr" />
                            <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">The Architects of Dubai's Iconic Landmarks</Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <div className="w-full h-[45vh] overflow-hidden">
                <Image
                  layout="responsive"
                  src="/assets/img/projects/emar-img.jpg"
                  className=" object-cover  "
                  alt=""
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Explore More
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-[#DAB852] fw-medium">EMAAR</div>
                {/* <span className="vr" />
                            <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  The Powerhouse Behind Dubai's Dazzling Transformation
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
        {/* Start Grid Post */}
        <div className="post grid-post" data-aos="fade" data-aos-delay={300}>
          <div className="grid-post__thumb position-relative">
            <Link
              href="blog-details"
              className="align-items-center d-flex justify-content-center overflow-hidden position-relative rounded-3 thumb-overlay"
            >
              <div className="w-full h-[45vh] overflow-hidden">
                <Image
                  layout="responsive"
                  src="/assets/img/projects/azizi-img.jpg"
                  className=" object-cover  "
                  alt=""
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
              <div className="bottom-0 opacity-0 position-absolute start-0 thumb-content top-0 w-100 z-1">
                <div className="position-absolute text-center top-50 w-100">
                  <h4 className="d-inline-block fs-12 fw-medium l-spacing-2 link text-white">
                    Explore More
                    <i className="fa fa-angle-right text-white" />
                  </h4>
                </div>
              </div>
            </Link>
            {/* /.image */}
          </div>
          <div className="post-info text-center">
            <div className="bg-white m-auto position-relative post-header z-1 pb-0">
              {/* Start Meta Info */}
              <div className="align-items-start flex-wrap fs-15 gap-2 hstack text-capitalize mb-1 justify-content-center">
                <div className="text-[#DAB852] fw-medium">
                  AZIZI DEVELOPMENTS
                </div>
                {/* <span className="vr" />
                            <div>jun 23, 2023</div> */}
              </div>
              {/* /.End Meta Info */}
              {/* Start Post Title */}
              <h5 className="post-title fw-semibold fs-19 mb-3">
                <Link href="#">
                  Sustainable Innovation for a Thriving Dubai
                </Link>
              </h5>
              {/* /.End Post Title */}
            </div>
          </div>
        </div>
        {/* /.End Grid Post */}
      </OwlCarousel>
    );
};
export default Carousel;
