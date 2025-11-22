import React, { useState } from "react";

const visits = [
  {
    title: "Water Authority",
    desc: "The participants gain an in-depth understanding of sectoral ecosystems with a visit to the Kerala Water Authority Sub Division Office, Tiruvalla.",
    img: "/assets/iv/sample.webp",
  },
  {
    title: "KSEB (220kV Substation)",
    desc: "Students explore major electrical infrastructure and understand how high-voltage transmission systems operate safely.",
    img: "/assets/iv/sample.webp",
  },
  {
    title: "ASAP Community Skill Park",
    desc: "Participants experience hands-on learning with industry-oriented training modules provided by ASAP Kerala.",
    img: "/assets/iv/sample.webp",
  },
];

export default function IndustrialVisits() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (i) => {
    // Mobile tap toggle
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-[#062B39]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Industrial Visits
        </h2>

        {/* Cards */}
        <div
          className="
            grid grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-10 
            justify-center 
            place-items-center
            mt-14
          "
        >
          {visits.map((v, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                className={`
                  group
                  relative
                  rounded-2xl 
                  overflow-hidden 
                  shadow-xl 
                  border 
                  w-72
                  transition-all duration-500
                  ${isOpen ? "bg-[#F3D9BF]" : "bg-white/5 border-[#4AB0C3]/30"}
                  hover:bg-[#F3D9BF]
                `}
                onClick={() => toggleCard(i)}
              >
                {/* Image */}
                <img
                  src={v.img}
                  alt={v.title}
                  className="
                    w-full 
                    h-48
                    object-cover 
                    object-center
                    transition-all
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* Title Bar */}
                <div className="bg-[#C6E6EC] text-[#062B39] py-3 px-4">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                </div>

                {/* Description Panel (Hover + Mobile Toggle) */}
                <div
                  className={`
                    absolute 
                    left-0 
                    right-0 
                    bottom-0
                    bg-[#F3D9BF]
                    text-[#062B39]
                    p-5
                    transition-all duration-500
                    ${
                      isOpen
                        ? "translate-y-0 opacity-100"
                        : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }
                  `}
                >
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
