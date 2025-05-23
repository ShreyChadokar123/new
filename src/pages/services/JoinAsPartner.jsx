import React, { useState } from "react";
import Layout from "@/components/Layout";
import { FaHandshake } from "react-icons/fa";

const fontLink = "https://fonts.cdnfonts.com/css/glacial-indifference-2";

const JoinAsPartner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      {/* Font Import */}
      <link href={fontLink} rel="stylesheet" />
      <style>
        {`
          body, .join-partner-root {
            font-family: 'Glacial Indifference', sans-serif;
            background: #f8f9fa;
          }
          .join-form input, .join-form textarea {
            font-family: 'Glacial Indifference', sans-serif;
          }
          .join-form input:focus, .join-form textarea:focus {
            border-color: #0074d9;
            box-shadow: 0 0 0 2px #0074d922;
          }
          .join-form {
            border-top: 5px solid #ffd700;
            border-radius: 18px;
            box-shadow: 0 8px 32px rgba(0,116,217,0.11);
            background: #fff;
            transition: box-shadow 0.3s;
          }
          @media (max-width: 900px) {
            .join-form { padding: 2rem 1rem !important; }
          }
          @media (max-width: 600px) {
            .partner-gradient-heading h2 { font-size: 1.3rem !important; }
            .join-form { padding: 1.2rem 0.5rem !important; }
          }
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px);}
            100% { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>

      {/* Heading with 100vw gradient */}
      <div
        className="partner-gradient-heading"
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
          padding: "56px 0 28px 0",
          marginBottom: 36,
        }}
      >
        <div className="text-center" style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              marginBottom: "8px",
              animation: "fadeInDown 0.7s",
            }}
          >
            <span
              style={{
                background: "#ffd700",
                borderRadius: "50%",
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <FaHandshake size={32} color="#0074d9" />
            </span>
            <h2
              style={{
                fontWeight: 900,
                fontSize: "2.3rem",
                letterSpacing: "-0.01em",
                marginBottom: 0,
                lineHeight: 1.1,
                color: "#fff",
              }}
            >
              <span style={{ color: "#fff" }}>Join as a </span>
              <span style={{ color: "#ffd700" }}>Business Partner</span>
            </h2>
          </div>
        
          
          <p
            style={{
              fontSize: "1.08rem",
              color: "#e9efff",
              marginTop: "1.1rem",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
              opacity: 0.96,
            }}
          >
            Partner with HouslyFintech and grow together in the world of digital finance and lending solutions.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container py-5 px-3 join-partner-root" style={{ minHeight: "70vh" }}>
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <form
              className="p-4 join-form"
              style={{
                padding: "2.5rem 2.2rem",
                background: "#fff",
              }}
              onSubmit={handleSubmit}
              autoComplete="off"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ color: "#0074d9" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold" style={{ color: "#0074d9" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label fw-semibold" style={{ color: "#0074d9" }}>
                    Company / Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your company or business name"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label fw-semibold" style={{ color: "#0074d9" }}>
                    Message / Proposal
                  </label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your business or proposal"
                    style={{ borderRadius: "8px", resize: "none" }}
                  ></textarea>
                </div>
              </div>

              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: "linear-gradient(90deg, #0074d9 60%, #00c6fb 100%)",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "12px 38px",
                    borderRadius: "22px",
                    fontSize: "1.07rem",
                    boxShadow: "0 2px 10px rgba(0,116,217,0.10)",
                    letterSpacing: "0.01em",
                    transition: "background 0.2s",
                  }}
                >
                  Submit Request
                </button>
              </div>
              {submitted && (
                <div className="alert alert-success mt-3 mb-0 text-center fw-semibold" role="alert">
                  Your request has been submitted!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-4">
          <p style={{ fontSize: "0.98rem", color: "#888" }}>
            For partnership queries, reach us at contact{" "}
            <span style={{ color: "#0074d9", fontWeight: "bold" }}>
              @houslyfintech.com
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default JoinAsPartner;