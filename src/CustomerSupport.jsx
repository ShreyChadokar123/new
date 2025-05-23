import React, { useState } from "react";
import Layout from "@/components/Layout"; // Header/Footer included

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !validateEmail(formData.email) ||
      formData.message.trim().length < 5
    ) {
      alert("Please fill all fields correctly (valid email, message min 5 chars).");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <Layout>
      <style>
        {`
          @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');

          body, .customer-support-root {
            font-family: 'Glacial Indifference', sans-serif;
            background: #f8f9fa;
          }
          .support-form input, .support-form textarea {
            font-family: 'Glacial Indifference', sans-serif;
          }
          .support-form input:focus, .support-form textarea:focus {
            border-color: #0074d9;
            box-shadow: 0 0 0 2px #0074d922;
          }
          @media (max-width: 767px) {
            .support-img { height: 200px !important; }
          }
        `}
      </style>

      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          background: "linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)",
        }}
      >
        <section
          className="text-white text-center px-4"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "64px 0 32px 0",
            fontFamily: "'Glacial Indifference', sans-serif",
          }}
        >
          <h2 className="fw-bold mb-2" style={{ fontSize: "2.4rem", letterSpacing: "-1px", fontWeight: 800 }}>
            <span style={{ color: "#fff" }}>Customer </span>
            <span style={{ color: "#ffd700" }}>Support</span>
          </h2>
          <div style={{ color: "#e9efff", fontSize: "1.09rem", fontWeight: 400, opacity: 0.93, maxWidth: 650, margin: "0 auto" }}>
            We're here to help you! Contact the <b>HouslyFintech</b> support team for any assistance.
          </div>
        </section>
      </div>

      <div className="container py-5" style={{
        fontFamily: "'Glacial Indifference', sans-serif",
        background: "#f8f9fa",
        maxWidth: "1280px",
      }}>
        <div className="row gx-5 gy-3 align-items-center justify-content-center" style={{ margin: "0" }}>
          {/* Image from public folder */}
          <div className="col-md-6 text-center" style={{ marginBottom: "1rem", padding: "0" }}>
            <img
              src="/Images/suportimg1.jpg"
              alt="Customer Support"
              className="img-fluid support-img"
              style={{
                maxWidth: "100%",
                height: "335px",
                objectFit: "cover",
                borderRadius: "12px",
                background: "none",
                boxShadow: "none",
                display: "block",
              }}
            />
          </div>

          {/* Form */}
          <div className="col-md-6" style={{ marginTop: "5px" }}>
            <form onSubmit={handleSubmit} className="support-form" style={{ background: "none" }}>
              <h5 className="mb-3 fw-bold text-center" style={{ color: "#0074d9", fontSize: "1.2rem", letterSpacing: "0.2px" }}>
                Contact Us
              </h5>
              <div className="mb-2">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "8px", padding: "10px" }}
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ borderRadius: "8px", padding: "10px" }}
                />
              </div>
              <div className="mb-2">
                <textarea
                  name="message"
                  className="form-control"
                  rows="3"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={5}
                  style={{ borderRadius: "8px", padding: "10px" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: "#0074d9",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  transition: "0.3s",
                  letterSpacing: "0.2px",
                }}
              >
                Submit
              </button>
              {submitted && (
                <div className="alert alert-success mt-2" style={{ borderRadius: "6px", fontSize: "0.95rem", marginBottom: 0 }}>
                  Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Contact Info Footer */}
        <div className="text-center mt-5 mb-2">
          <p style={{ fontSize: "1rem", color: "#666" }}>
            Need urgent help? Call us at{" "}
            <span style={{ color: "#0074d9", fontWeight: "bold" }}>+91 98765 43210</span> or email{" "}
            <span style={{ color: "#0074d9", fontWeight: "bold" }}>support@houslyfintech.com</span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerSupport;
