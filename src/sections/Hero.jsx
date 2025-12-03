import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRegistration } from "../lib/useRegistration";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const { handleRegisterClick } = useRegistration();
  const heroRef = useRef(null);
  const cut5Ref = useRef(null);
  const leftHillRef = useRef(null);
  const rightSBRef = useRef(null);
  const contentRef = useRef(null);
  const moonRef = useRef(null);
  const cloudRef = useRef(null);
  const starsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(leftHillRef.current, { y: 100, scale: 1.1 });
      gsap.set(rightSBRef.current, { y: 100, scale: 1.1, scaleY: 1 });
      gsap.set(cut5Ref.current, { scale: 1.1 });
      gsap.set(moonRef.current, { y: 0, scale: 1 });
      gsap.set(cloudRef.current, { x: 0, opacity: 0.6 });

      gsap.to(starsRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(moonRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(cut5Ref.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      gsap.to(cloudRef.current, {
        x: 100,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(leftHillRef.current, {
        y: 250,
        x: -100,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.to(rightSBRef.current, {
        y: 300,
        x: -100,
        scale: 1.2,
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(contentRef.current, {
        y: 400,
        opacity: 0,
        scale: 0.9,
        filter: "blur(5px)",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "60% top",
          scrub: 0.5,
        },
      });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(moonRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
        .from(
          cut5Ref.current,
          { scale: 1.2, opacity: 0, duration: 1.5, ease: "power2.out" },
          "-=1.2"
        )
        .from(
          [leftHillRef.current, rightSBRef.current],
          {
            y: 300,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=1"
        )
        .from(
          contentRef.current,
          { y: 50, opacity: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="w-full select-none h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6
      bg-linear-to-br from-secondary via-[#0A3D4F] to-secondary relative overflow-hidden"
      style={{ perspective: "1000px" }}
    >
      {/*star*/}
      <div
        ref={starsRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))",
          backgroundSize: "200px 200px",
          opacity: 0.6,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-secondary/30 pointer-events-none z-1 mix-blend-overlay" />

      {/*moon*/}
      <img
        ref={moonRef}
        src="/assets/parallax/moon.webp"
        alt="Moon"
        className="absolute top-[5%] sm:top-[2%] right-[10%] w-[100px] sm:w-[180px] md:w-[250px] lg:w-[300px] z-1 pointer-events-none will-change-transform"
        style={{
          filter: "brightness(1.4) drop-shadow(0 0 60px rgba(198,230,236,0.6))",
          mixBlendMode: "screen",
        }}
      />

      {/*cloud*/}
      <img
        ref={cloudRef}
        src="/assets/parallax/cloud.webp"
        alt="Cloud"
        className="absolute top-[15%] left-[5%] w-[200px] sm:w-[350px] md:w-[500px] z-2 pointer-events-none will-change-transform opacity-60"
        style={{ filter: "brightness(1.5) blur(1px)" }}
      />

      {/*bg hill*/}
      <img
        ref={cut5Ref}
        src="/assets/parallax/cut6.webp"
        alt="Background Mountains"
        className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1800px] h-auto z-3 pointer-events-none will-change-transform object-cover opacity-90"
      />

      {/*right hill */}
      <div
        className="absolute bottom-0 right-0 h-[300px] sm:h-[380px] md:h-[450px] lg:h-[550px] w-auto z-10 pointer-events-none will-change-transform"
        style={{ transform: "scaleX(-1)" }}
      >
        <img
          ref={rightSBRef}
          src="/assets/parallax/left_hill.svg"
          alt="Right Hill"
          style={{ filter: "drop-shadow(-10px 0 20px rgba(0,0,0,0.3))" }}
          className="h-full w-auto"
        />
      </div>

      <img
        ref={leftHillRef}
        src="/assets/parallax/left_hill.svg"
        alt="Left Hill"
        className="absolute bottom-0 left-0 h-[280px] sm:h-[350px] md:h-[430px] lg:h-[500px] w-auto z-10 pointer-events-none will-change-transform"
        style={{ filter: "drop-shadow(10px 0 20px rgba(0,0,0,0.3))" }}
      />

      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center h-full w-full max-w-full px-4"
      >
        <div className="flex flex-col items-center gap-8">
          <img
            src="/assets/logos/navira.webp"
            className="w-full max-w-xs md:max-w-md lg:max-w-2xl"
            alt="Navira logo"
          />
          <a
            href="https://snaptiqz.com/event/navira/"
            onClick={handleRegisterClick}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-xl px-8 py-4 text-xl md:text-2xl font-primary text-white hover:bg-secondary hover:scale-95 transition duration-300 ease-in-out z-50 bg-primary"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
