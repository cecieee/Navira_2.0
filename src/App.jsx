import React, { useEffect, useRef, useState } from "react";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import About from "./sections/About.jsx";
import Workshops from "./sections/Workshops.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import IndustrialVisits from "./sections/IndustrialVisits";
import WhyNavira from "./sections/WhyNavira";
import Countdown from "./sections/Countdown.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Glimpse from "./sections/Glimpse.jsx";
import StaggeredMenu from "./components/Navbar.jsx";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about us", link: "/about" },
  { label: "Services", ariaLabel: "View our services", link: "/services" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
];

const socialItems = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
];

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading && scrollRef.current) {
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      });

      ScrollTrigger.scrollerProxy(scrollRef.current, {
        scrollTop(value) {
          if (arguments.length) {
            scrollRef.current.scrollTop = value;
          }
          return scrollRef.current.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
      });

      ScrollTrigger.defaults({ scroller: scrollRef.current });

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      ref={scrollRef}
      className="w-screen h-screen overflow-y-auto overflow-x-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        logoUrl="/assets/logos/navira_logo.webp"
        accentColor="#ff6b6b"
        onMenuOpen={() => console.log("Menu opened")}
        onMenuClose={() => console.log("Menu closed")}
        isFixed={true}
      />
      <div id="hero">
        <Hero />
      </div>
      <div className="flex flex-col gap-10 bg-secondary">
        <Countdown />
        <About />
        <Glimpse />
        <WhyNavira />
        <Workshops />
        <IndustrialVisits />
      </div>
      <Footer />
    </div>
  );
}

export default App;
