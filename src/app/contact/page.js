import Footer from "@/components/Footer";
import GoogleMapsComponent from "@/components/map";
import Link from "next/link";

import Image from "next/image";
export default function Contact() {
  return (
    <div>
     
      <div className="">
        
        <div className="map-content">
        
          <GoogleMapsComponent className="map border-bottom" />
          {/* <div id="map" className="map border-bottom" /> */}
          {/* /.End Map */}
        </div>
        {/* /.End Map Content */}
        <div className="contact-info">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={300}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      <i className="fa-headset fa-solid fs-40 mb-4 text-[#DAB852]" />
                    </div>
                    <h4>Reach Out</h4>
                    <p className="fs-15">
                      Let's connect and discuss how we can help you.
                    </p>
                    <div className="d-grid d-xl-flex gap-2 justify-content-center">
                      <div className="border d-inline-block fw-medium px-3 py-1 rounded ">
                        <i className="fa-solid fa-mobile-button me-2 text-[#DAB852]"></i>
                        +971585145243
                      </div>
                      <div className="border d-inline-block fw-medium px-3 py-1 rounded ">
                        <i className="fa-solid fa-phone me-2 text-[#DAB852]"></i>
                        +971521543532
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={400}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      <i className="fa-envelope-circle-check fa-solid fs-40 mb-4 text-[#DAB852]" />
                    </div>
                    <h4>Drop Us an Email</h4>
                    <p className="fs-15">
                      Drop us an email and our team will respond promptly.
                    </p>
                    <Link
                      href="mailto:first.last@example.com"
                      className="fw-medium"
                    >
                      <i className="fa-solid fa-envelope me-2 text-[#DAB852]" />
                      info@crescorealestate.ae
                    </Link>
                  </div>
                </div>
                {/* /.End Card */}
              </div>
              <div className="col-sm-6 col-lg-4 d-flex">
                {/* Start Card */}
                <div
                  className="border-0 card flex-fill rounded-3 shadow w-100"
                  data-aos="fade"
                  data-aos-delay={500}
                >
                  <div className="card-body p-4 text-center">
                    <div className="box-icon">
                      <i className="fa-hashtag fa-solid fs-40 mb-4 text-warning" />
                    </div>
                    <h4>Join Us on Socials</h4>
                    <p className="fs-15">
                      Connect & join us on socials for the latest updates.
                    </p>
                    {/* Start Social Link */}
                    <div className="d-flex gap-3 justify-content-center social-links text-md-right text-[#DAB852]">
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/crescorealestateuae"
                        className="fb d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-facebook-f " />
                      </Link>
                      <Link
                        href="https://www.instagram.com/crescorealestate.ae/"
                        className="ins d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-instagram" />
                      </Link>
                      <Link
                        target="_blank"
                        href="https://www.linkedin.com/company/crescorealestatellc/mycompany/"
                        className="li d-flex align-items-center justify-content-center fs-17 rounded mr-2"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </div>
                    {/* /.End Social Link */}
                  </div>
                </div>
                {/* /.End Card */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 position-relative">
          <div className="container position-relative py-4 z-1">
            <div className="row justify-content-center">
              <div className="col-md-10">
                {/* Start Section Header Title */}
                <div className="section-header text-center mb-5">
                  {/* Start Section Header title */}
                  <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                    Let's connect and make things happen.
                  </h2>
                  {/* /.End Section Header Title */}
                  {/* Start Section Header Sub Title */}
                  <div className="sub-title fs-16">
                    Reach out to us and let's collaborate to turn your real
                    estate dreams into reality. Together, we can find
                    <br /> the perfect property and achieve great things!
                  </div>
                  {/* /.End Section Header Sub Title */}
                </div>
                {/*/. End Section Header */}
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-10">
                <div className="row align-items-center">
                  <div className="col-md-7 pe-xl-5 mb-5 mb-md-0">
                    {/* Start Illustration Image */}
                    <Image
                      src="/cresco.png"
                      alt=""
                      className=""
                      width={100}
                      height={100}
                      unoptimized
                       layout="responsive"

                    />
                    {/* /.End Illustration Image */}
                  </div>
                  <div className="col-md-5">
                    <form>
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter your email"
                          required=""
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          placeholder="Enter your contact number"
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Form Group */}
                      <div className="form-group mb-4">
                        <label className="required">Your Comments</label>
                        <textarea
                          className="form-control"
                          rows={5}
                          placeholder="Tell us what we can help you with!"
                          defaultValue={""}
                        />
                      </div>
                      {/* /.End Form Group */}
                      {/* Start Submit Button */}
                      <button
                        type="submit"
                        className="btn text-gray-900 bg-[#DAB852] btn-lg d-inline-flex hstack gap-2"
                      >
                        <span>Send message</span>
                        <span className="vr" />
                        <i className="fa-arrow-right fa-solid fs-14" />
                      </button>
                      {/* /.End Submit Button */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Start Section Sketch */}
          <div className="bottom-0 end-0 position-absolute section-sketch">
            {/* <img
              src="/cresco.png"
              className="img-fluid"
              alt=""
            /> */}
          </div>
          {/* /. End Section Sketch */}
        </div>
        {/* /.End of about section */}
      </div>
      {/* /. End Main Content */}
      <Footer/>
    </div>
  );
}