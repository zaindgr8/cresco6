


export default  function SectionHeader() {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
        {/* Start Section Header Title */}
        <div className="section-header text-center mb-5" data-aos="fade-down">
          {/* Start Subtitle */}
          <div className="bg-[#DAB852] d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
            <span id="projects" >
              View Our Collection
            </span>
          </div>
          {/* /. End Subtitle */}
          {/* Start Section Header title */}
          <h2
            id="projects"
            className="h1 fw-semibold mb-3 section-header__title text-capitalize"
          >
            <span >
              We collaborate with
              <br />
              trusted developers.
            </span>
          </h2>
          {/* /.End Section Header Title */}
          {/* Start Section Header Sub Title */}
          <div className="sub-title fs-16">
            <span >
              Over the years, we have fostered strong relationships with
              numerous clients, establishing <br /> ourselves as a reputable and
              reliable partner in the industry.
            </span>
          </div>
          {/* /.End Section Header Sub Title */}
        </div>
        {/*/. End Section Header */}
      </div>
    </div>
  );
}
