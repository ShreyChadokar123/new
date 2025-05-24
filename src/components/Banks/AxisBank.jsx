import React from "react";
import Layout from "../../components/Layout";

const AxisBankPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0045a8] to-[#00a9e0] text-white py-10 sm:py-14 text-center px-2 sm:px-4 font-sans overflow-hidden">
        <div className="w-4/5 mx-auto md:w-full md:max-w-2xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2 tracking-tight">
            Axis Bank <span style={{ color: "#FFD700" }}>Loans</span>
          </h1>
          <p className="mt-2 text-base sm:text-lg font-medium text-blue-100">
            Flexible Home, Personal, and Car Loans with competitive rates, fast processing, and digital convenience.
          </p>
        </div>
      </section>

      {/* Loan Products Section */}
      <section className="container mx-auto py-8 sm:py-10 px-2 sm:px-4">
        <h2 className="w-4/5 mx-auto md:w-full text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-[#0045a8]">Popular Loan Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-4/5 mx-auto md:w-full">
          {/* Home Loan */}
          <div className="w-4/5 mx-auto md:w-full bg-white rounded-lg shadow p-4 sm:p-6 border">
            <h3 className="text-base sm:text-lg font-semibold text-[#0045a8] mb-1 sm:mb-2">Home Loan</h3>
            <p className="text-gray-700 mb-2">
              Attractive interest rates, flexible tenure up to 30 years, and easy balance transfer options.
            </p>
            <ul className="text-sm text-gray-600 mb-2 list-disc ml-4">
              <li>Loan amount up to ₹5 crore</li>
              <li>Tenure up to 30 years</li>
              <li>No prepayment charges (floating rate)</li>
            </ul>
            <a
              href="https://www.axisbank.com/retail/loans/home-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#0045a8] hover:underline font-semibold"
            >
              Home Loan EMI Calculator
            </a>
          </div>
          {/* Personal Loan */}
          <div className="w-4/5 mx-auto md:w-full bg-white rounded-lg shadow p-4 sm:p-6 border">
            <h3 className="text-base sm:text-lg font-semibold text-[#0045a8] mb-1 sm:mb-2">Personal Loan</h3>
            <p className="text-gray-700 mb-2">
              Instant approval, minimal documentation, and flexible repayment options.
            </p>
            <ul className="text-sm text-gray-600 mb-2 list-disc ml-4">
              <li>Loan from ₹50,000 to ₹40 lakh</li>
              <li>Tenure: 1 to 5 years</li>
              <li>Quick disbursal and easy EMIs</li>
            </ul>
            <a
              href="https://www.axisbank.com/retail/loans/personal-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#0045a8] hover:underline font-semibold"
            >
              Personal Loan EMI Calculator
            </a>
          </div>
          {/* Car Loan */}
          <div className="w-4/5 mx-auto md:w-full bg-white rounded-lg shadow p-4 sm:p-6 border">
            <h3 className="text-base sm:text-lg font-semibold text-[#0045a8] mb-1 sm:mb-2">Car Loan</h3>
            <p className="text-gray-700 mb-2">
              Up to 100% on-road funding, fast approvals, and affordable EMIs for your dream car.
            </p>
            <ul className="text-sm text-gray-600 mb-2 list-disc ml-4">
              <li>Flexible tenure: up to 7 years</li>
              <li>Quick digital process</li>
              <li>Attractive interest rates</li>
            </ul>
            <a
              href="https://www.axisbank.com/retail/loans/car-loan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-[#0045a8] hover:underline font-semibold"
            >
              Car Loan EMI Calculator
            </a>
          </div>
        </div>
      </section>

      {/* EMI Calculator Info */}
      <section className="bg-blue-50 py-8 sm:py-10 px-2 sm:px-4">
        <div className="w-4/5 mx-auto md:w-full md:max-w-3xl">
          <h2 className="text-lg sm:text-xl font-bold text-[#0045a8] mb-3 sm:mb-4">How does the Axis Bank EMI Calculator work?</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Axis Bank’s EMI calculators help you instantly estimate your monthly repayments based on loan amount, interest rate, and tenure. Just enter your values and get your EMI—no complex math required!
          </p>
          <div className="bg-white rounded-lg p-3 sm:p-4 shadow border">
            <b>EMI Formula:</b>
            <div className="my-2 text-xs sm:text-sm bg-blue-100 p-2 rounded font-mono">
              EMI = [P x R x (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> - 1]
            </div>
            <ul className="text-xs sm:text-sm text-gray-700 list-disc ml-6 mt-2">
              <li><b>P</b> = Principal (loan amount)</li>
              <li><b>R</b> = Monthly interest rate</li>
              <li><b>N</b> = Number of monthly instalments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Axis Bank Section */}
      <section className="container mx-auto py-8 sm:py-10 px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-4/5 mx-auto md:w-full">
          {/* Why Choose Axis Bank? (left) */}
          <div className="flex flex-col justify-center md:ml-40">
            <div className="text-lg sm:text-xl font-bold text-[#0045a8] mb-3 sm:mb-4">Why Choose Axis Bank?</div>
            <ul className="list-disc ml-5 sm:ml-6 text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Competitive interest rates and affordable EMIs</li>
              <li>Flexible repayment tenures up to 30 years</li>
              <li>Instant online approval for eligible customers*</li>
              <li>Trusted by millions across India</li>
              <li>Seamless digital application and quick disbursal</li>
            </ul>
            <div className="text-xs text-gray-500 mt-3 sm:mt-4">*Terms and conditions apply</div>
          </div>
          {/* Why Axis Bank (right, short box) */}
          <div className="flex flex-col items-center justify-center ">
            <div className="bg-gradient-to-br from-[#FFD700] to-[#fffbe6] rounded-2xl shadow-lg p-4 sm:p-6 border border-yellow-200 w-4/5 mx-auto md:max-w-xs text-center">
              <div className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-[#0045a8]">Why Axis Bank?</div>
              <ul className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 text-left list-disc ml-3 sm:ml-4">
                <li>Millions of satisfied customers</li>
                <li>Fastest loan approvals</li>
                <li>Lowest EMI options</li>
                <li>24x7 customer support</li>
              </ul>
              <a
                href="https://www.axisbank.com/retail/loans"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full font-semibold shadow hover:opacity-90 transition w-full sm:w-auto"
              >
                Apply Online Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AxisBankPage;
