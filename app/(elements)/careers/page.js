import BackToTop from "@/app/backToTop";
import CallToActionPage from "./(call-to-action)";

export const metadata = {
  title: "SKILLERSITY Academy - Careers",
  description: "SKILLERSITY Academy offers hands-on courses in Digital Marketing, Graphic Design, Video Editing, and more. Learn practical skills to advance your career with our expert-led training programs.",
};

const CallToActionLayout = () => {
  return (
    <>
      <CallToActionPage />

      <BackToTop />
    </>
  );
};

export default CallToActionLayout;
