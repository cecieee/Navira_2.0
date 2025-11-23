import React, { useEffect, useRef, useState } from "react";
import Hero from "./section/hero";
import Footer from "./section/Footer";
import About from './Components/About.jsx';
import Workshops from './Components/Workshops.jsx';
import LoadingScreen from './Components/LoadingScreen.jsx';
import IndustrialVisits from "./iv";
import WhyNavira from "./whynavira";
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
      className="w-screen h-screen overflow-y-auto overflow-x-hidden bg-linear-to-tr from-primary to-black text-secondary font-primary"
      style={{ margin: 0, padding: 0 }}
    >
      <Hero />
      <About />
      <WhyNavira />
      <Workshops />
      <IndustrialVisits />
      <Footer />
    </div>
  );
}

export default App;
