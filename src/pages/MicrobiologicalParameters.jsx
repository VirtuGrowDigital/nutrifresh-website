import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

import {
  Breadcrumb,
  BookingCard,
  WhyItMatters,
  FAQAccordion,
  StandardsNote,
  microbiologyImage,
} from "../components/MicrobiologyShared";

const whyItems = [
  {
    title: "Regulatory Compliance",
    text: "Review results against applicable food safety requirements and limits.",
  },
  {
    title: "Brand Protection",
    text: "Identify potential quality issues before they lead to complaints or recalls.",
  },
  {
    title: "Shelf-Life Optimisation",
    text: "Identify spoilage organisms that may affect product quality and shelf life.",
  },
  {
    title: "Process Verification",
    text: "Use test results to review sanitation and food safety control processes.",
  },
];

const parameters = [
  {
    name: "Salmonella spp.",
    method: "To be confirmed",
    limit: "To be confirmed",
  },
  {
    name: "Listeria monocytogenes",
    method: "To be confirmed",
    limit: "To be confirmed",
  },
  {
    name: "E. coli O157:H7",
    method: "To be confirmed",
    limit: "To be confirmed",
  },
  {
    name: "Total Plate Count (TPC)",
    method: "To be confirmed",
    limit: "To be confirmed",
  },
  {
    name: "Yeast & Mould",
    method: "To be confirmed",
    limit: "To be confirmed",
  },
];

const faqs = [
  {
    question: "What is the required sample size?",
    answer:
      "The required sample quantity depends on the food product and the parameters being tested. Contact our team before sending a sample so the laboratory can confirm the quantity required.",
  },
  {
    question: "How should samples be transported?",
    answer:
      "Samples should be sent in clean, sealed and appropriately labelled packaging. Transport and temperature requirements depend on the product and test. Please confirm the packing and delivery instructions with the laboratory before dispatch.",
  },
  {
    question: "Do you offer expedited testing?",
    answer:
      "Please share your required deadline when booking. Our team can confirm whether an expedited option is available for the selected tests and communicate any applicable additional cost.",
  },
];

export default function MicrobiologicalParameters() {
  useEffect(() => {
    document.title =
      "Food Microbiology Parameters and Sample Size | GeneBio NutriSafe";

    let description = document.querySelector(
      'meta[name="description"]'
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content =
      "Explore food microbiology testing parameters, sample requirements and testing information. Book microbiological testing with GeneBio NutriSafe in Lucknow.";
  }, []);

  return (
    <main className="min-h-screen bg-[#fcfaf8]">
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:py-10">
        <Breadcrumb current="Microbiological Testing" />

        <div className="grid items-start gap-9 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10">
          <div className="min-w-0">
            <header className="border-b border-[#dfe3dc] pb-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#2365a5]">
                Food & Beverage Testing
              </span>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#153d32] sm:text-4xl">
                Microbiological Testing
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#626d65] sm:text-base">
                Pathogen and spoilage organism testing for food safety
                assessment and quality control.
              </p>
            </header>

            <div className="mt-7 overflow-hidden rounded-md">
              <img
                src={microbiologyImage}
                alt="Analyst examining a culture plate in a food microbiology laboratory"
                className="h-[220px] w-full object-cover sm:h-[300px]"
              />
            </div>

            <section className="mt-9">
              <h2 className="text-xl font-semibold text-[#153d32]">
                What Is This Test?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#626d65]">
                Microbiological testing checks food and environmental
                samples for microorganisms such as pathogens, spoilage
                organisms and indicator species. Depending on the method,
                testing may involve counting microorganisms or checking
                whether specific organisms are present.
              </p>

              <p className="mt-3 text-sm leading-7 text-[#626d65]">
                The result helps you assess potential contamination risks
                before a product reaches the market. It does not guarantee
                that a product is safe. It reports what was found in the
                sample tested.
              </p>
            </section>

            <section className="mt-8">
              <WhyItMatters items={whyItems} />
            </section>

            <section className="mt-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2365a5]">
                    Testing details
                  </span>

                  <h2 className="mt-2 text-xl font-semibold text-[#153d32]">
                    Parameters Covered
                  </h2>
                </div>

                <p className="text-xs text-[#858d85]">
                  Final scope to be confirmed by the laboratory
                </p>
              </div>

              <div className="mt-4 overflow-x-auto rounded-md border border-[#dfe3dc]">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-[#eae9e6] text-[#34443c]">
                      <th className="px-4 py-3 text-xs font-semibold">
                        Parameter
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold">
                        Methodology
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold">
                        Detection / Reporting Limit
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {parameters.map((item, index) => (
                      <tr
                        key={item.name}
                        className={
                          index % 2 === 0 ? "bg-white" : "bg-[#fafaf7]"
                        }
                      >
                        <td className="border-t border-[#e7e9e3] px-4 py-3 font-medium text-[#35463d]">
                          {item.name}
                        </td>
                        <td className="border-t border-[#e7e9e3] px-4 py-3 text-[#68716b]">
                          {item.method}
                        </td>
                        <td className="border-t border-[#e7e9e3] px-4 py-3 text-[#68716b]">
                          {item.limit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-3 text-xs leading-6 text-[#858d85]">
                Note: Parameters, methods and reporting limits are subject
                to confirmation against the laboratory's available testing
                scope. This table should be updated before publication.
              </p>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-[#153d32]">
                Applicable Standards
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-sm border border-[#e0e3dc] bg-[#f1f2ee] px-3 py-2 text-xs font-medium text-[#46534c]">
                  FSSAI – applicability to confirm
                </span>

                <span className="rounded-sm border border-[#e0e3dc] bg-[#f1f2ee] px-3 py-2 text-xs font-medium text-[#46534c]">
                  ISO/IEC 17025 – scope to confirm
                </span>
              </div>

              <StandardsNote />
            </section>

            <section className="mt-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#2365a5]">
                Need more information?
              </span>

              <h2 className="mt-2 text-xl font-semibold text-[#153d32]">
                Frequently Asked Questions
              </h2>

              <div className="mt-5">
                <FAQAccordion items={faqs} />
              </div>
            </section>

            <div className="mt-9 border-t border-[#e5e6e0] pt-5">
              <Link
                to="/services/microbiological-testing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#155443] transition-all hover:gap-3"
              >
                <CheckCircle2 size={16} />
                Explore Microbiological Testing
              </Link>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <BookingCard />
          </div>
        </div>
      </div>
    </main>
  );
}
