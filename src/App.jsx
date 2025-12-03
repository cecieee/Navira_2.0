import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
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
import Organizer from "./sections/Organizer.jsx";
import StaggeredMenu from "./components/Navbar.jsx";
import Register from "./sections/Register.jsx";
import Sponsors from "./sections/Sponsors.jsx";
import Aos from "aos";
import EventDetails from "./sections/EventDetails.jsx";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Toaster } from "react-hot-toast";
// import "aos/dist/aos.css";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "#hero" },
  { label: "About", ariaLabel: "Learn about us", link: "#about" },
  { label: "Events", ariaLabel: "View our events", link: "#events" },
  { label: "Glimpse", ariaLabel: "See a glimpse of Navira", link: "#glimpse" },
  { label: "Workshops", ariaLabel: "Our Workshops", link: "#workshops" },
  { label: "IV", ariaLabel: "Industrial Visits", link: "#iv" },
  { label: "Register", ariaLabel: "Register for Navira", link: "#register" },
];

const socialItems = [
  { label: "Instagram", link: "https://instagram.com/navira2.0.cec" },
  { label: "LinkedIn", link: "https://linkedin.com/company/cecieee/" },
  { label: "Email", link: "mailto:navira@cecieee.org" },
];

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  Aos.init();
  const scrollRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const menuRef = useRef(null);

  const handleNavClick = (link) => {
    gsap.to(scrollRef.current, {
      duration: 1.5,
      scrollTo: { y: link, offsetY: 70 },
      ease: "power4.inOut",
    });
    if (menuRef.current) {
      menuRef.current.closeMenu();
    }
  };

  useLayoutEffect(() => {
    if (!isLoading) {
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
      ScrollTrigger.refresh();
    }
    return () => {
      ScrollTrigger.killAll();
    };
  }, [isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      ref={scrollRef}
      className="w-screen h-screen overflow-y-auto overflow-x-hidden"
      style={{ margin: 0, padding: 0 }}
    >

      <Toaster />
      <StaggeredMenu
        ref={menuRef}
        items={menuItems}
        socialItems={socialItems}
        onItemClick={handleNavClick}
        isFixed={true}
        logoUrl="/assets/logos/navira_logo.webp"
      />
      <Hero />
      <div className="relative bg-secondary">
        <Countdown />
        <About />
        <EventDetails />
        <Glimpse />
        <WhyNavira />
        <Organizer />
        <Sponsors />
        <Workshops />
        <IndustrialVisits />
        <Register />
        <Footer />
      </div>
    </div>
  );
}

export default App;
