import { useState } from "react";
import Heading from "../components/Heading.jsx";

const visits = [
  {
    number: "01",
    title: "WATER AUTHORITY",
    desc: "The participants gain an in-depth understanding of sectoral ecosystems with a visit to the Kerala Water Authority Sub Division Office, Tiruvalla.",
    img: "/assets/iv/IV1.jpeg",
  },
  {
    number: "02",
    title: "KSEB (220kV SUBSTATION)",
    desc: "Students explore major electrical infrastructure and understand how high-voltage transmission systems operate safely.",
    img: "/assets/iv/IV2.webp",
  },
  {
    number: "03",
    title: "ASAP COMMUNITY SKILL PARK",
    desc: "Participants experience hands-on learning with industry-oriented training modules provided by ASAP Kerala.",
    img: "/assets/iv/IV3.webp",
  },
];

export default function IndustrialVisits() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="iv" className="py-12 md:py-20 md:px-24 bg-background">
      <div className=" w-fullpx-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Section Header */}
        <Heading mainTitle="INDUSTRIAL" highlightedTitle="VISITS" />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16 items-start">
          {/* Left Side - Large Featured Image */}
          <div className="w-full">
            <div data-aos="fade-up"  className="relative bg-[#0A2F3F] rounded-lg overflow-hidden shadow-2xl shadow-primary/30">
              <img
                src={visits[selectedIndex].img}
                alt={visits[selectedIndex].title}
                
                className="w-full h-auto  object-cover"
              />
            </div>
          </div>

          {/* Right Side - Vertical Cards */}
          <div className="w-full flex flex-col justify-start space-y-0">
            {visits.map((visit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className={`relative overflow-hidden transition-all ease-in-out border-l-4 ${
                  selectedIndex === index ? "border-primary h-60 md:h-40" : "border-gray-700 h-20"
                } pl-0`}>
                {/* Card Header - Always Visible */}
                <div
                  onClick={() =>
                    setSelectedIndex(selectedIndex === index ? -1 : index)
                  }
                  className="cursor-pointer group py-6 px-6 transition-colors">
                  <div className="flex items-start gap-4">
                    {/* Number */}
                    <div
                      className={`text-6xl font-teko transition-all ease-in-out leading-none ${
                        selectedIndex === index
                          ? "text-primary"
                          : "group-hover:text-primary text-gray-600"
                      }`}>
                      {visit.number}
                    </div>

                    {/* Title */}
                    <div className="flex-1 pt-2">
                      <h3
                        className={` transition-all  text-xl md:text-2xl ease-in-out duration-120 font-bold ${
                          selectedIndex === index
                            ? "text-primary "
                            : "group-hover:text-primary text-gray-400"
                        } tracking-wide uppercase`}>
                        {visit.title}
                      </h3>
                    </div>
                  </div>

                  {/* Expandable Content - Only for Selected Card */}

                  <div
                    className={`pb-6  transistion-all ease-in-out overflow-hidden ${
                      selectedIndex === index ? "h-40 md:h-20" : "h-0"
                    }`}>
                    <div className="pl-14">
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">
                        {visit.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
