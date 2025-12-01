import React, { useEffect, useMemo, useState } from "react";

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
    <section className="px-4 py-8">
      <div className="text-center">
        <h2 className="text-4xl text-primary font-primary  font-semibold tracking-tight mb-24">
          EVENT STARTS IN
        </h2>
        <div className="inline-flex items-center gap-4 sm:gap-16 font-teko">
          <TimeBox label="Days" value={String(days)} />
          <Separator />
          <TimeBox label="Hours" value={pad2(hours)} />
          <Separator />
          <TimeBox label="Minutes" value={pad2(minutes)} />
          <Separator />
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
    <div className=" text-center flex relative  items-center justify-center ">
      <div className="text-8xl z-10 text-primary font-semibold leading-none">
        {value}
      </div>
      {/* <span className="size-90 z-0 rounded-full bg-primary/30 absolute -right-30 top-20"></span> */}
      <div className="mt-1 text-4xl text-accent-1 absolute bottom-0  uppercase left-[125%] origin-left -rotate-90">{label}</div>
    </div>
  );
}

function Separator() {
  return <span className="text-xl sm:text-2xl">:</span>;
}
