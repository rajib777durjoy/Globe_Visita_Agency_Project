
import Stats from "@/component/Stats";
import AboutPage from "./About/page";
import Contact from "./Contact/page";
import HomePage from "./Home/page";
import ToursOverview from "./Home/ToursOverview/page";
import Testimonials from "@/component/Testimonials";
import FAQPage from "@/component/FAQ_page";
import BlogPage from "@/component/BlogPage";
import NewsletterPage from "@/component/NewsletterPage";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <HomePage></HomePage>
      <Stats></Stats>
      <ToursOverview></ToursOverview>
      <AboutPage></AboutPage>
      <Testimonials></Testimonials>
      <FAQPage></FAQPage>
      <BlogPage></BlogPage>
      <NewsletterPage></NewsletterPage>
    </div>
  );
}
