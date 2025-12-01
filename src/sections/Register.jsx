import React from "react";
import Heading from "../components/Heading.jsx";
import RegisterCard from "../components/RegisterCard";

export default function Register() {
  const TIcketDetails = [
    {
      category: "IEEE WIE/IAS Members",
      price: 800,
      earlyprices: 600,
      registerLink: "https://ieeewie.org/membership"
    },
    {
      category: "IEEE Members",
      price: 1000,
      earlyprices: 800,
      registerLink: "https://ieeewie.org/membership"
    },
    {
      category: "Non-IEEE Members",
      price: 1200,
      earlyprices: 1000,
      registerLink: "https://ieeewie.org/membership"
    },
  ];

  return (
    <div className="flex flex-col gap-3 items-center justify-center text-white py-20">
      <div className="flex flex-col p-8 lg:p-10 ">
        <Heading mainTitle="Register" highlightedTitle="Now" />
      </div>
      <div className="flex gap-10 flex-wrap justify-center w-full">
        {TIcketDetails.map((ticket, index) => (
          <RegisterCard
            key={index}
            delay={index * 100}
            category={ticket.category}
            price={ticket.price}
            earlyprices={ticket.earlyprices}
            registerLink={ticket.registerLink}
            qrcode={"/assets/qrcodes/" + (index + 1) + ".png"}
          />
        ))}
      </div>
    </div>
  );
}
