
import { FlaskConical, MapPin, ShieldCheck } from "lucide-react";

const trustItems = [
  {
    icon: FlaskConical,
    label: "FOOD & QUALITY TESTING",
  },
  {
    icon: MapPin,
    label: "BASED IN LUCKNOW, UTTAR PRADESH",
  },
  {
    icon: ShieldCheck,
    label: "FOOD SAFETY FOCUS",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-[#e3dfdc] bg-[#eeecea]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 divide-y divide-[#d9d5d1] px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex min-h-[48px] items-center justify-center gap-3 py-3 sm:px-3"
            >
              <Icon size={14} className="shrink-0 text-[#1764c0]" />
              <span className="text-center text-[9px] font-semibold tracking-[0.09em] text-[#48534e] sm:text-[10px]">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
