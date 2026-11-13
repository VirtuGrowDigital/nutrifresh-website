
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Clock3,
  LockKeyhole,
  CheckCircle2,
  FlaskConical,
} from "lucide-react";

const steps = ["Client Info", "Product", "Objectives", "Collection"];

const industries = [
  "Food manufacturer",
  "Exporter",
  "Restaurant or cloud kitchen",
  "D2C food or supplement brand",
  "Packaged food startup",
  "Dairy",
  "Agri producer",
  "Other",
];

const testingOptions = [
  "Food Testing",
  "Microbiological Testing",
  "Chemical & Physical Testing",
  "Nutritional Testing",
  "Shelf Life Testing",
  "Heavy Metal Testing",
  "Adulteration & Authenticity Testing",
  "Other / Not Sure",
];

const initialData = {
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phone: "",
  industry: "",
  productName: "",
  productCategory: "",
  productDescription: "",
  testing: [],
  objective: "",
  standards: "",
  additionalRequirements: "",
  collectionMethod: "",
  sampleReady: "",
  sampleQuantity: "",
  preferredDate: "",
  address: "",
  consent: false,
};

function Field({ label, children, required = false }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#424b47]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "h-12 w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 text-sm text-[#424b47] outline-none transition focus:border-[#155443]";

const textareaClass =
  "w-full rounded-sm border border-[#dfe3dc] bg-[#fcfaf8] px-4 py-3 text-sm text-[#424b47] outline-none transition focus:border-[#155443]";

export default function BookTest() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const toggleTesting = (option) => {
    setData((prev) => ({
      ...prev,
      testing: prev.testing.includes(option)
        ? prev.testing.filter((item) => item !== option)
        : [...prev.testing, option],
    }));
    setError("");
  };

  const validateStep = () => {
    if (step === 0) {
      if (
        !data.firstName.trim() ||
        !data.lastName.trim() ||
        !data.company.trim() ||
        !data.email.trim() ||
        !data.phone.trim() ||
        !data.industry
      ) {
        return "Please complete all required client information.";
      }
    }

    if (step === 1) {
      if (!data.productName.trim() || !data.productCategory) {
        return "Please enter your product name and category.";
      }
    }

    if (step === 2) {
      if (!data.testing.length || !data.objective) {
        return "Please select at least one test and your testing objective.";
      }
    }

    if (step === 3) {
      if (!data.collectionMethod || !data.sampleReady) {
        return "Please select your sample collection preference.";
      }

      if (!data.consent) {
        return "Please accept the enquiry consent to continue.";
      }
    }

    return "";
  };

  const nextStep = () => {
    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return;
    }

    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const previousStep = () => {
    setError("");
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateStep();

    if (validationError) {
      setError(validationError);
      return;
    }

    // Connect this data to your backend or CRM before launch.
    console.log("Food testing booking enquiry:", data);
    setSubmitted(true);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-[#153d32]">
                Client Information
              </h2>
              <p className="mt-2 text-sm text-[#858d85]">
                Tell us who we will be coordinating with.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" required>
                <input
                  className={inputClass}
                  placeholder="Your first name"
                  value={data.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                />
              </Field>

              <Field label="Last Name" required>
                <input
                  className={inputClass}
                  placeholder="Your last name"
                  value={data.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                />
              </Field>
            </div>

            <Field label="Company Name" required>
              <input
                className={inputClass}
                placeholder="Your company name"
                value={data.company}
                onChange={(e) => update("company", e.target.value)}
              />
            </Field>

            <Field label="Work Email" required>
              <input
                type="email"
                className={inputClass}
                placeholder="you@company.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </Field>

            <Field label="Phone Number" required>
              <input
                type="tel"
                className={inputClass}
                placeholder="+91 XXXXX XXXXX"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
              />
            </Field>

            <Field label="Industry Sector" required>
              <select
                className={inputClass}
                value={data.industry}
                onChange={(e) => update("industry", e.target.value)}
              >
                <option value="">Select your industry</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        );

      case 1:
        return (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-[#153d32]">
                Product Details
              </h2>
              <p className="mt-2 text-sm text-[#858d85]">
                Help us understand the product you want tested.
              </p>
            </div>

            <Field label="Product Name" required>
              <input
                className={inputClass}
                placeholder="e.g. Packaged fruit juice"
                value={data.productName}
                onChange={(e) => update("productName", e.target.value)}
              />
            </Field>

            <Field label="Product Category" required>
              <select
                className={inputClass}
                value={data.productCategory}
                onChange={(e) => update("productCategory", e.target.value)}
              >
                <option value="">Select product category</option>
                {[
                  "Dairy Products",
                  "Beverages",
                  "Bakery Products",
                  "Ready-to-Eat Food",
                  "Spices & Seasonings",
                  "Grains & Cereals",
                  "Edible Oils",
                  "Meat & Poultry",
                  "Fruits & Vegetables",
                  "Dietary Supplements",
                  "Other",
                ].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Product Description">
              <textarea
                rows={5}
                className={textareaClass}
                placeholder="Describe your product, ingredients or packaging..."
                value={data.productDescription}
                onChange={(e) =>
                  update("productDescription", e.target.value)
                }
              />
            </Field>

            <div className="rounded-md bg-[#f1f3ee] p-4">
              <p className="text-xs leading-6 text-[#68716b]">
                Please provide accurate product information. Our team may
                contact you if additional details are required.
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#153d32]">
                Testing Objectives
              </h2>
              <p className="mt-2 text-sm text-[#858d85]">
                Select the tests you are interested in.
              </p>
            </div>

            <Field label="Select Testing Requirements" required>
              <div className="grid gap-3 sm:grid-cols-2">
                {testingOptions.map((option) => {
                  const checked = data.testing.includes(option);

                  return (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-3 rounded-sm border p-3 text-sm transition ${
                        checked
                          ? "border-[#155443] bg-[#edf3ee] text-[#153d32]"
                          : "border-[#dfe3dc] bg-white text-[#626d65] hover:border-[#9ab4a3]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleTesting(option)}
                        className="h-4 w-4 accent-[#155443]"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </Field>

            <Field label="Primary Objective" required>
              <select
                className={inputClass}
                value={data.objective}
                onChange={(e) => update("objective", e.target.value)}
              >
                <option value="">Select your objective</option>
                <option value="Regulatory compliance">
                  Regulatory compliance
                </option>
                <option value="Product quality control">
                  Product quality control
                </option>
                <option value="Nutrition label verification">
                  Nutrition label verification
                </option>
                <option value="Product development">
                  Product development
                </option>
                <option value="Shelf life assessment">
                  Shelf life assessment
                </option>
                <option value="Buyer or customer requirement">
                  Buyer or customer requirement
                </option>
                <option value="Other">Other</option>
              </select>
            </Field>

            <Field label="Applicable Standard (if known)">
              <input
                className={inputClass}
                placeholder="e.g. FSSAI or buyer specification"
                value={data.standards}
                onChange={(e) => update("standards", e.target.value)}
              />
            </Field>

            <Field label="Additional Requirements">
              <textarea
                rows={4}
                className={textareaClass}
                placeholder="Any specific parameters, deadlines or requirements..."
                value={data.additionalRequirements}
                onChange={(e) =>
                  update("additionalRequirements", e.target.value)
                }
              />
            </Field>
          </div>
        );

      case 3:
        return (
          <div className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-[#153d32]">
                Sample Collection
              </h2>
              <p className="mt-2 text-sm text-[#858d85]">
                Tell us how you would prefer to arrange your sample.
              </p>
            </div>

            <Field label="Preferred Collection Method" required>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "I will send the sample",
                  "I need collection assistance",
                ].map((option) => (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-3 border p-4 text-sm ${
                      data.collectionMethod === option
                        ? "border-[#155443] bg-[#edf3ee] text-[#153d32]"
                        : "border-[#dfe3dc] text-[#626d65]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="collectionMethod"
                      checked={data.collectionMethod === option}
                      onChange={() => update("collectionMethod", option)}
                      className="accent-[#155443]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Is Your Sample Ready?" required>
              <select
                className={inputClass}
                value={data.sampleReady}
                onChange={(e) => update("sampleReady", e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="Yes, sample is ready">
                  Yes, sample is ready
                </option>
                <option value="Will be ready soon">
                  It will be ready soon
                </option>
                <option value="Need guidance">I need guidance</option>
              </select>
            </Field>

            <Field label="Approximate Sample Quantity">
              <input
                className={inputClass}
                placeholder="Enter quantity, if known"
                value={data.sampleQuantity}
                onChange={(e) => update("sampleQuantity", e.target.value)}
              />
            </Field>

            <Field label="Preferred Date (optional)">
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className={inputClass}
                value={data.preferredDate}
                onChange={(e) => update("preferredDate", e.target.value)}
              />
            </Field>

            <Field label="Collection / Dispatch Address (optional)">
              <textarea
                rows={3}
                className={textareaClass}
                placeholder="Enter your address if collection assistance is required..."
                value={data.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </Field>

            <label className="flex items-start gap-3 rounded-sm bg-[#f1f3ee] p-4 text-xs leading-6 text-[#626d65]">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => update("consent", e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#155443]"
              />
              <span>
                I agree to be contacted by GeneBio NutriSafe regarding this
                testing enquiry and understand that sample requirements
                will be confirmed by the laboratory.
              </span>
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-[#fcfaf8]">
      {/* Header */}
      <header className="border-b border-[#e7e8e2] bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-[#153d32]">
            GeneBio <span className="text-[#2365a5]">NutriSafe</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#858d85]">
              Safe. Tested. Trusted.
            </span>
          </Link>

          <Link
            to="/"
            className="text-sm font-medium text-[#155443] hover:underline"
          >
            <span className="inline-flex items-center gap-2">
              <ArrowLeft size={15} /> Return to Site
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <section className="mx-auto grid max-w-[1200px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:gap-16 lg:py-16">
        {/* Left panel */}
        <aside>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#2365a5]">
            BOOK A TEST
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#153d32]">
            Tell Us About Your Testing Needs
          </h1>

          <p className="mt-5 text-sm leading-7 text-[#68716b]">
            Share a few details about your product. Our team will review
            your requirements and help identify the appropriate testing
            options.
          </p>

          <div className="mt-10 border border-[#dfe3dc] bg-[#f5f4f1] p-5">
            <h2 className="text-lg font-semibold text-[#153d32]">
              Why GeneBio NutriSafe?
            </h2>

            <div className="mt-6 space-y-6">
              <div className="flex gap-3">
                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#2365a5]"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[#303a34]">
                    Testing Guidance
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#68716b]">
                    Get help understanding your product's testing needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={19}
                  className="mt-0.5 shrink-0 text-[#2365a5]"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[#303a34]">
                    Clear Communication
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#68716b]">
                    Discuss timelines and requirements before sample
                    submission.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <LockKeyhole
                  size={19}
                  className="mt-0.5 shrink-0 text-[#2365a5]"
                />
                <div>
                  <h3 className="text-sm font-semibold text-[#303a34]">
                    Data Privacy
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#68716b]">
                    Your product information is handled as an enquiry
                    requiring appropriate confidentiality controls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs leading-6 text-[#858d85]">
            Need help filling out this form? Visit our{" "}
            <Link to="/contact" className="font-semibold text-[#155443] underline">
              Contact page
            </Link>.
          </p>
        </aside>

        {/* Form panel */}
        <div className="min-w-0">
          <div className="border border-[#d9ded7] bg-white p-5 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf0eb] text-[#155443]">
                  <CheckCircle2 size={34} />
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[#153d32]">
                  Your Details Are Ready
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#68716b]">
                  The form has captured your information in this browser
                  session. Backend integration is required before your
                  enquiry can be received by our team.
                </p>

                <button
                  onClick={() => {
                    setData(initialData);
                    setStep(0);
                    setSubmitted(false);
                  }}
                  className="mt-7 bg-[#155443] px-7 py-3 text-sm font-semibold text-white hover:bg-[#103e32]"
                >
                  Start Another Enquiry
                </button>
              </div>
            ) : (
              <>
                {/* Progress */}
                <div className="mb-9 grid grid-cols-4 gap-2">
                  {steps.map((item, index) => (
                    <div key={item} className="relative">
                      <div
                        className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold ${
                          index <= step
                            ? "border-[#155443] bg-[#155443] text-white"
                            : "border-[#dfe3dc] bg-white text-[#858d85]"
                        }`}
                      >
                        {index < step ? (
                          <CheckCircle2 size={16} />
                        ) : (
                          index + 1
                        )}
                      </div>

                      <p
                        className={`mt-2 text-center text-[10px] font-semibold sm:text-xs ${
                          index === step
                            ? "text-[#155443]"
                            : "text-[#858d85]"
                        }`}
                      >
                        {item}
                      </p>

                      {index !== steps.length - 1 && (
                        <div
                          className={`absolute left-[65%] top-4 h-px w-[70%] ${
                            index < step ? "bg-[#155443]" : "bg-[#dfe3dc]"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-7 h-1 overflow-hidden rounded-full bg-[#e9ece6]">
                  <div
                    className="h-full bg-[#155443] transition-all duration-300"
                    style={{
                      width: `${((step + 1) / steps.length) * 100}%`,
                    }}
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  {renderStep()}

                  {error && (
                    <p className="mt-5 rounded-sm bg-red-50 px-4 py-3 text-xs text-red-700">
                      {error}
                    </p>
                  )}

                  <div className="mt-9 flex flex-col-reverse justify-between gap-3 border-t border-[#e5e7e1] pt-6 sm:flex-row">
                    <button
                      type="button"
                      onClick={previousStep}
                      disabled={step === 0}
                      className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#dfe3dc] px-6 text-sm font-semibold text-[#155443] transition hover:bg-[#f1f3ee] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ArrowLeft size={16} /> Back
                    </button>

                    {step < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#155443] px-7 text-sm font-semibold text-white transition hover:bg-[#103e32]"
                      >
                        Continue to {steps[step + 1]}{" "}
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#155443] px-7 text-sm font-semibold text-white transition hover:bg-[#103e32]"
                      >
                        Submit Enquiry <ArrowRight size={16} />
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>

          <p className="mt-4 text-center text-xs leading-6 text-[#858d85]">
            GeneBio NutriSafe Laboratories · A unit of GeneBio Healthcare
            Private Limited
          </p>
        </div>
      </section>
    </main>
  );
}
