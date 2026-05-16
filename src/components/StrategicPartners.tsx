import promaxUnitedLogo from "@/assets/partners/promax-united-logo.jpg";
import promaxInvestmentsLogo from "@/assets/partners/promax-investments-logo.png";
import ppiLogo from "@/assets/partners/ppi-logo.png";
import cpibLogo from "@/assets/partners/cpib-logo.png";

const partners = [
  { name: "Promax United", logo: promaxUnitedLogo, scale: 1.15 },
  { name: "Promax Investments", logo: promaxInvestmentsLogo, scale: 1.15 },
  { name: "PPI — Palm Promax Investments", logo: ppiLogo, scale: 1.15 },
  { name: "CPIB", logo: cpibLogo, scale: 0.7 },
];

type Props = { embedded?: boolean };

const StrategicPartners = ({ embedded = false }: Props) => {
  const Marquee = (
    <div className="-mx-4 sm:-mx-6 overflow-hidden marquee-mask">
      <div className="flex w-max animate-marquee">
        {[...partners, ...partners].map((p, i) => (
          <div
            key={`${p.name}-${i}`}
            className="group shrink-0 w-[55vw] sm:w-[32vw] lg:w-[20vw] px-8 py-5 flex flex-col items-center justify-center gap-3"
          >
            <div className="h-28 md:h-32 lg:h-36 flex items-center justify-center">
              <img
                src={p.logo}
                alt={`${p.name} logo`}
                style={{ transform: `scale(${p.scale})` }}
                className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 text-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
              {p.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  if (embedded) return Marquee;

  return (
    <section id="strategic-partners" className="py-16 sm:py-20 bg-white border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-10 bg-accent" />
            <span className="text-xs tracking-[0.3em] text-accent font-semibold uppercase">
              Strategic Partners
            </span>
            <span className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4">
            Our Group & Strategic Network
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Promax Burkina Faso operates within a wider ecosystem of group companies and
            institutional partners advancing investment, infrastructure, and economic
            development.
          </p>
        </div>
        {Marquee}
      </div>
    </section>
  );
};

export default StrategicPartners;
