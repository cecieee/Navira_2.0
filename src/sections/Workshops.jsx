import { useState, useRef } from "react";
import Heading from "../components/Heading";

const workshopsData = [
  {
    id: "01",
    workshopName: "Introduction to DevOps",
    speakerName: "Mr. Basil Reji",
    speakerRole: "DevOps Engineer",
    speakerExpertise: "Qburst Technologies",
    speakerImage: "/assets/Speakers/spk1.jpg",
    shortDesc:
      "This workshop introduces the core principles of DevOps, focusing on collaboration, automation, and continuous delivery. ",
    fullDesc:
      " This workshop introduces the core principles of DevOps, focusing on collaboration, automation, and continuous delivery. Participants gain hands-on experience with CI/CD pipelines, containerization, and cloud deployment, preparing them to build faster and more reliable software systems aligned with industry practices.",
  },
  {
    id: "02",
    workshopName: "Embedded Systems: Theory to Practical Architecture",
    speakerName: "Mr. Ashwin U P",
    speakerRole: "Design Engineer(SW)",
    speakerExpertise: "Digital Core Technologies Pvt Ltd",
    speakerImage: "/assets/Speakers/spk2.jpg",
    shortDesc:
      "This workshop introduces embedded systems through a blend of core theory and practical architecture. It equips learners with microcontroller basics, system design insights, and real-time implementation skills.",
    fullDesc:
      "This workshop introduces embedded systems through a blend of core theory and practical architecture. It equips learners with microcontroller basics, system design insights, and real-time implementation skills.",
  },
  {
    id: "03",
    workshopName: "AC to DC Conversion Techniques",
    speakerName: "Mr. Nithin Mathew Joji",
    speakerRole: "R & D Engineer",
    speakerExpertise: "SolarBase",
    speakerImage: "/assets/Speakers/spk3.jpg",
    shortDesc:
      "This workshop covers the fundamentals of converting AC power to DC using rectifiers and power converters.",
    fullDesc:
      "This workshop covers the fundamentals of converting AC power to DC using rectifiers and power converters. Through practical circuit sessions, participants learn how AC-to-DC systems support everyday electronics, renewable energy, and industrial applications—strengthening core electrical engineering skills.",
  },
];

function Workshops() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", `-9999px`);
    card.style.setProperty("--mouse-y", `-9999px`);
  };

  return (
    <>
      <section id="workshops" className="w-full ">
        <div className="w-[90vw] max-w-7xl flex-col flex gap-10 m-auto text-white py-20">
          <Heading mainTitle="Workshops" highlightedTitle="" />
          <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
            {workshopsData.map((workshop, index) => (
              <div
                key={workshop.id}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative w-[70%] md:w-1/3 h-[75vw] md:h-[30vw] md:min-h-[500px] m-auto md:m-0 rounded-xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] hover:border-white/40 active:shadow-[0_0_50px_rgba(255,255,255,0.15)] active:border-white/40"
                onClick={() => setSelectedWorkshop(workshop)}
              >
                {/* Spotlight Effect */}
                <div
                  className="pointer-events-none absolute -inset-px transition duration-300"
                  style={{
                    background: `radial-gradient(900px circle at var(--mouse-x) var(--mouse-y), rgba(0,265,255,0.35), transparent 40%)`,
                  }}
                />

                {/* Animated Border */}
                <div
                  className="absolute inset-0 z-10 pointer-events-none rounded-xl md:rounded-3xl opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"
                  style={{
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "5px",
                  }}
                >
                  <div className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#FFFFFF_360deg)] animate-[spin_4s_linear_infinite]" />
                </div>

                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-black/20  opacity-60 group-hover:opacity-90 group-active:opacity-90 transition-opacity duration-500" />

                {/* Rotating Read More Button */}
                <div className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-40 h-40 md:w-60 md:h-60 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-900 z-20 pointer-events-none">
                  <div
                    className="w-full h-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path
                        id={`curve-${workshop.id}`}
                        d="M 50, 50 m -48, 0 a 48,48 0 1,0 96,0 a 48,48 0 1,0 -96,0"
                        fill="transparent"
                      />
                      <text>
                        <textPath
                          href={`#curve-${workshop.id}`}
                          fill="white"
                          className="text-[10px] font-bold uppercase tracking-widest"
                        >
                          Click to see more • Click to see more •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Large Centered Number (Animated) */}
                <div className="absolute inset-0 flex flex-col p-4 md:p-8 pointer-events-none">
                  <div className="flex-1 transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:flex-none group-hover:h-0 group-active:flex-none group-active:h-0" />

                  <div className="relative w-fit transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] left-1/2 -translate-x-1/2 group-hover:left-0 group-hover:translate-x-0 group-active:left-0 group-active:translate-x-0">
                    <h1 className="font-thin transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] text-6xl md:text-9xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,1)] md:[-webkit-text-stroke:2px_rgba(255,255,255,1)] select-none group-hover:text-5xl md:group-hover:text-7xl group-hover:text-white group-active:text-4xl md:group-active:text-7xl group-active:text-white">
                      {workshop.id}
                    </h1>
                    <p className="text-base md:text-2xl font-sans font-bold absolute top-full left-1/2 -translate-x-1/2 w-48 md:w-60 text-center mt-2 md:mt-4 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-4 group-active:opacity-0 group-active:translate-y-4 px-4">
                      {workshop.workshopName}
                    </p>
                  </div>

                  <div className="flex-1 transition-all duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:flex-none group-hover:h-32 md:group-hover:h-44 group-active:flex-none group-active:h-8 md:group-active:h-44" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-8 pb-6 md:pb-8 translate-y-0 md:translate-y-[40%] group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-900 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none">
                  {/* Description */}
                  <p className="font-sans text-sm md:text-2xl font-bold text-gray-200 leading-tight md:leading-relaxed line-clamp-2 md:line-clamp-5 opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-500 delay-200">
                    {workshop.workshopName}
                  </p>
                  <p className="font-sans text-[10px] md:text-lg text-gray-200 leading-[1.3] md:leading-relaxed line-clamp-5 md:line-clamp-5 opacity-0 md:translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 group-active:opacity-100 group-active:translate-y-0 transition-all duration-500 delay-200">
                    {workshop.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedWorkshop && (
        <div
          className="fixed inset-0 z-50 flex items-center backdrop-blur-lg justify-center bg-linear-to-br from-black/20 to-secondary p-4 transition-all duration-300"
          onClick={() => setSelectedWorkshop(null)}
        >
          <div
            className="border backdrop-blur-3xl bg-linear-to-tl from-black to-secondary border-accent-1 rounded-2xl md:rounded-3xl w-[80vw] h-[70vh] md:w-full md:max-w-4xl md:h-auto md:max-h-[90vh] text-white relative shadow-2xl overflow-hidden animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/10 opacity-50 pointer-events-none" />
            <button
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors duration-300 z-20"
              onClick={() => setSelectedWorkshop(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row h-full">
              {/* Left Part */}
              <div className="w-full md:w-1/3 p-6 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-2 ring-primary/50 mb-4">
                  <img
                    src={selectedWorkshop.speakerImage}
                    alt={selectedWorkshop.speakerName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {selectedWorkshop.speakerName}
                </h3>
                <p className="text-primary text-sm md:text-base">
                  {selectedWorkshop.speakerRole}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mt-1">
                  {selectedWorkshop.speakerExpertise}
                </p>
              </div>

              {/* Right Part */}
              <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col overflow-y-auto no-scrollbar">
                <div className="flex-grow">
                  <span className="text-white/50 font-mono text-xs border border-white/20 px-2 py-0.5 rounded-full">
                    TRACK: {selectedWorkshop.id}
                  </span>
                  <h1 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-4 leading-tight">
                    {selectedWorkshop.workshopName}
                  </h1>
                  <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed">
                    {selectedWorkshop.fullDesc}
                  </p>
                </div>
                {/* <div className="mt-6 text-center md:text-right">
                  <button className="bg-primary text-white font-bold py-2 px-6 rounded-xl hover:bg-primary/80 transition-all duration-300 ">
                    Register Now
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Workshops;
