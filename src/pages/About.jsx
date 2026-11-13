
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  TrendingUp,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Food Safety First",
    description:
      "We help close the gap between regulatory requirements and daily operations, so safety checks happen before a product reaches the shelf.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Analytical Confidence",
    description:
      "Careful methods give you data you can rely on. We turn laboratory results into reports your team can use.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Better Business Decisions",
    description:
      "Good data protects your brand and helps your business make informed decisions with confidence.",
  },
];

const principles = [
  "Clear testing requirements",
  "Understandable test reports",
  "Product-focused testing guidance",
  "A practical approach to food quality",
];

export default function About() {
  return (
    <main className="bg-[#fcfaf8]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#153d32]">
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="absolute -right-5 -top-10 h-56 w-56 rounded-full border border-white/10" />

        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b8d2c2]">
              <span className="h-2 w-2 rounded-full bg-[#b8d2c2]" />
              About GeneBio NutriSafe
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Science Behind
              <span className="block text-[#b8d2c2]">
                Safer Food.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/75">
              GeneBio NutriSafe is a food testing laboratory in Lucknow,
              a unit of GeneBio Healthcare Private Limited. We help food
              businesses make clear decisions on safety, quality and
              compliance.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] transition hover:bg-[#eaf0eb]"
              >
                Explore Our Services
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
              Safe. Tested. Trusted.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-28 w-28 border-b border-l border-[#b8d2c2]/60" />

            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=85"
              alt="Laboratory professional working with scientific testing equipment"
              className="relative z-10 h-[320px] w-full object-cover sm:h-[430px]"
            />

            <div className="absolute -bottom-4 right-5 z-20 bg-[#fcfaf8] px-5 py-4 shadow-lg sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#155443]">
                GeneBio NutriSafe
              </p>
              <p className="mt-1 text-xs text-[#68716b]">
                Food Testing & Quality Assurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              WHO WE ARE
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              Testing That Supports Better Food Decisions.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#626d65]">
              Food quality is not just about how a product looks or tastes.
              It also involves understanding its composition, checking for
              potential contamination and reviewing whether it meets the
              requirements that apply to it.
            </p>

            <p className="mt-5 text-base leading-8 text-[#626d65]">
              GeneBio NutriSafe works with food businesses to understand
              their testing requirements and make informed decisions using
              laboratory data. Our focus is on helping businesses approach
              food safety, product quality and compliance with greater
              clarity.
            </p>

            <div className="mt-8 border-l-2 border-[#155443] pl-6">
              <p className="text-lg font-medium leading-8 text-[#153d32]">
                Good food decisions begin with knowing what is inside
                your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="bg-[#f1f3ee] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              OUR PURPOSE
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Why We Exist
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b] sm:text-base">
              We believe that meaningful food testing should help businesses
              understand their products and take practical steps towards
              better quality and safety.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.number}
                  className="group border border-[#dfe3dc] bg-[#fcfaf8] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#eaf0eb] text-[#155443] transition group-hover:bg-[#155443] group-hover:text-white">
                      <Icon size={23} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-semibold tracking-wider text-[#a2aaa2]">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[#153d32]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#68716b]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=85"
            alt="Scientific laboratory workspace"
            className="h-[300px] w-full object-cover sm:h-[400px]"
          />

          <div className="absolute -bottom-5 -right-4 bg-[#153d32] p-5 text-white sm:-right-5 sm:p-7">
            <FlaskConical size={25} />
            <p className="mt-3 text-sm font-semibold">
              Food Testing
            </p>
            <p className="mt-1 text-xs text-white/65">
              Quality & Safety
            </p>
          </div>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
            OUR APPROACH
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
            Clear Information. Informed Decisions.
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#68716b] sm:text-base">
            Every food product has different testing needs. The right
            parameters depend on the product, its ingredients, intended
            use and the requirements it needs to meet.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#68716b] sm:text-base">
            We aim to make the testing process easier to understand,
            from discussing requirements to reviewing laboratory reports.
          </p>

          <div className="mt-8 space-y-4">
            {principles.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#155443]"
                />
                <p className="text-sm font-medium text-[#424b47]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/services"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[#155443] transition-all hover:gap-3"
          >
            View Testing Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153d32] px-5 py-16 text-center sm:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b8d2c2]">
            LET'S WORK TOGETHER
          </span>

          <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Need Help Understanding Your Testing Requirement?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
            Tell us about your product and what you need to check.
            Our team can help you discuss the next steps.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] transition hover:bg-[#eaf0eb]"
            >
              Request a Callback
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/book-a-test"
              className="inline-flex min-h-12 items-center justify-center border border-white/40 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Test
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
