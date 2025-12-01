
import { Marquee } from "../components/ui/marquee";
import Heading from "../components/Heading";


export default function Glimpse() {
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <Heading mainTitle="GLIMPSE" highlightedTitle="NAVIRA" />
      <div className="flex flex-col ">
        <Marquee>
          <img src="/assets/images/navira.jpeg"  alt="" className="w-100 rounded-xl"/>
          <img src="/assets/images/navira2.jpeg" alt="" className="w-100 rounded-xl"/>
          <img src="/assets/images/navira2.jpeg" alt="" className="w-100 rounded-xl"/>
        </Marquee>
        <Marquee reverse={true}>
          <img src="/assets/images/navira.jpeg"  alt="" className="w-100 rounded-xl"/>
          <img src="/assets/images/navira2.jpeg" alt="" className="w-100 rounded-xl"/>
          <img src="/assets/images/navira2.jpeg" alt="" className="w-100 rounded-xl"/>
        </Marquee>
      </div>
    </div>
  );
}
