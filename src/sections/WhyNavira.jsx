import Heading from "../components/Heading";

export default function WhyNavira() {
  const Data = [
    {
      title: "Startup Mentoring",
      description: `A dynamic startup mentoring session with an expert entrepreneur.
      Unlock insights, strategies, and real-world tips to fuel your
      business dreams. Don’t miss this opportunity to elevate your startup
      journey!c`,
      style: "h-120",
      contentStyle: "h-2/3",
    },
    {
      title: "Industrial Visits",
      description:
        "Takes you behind the scenes of innovation with visits to the KSEB substation, Kerala Water Authority, and ASAP Kunnamthanam, exploring power, sustainability, and skill development!",
      style: "h-80",
      contentStyle: "h-2/3",
    },
    {
      title: "Culturals",
      description:
        "Adding to the mesmerizing experience of Navira, indulge in an evening of culturals with refreshing performances and exquisite celebrations.",
      style: "h-80",
      contentStyle: "h-2/3",
    },
    {
      title: "Group Discussion",
      description:
        "Navira brings a great opportunity for participants to network and communicate with each other through the Group Discussion Session handled by skilled professionals.",
      style: "h-120",
      contentStyle: "h-2/3",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center justify-center text-white py-20">
      <div className="flex flex-col p-8 lg:p-10 ">
        <Heading mainTitle="Why" highlightedTitle="Navira?" />
        <p className="md:w-120 text-center" data-aos="fade-up">
          Navira comes with alot of exciting activities apart from the
          workshops.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-4  px-8 lg:px-8 justify-items-center items-center w-fit ">
        {Data.map((item, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`} className={`size-70 bg-linear-to-br from-primary to-black shadow shadow-accent-1 rounded-xl p-8 relative sm:even:top-10`}>
            <div
              className={`flex flex-col `}>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
