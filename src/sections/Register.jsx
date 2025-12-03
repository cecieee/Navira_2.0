import React from "react";
import Heading from "../components/Heading.jsx";
import RegisterCard from "../components/RegisterCard";
import { useRegistration } from "../lib/useRegistration";

export default function Register() {
  const { handleRedirect } = useRegistration();

  const TIcketDetails = [
    {
      category: "IEEE WIE/IAS Members",
      price: 849,
      earlyprices: 549,
    },
    {
      category: "IEEE Members",
      price: 969,
      earlyprices: 669,
    },
    {
      category: "Non-IEEE Members",
      price: 1289,
      earlyprices: 919,
    },
  ];

  return (
    <div
      id="register"
      className="flex flex-col gap-3 items-center justify-center text-white py-20"
    >
      <div className="flex flex-col p-8 lg:p-10 ">
        <Heading mainTitle="Register" highlightedTitle="Now" />
      </div>
      <div
        className="flex gap-10 flex-wrap justify-center w-full"
        onClick={handleRedirect}
      >
        {TIcketDetails.map((ticket, index) => (
          <RegisterCard
            key={index}
            delay={index * 100}
            category={ticket.category}
            price={ticket.price}
            earlyprices={ticket.earlyprices}
            qrcode={"/assets/qrcodes/" + (index + 1) + ".png"}
          />
        ))}
      </div>
    </div>
  );
}
