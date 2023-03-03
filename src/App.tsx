import { useEffect, useState } from "react";
import { Sections } from "./enums/SectionsEnum";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import MySkills from "./scenes/MySkills";
import Landing from "./scenes/Landing";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";
import LineGradient from "./components/LineGradient";
import Contact from "./scenes/Contact";

function App() {
  const [selectedPage, setSelectedPage] = useState(Sections.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App bg-deep-blue max-w-7xl mx-auto">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-screen">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-screen">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-screen">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
