import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Inline SVG icons
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
  </svg>
);

const HeartIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-3 h-3 inline text-red-500"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);
  const moonRef = useRef(null);
  const cloudRef = useRef(null);
  const hillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Animations
      gsap.to(moonRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      gsap.to(cloudRef.current, {
        x: 60,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      gsap.from(hillRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      gsap.from(contentRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-secondary text-white relative overflow-hidden py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8"
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-t from-secondary via-secondary/90 to-transparent z-1"></div>

        {/*moon*/}
        <img
          ref={moonRef}
          src="/assets/parallax/moon.webp"
          alt="Moon"
          className="absolute top-4 right-4 w-16 sm:w-20 md:w-28 lg:w-32 opacity-85 mix-blend-screen z-0"
        />

        {/*cloud*/}
        <img
          ref={cloudRef}
          src="/assets/parallax/cloud.webp"
          alt="Cloud"
          className="absolute top-12 -left-8 w-32 sm:w-40 md:w-56 lg:w-64 opacity-60 z-0"
        />

        {/*hill*/}
        <img
          ref={hillRef}
          src="/assets/parallax/left side hill.svg"
          alt="Hill"
          className="absolute bottom-0 left-0 w-full sm:w-3/4 md:w-1/2 opacity-55 z-0"
        />

        <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
      </div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center gap-8 sm:gap-5 md:gap-6"
      >
        <a
          href="#hero"
          onClick={scrollToTop}
          className="inline-block hover:scale-105 transition-transform duration-300"
        >
          <img
            src="/assets/logos/navira.webp"
            alt="Navira 2.0 Logo"
            className="w-32 sm:w-40 md:w-44 lg:w-48 h-auto object-contain mx-auto"
          />
        </a>

        <nav className="hidden sm:flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-3 text-sm text-white/70">
          <a
            href="#hero"
            onClick={scrollToTop}
            className="hover:text-primary transition-colors duration-300"
          >
            Home
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#about"
            className="hover:text-primary transition-colors duration-300"
          >
            About
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#workshop"
            className="hover:text-primary transition-colors duration-300"
          >
            Workshop
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#glimpses"
            className="hover:text-primary transition-colors duration-300"
          >
            Glimpses
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#sponsors"
            className="hover:text-primary transition-colors duration-300"
          >
            Sponsors
          </a>
          <span className="text-white/30">•</span>
          <a
            href="#contact"
            className="hover:text-primary transition-colors duration-300"
          >
            Contact
          </a>
        </nav>

        <div className="hidden sm:block w-24 md:w-28 h-px bg-linear-to-r from-transparent via-primary to-transparent"></div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <a
            href="https://www.instagram.com/ieee_sb_cec/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/company/cecieee/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="mailto:chairman_ieee@ceconline.edu"
            className="hover:text-primary transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 text-[10px] sm:text-xs text-white/60 px-2">
          <a
            href="tel:+911234567890"
            className="hover:text-primary transition-colors duration-300"
          >
            <span className="text-white/80">Coordinator 1: </span>+91 12345
            67890
          </a>
          <span className="text-white/30 hidden sm:inline">•</span>
          <a
            href="tel:+911234567891"
            className="hover:text-primary transition-colors duration-300"
          >
            <span className="text-white/80">Coordinator 2: </span>+91 12345
            67891
          </a>
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md h-px bg-white/10"></div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wide sm:tracking-widest px-2">
          <p>© {new Date().getFullYear()} IEEE SB CEC</p>
          <span className="hidden sm:inline">•</span>
          <p className="flex items-center gap-1.5">
            Made with <HeartIcon /> by IEEE SB CEC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
