import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2026-01-15 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  // Carousel Column Component
  const CarouselColumn = ({ value, max, label }) => {
    // We need to detect change to trigger animation
    const [displayValue, setDisplayValue] = useState(value);
    const [isAnimating, setIsAnimating] = useState(false);
    const prevValueRef = useRef(value);

    useLayoutEffect(() => {
      if (value !== prevValueRef.current) {
        prevValueRef.current = value;
        setIsAnimating(true);
        setDisplayValue(value); // Update to new value immediately

        const timer = setTimeout(() => {
          setIsAnimating(false);
        }, 500); // Match CSS duration
        return () => clearTimeout(timer);
      }
    }, [value]);

    // Helper for wrapping numbers
    const getVal = (base, offset) => {
      let v = base + offset;
      if (max) {
        while (v < 0) v += max;
        while (v >= max) v -= max;
      }
      return v;
    };

    // Generate window: [val+2, val+1, val, val-1, val-2]
    // Center is index 2.
    // We render based on NEW value.
    // So Center (Index 2) is the NEW value.
    // Previous value (NEW + 1) is at Index 1.

    // Animation Logic:
    // We want to animate from "Previous State" to "New State".
    // Previous State: The "Previous Value" was at Center.
    // In our current list (centered on NEW value), the "Previous Value" is at Index 1 (above center).
    // So physically, the list should start shifted DOWN (translateY +1 unit) so Index 1 is visually at center.
    // Then animate to translateY(0).

    const itemHeight = 6; // rem
    const offsets = [2, 1, 0, -1, -2]; // 5 items visible

    return (
      <div className="flex flex-col items-center gap-2 relative">
        <div
          className="relative overflow-hidden w-[5rem] md:w-[7rem]"
          style={{ height: `${itemHeight}rem` }}>
          <div
            className="flex flex-col items-center absolute top-0 left-0 right-0"
            style={{
              // Initial position (static): Center item (Index 2) is at top 0? No.
              // We want Index 2 to be in the "window".
              // If window height = itemHeight (1 unit).
              // We want Index 2 to be visible.
              // So we translate list up by 2 units. `translateY(-2 * h)`.

              // Animation:
              // Start: `translateY(-2 * h + 1 * h)` = `translateY(-1 * h)`. (Shifted down 1 unit)
              // End: `translateY(-2 * h)`.

              transform: isAnimating
                ? `translateY(${-1 * itemHeight}rem)` // Start pos (simulating prev state)
                : `translateY(${-2 * itemHeight}rem)`, // End pos (current state)

              // Wait, if we use CSS transition, we need to toggle class?
              // If we just set style, React might not animate if we don't force a reflow or use a keyframe.
              // Actually, simpler:
              // We are ALWAYS at `translateY(-2 * h)` (Static state).
              // When value changes, we want to momentarily jump to `translateY(-1 * h)` (NO transition),
              // then animate to `translateY(-2 * h)` (WITH transition).
              // But React renders once.
              // So we use a keyframe animation!

              animation: isAnimating
                ? "slideUp 0.5s ease-in-out forwards"
                : "none",
            }}>
            {offsets.map((offset, idx) => {
              const val = getVal(displayValue, offset);

              // Style Logic:
              // We want to interpolate styles.
              // Index 2 (Center, New Value): Starts Outline -> Ends Filled.
              // Index 1 (Above, Prev Value): Starts Filled -> Ends Outline.
              // Others: Always Outline.

              let animationClass = "";
              if (isAnimating) {
                if (idx === 2) animationClass = "animate-outline-to-filled";
                if (idx === 1) animationClass = "animate-filled-to-outline";
              } else {
                if (idx === 2)
                  animationClass =
                    "text-white opacity-100 stroke-none scale-110"; // Static Filled
                else
                  animationClass =
                    "text-transparent opacity-50 stroke-cyan scale-90"; // Static Outline
              }

              return (
                <div
                  key={`${val}-${idx}`} // Stable key for this position in the list
                  className={`flex items-center justify-center font-bold tracking-tighter h-[6rem] text-5xl md:text-7xl font-oswald ${animationClass}`}
                  style={{
                    // Fallback/Base styles if not animating
                    fontFamily: "Oswald, sans-serif",
                    // We use classes for animation to ensure sync with transform
                  }}>
                  {String(val).padStart(2, "0")}
                </div>
              );
            })}
          </div>

          {/* Gradient Masks */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary via-transparent to-secondary pointer-events-none z-20"></div>
        </div>
        <span className="text-accent-2 font-script text-xl tracking-wider">
          {label}
        </span>

        {/* Define Keyframes locally or in global CSS. Let's inject style tag for simplicity and robustness */}
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(${-1 * itemHeight}rem); }
            to { transform: translateY(${-2 * itemHeight}rem); }
          }
          .animate-outline-to-filled {
            animation: outlineToFilled 0.5s ease-in-out forwards;
          }
          .animate-filled-to-outline {
            animation: filledToOutline 0.5s ease-in-out forwards;
          }
          @keyframes outlineToFilled {
            from {
              color: transparent;
              -webkit-text-stroke: 1px rgba(74, 176, 195, 0.6);
              opacity: 0.5;
              transform: scale(0.9);
            }
            to {
              color: #ffffff;
              -webkit-text-stroke: 0px;
              opacity: 1;
              transform: scale(1.1);
            }
          }
          @keyframes filledToOutline {
            from {
              color: #ffffff;
              -webkit-text-stroke: 0px;
              opacity: 1;
              transform: scale(1.1);
            }
            to {
              color: transparent;
              -webkit-text-stroke: 1px rgba(74, 176, 195, 0.6);
              opacity: 0.5;
              transform: scale(0.9);
            }
          }
          /* Static classes helper */
          .stroke-cyan { -webkit-text-stroke: 1px rgba(74, 176, 195, 0.6); }
          .stroke-none { -webkit-text-stroke: 0px; }
        `}</style>
      </div>
    );
  };

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-[#0a3a4a] to-secondary">
        <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-linear-to-r from-primary/10 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent-2/10 rounded-full blur-[80px]" />
      </div>

      {/* Countdown Grid */}
      <div className="relative z-10 flex items-center justify-center gap-4 md:gap-8 lg:gap-12 px-4">
        <CarouselColumn value={timeLeft.days} max={null} label="Days" />
        <div className="text-4xl md:text-6xl text-primary/50 font-bold pb-8">
          :
        </div>
        <CarouselColumn value={timeLeft.hours} max={24} label="Hours" />
        <div className="text-4xl md:text-6xl text-primary/50 font-bold pb-8">
          :
        </div>
        <CarouselColumn value={timeLeft.minutes} max={60} label="Minutes" />
        <div className="text-4xl md:text-6xl text-primary/50 font-bold pb-8">
          :
        </div>
        <CarouselColumn value={timeLeft.seconds} max={60} label="Seconds" />
      </div>
    </section>
  );
};

export default Countdown;
