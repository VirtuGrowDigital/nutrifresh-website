
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Apple,
  Beef,
  Wheat,
  Droplets,
  FlaskConical,
  Scale,
  ShieldCheck,
  ClipboardCheck,
  PackageCheck,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";

const nutritionParameters = [
  {
    icon: Beef,
    title: "Protein",
    description:
      "Understand the protein content of your food product for nutritional evaluation and product information.",
  },
  {
    icon: Droplets,
    title: "Fat",
    description:
      "Assess fat content as part of a product's nutritional composition.",
  },
  {
    icon: Wheat,
    title: "Carbohydrates",
    description:
      "Evaluate carbohydrate content to support nutritional assessment and product development.",
  },
  {
    icon: Scale,
    title: "Energy Value",
    description:
      "Understand the energy contribution of a product based on its nutritional composition.",
  },
  {
    icon: FlaskConical,
    title: "Ash & Moisture",
    description:
      "Evaluate selected composition parameters that contribute to understanding food characteristics.",
  },
  {
    icon: Apple,
    title: "Other Nutritional Parameters",
    description:
      "Discuss additional nutritional parameters depending on your product and testing objectives.",
  },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Nutritional Information",
    description:
      "Obtain relevant analytical information to understand the nutritional composition of your product.",
  },
  {
    icon: PackageCheck,
    title: "Product Development",
    description:
      "Use nutritional findings to support product formulation and improvement decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Label Review Support",
    description:
      "Use appropriate test results as an input when reviewing food-label information and applicable requirements.",
  },
];

const faqs = [
  {
    question: "What is nutritional testing?",
    answer:
      "Nutritional testing involves analysing selected components of a food product, such as protein, fat and carbohydrates, to understand its nutritional composition.",
  },
  {
    question: "Can nutritional testing help with food labels?",
    answer:
      "Nutritional analysis can provide data that may support food-label preparation and review. Final label compliance should be checked against the applicable FSSAI requirements and relevant regulations.",
  },
  {
    question: "Which food products can be tested?",
    answer:
      "Requirements can vary for packaged foods, beverages, bakery products, dairy products, snacks and other food categories. Share your product details so the laboratory can confirm suitability.",
  },
  {
    question: "How much sample should I send?",
    answer:
      "Sample quantity depends on the product and the selected parameters. Confirm the required quantity, packaging and handling instructions with the laboratory before submission.",
  },
  {
    question: "How long will the report take?",
    answer:
      "Turnaround time depends on the selected parameters and testing method. The laboratory should confirm the expected timeline when your testing scope is finalised.",
  },
];

export default function NutritionalTesting() {
  useEffect(() => {
    document.title =
      "Nutritional Testing Lab | Food Nutrition Analysis | GeneBio NutriSafe";

    const description =
      "Explore nutritional testing for food products with GeneBio NutriSafe. Discuss protein, fat, carbohydrates and other nutritional analysis requirements.";

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
              <Apple size={15} />
              Nutritional Analysis
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#153d32] sm:text-5xl lg:text-[58px]">
              Know What's Inside Your Food.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#65716b] sm:text-lg">
              Understand the nutritional composition of your food products
              through relevant analytical testing. Get useful insights
              to support product development, nutritional evaluation and
              food-label review.
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
                Product-focused analysis
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#155443]" />
                Nutritional composition
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=85&w=1100&auto=format&fit=crop"
                alt="A variety of food ingredients representing nutritional composition"
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="absolute -bottom-5 left-5 max-w-[260px] rounded-2xl bg-white p-5 shadow-xl sm:left-[-20px]">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f1ec] text-[#155443]">
                <FlaskConical size={21} />
              </div>
              <p className="mt-3 font-semibold text-[#153d32]">
                Every ingredient tells a story.
              </p>
              <p className="mt-1 text-xs leading-5 text-[#77817b]">
                Understand your product through nutritional data.
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
              Understanding Nutrition
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32] sm:text-4xl">
              Make Product Composition Clearer.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[#65716b]">
              Nutritional testing helps businesses understand the composition
              of their food products. It can provide information about
              selected nutrients and other components relevant to product
              development and nutritional evaluation.
            </p>

            <p className="mt-5 text-base leading-8 text-[#65716b]">
              Whether you are developing a new food product or reviewing
              existing nutritional information, the right testing parameters
              depend on your product category and intended purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Parameters */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Nutritional Parameters
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              What Can Be Analysed?
            </h2>

            <p className="mt-4 leading-7 text-[#77817b]">
              Nutritional parameters are selected according to product
              requirements and the laboratory's confirmed testing scope.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nutritionParameters.map((item, index) => {
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
            Note: This is an indicative list of nutritional testing areas,
            not a confirmation that every parameter is currently available.
            Please confirm test availability, methods and reporting details
            with the laboratory.
          </p>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#f1f3ee] py-20 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8">

          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
              Where It Helps
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Supporting Food Businesses at Every Stage.
            </h2>

            <p className="mt-4 leading-7 text-[#65716b]">
              Nutritional analysis can be relevant to businesses working
              across different food categories.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Packaged Foods",
                text: "Nutritional evaluation of packaged food products.",
              },
              {
                title: "Dairy Products",
                text: "Composition-related testing for dairy-based products.",
              },
              {
                title: "Bakery & Snacks",
                text: "Nutritional information for bakery and snack products.",
              },
              {
                title: "Beverages",
                text: "Selected nutritional parameters for beverage products.",
              },
              {
                title: "Health Foods",
                text: "Nutritional evaluation of food products positioned around specific dietary needs.",
              },
              {
                title: "Food Startups",
                text: "Product development and composition assessment.",
              },
              {
                title: "Food Manufacturers",
                text: "Testing support for product and quality teams.",
              },
              {
                title: "Private Labels",
                text: "Product information support for own-brand food ranges.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e2e8e2] bg-white p-6"
              >
                <h3 className="font-semibold text-[#153d32]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#77817b]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2365a5]">
            Why Nutritional Testing?
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
            Data That Supports Better Decisions.
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
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              How to Get Started.
            </h2>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Tell Us About Your Product",
                text: "Share your product category and testing objective.",
              },
              {
                number: "02",
                title: "Discuss Parameters",
                text: "Confirm suitable nutritional parameters and testing availability.",
              },
              {
                number: "03",
                title: "Submit Your Sample",
                text: "Follow the confirmed sample quantity and packaging instructions.",
              },
              {
                number: "04",
                title: "Receive Your Report",
                text: "Review the results according to the agreed testing scope.",
              },
            ].map((step) => (
              <div key={step.number}>
                <span className="text-4xl font-semibold text-[#b8cfc1]">
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
              Need help choosing nutritional parameters for your product?
              Get in touch with our team.
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
              Your Product. Its Nutrition. Clearer Insights.
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Tell us what you manufacture and what you want to understand.
              Let's discuss your nutritional testing requirements.
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
