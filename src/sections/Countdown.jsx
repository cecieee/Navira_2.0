import React, { useEffect, useMemo, useState } from "react";
import Heading from "../components/Heading";

export default function Countdown() {
  // Change this to your target end date/time (ISO or epoch millis)
  const END_TIME = useMemo(
    () => new Date("2025-12-31T23:59:59Z").getTime(),
    []
  );

  const [timeLeft, setTimeLeft] = useState(() => {
    const now = Date.now();
    return Math.max(END_TIME - now, 0);
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const tick = () => {
      const now = Date.now();
      const remaining = Math.max(END_TIME - now, 0);
      setTimeLeft(remaining);
    };
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [END_TIME]);

  const { days, hours, minutes, seconds } = useMemo(() => {
    let remaining = Math.max(timeLeft, 0);
    const d = Math.floor(remaining / (24 * 60 * 60 * 1000));
    remaining %= 24 * 60 * 60 * 1000;
    const h = Math.floor(remaining / (60 * 60 * 1000));
    remaining %= 60 * 60 * 1000;
    const m = Math.floor(remaining / (60 * 1000));
    remaining %= 60 * 1000;
    const s = Math.floor(remaining / 1000);
    return { days: d, hours: h, minutes: m, seconds: s };
  }, [timeLeft]);

  const pad2 = (n) => String(n).padStart(2, "0");

  return (
    <section className="px-4 py-20 flex items-center justify-center relative">
      <div className="text-center flex flex-col items-center justify-center gap-8">
        <span className="w-full h-0.5 top-[58%] bg-accent-1/70 absolute"></span>
        <span className="w-full h-0.5 top-[64%] bg-accent-1/70 absolute"></span>
        <span className="size-30 rounded-full border border-accent-1 absolute -left-15 bg-secondary top-[54%] sm:top-[50%] lg:top-[45%]"></span>
        <span className="size-20 rounded-full border border-accent-1 absolute -left-10 bg-secondary top-[56.5%] sm:top-[54%] lg:top-[51%]"></span>
        <span className="size-30 rounded-full border border-accent-1 absolute -right-15 bg-secondary top-[54%] sm:top-[50%] lg:top-[45%]"></span>
        <span className="size-20 rounded-full border border-accent-1 absolute -right-10 bg-secondary top-[56.5%] sm:top-[54%] lg:top-[51%]"></span>
        <Heading mainTitle="Event" highlightedTitle="Starts In" />
        <div className="inline-flex items-center gap-4 justify-center sm:gap-16 font-teko flex-col sm:flex-row sm:flex-wrap">
          <TimeBox label="Days" value={String(days)} />
          {/* <Separator /> */}
          <TimeBox label="Hours" value={pad2(hours)} />
          {/* <Separator /> */}
          <TimeBox label="Minutes" value={pad2(minutes)} />
          {/* <Separator /> */}
          <TimeBox label="Seconds" value={pad2(seconds)} />
        </div>
        {timeLeft === 0 && (
          <p className="mt-3 text-sm text-gray-600">Time is up!</p>
        )}
      </div>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className=" text-center flex relative  items-center justify-center bg-secondary ">
      <div className="text-8xl z-10 text-primary font-semibold leading-none">
        {value}
      </div>
      {/* <span className="size-90 z-0 rounded-full bg-primary/30 absolute -right-30 top-20"></span> */}
      <div className="pt-1 text-4xl text-accent-1 absolute bottom-0  uppercase left-[125%] origin-left -rotate-90 bg-secondary">{label}</div>
    </div>
  );
}

function Separator() {
  return <span className="text-xl sm:text-2xl">:</span>;
}
