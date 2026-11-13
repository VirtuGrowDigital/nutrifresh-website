
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  FlaskConical,
  Microscope,
  ScanSearch,
  ClipboardCheck,
  PackageCheck,
  Leaf,
  Wheat,
  Droplets,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

const testingAreas = [
  {
    icon: Droplets,
    title: "Edible Oil Adulteration",
    description:
      "Evaluate selected characteristics of edible oils to support product quality and authenticity assessment.",
  },
  {
    icon: Wheat,
    title: "Spices & Powdered Foods",
    description:
      "Assess selected parameters relevant to the purity and quality of spices and powdered food products.",
  },
  {
    icon: FlaskConical,
    title: "Milk & Dairy Products",
    description:
      "Discuss suitable tests for evaluating selected quality and authenticity characteristics of dairy products.",
  },
  {
    icon: Leaf,
    title: "Food Ingredient Authenticity",
    description:
      "Explore product-specific testing requirements for ingredients and raw materials.",
  },
  {
    icon: ScanSearch,
    title: "Composition Assessment",
    description:
      "Evaluate selected product characteristics to help investigate potential inconsistencies in composition.",
  },
  {
    icon: Microscope,
    title: "Product-Specific Analysis",
    description:
      "Discuss suitable analytical approaches according to the product, suspected adulterant and testing objective.",
  },
];

const applications = [
  "Milk and dairy products",
  "Edible oils and fats",
  "Spices and condiments",
  "Honey and sweeteners",
  "Grains and pulses",
  "Packaged food products",
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Product Integrity",
    description:
      "Support the evaluation of product composition and selected authenticity characteristics.",
  },
  {
    icon: PackageCheck,
    title: "Raw Material Evaluation",
    description:
      "Use relevant analytical findings to support ingredient and supplier quality checks.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description:
      "Investigate product inconsistencies and support internal quality management processes.",
  },
];

const faqs = [
  {
    question: "What is food adulteration testing?",
    answer:
      "Food adulteration testing involves examining selected food characteristics or contaminants to investigate whether a product may contain unwanted, substituted or undeclared substances.",
  },
  {
    question: "What is food authenticity testing?",
    answer:
      "Food authenticity testing helps assess whether a food product or ingredient has the characteristics and composition it claims to have. The approach depends on the product and the suspected issue.",
  },
  {
    question: "Which products can be tested?",
    answer:
      "Testing may be relevant for products such as milk, edible oils, spices, honey, grains and other food categories. Specific testing options depend on the laboratory's confirmed scope.",
  },
  {
    question: "Can I test for a suspected adulterant?",
    answer:
      "You can share the product details and suspected issue with the laboratory. The team can discuss whether a suitable test is available for that particular requirement.",
  },
  {
    question: "How much sample is required?",
    answer:
      "Sample quantity, packaging and handling requirements depend on the product and selected test. Please confirm these details before submitting your sample.",
  },
];

export default function AdulterationAuthenticity() {
  useEffect(() => {
    document.title =
      "Food Adulteration & Authenticity Testing | GeneBio NutriSafe";

    const description =
      "Explore food adulteration and authenticity testing requirements with GeneBio NutriSafe. Discuss product purity, composition and suitable testing options.";

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
              <ScanSearch size={15} />
              Food Authenticity
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#153d32] sm:text-5xl lg:text-[58px]">
              Know What's Really in Your Food.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#65716b] sm:text-lg">
              Food adulteration and authenticity testing helps investigate
              selected product characteristics, composition and potential
              quality concerns. Make informed decisions about your food products.
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
                Product integrity
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#155443]" />
                Quality assessment
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=85&w=1100&auto=format&fit=crop"
                alt="Food ingredients and spices for product quality assessment"
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:left-[-20px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
                <Search size={21} />
              </div>
              <p className="mt-3 font-semibold text-[#153d32]">
                Authenticity matters.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#77817b]">
                Understand product composition through appropriate testing.
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
              Purity & Authenticity
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              Every Food Product Has a Story. Know Its Composition.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#65716b]">
              Food adulteration can involve the addition, substitution
              or presence of unwanted substances in a food product.
              Authenticity testing focuses on assessing whether a product
              matches its stated identity or composition.
            </p>
            <p className="mt-5 text-base leading-8 text-[#65716b]">
              Different products require different analytical approaches.
              The appropriate test depends on the food category, the
              suspected issue and the specific objective of the investigation.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Areas */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Testing Categories
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              What Can Be Investigated?
            </h2>
            <p className="mt-4 leading-7 text-[#77817b]">
              The testing approach is selected according to your product
              and the quality or authenticity concern you want to investigate.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
            Note: These are general testing categories, not a confirmed
            list of available tests. Specific adulterants, methods and
            testing capabilities must be confirmed with the laboratory.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-[#f1f3ee] py-20 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Product Categories
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Testing Considerations Across Food Categories.
            </h2>
            <p className="mt-4 leading-7 text-[#65716b]">
              The type of investigation depends on the product and
              the suspected quality or authenticity issue.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#e2e8e2] bg-white p-5"
              >
                <CheckCircle2 size={19} className="shrink-0 text-[#155443]" />
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
            Build Confidence in Your Product.
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
              How It Works
            </span>
            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Start With Your Product and Concern.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Describe Your Product", "Share the product category and relevant ingredient details."],
              ["02", "Explain Your Concern", "Tell us what you want to investigate or verify."],
              ["03", "Confirm Testing Options", "Discuss suitable parameters, methods and sample requirements."],
              ["04", "Review the Report", "Receive and review the results for the agreed testing scope."],
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
              Have a specific product or suspected adulteration concern?
              Let's discuss your requirements.
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
              Have Questions About Your Product's Authenticity?
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              Share your product details and the concern you want to
              investigate. Let's discuss the appropriate testing options.
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
