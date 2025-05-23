import React, { useState } from "react";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { FaUniversity } from "react-icons/fa";

const fontLink = "https://fonts.cdnfonts.com/css/glacial-indifference-2";

const bankPartners = [
  {
    name: "State Bank of India",
    description:
      "India's largest public sector bank, offering trusted financial solutions for decades.",
    extra:
      "With a pan-India presence, SBI ensures accessibility and security to millions of customers.",
  },
  {
    name: "HDFC Bank",
    description:
      "Premier private bank known for digital banking innovation and customer focus.",
    extra:
      "HDFC Bank offers a wide range of digital products, investment solutions, and loan services.",
  },
  {
    name: "ICICI Bank",
    description:
      "Trusted partner with a wide reach across India, powering personal and business banking.",
    extra:
      "ICICI Bank is known for competitive interest rates, fast processing, and 24/7 customer support.",
  },
];

const BankPartnerDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);

  const openModal = (bank) => {
    setSelectedBank(bank);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBank(null);
  };

  return (
    <Layout>
      {/* Glacial Indifference Font Import */}
      <link href={fontLink} rel="stylesheet" />
      <style>
        {`
          body, .bank-partner-root {
            font-family: 'Glacial Indifference', sans-serif;
            background: #f8f9fa;
          }
          .bank-gradient-heading {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
            padding: 48px 0 24px 0;
            margin-bottom: 36px;
          }
          .bank-gradient-heading h2 {
            font-size: 2.4rem;
            font-weight: 900;
            letter-spacing: -0.02em;
            color: #fff;
            margin-bottom: 0.6rem;
          }
          .bank-gradient-heading span {
            color: #ffd700;
          }
          .bank-gradient-heading p {
            color: #e9efff;
            font-size: 1.15rem;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
            opacity: 0.98;
          }
          @media (max-width: 600px) {
            .bank-gradient-heading h2 { font-size: 1.4rem; }
            .bank-gradient-heading { padding: 32px 0 16px 0; }
          }
        `}
      </style>

      {/* Heading Section with Gradient */}
      <div className="bank-gradient-heading text-center">
        <h2>
          <span className="text-white">Our Trusted </span>
          <span>Bank Partners</span>
        </h2>
        <p>
          HouslyFintech partners with India’s top banks to provide secure and fast loan services.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container py-5">
        <div className="row align-items-start">
          {bankPartners.map((bank, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={index}>
              <div
                className="card border-0 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #f0f8ff 70%, #dbeeff 100%)",
                  borderTop: "5px solid #ffd700",
                  borderRadius: "20px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="card-body px-4 py-4 text-center">
                  <h5
                    style={{
                      color: "#0074d9",
                      fontWeight: "800",
                      fontSize: "1.3rem",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {bank.name}
                  </h5>
                  <p style={{ fontSize: "1rem", color: "#444", minHeight: "72px" }}>
                    {bank.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 text-center pb-4">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => openModal(bank)}
                    style={{
                      borderRadius: "25px",
                      fontWeight: "600",
                      padding: "10px 28px",
                      boxShadow: "0 4px 12px rgba(0, 116, 217, 0.3)",
                      background: "#0074d9",
                      border: "none",
                    }}
                  >
                    Explore More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-5">
          <p style={{ fontSize: "1rem", color: "#888" }}>
            Want to partner with us?{" "}
            <a
              href="mailto:contact@houslyfintech.com"
              style={{
                color: "#0074d9",
                fontWeight: "700",
                textDecoration: "underline",
              }}
            >
              contact@houslyfintech.com
            </a>
          </p>
        </div>

        {/* Animated Modal with only Cross(X) Button */}
        <Modal
          show={showModal}
          onHide={closeModal}
          centered
          animation={true}
          backdrop="true"
          size="md"
          dialogClassName="custom-modal"
        >
          <Modal.Header
            closeButton
            closeVariant="white"
            style={{
              background: "linear-gradient(90deg, #0074d9 60%, #00c6fb 100%)",
              borderBottom: "none",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
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
                <FaUniversity size={28} color="#0074d9" />
              </span>
              <Modal.Title
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: "1.35rem",
                  letterSpacing: "0.01em",
                  marginBottom: 0,
                }}
              >
                {selectedBank?.name}
              </Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body
            style={{
              background: "#fafdff",
              padding: "2rem 1.5rem",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <div
              style={{
                background: "#eaf6ff",
                borderRadius: "14px",
                padding: "1.2rem 1rem",
                marginBottom: "1.2rem",
                boxShadow: "0 2px 12px rgba(0,116,217,0.07)",
                textAlign: "center",
              }}
            >
              <h6
                style={{
                  color: "#0074d9",
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.01em",
                }}
              >
                {selectedBank?.description}
              </h6>
            </div>
            <div
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "1rem",
                boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                color: "#222",
                fontSize: "1.08rem",
                lineHeight: 1.6,
                textAlign: "center",
              }}
            >
              {selectedBank?.extra}
            </div>
          </Modal.Body>
        </Modal>

        {/* Custom CSS for Modal Animation & Styling */}
        <style>{`
          .custom-modal .modal-content {
            border-radius: 20px;
            box-shadow: 0 12px 40px rgba(0, 116, 217, 0.25);
            overflow: hidden;
            animation: zoomInFade 0.35s cubic-bezier(.4,2,.6,1);
          }
          @keyframes zoomInFade {
            0% {
              opacity: 0;
              transform: scale(0.85);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          .custom-modal .modal-header {
            border-radius: 20px 20px 0 0;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default BankPartnerDetails;