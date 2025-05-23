import React from "react";
import { Link } from "react-router-dom";
import {
  BsHouseDoorFill,
  BsBuildingFill,
  BsArrowLeftRight,
  BsBriefcaseFill,
  BsStarFill,
  BsShieldLockFill,
  BsBank2,
  BsCheckCircleFill,
} from "react-icons/bs";
import Layout from "@/components/Layout";

// Loan services data
const services = [
  {
    title: "Home Loan",
    description: "Affordable home loans with attractive interest rates and flexible repayment options.",
    icon: <BsHouseDoorFill />,
    route: "/HomeLoan",
  },
  {
    title: "Loan Against Property",
    description: "Unlock the value of your property with our hassle-free loan against property services.",
    icon: <BsBuildingFill />,
    route: "/loanagainstproperty",
  },
  {
    title: "Balance Transfer",
    description: "Transfer your existing loan to us for lower EMIs and better terms.",
    icon: <BsArrowLeftRight />,
    route: "/BalanceTranfer",
  },
  {
    title: "Business Loan",
    description: "Fuel your business growth with quick and easy business loans tailored to your needs.",
    icon: <BsBriefcaseFill />,
    route: "/business-loan",
  },
];

// Testimonials data
const testimonials = [
  {
    quote: "Super fast approval and very helpful team. Got my home loan in 3 days!",
    author: "Rohan S.",
  },
  {
    quote: "Lowest rates I could find online. Highly recommend!",
    author: "Priya M.",
  },
];

const LoanServicesFooter = () => (
  <Layout>
    {/* Gradient Heading Bar */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Our Loan <span style={{ color: "#FFD700" }}>Services</span>
      </h1>
      {/* Animated Stats Bar */}
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 mt-6">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#FFD700] animate-pulse">12,500+</span>
          <span className="text-sm text-white/80">Applications This Year</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-[#FFD700] animate-bounce">₹800 Cr+</span>
          <span className="text-sm text-white/80">Total Disbursed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="flex items-center gap-1 text-2xl font-bold text-[#FFD700]">
            4.9 <BsStarFill className="inline-block" />
          </span>
          <span className="text-sm text-white/80">Trustpilot Rating</span>
        </div>
      </div>
    </section>

    {/* Security Trust Bar */}
    <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 mb-12 mt-10">
      <div className="flex items-center gap-2">
        <BsShieldLockFill className="text-green-500 text-xl" />
        <span className="text-gray-700 text-sm">SSL Secured</span>
      </div>
      <div className="flex items-center gap-2">
        <BsBank2 className="text-blue-500 text-xl" />
        <span className="text-gray-700 text-sm">RBI Registered</span>
      </div>
      <div className="flex items-center gap-2">
        <BsCheckCircleFill className="text-yellow-400 text-xl" />
        <span className="text-gray-700 text-sm">100+ Partners</span>
      </div>
    </div>

    {/* Description */}
    <section className="bg-[#f7fafd] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="text-lg md:text-xl text-[#222] max-w-2xl mx-auto">
          Explore our range of loan products designed to meet your financial needs with the best terms in the market.
        </p>
      </div>

      {/* Loan Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {services.map(({ title, description, icon, route }, idx) => (
          <Link
            to={route}
            key={idx}
            className="
              group relative bg-white/80 backdrop-blur-lg border border-[#e3eaf3] shadow-lg rounded-2xl 
              flex flex-col items-center px-6 py-8 transition-all duration-300
              hover:-translate-y-3 hover:shadow-[0_8px_32px_0_rgba(0,116,217,0.18)]
              hover:border-[#0074d9] hover:bg-white/90
            "
          >
            {/* Icon with gradient circle and animation */}
            <div className="mb-5">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#0074d9] to-[#66b3ff] shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-white text-3xl">{icon}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1a2b49] mb-2 text-center">{title}</h3>
            <p className="text-base text-[#444] text-center">{description}</p>
            {/* Neon border effect */}
            <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-[#0074d9] group-hover:ring-offset-2 transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </section>

    {/* Testimonials */}
    <section className="max-w-4xl mx-auto mb-16 px-4">
      <h3 className="text-2xl font-bold text-center mb-6 text-[#1a2b49]">What Our Customers Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-700 mb-3">&ldquo;{t.quote}&rdquo;</p>
            <span className="font-bold text-[#0074d9]">- {t.author}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Footer CTA Banner */}
    <div className="bg-gradient-to-r from-[#0074d9] to-[#66b3ff] text-white py-10 px-4 rounded-2xl shadow-lg max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8">
      <div className="text-2xl font-bold mb-4 md:mb-0">Ready to get started?</div>
      <Link
        to="/apply"
        className="bg-[#FFD700] text-[#1a2b49] font-bold px-8 py-3 rounded-full shadow-lg text-lg hover:bg-yellow-400 transition"
      >
        Apply Now
      </Link>
    </div>

    {/* Minimalist Footer */}
    <footer className="bg-[#1a2b49] text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <span className="text-sm">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</span>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-[#FFD700]">Privacy</a>
          <a href="#" className="hover:text-[#FFD700]">Terms</a>
          <a href="#" className="hover:text-[#FFD700]">Contact</a>
        </div>
      </div>
    </footer>
  </Layout>
);

export default LoanServicesFooter;
