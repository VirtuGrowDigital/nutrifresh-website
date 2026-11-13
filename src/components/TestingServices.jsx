
import { Link } from "react-router-dom";
import {
  Utensils,
  Microscope,
  FlaskConical,
  Apple,
  Bug,
  TestTube,
  Wheat,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Food Testing",
    description: "Core parameters and shelf life studies.",
    icon: Utensils,
    slug: "food-testing",
  },
  {
    title: "Microbiology",
    description: "Pathogens and microbial limits.",
    icon: Microscope,
    slug: "microbiology",
  },
  {
    title: "Chemical",
    description: "Composition and additive checks.",
    icon: FlaskConical,
    slug: "chemical-testing",
  },
  {
    title: "Nutritional",
    description: "Values for your nutrition label.",
    icon: Apple,
    slug: "nutritional-testing",
  },
  {
    title: "Pesticide Residue",
    description: "Trace levels of agricultural chemicals.",
    icon: Bug,
    slug: "pesticide-residue",
  },
  {
    title: "Heavy Metal",
    description: "Screening for lead, arsenic and other toxic elements.",
    icon: TestTube,
    slug: "heavy-metal-testing",
  },
  {
    title: "Mycotoxin",
    description: "Fungal toxins in grains and nuts.",
    icon: Wheat,
    slug: "mycotoxin-testing",
  },
  {
    title: "Adulteration",
    description: "Unauthorised additives and substitutions.",
    icon: AlertTriangle,
    slug: "food-adulteration",
  },
];

export default function TestingServices() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[#fcfaf8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-[650px] text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#205c49]">
            Our Testing Capabilities
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#202622] sm:text-3xl lg:text-[36px]">
            Food Testing Services for Every Stage
          </h2>

          <p className="mx-auto mt-3 max-w-[580px] text-xs leading-6 text-[#626b66] sm:text-sm">
            From raw material to finished pack, we test what matters for
            safety, quality and your label.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex min-h-[180px] flex-col border border-[#d9ded9] bg-[#fcfaf8] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#205c49] hover:bg-white hover:shadow-[0_8px_24px_rgba(32,92,73,0.07)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#eeecea] text-[#205c49] transition group-hover:bg-[#e3eee8]">
                  <Icon size={18} strokeWidth={1.7} />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[15px] font-medium text-[#242a26]">
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-[#205c49] opacity-0 transition group-hover:opacity-100"
                  />
                </div>

                <p className="mt-2 max-w-[220px] text-[11px] leading-[1.7] text-[#626b66] sm:text-xs">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
