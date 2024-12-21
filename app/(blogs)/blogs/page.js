import BackToTop from "@/app/backToTop";
import BlogGridPage from "./(blog-grid)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "SKILLERSITY Academy - Blogs",
  description: "SKILLERSITY Academy offers hands-on courses in Digital Marketing, Graphic Design, Video Editing, and more. Learn practical skills to advance your career with our expert-led training programs.",
};

const BlogGridLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogGridPage getAllBlogs={blog} />

      <BackToTop />
    </>
  );
};

export default BlogGridLayout;
