import React from "react";

export default function Heading({ mainTitle, highlightedTitle }) {
  return (
    <div
      className="relative z-20 w-full  text-center   flex justify-center items-center"
      data-aos="fade-up">
      <div className="flex flex-row items-center w-fit justify-center gap-2 sm:gap-4">
        <h1 className="text-3xl w-fit md:px-0 sm:text-4xl md:text-5xl text-white lg:text-5xl tracking-widest font-primary">
          {mainTitle}
        </h1>
        <div className="w-fit text-left h-12 sm:h-16 md:h-20 flex items-center justify-start">
          <span className="text-3xl w-fit sm:text-4xl md:text-5xl lg:text-6xl tracking-widest inline-flex overflow-hidden text-primary font-primary">
            {highlightedTitle}
          </span>
        </div>
      </div>
    </div>
  );
}
