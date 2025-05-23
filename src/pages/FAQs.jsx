import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/Layout';

const faqs = [
  {
    q: "What is a Home Loan and who can apply?",
    a: "A Home Loan is a secured loan taken to purchase or construct a house. Salaried, self-employed, and business professionals can apply.",
    isOpen: true,
  },
  {
    q: "What is a Loan Against Property?",
    a: "Loan Against Property (LAP) is a secured loan where you mortgage your residential or commercial property to get funds for personal or business needs.",
    isOpen: false,
  },
  {
    q: "How does Balance Transfer work?",
    a: "Balance Transfer lets you transfer your existing loan to another lender at a lower interest rate, helping you save on EMIs.",
    isOpen: false,
  },
  {
    q: "What is a Business Loan?",
    a: "A Business Loan is an unsecured loan designed to meet various business needs like expansion, working capital, or equipment purchase.",
    isOpen: false,
  },
  {
    q: "What types of loans do you offer?",
    a: "We offer a variety of loans including personal loans, home loans, car loans, business loans, and loans against property.",
    isOpen: false,
  },
  {
    q: "How can I apply for a loan?",
    a: "You can easily apply online by filling out our simple application form. Our team will review your details and contact you for the next steps.",
    isOpen: false,
  },
  {
    q: "What documents are required for loan approval?",
    a: "Generally, you need to submit identity proof, address proof, income proof, and bank statements. Specific requirements may vary depending on the loan type.",
    isOpen: false,
  },
  {
    q: "How long does the loan approval process take?",
    a: "Once we receive all required documents, the approval process usually takes 24-48 hours.",
    isOpen: false,
  },
  {
    q: "Can I prepay or foreclose my loan?",
    a: "Yes, you can prepay or foreclose your loan at any time. Please refer to your loan agreement for any applicable charges.",
    isOpen: false,
  },
  {
    q: "What is the interest rate for loans?",
    a: "Our interest rates are competitive and depend on the loan amount, tenure, and your credit profile. Contact us for a personalized quote.",
    isOpen: false,
  },
  {
    q: "Is my data secure with your platform?",
    a: "Absolutely. We use advanced encryption and security measures to protect your personal and financial information.",
    isOpen: false,
  },
];

export default function FAQPage() {
  const [faqItems, setFaqItems] = useState(faqs);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const visibleCount = 4;

  // Toggle FAQ open/close
  const toggleFaq = (index) => {
    const updatedFaqs = faqItems.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : faq.isOpen,
    }));
    setFaqItems(updatedFaqs);
  };

  // Filter FAQs based on search
  const filteredFaqs = faqItems.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show only visibleCount questions unless showAll is true
  const faqsToShow = showAll ? filteredFaqs : filteredFaqs.slice(0, visibleCount);

  return (
    <Layout>
      {/* Glacial Indifference Font Import */}
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');
          body, .faq-root {
            font-family: 'Glacial Indifference', sans-serif;
            background: #f8f9fa;
          }
        `}
      </style>

      {/* Hero Heading Section */}
      <section
        className="w-100 text-white py-14 text-center px-4"
        style={{
          background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
          fontFamily: "'Glacial Indifference', sans-serif",
        }}
      >
        <h1
          className="fw-bold mb-2"
          style={{
            fontSize: "2.7rem",
            letterSpacing: "-1px",
            lineHeight: 1.13,
            fontWeight: 800,
          }}
        >
          Frequently Asked <span style={{ color: "#ffd700" }}>Questions</span>
        </h1>
        <div
          style={{
            color: "#fff",
            fontSize: "1.25rem",
            fontWeight: 400,
            opacity: 0.93,
            maxWidth: 650,
            margin: "0 auto",
          }}
        >
          Find answers to your questions about our loan products and services.
        </div>
      </section>

      {/* Main FAQ Card Section */}
      <div className="faq-root" style={{ fontFamily: "'Glacial Indifference', sans-serif" }}>
        <div
          className="faq-card"
          style={{
            background: "rgba(255,255,255,0.98)",
            borderRadius: "22px",
            boxShadow: "0 8px 40px rgba(0,116,217,0.10)",
            padding: "46px 34px 46px 34px",
            maxWidth: "1280px",
            width: "100%",
            margin: "48px auto",
            borderLeft: "7px solid #0074d9",
            position: "relative",
          }}
        >
          <div className="row align-items-center justify-content-center" style={{ minHeight: "420px" }}>
            {/* Left: FAQ Content */}
            <div className="col-md-6">
              {/* Modern Search Bar */}
              <div className="modern-search-bar mb-3" style={{
                display: "flex",
                alignItems: "center",
                background: "#f7fafd",
                border: "1.5px solid #e3e3e3",
                borderRadius: "30px",
                padding: "6px 18px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                marginBottom: "22px",
                transition: "border 0.2s",
              }}>
                <span className="modern-search-icon" style={{
                  marginRight: "10px",
                  color: "#0074d9",
                  fontSize: "20px",
                  flexShrink: 0,
                  opacity: 0.8,
                }}>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0074d9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </span>
                <input
                  type="text"
                  className="modern-search-input"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "16px",
                    flex: 1,
                    color: "#333",
                    fontFamily: "inherit",
                    padding: "8px 0",
                  }}
                />
              </div>
              {/* FAQ Items */}
              <div className="faq-list" style={{
                background: "transparent",
                borderRadius: "12px",
                marginTop: "8px",
              }}>
                {faqsToShow.length === 0 && (
                  <div className="text-center text-muted py-4">
                    No questions found for your search.
                  </div>
                )}
                {faqsToShow.map((faq, index) => (
                  <div
                    key={index}
                    className="faq-item"
                    onClick={() => toggleFaq(faqItems.indexOf(faq))}
                    style={{
                      borderBottom: "1px solid #eaeaea",
                      padding: "18px 0 9px 0",
                      cursor: "pointer",
                      transition: "background 0.1s",
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="faq-question" style={{
                        fontSize: "19px",
                        color: "#0074d9",
                        fontWeight: 700,
                        fontFamily: "'Glacial Indifference', sans-serif",
                      }}>{faq.q}</div>
                      <div className="faq-toggle" style={{
                        fontSize: "22px",
                        fontWeight: 400,
                        color: "#bbb",
                        marginLeft: "10px",
                        userSelect: "none",
                      }}>
                        {faq.isOpen ? "−" : "+"}
                      </div>
                    </div>
                    {faq.isOpen && (
                      <div className="mt-2 faq-answer" style={{
                        color: "#333",
                        fontSize: "15.5px",
                        textAlign: "justify",
                        fontFamily: "'Glacial Indifference', sans-serif",
                      }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
                {/* Show More Button */}
                {!showAll && filteredFaqs.length > visibleCount && (
                  <button
                    className="show-more-btn"
                    style={{
                      display: "block",
                      margin: "18px auto 0 auto",
                      background: "#0074d9",
                      color: "#fff",
                      fontWeight: 600,
                      border: "none",
                      borderRadius: "8px",
                      padding: "9px 28px",
                      fontSize: "16px",
                      boxShadow: "0 2px 8px rgba(0,116,217,0.08)",
                      transition: "background 0.2s",
                    }}
                    onClick={() => setShowAll(true)}
                  >
                    Show More
                  </button>
                )}
                {/* Show Less Button */}
                {showAll && filteredFaqs.length > visibleCount && (
                  <button
                    className="show-more-btn"
                    style={{
                      display: "block",
                      margin: "18px auto 0 auto",
                      background: "#0074d9",
                      color: "#fff",
                      fontWeight: 600,
                      border: "none",
                      borderRadius: "8px",
                      padding: "9px 28px",
                      fontSize: "16px",
                      boxShadow: "0 2px 8px rgba(0,116,217,0.08)",
                      transition: "background 0.2s",
                    }}
                    onClick={() => setShowAll(false)}
                  >
                    Show Less
                  </button>
                )}
              </div>
            </div>
            {/* Right: Illustration */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center no-bg"
              style={{ background: "none" }}
            >
              <img
                src="https://img.freepik.com/free-vector/faq-concept-illustration_114360-5245.jpg"
                alt="FAQ Illustration"
                className="faq-illustration"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  height: "410px",
                  objectFit: "contain",
                  borderRadius: "18px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  background: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
