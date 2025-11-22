import React, { useEffect, useRef } from "react";
import Hero from "./section/hero";
import Footer from "./section/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
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
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-screen h-screen overflow-y-auto overflow-x-hidden bg-linear-to-tr from-primary to-black"
      style={{ margin: 0, padding: 0 }}
    >
      <Hero />
      <div className="h-screen bg-transparent text-9xl justify-center pl-100 pt-85">
        BLANK PAGE
      </div>
      <Footer />
    </div>
  );
}

export default App;
