import Image from "next/image";
import Link from "next/link";

import CallToActionData from "../../data/elements/calltoaction.json";
import CallToActionHead from "./CallToAction-Head";

const CallToActionTwo = () => {
  return (
    <>
      {CallToActionData &&
        CallToActionData.collectionTwo.map((data, index) => (
          <div
            className="rbt-callto-action-area bg-color-extra2 rbt-section-gap"
            key={index}
          >
            {/* <CallToActionHead tag={data.tag} title={data.title} /> */}

            <div className="rbt-callto-action rbt-cta-default style-2">
              {/* <div className="container content-wrapper overflow-hidden">
                <div className="row gy-5 align-items-center">
                  <div className="col-lg-8">
                    <div className="inner">
                      <div className="content text-left">
                        <h3
                          className="title"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="200"
                        >
                          {data.subTitle}
                        </h3>
                        <h6
                          className="subtitle"
                          data-sal="slide-up"
                          data-sal-duration="400"
                          data-sal-delay="300"
                        >
                          {data.desc}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="call-to-btn text-start text-lg-end position-relative"
                      data-sal="slide-up"
                      data-sal-duration="400"
                      data-sal-delay="400"
                    >
                      <Link
                        className="rbt-btn rbt-switch-btn rbt-switch-y"
                        href="/become-a-teacher"
                      >
                        <span data-text="View More">
                          View More
                        </span>
                      </Link>
                      <div className="shape-text-image">
                        <Image
                          className="rbt-rotatation-round"
                          src={data.img}
                          width={397}
                          height={397}
                          alt="Education Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div class="inner">
                <div class="container">
                  {/* <div class="rbt-course-grid-column">
                    <div class="course-grid-3">
                      <div class="rbt-card variation-01 rbt-hover">
                        <div class="rbt-card-body">
                          <h4 class="rbt-card-title">
                            <a href="/career_details">
                              Marketing Instructor
                            </a>
                          </h4>
                          <ul class="rbt-meta">
                            <li>
                              <i class="feather-star"></i>
                              1+ Years Experience Required
                            </li>
                            <li>
                              <i class="feather-clock"></i>
                              Full-time Position
                            </li>
                            <li>
                              <i class="feather-map-pin"></i>
                              Location: Remote
                            </li>
                          </ul>
                          <p class="job-description">
                            Seeking a skilled Marketing Instructor to deliver engaging lessons, create course materials, and provide hands-on marketing expertise. 
                          </p>
                          <div class="rbt-card-bottom">
                            <a class="rbt-btn-link" href="/career_details">
                              More Details <i class="feather-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                   <div class="rbt-card variation-01 rbt-hover">
                      <div class="rbt-card-body">
                        <h4 class="rbt-card-title">
                          No Available Positions
                        </h4>
                        <p class="job-description">
                          Currently, we do not have any job openings. Please check back later.
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CallToActionTwo;
