
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Building2,
  Globe,
} from "lucide-react";

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

const contactDetails = {
  email: "sp@genebiohealthcare.com",
  tollFree: "18008911499",
  tollFreeDisplay: "1800-8911-499",
  phone: "+919236392922",
  phoneDisplay: "+91 9236392922",
  oem: "+9196593983",
  oemDisplay: "+91 96593 983",
};

const serviceLinks = navLinks.find((link) => link.children)?.children || [];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#dce5df] bg-[#f0f2ef] px-4 py-12 text-[#424b47] sm:px-6 lg:px-8">

      <div className="mx-auto max-w-[1200px]">

        {/* Main Footer Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr_1.35fr] lg:gap-10">

          {/* Brand Section */}
          <div>
            <Link
              to="/"
              aria-label="GeneBio NutriSafe Home"
              className="mb-4 inline-flex"
            >
              <img
                src={nutrisafeLogo}
                alt="GeneBio NutriSafe Laboratories"
                className="h-[265px] w-auto max-w-[200px] object-cover object-left"
              />
            </Link>

            <p className="mt-3 max-w-xs text-xs leading-6 text-[#626c67]">
              Food testing and quality assurance for safer products,
              stronger compliance and informed business decisions.
            </p>

            <p className="mt-4 text-xs font-semibold tracking-wide text-[#194f40]">
              Safe. Tested. Trusted.
            </p>

            <p className="mt-2 text-[11px] text-[#747d78]">
              A unit of GeneBio Healthcare Private Limited.
            </p>
          </div>

          {/* Quick Links */}
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

              <Link
                to="/book-a-test"
                className="group flex w-fit items-center gap-1 transition hover:text-[#194f40]"
              >
                Book a Test
                <ArrowUpRight
                  size={12}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>

          {/* Testing Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold text-[#173f35]">
              Our Services
            </h3>

            <div className="flex flex-col gap-3 text-xs text-[#626c67]">
              {serviceLinks.map((child) => (
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

            <div className="space-y-5 text-xs text-[#626c67]">

              {/* Registered Office */}
              <div className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <div>
                  <p className="mb-1 font-semibold text-[#194f40]">
                    Registered Office
                  </p>
                  <p className="leading-5">
                    Sec-F, E-635 LDA Colony,
                    Kanpur Road, Lucknow - 226012,
                    Uttar Pradesh, India.
                  </p>
                </div>
              </div>

              {/* Production Unit */}
              <div className="flex items-start gap-2">
                <Building2
                  size={16}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <div>
                  <p className="mb-1 font-semibold text-[#194f40]">
                    Production Unit
                  </p>
                  <p className="leading-5">
                    A-6/1A/2, Industrial Area,
                    Kursi Road, District Barabanki,
                    Uttar Pradesh - 225302, India.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2">
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <div>
                  <p className="mb-1 font-semibold text-[#194f40]">
                    Email
                  </p>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="break-all transition hover:text-[#2365a5]"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              {/* Toll Free */}
              <div className="flex items-start gap-2">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <div>
                  <p className="mb-1 font-semibold text-[#194f40]">
                    Toll-Free Support
                  </p>
                  <a
                    href={`tel:${contactDetails.tollFree}`}
                    className="transition hover:text-[#2365a5]"
                  >
                    {contactDetails.tollFreeDisplay}
                  </a>
                </div>
              </div>

              {/* Direct Contact */}
              <div className="flex items-start gap-2">
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#26745b]"
                />
                <div>
                  <p className="mb-1 font-semibold text-[#194f40]">
                    Direct Contact
                  </p>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="transition hover:text-[#2365a5]"
                  >
                    {contactDetails.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* OEM and Export Enquiries */}
              <div className="rounded-lg border border-[#dce5df] bg-white/70 p-3">
                <div className="flex items-start gap-2">
                  <Globe
                    size={16}
                    className="mt-0.5 shrink-0 text-[#26745b]"
                  />
                  <div>
                    <p className="mb-2 font-semibold text-[#194f40]">
                      OEM & Export Enquiries
                    </p>
                    <a
                      href={`tel:${contactDetails.oem}`}
                      className="text-sm font-semibold text-[#2365a5] transition hover:text-[#155443]"
                    >
                      {contactDetails.oemDisplay}
                    </a>
                  </div>
                </div>
              </div>

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
        <div className="mt-10 border-t border-[#dce5df] pt-5 text-center text-[10px] text-[#747d78] sm:flex sm:items-center sm:justify-between sm:text-left">

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
