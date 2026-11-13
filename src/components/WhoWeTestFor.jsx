
import {
  Factory,
  Truck,
  Utensils,
  ShoppingBag,
  Package,
  Milk,
  Wheat,
} from "lucide-react";

const industries = [
  { label: "Food Manufacturers", icon: Factory },
  { label: "Exporters", icon: Truck },
  { label: "Restaurants & Cloud Kitchens", icon: Utensils },
  { label: "D2C Food & Supplement Brands", icon: ShoppingBag },
  { label: "Packaged Food Startups", icon: Package },
  { label: "Dairy Businesses", icon: Milk },
  { label: "Agricultural Producers", icon: Wheat },
];

export default function WhoWeTestFor() {
  return (
    <section
      id="industries"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[650px] text-center">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#205c49]">
            Industries We Serve
          </p>

          <h2 className="text-2xl font-semibold tracking-tight text-[#202622] sm:text-3xl lg:text-[36px]">
            Built for Food Businesses
          </h2>

          <p className="mt-3 text-xs leading-6 text-[#626b66] sm:text-sm">
            Supporting businesses across the food industry with testing
            solutions that help them make informed quality and safety
            decisions.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.label}
                className="inline-flex min-h-[48px] items-center gap-3 border border-[#e2e5e1] bg-[#fcfaf8] px-4 py-3 transition hover:border-[#205c49] hover:bg-[#f3f7f4]"
              >
                <Icon size={17} className="shrink-0 text-[#205c49]" />

                <span className="text-[11px] font-medium text-[#343d38] sm:text-xs">
                  {industry.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
