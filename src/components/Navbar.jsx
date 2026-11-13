
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();
  const servicesRef = useRef(null);

  // Close all navigation menus
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  // Active navigation state
  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    if (href === "/services") {
      return (
        location.pathname === "/services" ||
        location.pathname.startsWith("/services/")
      );
    }

    return location.pathname === href;
  };

  // Detect page scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menus whenever the route or hash changes
  useEffect(() => {
    closeMenu();
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);

  // Update navbar appearance after route changes
  useEffect(() => {
    setScrolled(window.scrollY > 30);
  }, [location.pathname]);

  // Close dropdown on outside click and Escape
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* Top Information Bar */}
      <div className="relative z-40 bg-[#eae8e7] px-4 py-2">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#555d59] sm:text-[10px]">
            Food Testing & Quality Assurance
            <span className="hidden sm:inline">
              {" "} | Lucknow, Uttar Pradesh
            </span>
          </p>

          <Link
            to="/book-a-test"
            onClick={closeMenu}
            className="shrink-0 text-[9px] font-semibold uppercase tracking-wide text-[#155443] transition hover:text-[#247b61] sm:text-[10px]"
          >
            Book a Test <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
          scrolled
            ? "border-[#e8e7e3]/80 bg-[#fcfaf8]/95 shadow-[0_4px_20px_rgba(21,84,67,0.08)] backdrop-blur-xl"
            : "border-[#e8e7e3]/50 bg-[#fcfaf8]/75 backdrop-blur-md"
        }`}
      >
        <nav className="relative">
          <div className="mx-auto flex min-h-[76px] max-w-[1200px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">

            {/* Logo */}
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="GeneBio NutriSafe home"
              className="flex shrink-0 items-center"
            >
              <img
                src={nutrisafeLogo}
                alt="GeneBio NutriSafe Laboratories"
                className="h-[48px] w-[165px] object-cover object-left"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
              {navLinks.map((link) => {
                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      ref={servicesRef}
                      className="relative flex h-[76px] items-center"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setServicesOpen((open) => !open)
                        }
                        aria-expanded={servicesOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-1 whitespace-nowrap text-[11px] font-medium transition-colors hover:text-[#155443] ${
                          isActive(link.href)
                            ? "text-[#155443]"
                            : "text-[#424b47]"
                        }`}
                      >
                        {link.label}

                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            servicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Click Controlled Services Dropdown */}
                      {servicesOpen && (
                        <div className="absolute left-0 top-full z-[80] w-[270px] rounded-xl border border-[#eae8e7] bg-[#fcfaf8] p-2 shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              to={child.href}
                              onClick={closeMenu}
                              className={`block rounded-lg px-4 py-3 text-[12px] transition hover:bg-[#f1f3ee] hover:text-[#155443] ${
                                location.pathname === child.href
                                  ? "bg-[#e9f1ec] font-semibold text-[#155443]"
                                  : "text-[#424b47]"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={closeMenu}
                    className={`whitespace-nowrap text-[11px] font-medium transition-colors hover:text-[#155443] ${
                      isActive(link.href)
                        ? "text-[#155443]"
                        : "text-[#424b47]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="inline-flex min-h-[37px] items-center justify-center border border-[#2365a5] px-4 text-[9px] font-semibold uppercase tracking-wide text-[#2365a5] transition hover:bg-[#2365a5] hover:text-white"
              >
                Request a Callback
              </Link>

              <Link
                to="/book-a-test"
                onClick={closeMenu}
                className="inline-flex min-h-[37px] items-center justify-center bg-[#155443] px-4 text-[9px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#103e32]"
              >
                Book a Test
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="relative z-[70] rounded-md border border-[#deded8] p-2 text-[#155443] transition hover:bg-[#f0f1ed] lg:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-full z-[60] max-h-[calc(100vh-90px)] overflow-y-auto border-t border-[#e8e7e3]/70 bg-[#fcfaf8] px-5 py-4 shadow-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-[1200px] flex-col">

                {navLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div
                        key={link.label}
                        className="border-b border-[#eeece7]"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setServicesOpen((open) => !open)
                          }
                          aria-expanded={servicesOpen}
                          className={`flex w-full items-center justify-between py-3 text-sm font-medium transition-colors ${
                            isActive(link.href)
                              ? "text-[#155443]"
                              : "text-[#424b47]"
                          }`}
                        >
                          {link.label}

                          <ChevronDown
                            size={17}
                            className={`transition-transform ${
                              servicesOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {servicesOpen && (
                          <div className="mb-3 ml-3 flex flex-col border-l-2 border-[#d9e7de] pl-3">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                to={child.href}
                                onClick={closeMenu}
                                className={`py-2.5 text-xs transition hover:text-[#155443] ${
                                  location.pathname === child.href
                                    ? "font-semibold text-[#155443]"
                                    : "text-[#65716b]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={closeMenu}
                      className={`border-b border-[#eeece7] py-3 text-sm font-medium transition-colors hover:text-[#155443] ${
                        isActive(link.href)
                          ? "text-[#155443]"
                          : "text-[#424b47]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                {/* Mobile CTA Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    to="/contact"
                    onClick={closeMenu}
                    className="flex min-h-[42px] items-center justify-center border border-[#2365a5] px-3 text-center text-[10px] font-semibold uppercase tracking-wide text-[#2365a5] transition hover:bg-[#2365a5] hover:text-white"
                  >
                    Request a Callback
                  </Link>

                  <Link
                    to="/book-a-test"
                    onClick={closeMenu}
                    className="flex min-h-[42px] items-center justify-center gap-1 bg-[#155443] px-3 text-center text-[10px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#103e32]"
                  >
                    Book a Test
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
