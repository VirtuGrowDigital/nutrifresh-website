
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  PackageCheck,
  CalendarCheck,
  ClipboardCheck,
  SearchCheck,
  ArrowRight,
} from "lucide-react";

import {
  microbiologyImage,
  MicrobiologyCTA,
} from "../components/MicrobiologyShared";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Food Safety",
    text: "Look for pathogens that can cause foodborne illness.",
  },
  {
    icon: PackageCheck,
    title: "Product Quality",
    text: "Spot spoilage organisms that change taste, smell or appearance.",
  },
  {
    icon: CalendarCheck,
    title: "Shelf Stability",
    text: "Check how a product holds up under defined storage conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Process Control",
    text: "Assess hygiene controls in production and processing areas.",
  },
  {
    icon: SearchCheck,
    title: "Risk Review",
    text: "Support your hazard analysis and food safety control processes.",
  },
];

export default function MicrobiologicalTesting() {
  return (
    <main className="bg-[#fcfaf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3ee]">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#2365a5]">
              <span className="h-2 w-2 rounded-full bg-[#2365a5]" />
              Microbiological Testing
            </span>

            <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#153d32] sm:text-5xl lg:text-6xl">
              Detect What the Eye Can't See.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#626d65]">
              Microbiological testing helps you check the microbial quality
              and safety of your food, support compliance and protect the
              people who eat it.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/#book-test"
                className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#155443] px-7 text-sm font-semibold text-white transition hover:bg-[#103e32]"
              >
                Book a Test <ArrowRight size={16} />
              </Link>

              <Link
                to="/services/microbiological-testing/parameters"
                className="inline-flex min-h-12 items-center justify-center border border-[#155443]/30 px-7 text-sm font-semibold text-[#155443] transition hover:bg-[#155443]/5"
              >
                View Parameters
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs text-[#68716b]">
              <ShieldCheck size={17} className="text-[#155443]" />
              Food quality and safety testing
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-bl-[60px] border-b-2 border-l-2 border-[#9bb9a6]" />

            <img
              src={microbiologyImage}
              alt="Laboratory analyst working with microbiological samples"
              className="relative z-10 h-[300px] w-full rounded-sm object-cover shadow-xl sm:h-[420px]"
            />

            <div className="absolute -bottom-4 right-5 z-20 bg-white px-5 py-3 shadow-lg sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#155443]">
                GeneBio NutriSafe
              </p>
              <p className="mt-1 text-xs text-[#737b74]">
                Food testing and quality assurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is microbiological testing */}
      <section className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-20">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
            Understanding the process
          </span>

          <h2 className="mt-3 text-3xl font-semibold text-[#153d32] sm:text-4xl">
            What Is Microbiological Testing?
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#626d65] sm:text-base">
            Microbiological testing checks food, ingredients and production
            areas for microorganisms. That includes pathogens, spoilage
            organisms and indicator bacteria.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#626d65] sm:text-base">
            The results show whether a product meets its microbial limits,
            how well your hygiene controls work and how long the product may
            stay in good condition.
          </p>

          <Link
            to="/services/microbiological-testing/parameters"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#155443] hover:gap-3"
          >
            Explore testing parameters <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <img
            src={microbiologyImage}
            alt="Analyst examining a microbiological sample in a laboratory"
            className="h-[280px] w-full rounded-sm object-cover sm:h-[360px]"
          />

          <div className="absolute bottom-4 left-4 bg-white/95 px-4 py-3 shadow-md backdrop-blur-sm">
            <p className="text-sm font-semibold text-[#153d32]">
              Test. Understand. Improve.
            </p>
            <p className="mt-1 text-xs text-[#68716b]">
              Make informed food quality decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-[#f1f3ee] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              The importance of testing
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-[#153d32] sm:text-4xl">
              Why It Matters
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b]">
              Microbiological testing provides information that helps food
              businesses review product quality, hygiene and food safety
              controls.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-lg border border-[#e2e5dd] bg-[#fcfaf8] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eaf0eb] text-[#155443] transition group-hover:bg-[#155443] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <span className="mt-6 block text-xs font-semibold text-[#8a948b]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-[#153d32]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#68716b]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <MicrobiologyCTA />
    </main>
  );
}
