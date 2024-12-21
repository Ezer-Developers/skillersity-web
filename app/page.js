import BackToTop from "./backToTop";
import HomePage from "./home/page";

export const metadata = {
  title: "SKILLERSITY Academy - Professional Training for Digital Marketing, Graphic Design & Video Editing",
  description: "SKILLERSITY Academy offers hands-on courses in Digital Marketing, Graphic Design, Video Editing, and more. Learn practical skills to advance your career with our expert-led training programs.",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
