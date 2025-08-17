
import AboutPage from "./About/page";
import HomePage from "./Home/page";
import ToursOverview from "./Home/ToursOverview/page";

export default function Home() {
  return (
    <div className="w-[100%] mx-auto">
      <HomePage></HomePage>
      <ToursOverview></ToursOverview>
      <AboutPage></AboutPage>
    </div>
  );
}
