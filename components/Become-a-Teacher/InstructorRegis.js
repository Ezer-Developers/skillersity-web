import Image from "next/image";

import img from "../../public/images/tab/tabs-10.jpg";

const InstructorRegistration = () => {
  return (
    <>
      <div className="row pt--60 g-5">
        <div className="col-lg-4">
          <div className="thumbnail">
            <Image
              className="radius-10 w-100"
              src={img}
              alt="Corporate Template"
            />
          </div>
        </div>

        <div className="col-lg-8">
          <div className="rbt-contact-form contact-form-style-1 max-width-auto">
            {/* <div className="section-title text-start">
              <span className="subtitle bg-primary-opacity">
                For Become a Instructor
              </span>
            </div> */}
            <h3 className="title">Apply Now</h3>
            <hr className="mb--30" />

            <form action="#" class="row row--15">
              <div class="col-lg-6">
                <div class="form-group">
                  <input name="con_name" type="text" placeholder="First Name" />
                  <span class="focus-border"></span>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="form-group">
                  <input name="con_lastname" type="text" placeholder="Last Name" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input name="con_email" type="email" placeholder="Email" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input name="con_experience" type="text" placeholder="Experience (in years)" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <input name="con_phone" type="text" placeholder="Phone Number" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input name="con_place" type="text" placeholder="Location/Place" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input name="con_cv" type="file" accept=".pdf, .doc, .docx" />
                  <span class="focus-border"></span>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-submit-group">
                  <button
                    type="submit"
                    class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
                  >
                    <span class="icon-reverse-wrapper">
                      <span class="btn-text">Apply Now</span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                      <span class="btn-icon">
                        <i class="feather-arrow-right"></i>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorRegistration;
