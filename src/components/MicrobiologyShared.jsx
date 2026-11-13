
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock3,
  FlaskConical,
  ChevronDown,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

export const microbiologyImage =
  "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=85";

export function Breadcrumb({ current }) {
  return (
    <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-[#777e79]">
      <Link to="/" className="hover:text-[#155443]">Home</Link>
      <span>/</span>
      <Link to="/#services" className="hover:text-[#155443]">
        Testing Services
      </Link>
      <span>/</span>
      <span>Food & Beverage</span>
      <span>/</span>
      <span className="font-semibold text-[#155443]">{current}</span>
    </div>
  );
}

export function BookingCard() {
  return (
    <aside className="h-fit rounded-xl border border-[#dedfd9] bg-[#fcfaf8] p-5 shadow-[0_5px_20px_rgba(20,50,40,0.05)] lg:sticky lg:top-28">
      <h3 className="text-xl font-semibold text-[#153d32]">
        Need This Test?
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#68716b]">
        Tell us about your product. We will confirm the test, the sample
        requirements and the cost.
      </p>

      <div className="my-4 space-y-3 border-y border-[#e4e5df] py-4">
        <div className="flex items-start gap-3 text-sm text-[#46534c]">
          <Clock3 size={17} className="mt-0.5 shrink-0 text-[#2365a5]" />
          <span>
            <strong className="font-semibold">Turnaround:</strong>{" "}
            Confirmed at booking
          </span>
        </div>

        <div className="flex items-start gap-3 text-sm text-[#46534c]">
          <FlaskConical size={17} className="mt-0.5 shrink-0 text-[#2365a5]" />
          <span>
            <strong className="font-semibold">Sample quantity:</strong>{" "}
            Depends on product and tests
          </span>
        </div>
      </div>

      <Link
        to="/#book-test"
        className="flex min-h-11 w-full items-center justify-center gap-2 rounded-sm bg-[#155443] px-4 text-sm font-semibold text-white transition hover:bg-[#103e32]"
      >
        <FlaskConical size={15} />
        Book a Test
      </Link>

      <Link
        to="/#contact"
        className="mt-3 flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-[#2365a5] px-4 text-sm font-semibold text-[#2365a5] transition hover:bg-[#2365a5] hover:text-white"
      >
        Request a Callback
        <ArrowRight size={15} />
      </Link>

      <p className="mt-3 text-center text-[11px] leading-5 text-[#818780]">
        Our team will help identify the right tests for your product.
      </p>
    </aside>
  );
}

export function WhyItMatters({ items }) {
  return (
    <section className="rounded-lg border border-[#dededb] bg-[#f0efed] p-5 sm:p-6">
      <h2 className="text-xl font-semibold text-[#153d32]">
        Why It Matters
      </h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#155443]">
              <ShieldCheck size={14} />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#293d34]">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#5e665f]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-[#e5e6e0] border-y border-[#e5e6e0]">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="text-sm font-semibold text-[#294238]">
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-[#155443] transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <p className="max-w-3xl pb-4 text-sm leading-7 text-[#68716b]">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function MicrobiologyCTA() {
  return (
    <section className="relative overflow-hidden bg-[#123f34] px-5 py-14 text-white sm:px-8 lg:py-16">
      <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full border border-white/10" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-7 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8d7c8]">
            GeneBio NutriSafe Laboratories
          </span>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Want to test a product?
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/75 sm:text-base">
            Tell us about your food product. Our team will help you identify
            the appropriate microbiological tests.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/#book-test"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-sm font-semibold text-[#155443] transition hover:bg-[#e9f1ec]"
          >
            Book a Test <ArrowRight size={16} />
          </Link>

          <Link
            to="/#contact"
            className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StandardsNote() {
  return (
    <div className="mt-4 flex gap-3 rounded-lg border border-[#e5e7e0] bg-[#f8f8f5] p-4">
      <FileCheck2 className="mt-0.5 shrink-0 text-[#2365a5]" size={18} />
      <p className="text-xs leading-6 text-[#68716b]">
        Applicable standards and accreditation details will be confirmed
        against the laboratory's current test scope before publication.
      </p>
    </div>
  );
}
