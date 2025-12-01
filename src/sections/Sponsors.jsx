import Heading from "../components/Heading.jsx";

function SponsorCard({ sponsor, subtitle = "Ticketing Partner", logoSrc }) {
  return (
    <div className="group relative w-full max-w-[300px] sm:max-w-[320px]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex flex-col items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-inset ring-white/10 bg-gradient-to-br from-white/10 to-transparent grid place-items-center">
          {logoSrc ? (
            <img
              src={logoSrc}
              alt={sponsor}
              className="h-16 w-auto object-contain transition duration-300"
              loading="lazy"
            />
          ) : (
            <span className="text-center text-2xl font-semibold tracking-tight text-white/80 group-hover:text-white transition-colors">
              {sponsor}
            </span>
          )}

          <div
            className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "radial-gradient(120px 80px at var(--x,50%) var(--y,50%), rgba(255,255,255,0.15), transparent)",
            }}
          />
        </div>

        <div className="mt-4 w-full text-center">
          <h3 className="mt-2 text-2xl font-semibold">{sponsor}</h3>
          <p className="mx-auto inline-flex items-center gap-2 rounded-full px-3 py-1 text-lg font-medium text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Sponsors() {
  // Example data; replace with real sponsors when available
  const sponsors = [
    { name: "Snaptics", subtitle: "Ticketing Partner" , logo: "/assets/logos/sponsors/snaptics.png"},

  ];

  return (
    <section
      id="sponsors"
      className="flex flex-col items-center justify-center text-white py-20">
      <div className="w-full px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center p-6 sm:p-8 lg:p-10">
            <Heading mainTitle="Our" highlightedTitle="Sponsors" />
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {sponsors.map((s) => (
              <SponsorCard
                key={s.name}
                sponsor={s.name}
                subtitle={s.subtitle}
                logoSrc={s.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
