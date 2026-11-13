
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  FlaskConical,
  Apple,
  Droplets,
  PackageCheck,
  ClipboardCheck,
  Search,
} from "lucide-react";

const testingAreas = [
  {
    icon: Microscope,
    title: "Microbiological Testing",
    description:
      "Evaluate selected microorganisms, pathogens and microbial quality indicators in food products.",
    link: "/services/microbiological-testing",
  },
  {
    icon: FlaskConical,
    title: "Chemical & Physical Testing",
    description:
      "Understand selected chemical components and physical characteristics of food products.",
    link: "/services/chemical-physical-testing",
  },
  {
    icon: Apple,
    title: "Nutritional Testing",
    description:
      "Analyse nutritional components to support product development and nutrition label information.",
    link: "/services/nutritional-testing",
  },
  {
    icon: Droplets,
    title: "Heavy Metal Testing",
    description:
      "Check specified food samples for selected heavy metal contaminants.",
    link: "/services/heavy-metal-testing",
  },
  {
    icon: Search,
    title: "Adulteration & Authenticity",
    description:
      "Investigate selected food products for specified adulterants and authenticity parameters.",
    link: "/services/adulteration-authenticity",
  },
];

const industries = [
  "Dairy & Milk Products",
  "Packaged Food",
  "Beverages",
  "Bakery Products",
  "Spices & Seasonings",
  "Ready-to-Eat Products",
  "Edible Oils",
  "Fruits & Vegetables",
];

const process = [
  {
    number: "01",
    title: "Tell Us About Your Product",
    description:
      "Share your product name, category and reason for testing.",
  },
  {
    number: "02",
    title: "Discuss Testing Requirements",
    description:
      "Identify relevant parameters according to your product and requirements.",
  },
  {
    number: "03",
    title: "Submit Your Sample",
    description:
      "Follow the laboratory's instructions for sample quantity, packaging and dispatch.",
  },
  {
    number: "04",
    title: "Review Your Report",
    description:
      "Receive the test report and use the findings to support your quality decisions.",
  },
];

export default function FoodTesting() {
  return (
    <main className="bg-[#fcfaf8]">

      {/* HERO */}
      <section className="overflow-hidden bg-[#153d32]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d2c2]">
              FOOD TESTING SERVICES
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Know Your Food.
              <span className="block text-[#b8d2c2]">
                Understand Its Quality.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
              Food testing helps businesses understand product composition,
              evaluate selected safety parameters and make informed
              quality-related decisions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-a-test"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] hover:bg-[#eaf0eb]"
              >
                Book a Test <ArrowRight size={16} />
              </Link>

              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore All Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium text-white/65">
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} />
                Food Quality Focus
              </span>
              <span className="flex items-center gap-2">
                <ClipboardCheck size={15} />
                Product-Based Testing
              </span>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
              alt="Fresh food ingredients prepared for quality evaluation"
              className="h-[320px] w-full object-cover sm:h-[440px]"
            />

            <div className="absolute bottom-5 left-5 max-w-[230px] bg-[#fcfaf8] p-5 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-[#2365a5]">
                GENE BIO NUTRISAFE
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-[#153d32]">
                Supporting informed food quality decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              UNDERSTANDING FOOD TESTING
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              What Is Food Testing?
            </h2>
          </div>

          <div>
            <p className="text-sm leading-8 text-[#68716b] sm:text-base">
              Food testing is the laboratory analysis of food samples
              to determine selected characteristics such as microbial
              quality, nutritional composition and chemical properties.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#68716b] sm:text-base">
              It can support manufacturers, food brands, restaurants
              and other businesses in evaluating products against
              relevant specifications and applicable requirements.
              The appropriate tests depend on the product and the
              purpose of the analysis.
            </p>

            <div className="mt-8 border-l-2 border-[#155443] pl-6">
              <p className="text-lg font-medium leading-8 text-[#153d32]">
                A better understanding of your product starts with
                the right testing parameters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTING CATEGORIES */}
      <section className="bg-[#f1f3ee] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              OUR TESTING AREAS
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Explore Food Testing Categories.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b]">
              Select the testing category that best matches your
              product requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testingAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex min-h-[275px] flex-col border border-[#dfe3dc] bg-[#fcfaf8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf0eb] text-[#155443] transition group-hover:bg-[#155443] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>

                  <span className="mt-6 text-xs font-semibold tracking-widest text-[#9aa39b]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#153d32]">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-[#68716b]">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="mt-6 inline-flex items-center gap-2 border-t border-[#e5e7e1] pt-5 text-sm font-semibold text-[#155443] transition-all group-hover:gap-3"
                  >
                    Learn More <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              PRODUCTS WE SUPPORT
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              Different Products. Different Testing Needs.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#68716b] sm:text-base">
              Product ingredients, processing conditions, packaging
              and intended use can influence which parameters are
              relevant for testing.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#68716b] sm:text-base">
              Discuss your product with our team to understand the
              available testing options and sample requirements.
            </p>

            <Link
              to="/book-a-test"
              className="mt-8 inline-flex items-center gap-2 bg-[#155443] px-7 py-4 text-sm font-semibold text-white hover:bg-[#103e32]"
            >
              Discuss Your Product <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {industries.map((item, index) => (
              <div
                key={item}
                className={`flex min-h-[120px] flex-col justify-between border border-[#dfe3dc] p-5 ${
                  index % 2 === 0 ? "bg-[#f1f3ee]" : "bg-white"
                }`}
              >
                <PackageCheck
                  size={22}
                  className="text-[#155443]"
                />

                <p className="text-sm font-semibold leading-5 text-[#153d32]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#f1f3ee] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              HOW IT WORKS
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              A Straightforward Testing Process.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.number} className="relative">
                <span className="text-4xl font-light text-[#a6b8aa]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-[#153d32]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#68716b]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153d32] px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d2c2]">
            GENE BIO NUTRISAFE LABORATORIES
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's Understand Your Food Testing Needs.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
            Tell us about your product and testing objectives.
            We can help you discuss the appropriate next steps.
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
