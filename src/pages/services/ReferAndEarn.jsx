import React, { useState } from "react";
import Layout from "@/components/Layout";
import { FaGift, FaUserPlus, FaCheckCircle, FaRegSmile } from "react-icons/fa";

const fontLink = "https://fonts.cdnfonts.com/css/glacial-indifference-2";

const ReferAndEarn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.email.trim() === "" || formData.contact.trim() === "") {
      setMessage("Please fill in all fields.");
    } else {
      setMessage("Referral sent successfully!");
      setFormData({ name: "", email: "", contact: "" });
    }
  };

  return (
    <Layout>
      {/* Font Import */}
      <link href={fontLink} rel="stylesheet" />
      <style>
        {`
          body, .refer-root {
            font-family: 'Glacial Indifference', sans-serif;
            background: #f8f9fa;
          }
          .refer-gradient-heading {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            background: linear-gradient(90deg, #2563eb 0%, #60a5fa 100%);
            padding: 56px 0 28px 0;
            margin-bottom: 36px;
          }
          .refer-gradient-heading .refer-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 16px;
          }
          .refer-gradient-heading h2 {
            font-size: 2.2rem;
            font-weight: 900;
            letter-spacing: -0.01em;
            margin-bottom: 0.6rem;
          }
          .refer-gradient-heading .refer-white {
            color: #fff;
          }
          .refer-gradient-heading .refer-yellow {
            color: #ffd700;
          }
          .refer-gradient-heading p {
            color: #e9efff;
            font-size: 1.13rem;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
            opacity: 0.98;
          }
          .refer-main-container {
            max-width: 67%;
            margin: 0 auto;
            padding: 0 16px;
          }
          .refer-steps {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin: 0 auto 32px auto;
            max-width: 900px;
            flex-wrap: wrap;
          }
          .refer-step {
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 4px 18px rgba(0,116,217,0.09);
            padding: 32px 18px 22px 18px;
            flex: 1 1 180px;
            min-width: 180px;
            margin-bottom: 16px;
            text-align: center;
            transition: transform 0.18s;
          }
          .refer-step:hover {
            transform: translateY(-7px) scale(1.03);
            box-shadow: 0 8px 32px #2563eb22;
          }
          .refer-step-icon {
            font-size: 2.2rem;
            margin-bottom: 12px;
            color: #0074d9;
            background: #eaf6ff;
            border-radius: 50%;
            padding: 16px;
            display: inline-block;
            box-shadow: 0 2px 10px #0074d911;
          }
          .refer-chip {
            display: inline-block;
            background: linear-gradient(90deg, #e0eaff 60%, #fffbe6 100%);
            color: #2563eb;
            font-weight: 600;
            border-radius: 22px;
            padding: 7px 20px;
            font-size: 1rem;
            margin: 0 7px 10px 0;
            box-shadow: 0 2px 8px #2563eb11;
            letter-spacing: 0.01em;
          }
          .refer-reward-anim {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            margin: 35px auto 0 auto;
            font-size: 1.6rem;
            font-weight: 700;
            color: #2563eb;
            animation: rewardPulse 1.6s infinite;
          }
          @keyframes rewardPulse {
            0% { transform: scale(1);}
            50% { transform: scale(1.08);}
            100% { transform: scale(1);}
          }
          @media (max-width: 1280px) {
            .refer-main-container, .refer-gradient-heading .refer-container { max-width: 100vw; }
          }
          @media (max-width: 900px) {
            .refer-steps { flex-direction: column; gap: 0; }
            .refer-step { margin-bottom: 18px; }
          }

          /* New Form Style */
          .refer-form-container {
            background-color: #fff;
            border-radius: 18px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease;
          }

          .refer-form-container:hover {
            transform: scale(1.03);
          }

          .refer-form-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #0074d9;
            margin-bottom: 20px;
          }

          .form-control {
            border-radius: 8px;
            border: 1px solid #ddd;
            padding: 10px;
            font-size: 1rem;
            transition: all 0.2s ease-in-out;
            box-shadow: none;
          }

          .form-control:focus {
            border-color: #2563eb;
            outline: none;
            box-shadow: 0 0 8px rgba(37, 99, 235, 0.5);
          }

          .submit-btn {
            background-color: #2563eb;
            color: #fff;
            font-weight: 600;
            padding: 12px;
            border-radius: 8px;
            border: none;
            width: 100%;
            transition: background-color 0.3s;
            font-size: 1.1rem;
          }

          .submit-btn:hover {
            background-color: #1e4bb0;
          }

          .alert {
            border-radius: 8px;
          }
        `}
      </style>

      {/* Heading Section with Gradient */}
      <div className="refer-gradient-heading">
        <div className="refer-container text-center">
          <h2>
            <span className="refer-white">Refer </span>
            <span className="refer-yellow">&amp; Earn</span>
          </h2>
          <p>
            Invite friends to{" "}
            HouslyFintech and earn rewards for every successful loan referral!
          </p>
        </div>
      </div>

      <div className="refer-main-container">
        {/* Chips */}
        <div className="text-center mb-3">
          <span className="refer-chip">No limit on referrals</span>
          <span className="refer-chip">Instant reward on approval</span>
          <span className="refer-chip">Track all rewards easily</span>
        </div>

        {/* Steps Section */}
        <div className="refer-steps">
          <div className="refer-step">
            <div className="refer-step-icon">
              <FaUserPlus />
            </div>
            <div style={{ fontWeight: 700, color: "#16213e", fontSize: "1.07rem", marginBottom: 7 }}>
              Refer Your Friend
            </div>
            <div style={{ color: "#555", fontSize: "0.97rem" }}>
              Enter your friend’s name, email, and contact number to send them an invite.
            </div>
          </div>
          <div className="refer-step">
            <div className="refer-step-icon">
              <FaCheckCircle />
            </div>
            <div style={{ fontWeight: 700, color: "#16213e", fontSize: "1.07rem", marginBottom: 7 }}>
              They Get a Loan
            </div>
            <div style={{ color: "#555", fontSize: "0.97rem" }}>
              Your friend applies and gets approved for a loan.
            </div>
          </div>
          <div className="refer-step">
            <div className="refer-step-icon">
              <FaGift />
            </div>
            <div style={{ fontWeight: 700, color: "#16213e", fontSize: "1.07rem", marginBottom: 7 }}>
              You Earn Rewards
            </div>
            <div style={{ color: "#555", fontSize: "0.97rem" }}>
              Get instant rewards for every successful referral!
            </div>
          </div>
          <div className="refer-step">
            <div className="refer-step-icon">
              <FaRegSmile />
            </div>
            <div style={{ fontWeight: 700, color: "#16213e", fontSize: "1.07rem", marginBottom: 7 }}>
              Track & Celebrate
            </div>
            <div style={{ color: "#555", fontSize: "0.97rem" }}>
              Track your referrals and rewards from your dashboard.
            </div>
          </div>
        </div>

        {/* Refer Form */}
        <div className="container refer-root py-4 px-3" style={{ maxWidth: 600 }}>
          <div className="refer-form-container">
            <h5 className="refer-form-title">
              Enter Your Friend's Details to Refer
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Friend's Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Friend's Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="contact"
                  className="form-control"
                  placeholder="Friend's Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="submit-btn"
                type="submit"
              >
                Refer
              </button>
              {message && (
                <div
                  className={`alert ${
                    message.includes("successfully")
                      ? "alert-success"
                      : "alert-warning"
                  } mt-2`}
                >
                  {message}
                </div>
              )}
            </form>
          </div>
          {/* Animated Reward */}
          <div className="refer-reward-anim mt-4" style={{ color: "#2563eb" }}>
            <FaGift style={{ color: "#2563eb", fontSize: "2.1rem" }} />
            Earn up to ₹5000 per referral!
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReferAndEarn;