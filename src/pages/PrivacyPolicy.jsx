import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  IdCard,
  Cookie,
  FileText,
  Shield,
  Link2,
  UserCog,
  Gavel,
} from "lucide-react";
import Layout from "@/components/Layout";

// Framer Motion animation variants
const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } }
};
const paraVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.15, duration: 0.6 }
  })
};

const introContent = [
  "We collect only what is necessary to serve you better, and we are fully transparent about how, why, and when your data is used.",
  "Our commitment: No hidden terms, no data sold, and complete control in your hands. If you have questions, our support team is always ready to help.",
  "Below you'll find clear details about the information we collect, how we use it, your rights, and the measures we take to keep your data safe."
];

const sections = [
  {
    icon: <Globe size={22} color="#0074d9" />,
    title: "Introduction",
    content: [
      "Welcome to our Privacy Policy. Here you’ll find how we collect, use, and safeguard your information when you use our website or services.",
      "By accessing our services, you agree to this policy. If you have questions, please contact us at the end of this page.",
      "We regularly update this policy to comply with legal requirements and best practices, ensuring your information is always handled responsibly."
    ],
  },
  {
    icon: <IdCard size={22} color="#0074d9" />,
    title: "Information We Collect",
    content: [
      "We collect personal information such as your name, email, phone number, address, PAN, Aadhaar, employment details, income, and credit score.",
      "Technical data like your device type, IP address, browser details, and usage patterns are also automatically collected for security and analytics.",
      "We may also collect information you provide through forms, surveys, feedback, or when you contact our support team."
    ],
  },
  {
    icon: <Cookie size={22} color="#0074d9" />,
    title: "Cookies & Tracking",
    content: [
      "Cookies are small files stored on your device to enhance your experience, remember your preferences, and keep you logged in.",
      "We use cookies and similar technologies to analyze website traffic, personalize content, and improve site functionality.",
      "You can manage or disable cookies in your browser settings, but some features of our website may not work properly if you do so."
    ],
  },
  {
    icon: <FileText size={22} color="#0074d9" />,
    title: "How We Use Data",
    content: [
      "We use your data to provide and improve our services, process your applications, and personalize your experience.",
      "Your information helps us communicate with you, send important updates, and respond to your queries.",
      "We may use data for analytics, research, fraud prevention, and to comply with legal and regulatory requirements."
    ],
  },
  {
    icon: <Shield size={22} color="#0074d9" />,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures such as SSL encryption, firewalls, and secure servers to protect your data.",
      "All payment transactions are processed through PCI-DSS compliant gateways, ensuring your financial information is safe.",
      "While we strive for maximum security, no online system is 100% secure. Please avoid sharing sensitive info on untrusted platforms."
    ],
  },
  {
    icon: <Link2 size={22} color="#0074d9" />,
    title: "Third-Party Services",
    content: [
      "We may share your data with trusted partners, financial institutions, or credit bureaus to process your requests and provide services.",
      "Third-party links and advertisements on our platform may have separate privacy policies. We recommend reviewing their terms before interacting.",
      "We do not sell your personal information to any third parties for marketing purposes."
    ],
  },
  {
    icon: <UserCog size={22} color="#0074d9" />,
    title: "Your Rights",
    content: [
      "You have the right to access, update, or request deletion of your personal data held by us.",
      "You can withdraw consent or restrict certain data uses at any time, subject to legal and contractual obligations.",
      "For privacy concerns or to exercise your rights, contact our Grievance Officer at support@example.com."
    ],
  },
  {
    icon: <Gavel size={22} color="#0074d9" />,
    title: "Jurisdiction & Updates",
    content: [
      "This Privacy Policy is governed by Indian law. Any disputes will be subject to the jurisdiction of Delhi courts.",
      "We may update this policy from time to time. Changes will be posted on this page and are effective immediately upon posting.",
      "We encourage you to review this policy regularly to stay informed about how we protect your information."
    ],
  },
];

const PrivacyPolicy = () => (
  <Layout>
    {/* Heading with gradient */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 text-center px-4 font-sans">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 tracking-tight">
        Privacy <span className="text-yellow-300">Policy</span>
      </h1>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90 font-medium">
        Your trust matters. Here’s how we keep your data safe and your privacy protected.
      </p>
    </section>

    {/* Animated Intro Section */}
    <section className="bg-[#f7fafd] py-10 px-2 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-extrabold mb-5 text-[#0074d9]"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Your Data, Your Trust. Our Promise.
        </motion.h2>
        {introContent.map((text, idx) => (
          <motion.p
            key={idx}
            className="text-[#1a2b49] text-lg mb-3"
            custom={idx}
            variants={paraVariants}
            initial="hidden"
            animate="visible"
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>

    {/* Main Content */}
    <section className="bg-white py-12 px-2 font-sans">
      <div
        className="w-full flex flex-col md:flex-row gap-12"
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
        }}
      >
        {/* Sidebar Table of Contents (desktop) */}
        <aside className="hidden md:block md:w-1/4">
          <div className="sticky top-24">
            <h3 className="text-lg font-bold text-[#1a2b49] mb-4">On this page</h3>
            <ul className="space-y-3">
              {sections.map((sec, idx) => (
                <li key={sec.title}>
                  <a
                    href={idx === 0 ? "#" : `#${sec.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-[#0074d9] hover:text-[#222] transition font-medium"
                    onClick={e => {
                      if (idx === 0) {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {sec.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        {/* Main Sections */}
        <div className="flex-1">
          {sections.map((sec, idx) => (
            <div
              key={sec.title}
              id={sec.title.replace(/\s+/g, '-').toLowerCase()}
              className={`${idx ? "mt-14" : ""} scroll-mt-32`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="border-l-4 border-[#0074d9] pl-3 flex items-center gap-2">
                  {sec.icon}
                  <h2 className="text-xl md:text-2xl font-bold text-black">
                    {sec.title}
                  </h2>
                </div>
              </div>
              {sec.content.map((p, i) => (
                <p
                  key={i}
                  className="text-[16px] leading-[1.7] text-[#333] mb-3"
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;