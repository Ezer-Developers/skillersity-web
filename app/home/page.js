import BackToTop from "../backToTop";
import LanguageAcademyPage from "./(language-academy)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "SKILLERSITY Academy - Professional Training for Digital Marketing, Graphic Design & Video Editing",
  description: "SKILLERSITY Academy offers hands-on courses in Digital Marketing, Graphic Design, Video Editing, and more. Learn practical skills to advance your career with our expert-led training programs.",
};

const LanguageAcademyLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <LanguageAcademyPage getBlog={blog} />
      <BackToTop />
    </>
  );
};

export default LanguageAcademyLayout;
