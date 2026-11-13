
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  ShieldCheck,
  ClipboardCheck,
  Beaker,
  PackageCheck,
  Droplets,
  Scale,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

const testingAreas = [
  {
    icon: Droplets,
    title: "Moisture & Water Content",
    description:
      "Understand the moisture profile of a food product and its potential impact on quality and storage stability.",
  },
  {
    icon: Beaker,
    title: "Acidity & pH",
    description:
      "Evaluate acidity-related characteristics that can influence product quality, processing and shelf stability.",
  },
  {
    icon: Scale,
    title: "Physical Characteristics",
    description:
      "Assess relevant physical properties of food samples based on the product and testing requirements.",
  },
  {
    icon: FlaskConical,
    title: "Chemical Composition",
    description:
      "Explore selected chemical characteristics to support product quality assessment and process control.",
  },
  {
    icon: PackageCheck,
    title: "Product Consistency",
    description:
      "Compare product characteristics across samples or batches to support consistent quality.",
  },
  {
    icon: Microscope,
    title: "Other Product-Specific Tests",
    description:
      "Discuss additional chemical or physical parameters based on your product, objective and applicable requirements.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Understand important product characteristics and support your internal quality checks.",
  },
  {
    icon: PackageCheck,
    title: "Batch Consistency",
    description:
      "Compare relevant parameters across production batches and identify variations.",
  },
  {
    icon: ClipboardCheck,
    title: "Better Decisions",
    description:
      "Use test findings to support product development, processing and quality decisions.",
  },
];

const faqs = [
  {
    question: "What products can be tested?",
    answer:
      "Testing requirements depend on the product type and the parameters requested. Food manufacturers, packaged food brands and other businesses can discuss their sample requirements with the laboratory.",
  },
  {
    question: "Can I request multiple parameters?",
    answer:
      "Yes, you can share multiple testing requirements in one enquiry. The laboratory can confirm which parameters are available and whether they can be included in the same testing request.",
  },
  {
    question: "How much sample is required?",
    answer:
      "Sample quantity depends on the product and selected parameters. Please confirm the required quantity and packaging instructions with the laboratory before sending your sample.",
  },
  {
    question: "How long does testing take?",
    answer:
      "Turnaround time depends on the selected parameters, test method and sample requirements. The expected timeline should be confirmed before sample submission.",
  },
];

export default function ChemicalPhysicalTesting() {
  useEffect(() => {
    document.title =
      "Chemical & Physical Food Testing | GeneBio NutriSafe";

    const description =
      "Explore chemical and physical food testing requirements with GeneBio NutriSafe. Discuss product quality parameters and sample requirements with our team.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, []);

  return (
    <main className="min-h-screen bg-[#fcfaf8] text-[#424b47]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3ee]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#155443]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#155443]">
              <FlaskConical size={15} />
              Food Quality Testing
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#153d32] sm:text-5xl lg:text-[58px]">
              Understand the Science Behind Your Food.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#65716b] sm:text-lg">
              Chemical and physical testing helps assess important food
              characteristics that influence product quality, consistency
              and processing. Understand your product through relevant
              testing parameters.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-a-test"
                className="inline-flex items-center gap-2 rounded-full bg-[#155443] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#103e32]"
              >
                Discuss Your Testing Needs
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#155443]/25 px-7 py-3.5 text-sm font-semibold text-[#155443] transition hover:bg-white"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#65716b]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#155443]" />
                Product-focused approach
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#155443]" />
                Parameter-based testing
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=85&w=1100&auto=format&fit=crop"
                alt="Laboratory glassware used for chemical analysis"
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:left-[-20px]">
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
                <FlaskConical size={21} />
              </div>
              <p className="font-semibold text-[#153d32]">
                Every parameter has a purpose.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#77817b]">
                Testing requirements depend on your product and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              The Testing Approach
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              More Than Just a Product Check.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#65716b]">
              Food products have several characteristics that contribute
              to their quality and performance. Chemical and physical
              analysis can help businesses understand these characteristics
              and evaluate whether a product meets its intended specifications.
            </p>
            <p className="mt-5 text-base leading-8 text-[#65716b]">
              The appropriate test depends on the product, its composition,
              intended use and the reason for testing. Share your requirements
              with GeneBio NutriSafe to discuss suitable parameters and
              sample submission details.
            </p>
          </div>
        </div>
      </section>

      {/* Testing areas */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Testing Areas
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              What Can Be Evaluated?
            </h2>
            <p className="mt-4 leading-7 text-[#77817b]">
              Testing areas are selected according to product type and
              laboratory scope. Discuss your requirements before submitting
              a sample.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {testingAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-[#eae8e7] bg-[#fcfaf8] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#155443]/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443] transition group-hover:bg-[#155443] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <span className="mt-7 block text-xs font-semibold tracking-widest text-[#9ba49e]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-xl font-semibold text-[#153d32]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#77817b]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-[#8b948e]">
            Note: These are general testing categories, not a confirmed
            list of available laboratory tests. Specific parameters,
            methods and reporting limits must be confirmed with the laboratory.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-[#f1f3ee] py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Why It Matters
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Better Product Understanding. Better Quality Decisions.
            </h2>
            <p className="mt-4 leading-7 text-[#65716b]">
              Relevant testing data can help your team evaluate products
              and make informed decisions throughout the production process.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-7"
                >
                  <Icon size={28} className="text-[#155443]" />
                  <h3 className="mt-5 text-xl font-semibold text-[#153d32]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#77817b]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1100px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
            From Enquiry to Testing.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "01",
              title: "Share Your Product",
              text: "Tell us about your product and testing objective.",
            },
            {
              number: "02",
              title: "Confirm Parameters",
              text: "Discuss suitable tests, methods and sample requirements.",
            },
            {
              number: "03",
              title: "Submit Your Sample",
              text: "Follow the laboratory's confirmed packaging and submission instructions.",
            },
            {
              number: "04",
              title: "Review Your Report",
              text: "Receive the report according to the agreed testing scope and timeline.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">
              <span className="text-4xl font-semibold text-[#cbd9d1]">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#153d32]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#77817b]">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
              <HelpCircle size={25} />
            </div>
            <h2 className="mt-5 text-3xl font-semibold text-[#153d32]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 leading-7 text-[#77817b]">
              Have a specific product or parameter in mind? Contact our
              team to discuss your requirements.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#155443]"
            >
              Contact Us <ArrowRight size={17} />
            </Link>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-[#eae8e7] p-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[#153d32]">
                  {faq.question}
                  <span className="text-xl text-[#155443] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-[#77817b]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#153d32] px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b8d5c5]">
              GeneBio NutriSafe
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Let's Understand Your Product Better.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Share your product details and testing objectives. Our team
              can help you discuss the next steps.
            </p>
          </div>

          <Link
            to="/book-a-test"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#153d32] transition hover:bg-[#e9f1ec]"
          >
            Book a Test <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
