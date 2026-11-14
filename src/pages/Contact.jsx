
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle2,
  Building2,
  Factory,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    title: "Toll-Free Support",
    value: "1800-8911-499",
    href: "tel:18008911499",
    description: "Connect with our team for assistance.",
  },
  {
    icon: Phone,
    title: "Direct Contact",
    value: "+91 9236392922",
    href: "tel:+919236392922",
    description: "Speak directly with our team.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "sp@genebiohealthcare.com",
    href: "mailto:sp@genebiohealthcare.com",
    description: "Share your testing requirements by email.",
  },
];

const locations = [
  {
    icon: Building2,
    title: "Registered Office",
    address:
      "Sec-F, E-635, LDA Colony, Kanpur Road, Lucknow – 226012, Uttar Pradesh, India.",
  },
  {
    icon: Factory,
    title: "Production Unit",
    address:
      "A-6/1A/2, Industrial Area, Kursi Road, District Barabanki – 225302, Uttar Pradesh, India.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this handler to your backend or form service
    // before publishing to receive enquiries.
    console.log("Contact enquiry:", formData);

    setSubmitted(true);
  };

  return (
    <main className="bg-[#fcfaf8]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f1f3ee]">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2365a5]">
            GET IN TOUCH
          </span>

          <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#153d32] sm:text-5xl lg:text-6xl">
                Let's Talk About Your Testing Needs.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#626d65]">
                Have a product to test or need help choosing the right
                parameters? Our team is here to understand your requirements
                and guide you through the next steps.
              </p>
            </div>

            <div className="border-l-2 border-[#155443] pl-6 lg:ml-auto lg:max-w-xs">
              <p className="text-sm font-semibold text-[#153d32]">
                GeneBio NutriSafe Laboratories
              </p>

              <p className="mt-2 text-sm leading-7 text-[#68716b]">
                A unit of GeneBio Healthcare Private Limited.
              </p>

              <p className="mt-4 text-sm font-medium text-[#155443]">
                Safe. Tested. Trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact details and form */}
      <section className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left information */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              CONTACT INFORMATION
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-[#153d32]">
              We're Here to Help.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b]">
              Whether you need a single test or a detailed testing plan,
              tell us what you are working on. We will help you understand
              the available options.
            </p>

            <div className="mt-9 space-y-7">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#eaf0eb] text-[#155443]">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-[#153d32]">
                        {item.title}
                      </h3>

                      <a
                        href={item.href}
                        className="mt-1 inline-block text-sm font-medium text-[#424b47] transition hover:text-[#155443]"
                      >
                        {item.value}
                      </a>

                      <p className="mt-1 text-xs leading-6 text-[#858d85]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* OEM and Export */}
            <div className="mt-9 rounded-md border border-[#e1e4dc] bg-white p-5">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2365a5]">
                OEM & EXPORT ENQUIRIES
              </p>

              <p className="mt-2 text-sm leading-6 text-[#68716b]">
                For OEM and export-related enquiries, please contact our team.
              </p>

              <p className="mt-3 text-sm font-semibold text-[#153d32]">
                Please confirm the complete contact number before publishing.
              </p>
            </div>

            <div className="mt-10 border-t border-[#e4e6df] pt-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#68716b]">
                Need testing assistance?
              </p>

              <Link
                to="/book-a-test"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#155443] transition-all hover:gap-3"
              >
                Book a Test <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-lg border border-[#e1e4dc] bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#2365a5]">
                SEND AN ENQUIRY
              </span>

              <h2 className="mt-3 text-2xl font-semibold text-[#153d32]">
                How Can We Help You?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#858d85]">
                Fill in the details below and tell us about your requirements.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-md border border-[#d8e6dc] bg-[#f1f7f2] p-6">
                <CheckCircle2 size={32} className="text-[#155443]" />

                <h3 className="mt-4 text-lg font-semibold text-[#153d32]">
                  Enquiry details captured
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#626d65]">
                  The form interface is working. Connect it to your backend
                  or form service before publishing so your team receives
                  enquiries.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-sm font-semibold text-[#155443] underline underline-offset-4"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold text-[#424b47]"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none transition focus:border-[#155443]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-semibold text-[#424b47]"
                    >
                      Company Name
                    </label>

                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className="h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none transition focus:border-[#155443]"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold text-[#424b47]"
                    >
                      Work Email *
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none transition focus:border-[#155443]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-semibold text-[#424b47]"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none transition focus:border-[#155443]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold text-[#424b47]"
                  >
                    Enquiry Type *
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none focus:border-[#155443]"
                  >
                    <option value="">Select an enquiry type</option>
                    <option value="Food Testing">Food Testing</option>
                    <option value="Microbiological Testing">
                      Microbiological Testing
                    </option>
                    <option value="Chemical and Physical Testing">
                      Chemical & Physical Testing
                    </option>
                    <option value="Nutritional Testing">
                      Nutritional Testing
                    </option>
                    <option value="Heavy Metal Testing">
                      Heavy Metal Testing
                    </option>
                    <option value="Adulteration Testing">
                      Adulteration & Authenticity Testing
                    </option>
                    <option value="OEM and Export Enquiry">
                      OEM & Export Enquiry
                    </option>
                    <option value="General Enquiry">
                      General Enquiry
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[#424b47]"
                  >
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your product and testing requirements..."
                    className="w-full resize-y rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 py-3 text-sm text-[#424b47] outline-none transition focus:border-[#155443]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#155443] px-6 text-sm font-semibold text-white transition hover:bg-[#103e32] sm:w-auto"
                >
                  Submit Enquiry <ArrowRight size={16} />
                </button>

                <p className="text-xs leading-6 text-[#858d85]">
                  By submitting this form, you agree to be contacted about
                  your enquiry. Add your approved Privacy Policy link before
                  publishing.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="bg-[#f1f3ee] px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
              OUR LOCATIONS
            </span>

            <h2 className="mt-3 text-3xl font-semibold text-[#153d32]">
              Find GeneBio NutriSafe.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#68716b]">
              Connect with GeneBio NutriSafe Laboratories at the following
              company locations. Please contact our team before planning
              a visit or sample drop-off.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {locations.map((location) => {
              const Icon = location.icon;

              return (
                <div
                  key={location.title}
                  className="flex gap-4 rounded-md border border-[#e1e4dc] bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#eaf0eb] text-[#155443]">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#153d32]">
                      {location.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-[#68716b]">
                      {location.address}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OEM and export contact */}
      <section className="border-t border-[#e4e6df] bg-[#fcfaf8] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2365a5]">
              BUSINESS ENQUIRIES
            </p>

            <h2 className="mt-2 text-xl font-semibold text-[#153d32]">
              OEM & Export Partnerships
            </h2>

            <p className="mt-2 text-sm leading-7 text-[#68716b]">
              Contact us for business, OEM and export-related discussions.
            </p>
          </div>

          <a
            href="mailto:sp@genebiohealthcare.com?subject=OEM%20and%20Export%20Enquiry"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#155443] px-6 text-sm font-semibold text-[#155443] transition hover:bg-[#155443] hover:text-white"
          >
            Email Our Team <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#153d32] px-5 py-14 text-center sm:px-8 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <MessageSquare
            size={28}
            className="mx-auto text-[#b7d1c0]"
          />

          <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
            Have a Product Ready for Testing?
          </h2>

          <p className="mt-4 text-sm leading-7 text-white/70">
            Tell us what you make. Our team can help you identify the
            testing requirements for your product.
          </p>

          <Link
            to="/book-a-test"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-[#153d32] transition hover:bg-[#eaf0eb]"
          >
            Book a Test <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
