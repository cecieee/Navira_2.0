import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Inline SVG icons to reduce bundle size
const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GmailIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);

const HeartIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 inline">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

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
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/cecieee/"
                className="hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="mailto:chairman_ieee@ceconline.edu"
                className="hover:text-primary transition-colors duration-300"
                aria-label="Email"
              >
                <GmailIcon />
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
            Made with <HeartIcon /> by IEEE SB CEC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
