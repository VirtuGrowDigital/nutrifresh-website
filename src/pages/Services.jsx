
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  Apple,
  Droplets,
  ShieldCheck,
  Search,
  TestTube2,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Microscope,
    title: "Microbiological Testing",
    description:
      "Evaluate food products for selected microorganisms, pathogens and indicators of microbial quality.",
    tags: ["Pathogen Testing", "Microbial Quality"],
    link: "/services/microbiological-testing",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Chemical & Physical Testing",
    description:
      "Understand the chemical composition and physical characteristics of food products through relevant analytical tests.",
    tags: ["Chemical Analysis", "Physical Properties"],
    link: "/services/chemical-physical-testing",
  },
  {
    number: "03",
    icon: Apple,
    title: "Nutritional Testing",
    description:
      "Analyse nutritional components to support product development and food label information.",
    tags: ["Nutritional Profile", "Label Information"],
    link: "/services/nutritional-testing",
  },
  {
    number: "04",
    icon: Droplets,
    title: "Heavy Metal Testing",
    description:
      "Assess selected food samples for specified heavy metals based on the product and testing requirements.",
    tags: ["Contaminant Analysis", "Food Quality"],
    link: "/services/heavy-metal-testing",
  },
  {
    number: "05",
    icon: Search,
    title: "Adulteration & Authenticity",
    description:
      "Investigate selected food products for specified adulterants and authenticity-related parameters.",
    tags: ["Adulteration", "Product Authenticity"],
    link: "/services/adulteration-authenticity",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirements",
    description:
      "Tell us about your product, its category and the purpose of testing.",
  },
  {
    number: "02",
    title: "Discuss Test Parameters",
    description:
      "Our team can help identify relevant testing parameters based on your requirements.",
  },
  {
    number: "03",
    title: "Submit Your Sample",
    description:
      "Receive sample quantity, packaging and dispatch instructions from the laboratory.",
  },
  {
    number: "04",
    title: "Receive Your Report",
    description:
      "Review the laboratory report and use the findings to inform your next steps.",
  },
];

export default function Services() {
  return (
    <main className="bg-[#fcfaf8]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#153d32]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-8 top-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d2c2]">
              OUR TESTING SERVICES
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Testing Designed
              <span className="block text-[#b8d2c2]">
                Around Your Product.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75">
              Every food product has different testing needs. Explore
              our testing categories and find the right starting point
              for your product, quality and compliance requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-test"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] transition hover:bg-[#eaf0eb]"
              >
                Request a Test <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              WHAT WE TEST
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              A Clearer View of Food Quality.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-8 text-[#68716b] sm:text-base">
            From microbiological parameters to nutritional composition
            and selected chemical contaminants, testing can help food
            businesses understand product characteristics and evaluate
            specific requirements. Test availability depends on the
            laboratory's confirmed scope.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f1f3ee] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
                EXPLORE SERVICES
              </span>

              <h2 className="mt-3 text-3xl font-semibold text-[#153d32] sm:text-4xl">
                Our Testing Categories
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-[#68716b]">
              Select a category to learn more about the relevant testing
              parameters and requirements.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex min-h-[310px] flex-col border border-[#dfe3dc] bg-[#fcfaf8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf0eb] text-[#155443] transition group-hover:bg-[#155443] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tracking-wider text-[#a2aaa2]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-[#153d32]">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#68716b]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#dfe3dc] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-[#68716b]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="mt-7 inline-flex items-center gap-2 border-t border-[#e5e7e1] pt-5 text-sm font-semibold text-[#155443] transition-all group-hover:gap-3"
                  >
                    Explore Service <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              OUR APPROACH
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              From Your Sample to Useful Information.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68716b] sm:text-base">
              The testing process begins with understanding your product
              and the reason you need testing. The relevant parameters,
              sample requirements and reporting timeline can then be
              discussed with the laboratory.
            </p>

            <Link
              to="/book-a-test"
              className="mt-8 inline-flex items-center gap-2 bg-[#155443] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#103e32]"
            >
              Start Your Enquiry <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-7">
            {process.map((item, index) => (
              <div key={item.number} className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cbd8cd] text-sm font-semibold text-[#155443]">
                  {item.number}
                </div>

                <div className="flex-1 border-b border-[#e4e6df] pb-6">
                  <h3 className="text-base font-semibold text-[#153d32]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#68716b]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="bg-[#f1f3ee] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              WHO WE SUPPORT
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Supporting Food Businesses at Every Stage.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b]">
              Testing needs can differ depending on the type of business,
              product and market. We welcome enquiries from businesses
              across the food value chain.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Food Manufacturers",
              "Packaged Food Brands",
              "Restaurants & Kitchens",
              "Food Exporters",
              "Dairy Businesses",
              "Agri Producers",
              "D2C Food Brands",
              "Product Developers",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border border-[#dfe3dc] bg-[#fcfaf8] p-5"
              >
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-[#155443]"
                />
                <span className="text-sm font-medium text-[#424b47]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153d32] px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <ClipboardCheck
            size={30}
            className="mx-auto text-[#b8d2c2]"
          />

          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Not Sure Which Test You Need?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/70">
            Share your product details and testing objective. Our team
            can help you discuss the appropriate next steps.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/book-a-test"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] hover:bg-[#eaf0eb]"
            >
              Book a Test <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
