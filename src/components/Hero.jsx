
import { ArrowRight, FlaskConical, ShieldCheck } from "lucide-react";

import labHero from "../assets/images/hero-logo.jpg";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#fcfaf8]">
      <div className="mx-auto grid min-h-[560px] max-w-[1200px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-10 lg:py-20">
        {/* Left content */}
        <div className="relative z-10 max-w-[520px]">
          <div className="mb-5 inline-flex items-center gap-2 border border-[#dce5df] bg-[#f1f5f1] px-3 py-2">
            <FlaskConical size={12} className="text-[#17614d]" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#17614d] sm:text-[10px]">
              Food Testing Lab, Lucknow
            </span>
          </div>

          <h1 className="max-w-[550px] text-[38px] font-semibold leading-[1.12] tracking-[-0.04em] text-[#202522] sm:text-5xl lg:text-[56px]">
            Food Testing You Can Trust.
            <span className="mt-1 block text-[#155443]">
              Results You Can Read.
            </span>
          </h1>

          <p className="mt-6 max-w-[470px] text-[13px] leading-[1.9] text-[#626b66] sm:text-sm">
            GeneBio NutriSafe tests food for safety, quality and label
            compliance. Send your sample and get a clear report your team can
            act on.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book-test"
              className="inline-flex min-h-[46px] items-center justify-center gap-3 bg-[#155443] px-6 text-[10px] font-semibold tracking-wide text-white transition hover:bg-[#103e32]"
            >
              Book a Test
              <ArrowRight size={14} />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-[46px] items-center justify-center gap-3 border border-[#2365a5] px-6 text-[10px] font-semibold tracking-wide text-[#2365a5] transition hover:bg-[#2365a5] hover:text-white"
            >
              Explore Services
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Supporting note */}
          <div className="mt-9 flex items-start gap-3 border-l-2 border-[#75a58d] pl-4">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#155443]" />
            <div>
              <p className="text-[11px] font-semibold text-[#253c33]">
                Clear reports. Confidential results.
              </p>
              <p className="mt-1 text-[10px] leading-relaxed text-[#737b75]">
                Practical testing information to support informed business
                decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
          <div className="relative aspect-[4/4.2] overflow-hidden rounded-[3px] bg-[#e8eeea] sm:aspect-[1/1] lg:aspect-[0.92/1]">
            <img
              src={labHero}
              alt="Food testing technician preparing a sample in the GeneBio NutriSafe laboratory in Lucknow"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102f27]/15 via-transparent to-transparent" />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 left-4 flex max-w-[265px] items-center gap-3 border border-[#e4e6df] bg-white px-4 py-3 shadow-[0_8px_28px_rgba(20,50,40,0.10)] sm:-left-6 sm:bottom-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#e8f0eb]">
              <ShieldCheck size={19} className="text-[#155443]" />
            </div>

            <div>
              <p className="text-[11px] font-semibold text-[#263b32]">
                Clear, actionable reports
              </p>
              <p className="mt-1 text-[9px] text-[#737b75]">
                Confidential sample handling
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
