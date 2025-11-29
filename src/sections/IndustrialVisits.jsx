import React, { useState } from "react";

const visits = [
  {
    number: "01",
    title: "WATER AUTHORITY",
    desc: "The participants gain an in-depth understanding of sectoral ecosystems with a visit to the Kerala Water Authority Sub Division Office, Tiruvalla.",
    img: "/assets/iv/sample.webp",
  },
  {
    number: "02",
    title: "KSEB (220kV SUBSTATION)",
    desc: "Students explore major electrical infrastructure and understand how high-voltage transmission systems operate safely.",
    img: "/assets/iv/sample.webp",
  },
  {
    number: "03",
    title: "ASAP COMMUNITY SKILL PARK",
    desc: "Participants experience hands-on learning with industry-oriented training modules provided by ASAP Kerala.",
    img: "/assets/iv/sample.webp",
  },
];

export default function IndustrialVisits() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-primary tracking-wider">
            OUR <span className="text-primary">APPROACH</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-start">
          {/* Left Side - Large Featured Image */}
          <div className="w-full">
            <div className="relative bg-[#0A2F3F] rounded-lg overflow-hidden shadow-2xl border-4 border-primary/30">
              <img
                src={visits[selectedIndex].img}
                alt={visits[selectedIndex].title}
                className="w-full h-auto aspect-3/4 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Vertical Cards */}
          <div className="w-full flex flex-col justify-start space-y-0">
            {visits.map((visit, index) => (
              <div
                key={index}
                className="relative border-l-4 border-gray-700 pl-0">
                {/* Card Header - Always Visible */}
                <div
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? -1 : index)
                  }
                  className="cursor-pointer py-6 px-6 hover:bg-gray-900/20 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <div className="text-6xl font-light text-gray-600 leading-none">
                      {visit.number}
                    </div>

                    {/* Title */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-base md:text-lg font-bold text-gray-400 tracking-wide uppercase">
                        {visit.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Expandable Content - Only for Selected Card */}
                {selectedIndex === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="pl-20">
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                        {visit.desc}
                      </p>

                      {/* Learn More Button */}
                      <button className="inline-flex items-center justify-center px-6 py-2 border-2 border-primary rounded-full text-primary text-sm font-semibold hover:bg-primary hover:text-background transition-all duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                )}

                {/* Divider Line - except for last item */}
                {index < visits.length - 1 && (
                  <div className="border-b border-gray-800 ml-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
