import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaInstagram, FaLinkedin, FaHeart } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const titleRef = useRef(null);
  const linksRef = useRef(null);
  const copyRef = useRef(null);
  const moonRef = useRef(null);
  const cloudRef = useRef(null);
  const hillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Content Entrance
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          linksRef.current.children,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .from(
          copyRef.current,
          {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          },
          "-=0.5"
        );

      // Parallax Animations
      gsap.to(moonRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(cloudRef.current, {
        x: 50,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.from(hillRef.current, {
        y: 200, // Increased from 100 for more visible parallax
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-secondary text-white py-8 px-6 md:px-12 border-t border-white/10 overflow-hidden relative min-h-[300px] flex flex-col justify-end"
    >
      {/*bg*/}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/80 to-transparent z-1"></div>

        {/*moon*/}
        <img
          ref={moonRef}
          src="/assets/parallax/moon.webp"
          alt="Moon"
          className="absolute top-10 right-10 w-32 md:w-48 opacity-80 mix-blend-screen z-0"
        />

        {/*cloud*/}
        <img
          ref={cloudRef}
          src="/assets/parallax/cloud.webp"
          alt="Cloud"
          className="absolute top-20 left-0 w-64 md:w-96 opacity-40 z-0"
        />

        {/*hill*/}
        <img
          ref={hillRef}
          src="/assets/parallax/left side hill.svg"
          alt="Hill"
          className="absolute bottom-0 left-0 w-full md:w-2/3 opacity-60 z-0"
        />

        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-20 z-0"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent-1 rounded-full blur-[80px] opacity-20 z-0"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        <div className="flex-1 text-center md:text-left">
          <h2
            ref={titleRef}
            className="font-primary text-4xl md:text-6xl tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white to-white/70 leading-none"
          >
            NAVIRA
          </h2>
        </div>

        <div
          ref={linksRef}
          className="flex flex-col md:flex-row gap-8 md:gap-16 text-xs font-light tracking-widest uppercase w-full md:w-auto"
        >
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-primary font-bold mb-1">Explore</h3>
            <a
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-primary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors duration-300"
            >
              Workshop
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <h3 className="text-primary font-bold mb-1">Connect</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.instagram.com/ieee_sb_cec/"
                className="hover:text-primary transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/cecieee/"
                className="hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:chairman_ieee@ceconline.edu"
                className="hover:text-primary transition-colors duration-300"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={copyRef}
        className="max-w-7xl mx-auto mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 uppercase tracking-widest relative z-20"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          <p>&copy; {new Date().getFullYear()} IEEE SB CEC</p>
          <p className="hidden md:block">|</p>
          <p>
            Made with <FaHeart className="inline text-red-500" /> by IEEE SB CEC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
