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

  const toggleCard = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-[#062B39] to-[#0A4A5F]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Industrial <span className="text-[#4AB0C3]">Visits</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[#C6E6EC] max-w-2xl mx-auto px-2">
            Hands-on learning experiences that bridge the gap between theoretical knowledge and real-world applications
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-items-center">
          {visits.map((visit, index) => (
            <div 
              key={index} 
              className="relative w-full max-w-[320px] mb-6 md:mb-0 cursor-pointer md:cursor-auto"
              onClick={() => toggleCard(index)}
            >
              {/* OUTER SHAPE - Lighter color */}
              <div className="absolute inset-0 bg-[#0A3A4F] rounded-[20px] shadow-xl md:shadow-2xl"></div>

              {/* INNER BORDER SHAPE */}
              <div className="absolute inset-1 border-4 border-[#4AB0C3] rounded-[16px]"></div>

              {/* RECTANGULAR IMAGE */}
              <div className="relative z-10 flex justify-center -mt-8 md:-mt-10 mb-4">
                <div className="w-full max-w-[280px] h-48 md:h-56 bg-[#0A3A4F] rounded-xl p-1 shadow-lg md:shadow-xl">
                  <div className="w-full h-full border-4 border-[#4AB0C3] rounded-lg overflow-hidden">
                    <img
                      src={visit.img}
                      alt={visit.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {}
              <div className="relative z-10 px-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  {visit.title}
                </h3>
              </div>

              {/* DESCRIPTION BOX - Hidden on mobile by default, shown on click */}
              <div className={`
                relative z-10 px-4 pb-6 text-center transition-all duration-300
                md:flex md:flex-col md:justify-center
                ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                md:max-h-96 md:opacity-100
              `}>
                <p className="text-sm md:text-base text-[#C6E6EC] leading-relaxed">
                  {visit.desc}
                </p>
              </div>

              {/* Mobile Tap Indicator */}
              <div className={`
                md:hidden text-center text-xs text-[#4AB0C3] mt-2 transition-opacity duration-300
                ${openIndex === index ? 'opacity-0' : 'opacity-100'}
              `}>
                Tap to {openIndex === index ? 'close' : 'read more'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}