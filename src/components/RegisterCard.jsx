import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";


export default function RegisterCard(props) {
  // Refs for animation
  const cardRef = useRef(null);
  const crossRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);


  return (
    <>
      <div
        className="w-[600px] h-[210px] text-white rounded-xl bg-linear-to-br from-black to-secondary/50 border border-accent-1 flex relative  max-[412px]:h-fit"
        data-aos="fade-up"
        data-aos-delay={`${props.delay}`}
        ref={cardRef}>
        <div className="flex flex-col text-left p-7 basis-4/6 justify-center max-[412px]:basis-full max-[412px]:p-5">
          {/* Early Bird */}
          <h3
            className="text-xl font-bold font-poppins"
            ref={text1Ref}>
            Early Bird
          </h3>
          <div className="flex gap-3">
            <h3 className="relative text-3xl font-bold font-poppins ">
              <span
                className="absolute block w-full h-1 bg-black top-1/2 transistion-all"
                ref={crossRef}></span>
              ₹{props.price}
            </h3>
            {/* Early Bird */}
            <h3
              className="text-3xl font-bold  font-poppins "
              ref={text2Ref}>
              ₹{props.earlyprices}
            </h3>
          </div>
          <p className="text-lg font-poppins">Tickets for</p>
          <p className="text-xl font-extrabold">{props.category}</p>
          <a href="https://snaptiqz.com/event/navira/" target="_blank" rel="noopener noreferrer" className="font-bold text-secondary whitespace-nowrap cursor-pointer max-[430px]:w-fit max-[430px]:px-2 py-2 my-2 rounded-md border border-transparent font-poppins flex justify-center items-center w-[60%] bg-accent-2 hover:bg-secondary/30 hover:border-accent-1 transition ease-in-out duration-300 hover:text-white ">
            Register
          </a>
        </div>
        <div className="relative flex items-center justify-center w-5 h-full max-[412px]:hidden">
          <div className="absolute w-5 h-5 bg-secondary rounded-full -top-2"></div>
          <div className="h-[80%] border-2 border-dashed border-accent-1 "></div>
          <div className="absolute w-5 h-5 bg-secondary rounded-full -bottom-2"></div>
        </div>
        <div className="flex flex-col items-center justify-center basis-1/6 grow max-[412px]:hidden">
          <img src="/assets/qr-code-bgless.png" alt="" className="w-full pr-2" />
        </div>
      </div>
    </>
  );
}
