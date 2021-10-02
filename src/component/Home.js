import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import Carousal from "./Carousal";
import Sectors from "./Sectors";
import Projects from "./Projects";
import Clients from "./Clients";
import Members from "./Members";
import Footer from "./Footer";
import $ from "jquery";
import React, { useEffect, useState, useRef } from "react";

function Home() {
  const [navBG, setNavBG] = useState("transparent");
  const [width, setWidth] = useState(window.innerWidth);
  const carousal = React.createRef();

  useEffect(() => {
    // setNavBG(navBG);
    console.log("Changed", navBG);
  });

  useEffect(() => {
    console.log("listner set");
    window.addEventListener("scroll", handleScroll);

    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  const handleScroll = function () {
    // $(this).scrollTop();

    let carousalHeight = width > 768 ? 740 : 630;
    console.log("height", carousalHeight);
    console.log("Scrolled", $(this).scrollTop());

    if ($(this).scrollTop() >= carousalHeight) {
      setNavBG("dark");
    } else {
      setNavBG("transparent");
    }
  };

  return (
    <>
      {navBG == "transparent" ? (
        <NavBar background={"transparent"} variant={"dark"} />
      ) : (
        <NavBar background={"dark"} variant={"dark"} />
      )}
      <div className="bg-light">
        <Carousal carousal_ref={carousal} />
        <div className="container ">
          <AboutUs />
          <Sectors deviceWidth={width} />
        </div>

        <Projects />

        <div className="container">
          <Clients deviceWidth={width} />
          <Members deviceWidth={width} />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Home;
