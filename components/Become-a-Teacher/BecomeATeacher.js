import Link from "next/link";

import Teacher from "../../data/pages/become-A-Teacher.json";
import InstructorRegistration from "./InstructorRegis";

const BecomeATeacher = () => {
  return (
    <>
    <div class="inner">
      <div class="container">
        <div class="job-details">
          <div class="job-header">
            <h1>Marketing Instructor - Urgent Requirement</h1>
            <p>We are looking for an experienced Marketing Instructor to join our team. The candidate should have hands-on experience in teaching marketing strategies and creating course materials.</p>
          </div>

          <div class="job-info">
            <h2>Job Description</h2>
            <p>We are seeking an experienced Marketing Instructor who can deliver engaging marketing lessons, create innovative course materials, and provide expert knowledge on various marketing channels. The role requires a passion for teaching and mentoring students in a dynamic environment.</p>

            <h3>Required Qualification:</h3>
            <ul>
              <li>Bachelor’s degree in Marketing, Business, or related fields</li>
              <li>Experience in Marketing (1-5 years)</li>
              <li>Teaching or training experience is preferred</li>
            </ul>

            <h3>Required Skills:</h3>
            <ul>
              <li>In-depth knowledge of marketing strategies and concepts</li>
              <li>Experience in digital marketing tools (e.g., Google Analytics, SEO, Social Media Marketing)</li>
              <li>Strong communication and presentation skills</li>
              <li>Experience with creating marketing curriculum and lesson plans</li>
              <li>Basic knowledge of HTML, CSS, and JavaScript (for creating online learning materials)</li>
              <li>Familiarity with e-learning platforms and tools</li>
            </ul>

            <h3>Experience:</h3>
            <ul>
              <li>1-5 years of experience in marketing and/or teaching</li>
            </ul>

            <h3>Job Type:</h3>
            <ul>
              <li>Full-time Position</li>
              <li>Remote or On-Site (specify location, if needed)</li>
            </ul>

            <h3>Location:</h3>
            <ul>
              <li>Remote position</li>
            </ul>

            <h3>Salary:</h3>
            <ul>
              <li>Competitive salary based on experience</li>
            </ul>

            <h3>How to Apply:</h3>
            <p>If you are passionate about teaching and have the necessary qualifications, apply now by clicking the button below to submit your resume and cover letter.</p>
            <div class="apply-btn">
              <a href="/apply-now" class="rbt-btn-link">Apply Now <i class="feather-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div class="instructor-registration">
          <h2>Instructor Registration</h2>
          <p>Interested in becoming a Marketing Instructor? Register now and join our growing team!</p>
          <InstructorRegistration />
        </div>
      </div>
    </div>
    </>
  );
};

export default BecomeATeacher;
