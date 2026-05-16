import promaxUnitedLogo from "@/assets/partners/promax-united-logo.jpg";
import promaxInvestmentsLogo from "@/assets/partners/promax-investments-logo.png";
import promaxEasyPayLogo from "@/assets/partners/promax-easy-pay-logo.jpg";
import promaxCompliantLogo from "@/assets/partners/promax-compliant-logo.png";
import cpibLogo from "@/assets/partners/cpib-logo.png";
import adifcLogo from "@/assets/partners/adifc-logo.png";
import aacidLogo from "@/assets/partners/aacid-logo.png";

const partners = [
  { name: "Promax United", logo: promaxUnitedLogo },
  { name: "Promax Investments", logo: promaxInvestmentsLogo },
  { name: "PPI — Palm Promax Investments", logo: promaxCompliantLogo },
  { name: "CPIB", logo: cpibLogo },
  { name: "ADIFC", logo: adifcLogo },
  { name: "Promax Easy Pay", logo: promaxEasyPayLogo },
  { name: "AACID", logo: aacidLogo },
];

const StrategicPartners = () => {
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

        <div className="-mx-4 sm:-mx-6 overflow-hidden marquee-mask">
          <div className="flex w-max animate-marquee">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="group shrink-0 w-[45vw] sm:w-[28vw] lg:w-[16vw] px-4 py-5 flex flex-col items-center justify-center gap-3"
              >
                <div className="h-20 md:h-24 lg:h-28 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
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
      </div>
    </section>
  );
};

export default StrategicPartners;
