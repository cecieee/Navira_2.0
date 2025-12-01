import Heading from "../components/Heading";

import IEEE_LOGO from "/assets/logos/IEEE-logo-WHITE.png";
import IEEE_SB_LOGO from "/assets/logos/ieee_sb_cec_logo_white.png";
import WIE_LOGO from "/assets/logos/wie-WHITE.png";
import IAS_LOGO from "/assets/logos/ias-png-white.png";


export default function Organizer() {

  const Logos = [
    IEEE_LOGO,
    IEEE_SB_LOGO,
    WIE_LOGO,
    IAS_LOGO,

  ];


  return (
    <div className="flex flex-col items-center justify-center w-screen p-10 py-14 h-fit">
      <div className="flex flex-col justify-center w-full mb-20">
        <Heading mainTitle="Organizers" highlightedTitle="" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-16">
        {Logos.map((items, index) => (
          <img src={items} className="h-15" data-aos="fade-up" data-aos-delay={`${index * 100}`} />
        ))}
      </div>
    </div>
  );
}