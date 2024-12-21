import BackToTop from "@/app/backToTop";
import SingleCourse from "../index";

export const metadata = {
  title: "SKILLERSITY Academy - Courses",
  description: "SKILLERSITY Academy offers hands-on courses in Digital Marketing, Graphic Design, Video Editing, and more. Learn practical skills to advance your career with our expert-led training programs.",
};

const SingleCourseLayout = ({ params }) => {
  return (
    <>
      <SingleCourse getParams={params} />
      <BackToTop />
    </>
  );
};

export default SingleCourseLayout;
