import React from "react";

function FeatureCard({ feature, roundedCorners }) {
  return (
    <div
      className={`bg-[#062B39] p-4 border border-[#4AB0C3] ${roundedCorners}`}
    >
      <div className="flex items-start space-x-2">
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {feature.icon}
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-1 text-white leading-snug">
            {feature.title}
          </h3>
          <p className="text-[#C6E6EC] text-sm md:text-base leading-snug">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyNavira() {
  const features = [
    {
      title: "Group Discussion",
      description:
        "Network and communicate through a professional GD session—an extraordinary platform to explore and express intellect.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#4AB0C3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-3-3h-2m-6 5v-4a3 3 0 013-3h4a3 3 0 013 3v4M7 20h5v-4a3 3 0 00-3-3H7a3 3 0 00-3 3v4h3z"
          />
        </svg>
      ),
    },
    {
      title: "Startup Mentoring",
      description:
        "A dynamic mentoring session with an expert entrepreneur providing insights, strategies, and real-world startup guidance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#4AB0C3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12l9-5-9-5-9 5 9 5z M12 12v10 M12 12l-9-5"
          />
        </svg>
      ),
    },
    {
      title: "Culturals",
      description:
        "An evening filled with cultural performances and vibrant celebrations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#4AB0C3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7 7h10v10H7V7z"
          />
        </svg>
      ),
    },
    {
      title: "Industrial Visits",
      description:
        "Experience behind-the-scenes innovation: KSEB substation, Kerala Water Authority, and ASAP Kunnamthanam.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-[#4AB0C3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21v-6h18v6H3z M3 3h18v12H3V3z"
          />
        </svg>
      ),
    },
  ];

  const roundedClasses = [
    "rounded-tr-xl rounded-br-xl rounded-bl-xl", // top-left
    "rounded-tl-xl rounded-bl-xl rounded-br-xl", // top-right
    "rounded-tl-xl rounded-tr-xl rounded-br-xl", // bottom-left 
    "rounded-tl-xl rounded-tr-xl rounded-bl-xl", // bottom-right
  ];

  const imageSrc = "/assets/iv/sample.webp";

  return (
    <section className="w-full bg-[#062B39] text-white px-6 md:px-16 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-snug text-center">
          Why <span className="text-[#4AB0C3]">Navira</span>?
        </h2>
        <p className="text-base md:text-lg text-[#C6E6EC] max-w-3xl leading-snug mb-8 text-center mx-auto">
          Navira offers exciting activities beyond workshops, providing a rich learning and networking experience.
        </p>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-1/2">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                feature={feature}
                roundedCorners={roundedClasses[index]}
              />
            ))}
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src={imageSrc}
              alt="Navira"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
