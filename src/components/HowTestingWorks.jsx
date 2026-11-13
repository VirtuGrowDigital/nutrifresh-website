
import {
  MessageSquareText,
  PackageCheck,
  Microscope,
  FileCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your product and the tests you want.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Send your sample",
    description:
      "Courier it or book a collection. Minimum quantity: To be confirmed.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "We test",
    description:
      "Our team runs your sample in the lab.",
    icon: Microscope,
  },
  {
    number: "04",
    title: "Get your report",
    description:
      "Receive your testing report. Typical turnaround: To be confirmed.",
    icon: FileCheck,
  },
];

export default function HowTestingWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#f3f1ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[650px] text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#205c49]">
            Simple Process
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#202622] sm:text-3xl lg:text-[36px]">
            How Testing Works
          </h2>

          <p className="mt-3 text-xs leading-6 text-[#626b66] sm:text-sm">
            A straightforward process from your first enquiry to your final
            testing report.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="h-full border border-[#e0dedb] bg-[#fcfaf8] p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-[0.12em] text-[#205c49]">
                      STEP {step.number}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center bg-[#e7eee9] text-[#205c49]">
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-[#202622]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-[#626b66]">
                    {step.description}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={17}
                    className="absolute -right-[11px] top-1/2 z-10 hidden -translate-y-1/2 text-[#205c49] lg:block"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#205c49] transition hover:text-[#174735]"
          >
            Discuss your testing requirements
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
