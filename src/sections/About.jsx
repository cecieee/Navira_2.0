import { useState, useEffect } from "react";

import Heading from "../components/Heading.jsx";

function About() {
  return (
    <div
      id="about"
      className="relative w-full min-h-[70vh] text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
    >
      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
      </div> */}

      {/* Title Section */}
      <Heading mainTitle="About" highlightedTitle="Navira" />

      {/* Content Container */}
      <div className="font-semibold relative z-20 mt-6 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image with Enhanced Design */}
          <div className="w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md sm:max-w-lg group">
              {/* Decorative border frame */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-6"></div>
              <div className="absolute -inset-2 border border-accent-2/20 rounded-2xl transform -rotate-2 transition-transform duration-500 group-hover:-rotate-3"></div>

              {/* Main image container */}
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-primary/40">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent-2/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                <img
                  src="/assets/images/navira.jpeg"
                  alt="Navira Event"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Glowing corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-xl opacity-60"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-xl opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content with Enhanced Typography */}
          <div className="w-full flex flex-col justify-center order-1 lg:order-2 px-2 sm:px-4 lg:px-0">
            {/* Main description */}
            <div className="space-y-4">
              <p className="font-sans text-base sm:text-lg leading-relaxed text-gray-300">
                <span className="text-primary font-semibold">
                  Navira: Journey Beyond Limits
                </span>
                , an all-Kerala event by IEEE Women in Engineering Affinity
                Group College of Engineering Chengannur (WIE AG CEC), and IEEE
                Industry Applications Society Student Branch Chapter College of
                Engineering Chengannur (IAS SBC CEC), emerges as a perfect
                platform to blend knowledge, creativity, and innovation.
              </p>

              <p className="font-sans text-base sm:text-lg leading-relaxed text-gray-300">
                NAVIRA 2.0 marks the return of our flagship event after the
                award-winning success of its inaugural edition, which received
                the Outstanding Event Award from the IEEE IA/IE/PELS Jt. Chapter
                Kerala. Organized by IEEE IAS SBC and IEEE WIE AG of CEC, Navira
                2.0 continues to unite innovation, industry exposure, and
                student empowerment under one dynamic platform, encouraging
                participants to push boundaries, enhance skills, and truly
                journey beyond limits.
              </p>
            </div>

            {/* Stats or highlights */}
            {/* <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-primary/20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-primary">
                  2025
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">
                  Edition
                </div>
              </div>
              <div className="text-center border-x border-primary/20">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-primary">
                  ALL
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">
                  Kerala
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary font-primary">
                  IEEE
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide mt-1">
                  Powered
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
