import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  FaCheckCircle,
  FaWhatsapp,
  FaComments,
  FaPhone,
  FaRegClock,
  FaSmile,
  FaArrowUp,
  FaArrowDown,
  FaBuilding
} from "react-icons/fa";
import { IndianRupee, Star } from "lucide-react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// ====== Data ======
const banks = [
  {
    name: "ICICI Bank",
    logo: "/banks/icici.png",
    interest: 10.75,
    interestRange: "10.75% – 19.99%",
    processing: "Up to 2% + GST",
    maxLoan: 4000000,
    tenure: 5,
    badge: "Popular"
  },
  {
    name: "HDFC Bank",
    logo: "/banks/hdfc.png",
    interest: 11.00,
    interestRange: "11.00% – 21.35%",
    processing: "Up to 2.5% + GST",
    maxLoan: 5000000,
    tenure: 5,
    badge: "Fast Approval"
  },
  {
    name: "Axis Bank",
    logo: "/banks/axis.png",
    interest: 12.00,
    interestRange: "12.00% – 21.00%",
    processing: "Up to 2% + GST",
    maxLoan: 5000000,
    tenure: 5,
    badge: ""
  },
  {
    name: "Kotak Mahindra Bank",
    logo: "/banks/kotak.png",
    interest: 16.00,
    interestRange: "16.00% – 23.00%",
    processing: "Up to 2% + GST",
    maxLoan: 5000000,
    tenure: 4,
    badge: ""
  },
  {
    name: "IDFC First Bank",
    logo: "/banks/idfc.png",
    interest: 14.50,
    interestRange: "14.50% – 24.00%",
    processing: "Up to 3% + GST",
    maxLoan: 4000000,
    tenure: 5,
    badge: ""
  },
  {
    name: "Bajaj Finserv",
    logo: "/banks/bajaj.png",
    interest: 17.00,
    interestRange: "17.00% – 30.00%",
    processing: "Up to 3% + GST",
    maxLoan: 4000000,
    tenure: 5,
    badge: ""
  },
  {
    name: "Fullerton India",
    logo: "/banks/fullerton.png",
    interest: 17.00,
    interestRange: "17.00% – 21.00%",
    processing: "Up to 2% + GST",
    maxLoan: 2500000,
    tenure: 4,
    badge: ""
  }
];

const trustBadges = [
  { label: "RBI Registered", icon: <FaCheckCircle className="text-blue-600" /> },
  { label: "SSL Secured", icon: <FaCheckCircle className="text-blue-600" /> },
  { label: "4.9/5 Google Rating", icon: <FaCheckCircle className="text-yellow-500" /> }
];

const formSteps = [
  { label: "Loan Amount", type: "number", name: "amount", placeholder: "Loan Amount" },
  { label: "Tenure", type: "number", name: "tenure", placeholder: "Tenure" },
  { label: "City", type: "text", name: "city", placeholder: "City" },
  { label: "Mobile Number", type: "tel", name: "mobile", placeholder: "Mobile Number" }
];

const testimonials = [
  {
    name: "Amit Verma",
    position: "Retailer",
    quote: "I got my business loan in just 2 days. The process was simple and transparent. Highly recommend!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Sunita Rao",
    position: "Boutique Owner",
    quote: "No collateral, quick approval, and great support! Helped me expand my store.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    name: "Rakesh Patel",
    position: "Manufacturer",
    quote: "Best rates and flexible repayment. My business grew by 30% after this loan.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  }
];

const features = [
  "Loan up to ₹50 Lakhs",
  "No collateral required",
  "Approval in 24 hours",
  "Flexible tenure up to 5 years",
  "Minimal documentation",
  "Flexible repayment options"
];

const eligibility = [
  "Business vintage ≥ 2 years",
  "Turnover ≥ ₹10 Lakhs/year",
  "Owner age 25–65 years",
  "Profitable business",
  "Credit score 700+"
];

const documents = [
  "ID Proof (Aadhaar, PAN, Passport, Voter ID)",
  "Address Proof (Aadhaar, Passport, Utility Bill)",
  "Business Proof (GST, Shop Act, etc.)",
  "Financials (P&L, Balance Sheet 2 yrs)",
  "Bank Statements (6 months)",
  "ITR (2 years)"
];

// ==== HappyCustomers Section ====
const HappyCustomers = () => {
  const [animatedCards, setAnimatedCards] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('happy-customers-section');
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.75) {
        setTimeout(() => {
          const newAnimatedCards = {};
          testimonials.forEach((_, index) => {
            newAnimatedCards[index] = true;
          });
          setAnimatedCards(newAnimatedCards);
        }, 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="happy-customers-section"
      className="section-padding bg-gray-50 h-auto md:h-full mt-10 md:mt-16 mb-10 md:mb-16"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Happy Customers</span>, Real Stories
          </h2>
          <p className="text-gray-600">
            Don't just take our word for it. See what our clients have to say about their experience with Hously Finserv.
          </p>
        </div>
        {/* Mobile Slider */}
        <div className="block md:hidden">
          <Swiper
            modules={[Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={testimonials.length > 1}
            style={{ paddingBottom: "32px" }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className={`glass-card rounded-xl p-6 mx-2 shadow bg-white transition-all duration-500`}>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                    />
                    <div className="ml-4">
                      <h3 className="font-bold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-6 hover:scale-105 transition shadow bg-white ${
                animatedCards[index] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400"
                />
                <div className="ml-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function CenteredStatsBar() {
  const stats = [
    {
      icon: <IndianRupee size={20} strokeWidth={2.2} className="text-[#0074d9]" />,
      value: 800,
      suffix: "Cr+",
      label: "Business Loans Disbursed",
      description: "Since 2020",
      trend: "7.2%",
      trendType: "up"
    },
    {
      icon: <FaRegClock className="text-green-700 text-xl" />,
      value: 24,
      suffix: "h",
      label: "Avg. Approval Time",
      description: "Last 3 months",
      trend: "1.1%",
      trendType: "down"
    },
    {
      icon: <FaSmile className="text-yellow-600 text-xl" />,
      value: 15000,
      suffix: "+",
      label: "Happy Businesses",
      description: "Across India",
      trend: "4.3%",
      trendType: "up"
    },
    {
      icon: <FaBuilding className="text-purple-700 text-xl" />,
      value: 900,
      label: "Cities Served",
      description: "Pan India",
      trend: "0.9%",
      trendType: "up"
    }
  ];
  return (
    <div className="container mx-auto w-full py-8 mt-10 md:mt-16 mb-10 md:mb-16">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 border rounded-xl bg-white shadow-sm px-6 py-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center flex-1 ${idx !== stats.length - 1 ? "md:border-r md:pr-8" : ""}`}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              {stat.icon}
              <span className="text-xl font-bold text-gray-900">
                <CountUp end={stat.value} duration={2} separator="," />
              </span>
              {stat.suffix && (
                <span className="text-base font-semibold text-gray-500">
                  {stat.suffix}
                </span>
              )}
            </div>
            <div className="flex flex-col items-center w-full">
              <div className="text-sm text-gray-700 font-semibold">{stat.label}</div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">{stat.description}</span>
                {stat.trend && (
                  <span className={`ml-3 flex items-center font-semibold text-xs ${stat.trendType === "up" ? "text-green-600" : "text-red-600"}`}>
                    {stat.trendType === "up" ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                    {stat.trend}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const BusinessLoanPage = () => {
  const [formData, setFormData] = useState({
    amount: "",
    tenure: "",
    city: "",
    mobile: ""
  });
  const [step, setStep] = useState(0);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [filterAmount, setFilterAmount] = useState("");
  const [filterTenure, setFilterTenure] = useState("");

  const filteredBanks = banks.filter(b => {
    let ok = true;
    if (filterAmount) ok = ok && filterAmount <= b.maxLoan;
    if (filterTenure) ok = ok && filterTenure <= b.tenure;
    return ok;
  });

  const footerRef = useRef(null);

  const handleFormChange = e => {
    setFormData({ ...formData, [formSteps[step].name]: e.target.value });
  };
  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);
  const handleLeadSubmit = e => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const handleChat = () => alert("Chat feature coming soon!");

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[520px] flex items-center justify-center overflow-hidden mb-10 md:mb-16">
        <img
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
          alt="Business Loan Banner"
          className="absolute w-full h-full object-cover z-0"
          loading="eager"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 text-white text-center flex flex-col items-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Business Loan for Every Ambition
          </h1>
          <p className="text-lg md:text-2xl font-medium mb-8 drop-shadow">
            Fast, collateral-free loans for your business. Compare top banks. Get instant offers.
          </p>
          {/* HERO BUTTONS */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6 md:justify-center md:items-center w-full max-w-md mx-auto">
            <Button
              className="flex items-center gap-2 w-40 bg-green-600 text-white font-semibold px-4 py-2 rounded text-[15px] h-10 justify-center hover:bg-green-700 transition"
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
            >
              <FaWhatsapp className="text-base" /> WhatsApp
            </Button>
            <Button
              className="flex items-center gap-2 w-40 bg-gray-700 text-white font-semibold px-4 py-2 rounded text-[15px] h-10 justify-center hover:bg-gray-800 transition"
              onClick={handleChat}
            >
              <FaComments className="text-base" /> Live Chat
            </Button>
            <a
              href="tel:1800123456"
              className="flex items-center gap-2 w-40 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold px-4 py-2 rounded text-[15px] h-10 justify-center hover:from-red-600 hover:to-pink-600 transition whitespace-nowrap"
            >
              <FaPhone className="text-base" /> Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Get Your Personalized Offer
          - Mobile: normal flow (mt-10)
          - Desktop: negative margin (overlap hero image) */}
      <div
        id="get-offer"
        className="container mx-auto mt-10 md:mt-[-150px] md:mb-12 z-30 relative"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl mx-auto">
          {!leadSubmitted ? (
            <form onSubmit={step === formSteps.length - 1 ? handleLeadSubmit : e => { e.preventDefault(); handleNext(); }}>
              <div
                className="mb-4 text-xl font-bold text-center"
                style={{ color: "#0074d9" }}
              >
                Get Your Personalized Offer
              </div>
              <div className="mb-2 text-gray-500 text-center">No impact on credit score. Takes less than 30 seconds.</div>
              <div className="mb-6 w-full min-w-0">
                {/* No label, only input with placeholder */}
                {formSteps[step].type === "select" ? (
                  <select
                    className="w-full border rounded px-4 py-2 text-base"
                    value={formData[formSteps[step].name]}
                    onChange={handleFormChange}
                    required
                    style={{ minWidth: 0 }}
                  >
                    <option value="">Select</option>
                    {formSteps[step].options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    className="w-full border rounded px-4 py-2 text-base"
                    type={formSteps[step].type}
                    placeholder={formSteps[step].placeholder}
                    value={formData[formSteps[step].name]}
                    onChange={handleFormChange}
                    required
                    style={{ minWidth: 0 }}
                  />
                )}
              </div>
              <div className="flex justify-between items-center">
                {step > 0 && (
                  <button type="button" onClick={handlePrev} className="text-blue-600 font-semibold">Back</button>
                )}
                <div className="flex-1"></div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-700 transition"
                >
                  {step === formSteps.length - 1 ? "Get Offer" : "Next"}
                </button>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex-1 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-2" style={{ width: `${((step + 1) / formSteps.length) * 100}%` }}></div>
                </div>
                <span className="ml-3 text-sm">{step + 1}/{formSteps.length}</span>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Thank you!</div>
              <div className="mb-4">Your details have been submitted.<br />Our expert will contact you soon with the best business loan offers.</div>
              <Button
                className="bg-blue-600 text-white px-6 py-2 rounded font-bold shadow hover:bg-blue-700 transition"
                onClick={() => { setLeadSubmitted(false); setStep(0); setFormData({ amount: "", tenure: "", city: "", mobile: "" }); }}
              >
                Submit Another
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ==== STATS BAR (NOW ABOVE CARDS) ==== */}
      <CenteredStatsBar />

      {/* Features, Eligibility, Documents */}
      <div className="container mx-auto mt-10 md:mt-16 mb-10 md:mb-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Key Features */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Key Features
          </h2>
          <ul className="space-y-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-800 text-base">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-2 font-bold">
                  {String.fromCharCode(10003)}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Eligibility */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Eligibility
          </h2>
          <ol className="space-y-3 list-decimal list-inside text-gray-800 text-base pl-2">
            {eligibility.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ol>
        </div>
        {/* Documents */}
        <div className="bg-white rounded-xl shadow p-7 border border-gray-200 flex flex-col">
          <h2
            className="text-lg md:text-xl font-semibold mb-4"
            style={{ color: "#0074d9", marginTop: 0 }}
          >
            Required Documents
          </h2>
          <ul className="space-y-3 list-disc list-inside text-gray-800 text-base pl-2">
            {documents.map((item, idx) => (
              <li key={idx} className="mb-1">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Compare Top Banks for Business Loans (table section) */}
      <div id="banks" className="container mx-auto mb-10 md:mb-16 mt-10 md:mt-16">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          style={{ color: "#0074d9" }}
        >
          Compare Top Banks for Business Loans
        </h2>
        {/* --- Filter Inputs: width exactly like Home/Property/Balance Transfer page --- */}
        <div className="flex flex-wrap gap-4 mb-4 justify-center">
          <input
            type="number"
            placeholder="Loan Amount"
            className="border rounded px-4 py-2 w-44"
            value={filterAmount}
            onChange={e => setFilterAmount(e.target.value)}
            min={100000}
            max={5000000}
          />
          <input
            type="number"
            placeholder="Tenure"
            className="border rounded px-4 py-2 w-44"
            value={filterTenure}
            onChange={e => setFilterTenure(e.target.value)}
            min={1}
            max={5}
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow border border-gray-200">
            <thead>
              <tr className="bg-blue-100 text-blue-700 text-left">
                <th className="px-4 py-3">Bank</th>
                <th className="px-4 py-3">Interest Rate</th>
                <th className="px-4 py-3">Processing Fee</th>
                <th className="px-4 py-3">Max Loan</th>
                <th className="px-4 py-3">Max Tenure</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filteredBanks.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No banks found for selected criteria.</td>
                </tr>
              )}
              {filteredBanks.map((bank, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-blue-50 transition">
                  <td className="flex items-center gap-3 px-4 py-3">
                    <img src={bank.logo} alt={bank.name} className="w-8 h-8 rounded-full bg-white border" />
                    <span className="font-medium">{bank.name}</span>
                    {bank.badge && (
                      <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">{bank.badge}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{bank.interestRange}</td>
                  <td className="px-4 py-3">{bank.processing}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{`₹${bank.maxLoan.toLocaleString()}`}</td>
                  <td className="px-4 py-3">{bank.tenure} yrs</td>
                  <td className="px-4 py-3">
                    <Button className="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-4 py-2 rounded font-bold hover:from-blue-800 hover:to-blue-500 transition">Apply</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Trust Badges ONLY (media logos REMOVED, mobile pe chhote) */}
      <div className="container mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-2 md:gap-6">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 md:gap-2 bg-blue-50 px-2 py-1 md:px-4 md:py-2 rounded shadow text-blue-700 font-semibold text-sm md:text-base"
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <HappyCustomers />

      {/* Footer (blank) */}
      <footer ref={footerRef}></footer>
    </Layout>
  );
};

export default BusinessLoanPage;
