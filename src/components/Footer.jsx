
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

import nutrisafeLogo from "../assets/logo/nutrisafe.png";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Food Testing",
    href: "/food-testing",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "All Testing Services",
        href: "/services",
      },
      {
        label: "Microbiological Testing",
        href: "/services/microbiological-testing",
      },
      {
        label: "Microbiology Parameters",
        href: "/services/microbiological-testing/parameters",
      },
      {
        label: "Chemical & Physical Testing",
        href: "/services/chemical-physical-testing",
      },
      {
        label: "Nutritional Testing",
        href: "/services/nutritional-testing",
      },
      {
        label: "Heavy Metal Testing",
        href: "/services/heavy-metal-testing",
      },
      {
        label: "Adulteration & Authenticity",
        href: "/services/adulteration-authenticity",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#dce5df] bg-[#f0f2ef] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1120px]">

        {/* Footer Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              to="/"
              aria-label="GeneBio NutriSafe Home"
              className="mb-4 inline-flex"
            >
              <img
                src={nutrisafeLogo}
                alt="GeneBio NutriSafe Laboratories"
                className="h-[265px] w-auto max-w-[190px] object-cover object-left"
              />
            </Link>

            <p className="max-w-xs text-xs leading-6 text-[#626c67]">
              Food testing and quality assurance for safer products,
              stronger compliance and informed business decisions.
            </p>

            <p className="mt-4 text-xs font-semibold text-[#194f40]">
              Safe. Tested. Trusted.
            </p>
          </div>

          {/* Quick Links - Same as Navbar */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#173f35]">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-xs text-[#626c67]">
              {navLinks
                .filter((link) => !link.children)
                .map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="group flex w-fit items-center gap-1 transition hover:text-[#194f40]"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                ))}

              <Link
                to="/services"
                className="group flex w-fit items-center gap-1 transition hover:text-[#194f40]"
              >
                Services
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* All Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#173f35]">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-xs text-[#626c67]">
              {navLinks
                .find((link) => link.children)
                .children.map((child) => (
                  <Link
                    key={child.href}
                    to={child.href}
                    className="group flex w-fit items-center gap-1 transition hover:text-[#194f40]"
                  >
                    {child.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </Link>
                ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#173f35]">
              Contact Information
            </h3>

            <div className="flex flex-col gap-4 text-xs text-[#626c67]">

              <p className="flex items-start gap-2 leading-5">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <span>Lucknow, Uttar Pradesh, India</span>
              </p>

              <a
                href="tel:[CONTACT_NUMBER]"
                className="flex items-center gap-2 transition hover:text-[#194f40]"
              >
                <Phone
                  size={15}
                  className="shrink-0 text-[#26745b]"
                />
                <span>[Contact Number]</span>
              </a>

              <a
                href="mailto:[EMAIL_ADDRESS]"
                className="flex items-center gap-2 transition hover:text-[#194f40]"
              >
                <Mail
                  size={15}
                  className="shrink-0 text-[#26745b]"
                />
                <span>[Email Address]</span>
              </a>

            </div>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#155443] transition hover:text-[#2365a5]"
            >
              Get in Touch
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#dce5df] pt-5 text-center text-[10px] text-[#747d78] sm:flex sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} GeneBio NutriSafe Laboratories.
            All rights reserved.
          </p>

          <p className="mt-2 sm:mt-0">
            A unit of GeneBio Healthcare Private Limited.
          </p>

        </div>
      </div>
    </footer>
  );
}
