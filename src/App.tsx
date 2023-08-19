import { useEffect, useState } from "react";

import MainPage from "./components/mainpage";
import BeneluxJob from "./components/beneluxjob";
import Messanger from "./components/messanger";
import Blog from "./components/blog";

function App() {
  const [fadeIn, setFadeIn] = useState(true);

  // window.addEventListener("scroll", () => {});

  // Get references to your components
  const mainPage = document.getElementById("mainpageDiv")!;
  const beneluxJob = document.getElementById("beneluxjobDiv")!;
  const messanger = document.getElementById("messangerDiv")!;
  const blog = document.getElementById("blogDiv")!;

  const [mainPageView, setMainPageView] = useState(true);
  const [beneluxJobView, setBeneluxJobView] = useState(true);
  const [messangerView, setMessangerView] = useState(true);
  const [blogView, setBlogView] = useState(true);
  // Add a scroll listener
  window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;

    // Check if each component is in view
    if (mainPage && mainPage.getBoundingClientRect().top - windowHeight < 0) {
      setMainPageView(true);
      setBeneluxJobView(false);
      setMessangerView(false);
      setBlogView(false);
    }
    if (
      beneluxJob &&
      beneluxJob.getBoundingClientRect().top - windowHeight < -250
    ) {
      setMainPageView(true);
      setBeneluxJobView(true);
      setMessangerView(false);
      setBlogView(false);
    }
    if (
      messanger &&
      messanger.getBoundingClientRect().top - windowHeight < -250
    ) {
      setBeneluxJobView(true);
      setMainPageView(true);
      setMessangerView(true);
      setBlogView(false);
    }
    if (blog && blog.getBoundingClientRect().top - windowHeight < -250) {
      setBeneluxJobView(true);
      setMainPageView(true);
      setMessangerView(true);
      setBlogView(true);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 50);
  }, []);

  return (
    <div
      className={`w-screen flex flex-col transition-opacity duration-1000 opacity-0 ${
        !fadeIn && "opacity-100"
      }`}
    >
      <MainPage {...{ fadeIn, mainPageView }} />
      {/* <About {...{ fadeIn, aboutView }} /> */}
      <BeneluxJob {...{ fadeIn, beneluxJobView }} />
      <Messanger {...{ fadeIn, messangerView }} />
      <Blog {...{ fadeIn, blogView }} />

      {/* <div className="w-screen h-screen bg-raspberry"></div>
      <div className="w-screen h-screen bg-quina"></div> */}
    </div>
  );
}

export default App;
