
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="bg-[#205c49] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-[620px]">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#c5e1d2]">
            Let's Work Together
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[42px]">
            Ready to test your product?
          </h2>

          <p className="mt-4 max-w-[520px] text-sm leading-7 text-[#e0ebe5]">
            Tell us what you make. We will suggest the right tests for your
            product and testing requirements.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            to="/book-a-test"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 bg-white px-6 text-xs font-bold text-[#205c49] transition hover:bg-[#eaf1ed]"
          >
            Book a Test
            <ArrowRight size={15} />
          </Link>

          <Link
            to="/contact"
            className="inline-flex min-h-[46px] items-center justify-center gap-2 border border-white/60 px-6 text-xs font-bold text-white transition hover:bg-white/10"
          >
            <MessageCircle size={15} />
            Request a Callback
          </Link>
        </div>
      </div>
    </section>
  );
}
