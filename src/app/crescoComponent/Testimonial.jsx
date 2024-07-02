import Testimonial from "../../data/testimonial.json";
import Image from "next/image";

const Testimonial1 = () => {
  return (
    <div className="py-5 border-top position-relative">
      <div className="container py-4 position-relative">
        <div className="row">
          <div
            className="col-md-10 offset-md-1 background-image"
            data-image-src="assets/img/world-map.png"
          >
            {/* Start Section Header Title */}
            <div
              className="section-header text-center mb-5"
              data-aos="fade-down"
            >
              {/* Start Subtitle */}
              <div className="bg-[#DAB852] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                <span >Testimonial</span>
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                <span >
                  Hear From Cresco <br />
                  Real Estate’s Satisfied Customers
                </span>
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                <span >
                  Read our client testimonials to gain insight into the <br />
                  exceptional service and unparalleled expertise that sets us
                  <br />
                  apart in the Dubai real estate market
                </span>
              </div>
              {/* /.End Section Header Sub Title */}
              {/* Start Ratings */}
              <div className="align-items-center d-flex flex-wrap fs-18 gap-1 justify-content-center mt-3 text-gray-900">
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                <i className="fa-solid fa-circle" />
                {/* <i className="fa-solid fa-circle-half-stroke" /> */}
                <span className="text-dark">(4.8/5)</span>
              </div>
              {/* /. End Ratings */}
              <h6 className="text-center mb-0 mt-2 fs-17">
                <span >
                  {" "}
                  Overall Client Ratings
                </span>
              </h6>
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="row testimonial-wrap">
          {Testimonial?.map((testimonial) => {
            const aosDelay = 300 + parseInt(testimonial.id) * 100;
            return (
              <div
                className="col-sm-6 col-lg-3 mb-4 align-self-end"
                key={testimonial.id}
              >
                {/* Start Testimonial Card */}
                <div
                  className="border-0 card rounded-4 shadow"
                  data-aos="fade"
                  data-aos-delay={aosDelay}
                >
                  <div className="card-body p-4 p-xxl-5">
                    <div className="text-gray-900 align-items-center d-flex flex-wrap fs-12 gap-1 mb-2">
                      {/* Start Ratings */}
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />
                      <i className="fa-solid fa-circle" />

                      {/* /. End Ratings */}
                      {/* Start Counter Text */}
                      <span className="fw-medium text-dark">
                        {testimonial.ratings}
                      </span>
                      {/* /. End Counter Text */}
                    </div>
                    <h5 className="fs-18">
                      <span >
                        {testimonial.title}
                      </span>{" "}
                    </h5>
                    <p >
                      {testimonial.description}
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={testimonial.img}
                          alt=""
                          className="rounded-full mt-2"
                          height={30}
                          width={30}
                          
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1 fw-semibold">
                          <span >
                            {testimonial.name}
                          </span>
                        </h6>
                        <div className="fs-15 text-gray-500">
                          <span >
                            {testimonial.mention}
                          </span>
                        </div>
                      </div>
                      <i className="fa-brands fa-twitter fs-4 text-gray-900" />
                    </div>
                  </div>
                </div>
                {/* /. End Testimonial Card */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
