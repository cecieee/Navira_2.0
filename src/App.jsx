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
      style={{ margin: 0, padding: 0 }}>
      <div id="hero">
        <Hero />
      </div>
      <Countdown />
      <div className="flex flex-col gap-10 bg-secondary">
        <About />
        <WhyNavira />
        <Workshops />
        <IndustrialVisits />
      </div>
      <Footer />
    </div>
  );
}

export default App;
