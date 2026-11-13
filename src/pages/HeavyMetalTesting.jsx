
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Microscope,
  AlertTriangle,
  ClipboardCheck,
  PackageCheck,
  HelpCircle,
  CheckCircle2,
  Leaf,
  Droplets,
} from "lucide-react";

const testingAreas = [
  {
    icon: FlaskConical,
    title: "Lead",
    description:
      "Lead is an environmental contaminant that may enter food through raw materials, soil, water or processing-related sources.",
  },
  {
    icon: Microscope,
    title: "Cadmium",
    description:
      "Cadmium may be present in certain food products due to environmental contamination and agricultural exposure.",
  },
  {
    icon: Droplets,
    title: "Arsenic",
    description:
      "Arsenic assessment may be relevant for selected food categories and products based on their source and risk profile.",
  },
  {
    icon: AlertTriangle,
    title: "Mercury",
    description:
      "Mercury testing may be relevant for specific food categories, particularly products where environmental exposure is a concern.",
  },
];

const applications = [
  "Cereals and grains",
  "Spices and condiments",
  "Fruits and vegetables",
  "Seafood and fish products",
  "Packaged food products",
  "Food ingredients and raw materials",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Food Safety Assessment",
    description:
      "Evaluate selected contaminant risks in food products using appropriate testing.",
  },
  {
    icon: PackageCheck,
    title: "Supplier Quality Checks",
    description:
      "Support raw material evaluation and supplier quality assessment.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Support",
    description:
      "Use analytical findings as an input when reviewing applicable food safety requirements.",
  },
];

const faqs = [
  {
    question: "What is heavy metal testing in food?",
    answer:
      "It is the analysis of selected metallic contaminants in food products to understand their concentration and assess them against applicable requirements.",
  },
  {
    question: "Which heavy metals can be tested?",
    answer:
      "Commonly assessed contaminants may include lead, cadmium, arsenic and mercury. Actual test availability and the applicable method must be confirmed with the laboratory.",
  },
  {
    question: "Which food products may require heavy metal testing?",
    answer:
      "Depending on the product and risk assessment, testing may be relevant for grains, spices, vegetables, seafood, food ingredients and packaged food products.",
  },
  {
    question: "How much sample is required?",
    answer:
      "The sample quantity and packaging requirements depend on the selected parameters and product type. Confirm the instructions with the laboratory before sending a sample.",
  },
  {
    question: "Does testing confirm regulatory compliance?",
    answer:
      "A test report provides analytical results for the parameters tested. Compliance assessment also depends on the applicable regulation, product category, limits and testing scope.",
  },
];

export default function HeavyMetalTesting() {
  useEffect(() => {
    document.title =
      "Heavy Metal Testing in Food | GeneBio NutriSafe";

    const description =
      "Explore heavy metal testing requirements for food products. Discuss lead, cadmium, arsenic and mercury analysis with GeneBio NutriSafe.";

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
      <section className="overflow-hidden bg-[#f1f3ee]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#155443]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#155443]">
              <ShieldCheck size={15} />
              Food Contaminant Testing
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#153d32] sm:text-5xl lg:text-[58px]">
              Know What's Beyond the Visible.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#65716b] sm:text-lg">
              Heavy metal testing helps evaluate selected contaminants
              in food products. Understand your product's testing
              requirements and make informed food quality decisions.
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
                Contaminant assessment
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#155443]" />
                Product-focused testing
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9d42e3c6e9b4?q=85&w=1100&auto=format&fit=crop"
                alt="Laboratory equipment used for food analysis"
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:left-[-20px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
                <FlaskConical size={21} />
              </div>
              <p className="mt-3 font-semibold text-[#153d32]">
                Small traces matter.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#77817b]">
                Understand selected contaminants through appropriate analysis.
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
              Understanding Contaminants
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              Food Safety Starts With What You Cannot See.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#65716b]">
              Heavy metals and certain metallic contaminants can enter
              food through environmental exposure, agricultural practices,
              water, raw materials and processing conditions.
            </p>
            <p className="mt-5 text-base leading-8 text-[#65716b]">
              Testing helps businesses evaluate selected contaminants
              in their products. The appropriate parameters depend on
              the food category, source of ingredients, intended market
              and relevant regulatory requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Testing Parameters
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Selected Heavy Metals for Assessment.
            </h2>
            <p className="mt-4 leading-7 text-[#77817b]">
              The parameters below are examples of commonly assessed
              contaminants. Actual testing availability must be confirmed.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testingAreas.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#eae8e7] bg-[#fcfaf8] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
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
            Note: This is an indicative list, not a confirmation of
            available laboratory scope. Test methods, detection limits
            and reporting details must be confirmed before booking.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#f1f3ee] py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Product Applications
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Which Food Products May Need Testing?
            </h2>
            <p className="mt-4 leading-7 text-[#65716b]">
              Testing requirements vary with the product, its ingredients
              and the intended market.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#e2e8e2] bg-white p-5"
              >
                <Leaf size={19} className="shrink-0 text-[#155443]" />
                <span className="text-sm font-medium text-[#153d32]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
            Why It Matters
          </span>
          <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
            Make Informed Food Safety Decisions.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-[#eae8e7] bg-white p-7"
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
      </section>

      {/* Process */}
      <section className="bg-[#f1f3ee] py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Testing Process
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              From Sample to Results.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Share Product Details", "Tell us about your food product and testing objective."],
              ["02", "Confirm Test Scope", "Discuss parameters, methods and sample requirements."],
              ["03", "Submit Your Sample", "Follow the laboratory's confirmed sample handling instructions."],
              ["04", "Review Results", "Receive and review the report for the agreed testing scope."],
            ].map(([number, title, text]) => (
              <div key={number}>
                <span className="text-4xl font-semibold text-[#b8cfc1]">
                  {number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[#153d32]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#77817b]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              Have a specific product or contaminant in mind? Discuss
              your requirements with our team.
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
              Take a Closer Look at Your Food Safety.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Tell us about your product and testing requirements.
              Let's discuss the appropriate next steps.
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
