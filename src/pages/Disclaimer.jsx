import React from "react";
import Layout from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

// Important points as chips
const importantPoints = [
  "This website is for informational purposes only.",
  "No financial, legal, or investment advice is given.",
  "Always consult a professional before making decisions.",
];

const disclaimerContent = [
  "The information, software, products, and services included on or available through the HouslyFintech website may contain inaccuracies or typographical errors. Periodic changes are made to the website and its content. HouslyFintech and/or its partners reserve the right to make improvements and/or changes at any time without prior notice.",
  "Any advice received via this website should not be relied upon for personal, medical, legal, or financial decisions. Users are strongly advised to consult an appropriate professional for specific advice suited to their individual circumstances.",
  "HouslyFintech and its affiliates make no representations about the suitability, reliability, availability, timeliness, or accuracy of the information, software, products, services, and related graphics found on this website. All such materials are provided “as is” without warranty of any kind.",
  "This website may contain links to third-party websites which are provided solely for user convenience. HouslyFintech does not endorse or take responsibility for the content, accuracy, or policies of any linked websites.",
  "In no event shall HouslyFintech or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data, profits, or business opportunities arising out of or in connection with the use or performance of this website.",
  "This agreement shall be governed by the laws of the Republic of India, and you agree to submit to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India, for any disputes arising from or related to the use of this website.",
];

const Disclaimer = () => {
  return (
    <Layout>
      {/* Heading with animated gradient wave */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-14 text-center px-4 font-sans overflow-hidden">
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 tracking-tight"
          style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
        >
          Disclaimer
        </h1>
        {/* Animated gradient wave (SVG) */}
        <div className="flex justify-center mt-3 mb-1">
          <svg height="8" width="180" className="block">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#fff" />
              </linearGradient>
            </defs>
            <path
              d="M0 5 Q 45 0 90 5 T 180 5"
              stroke="url(#grad)"
              strokeWidth="4"
              fill="transparent"
            >
              <animate
                attributeName="d"
                values="
                  M0 5 Q 45 0 90 5 T 180 5;
                  M0 5 Q 45 10 90 5 T 180 5;
                  M0 5 Q 45 0 90 5 T 180 5
                "
                dur="3s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        {/* Floating Alert Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 md:top-4 z-10">
          <span className="inline-flex items-center justify-center rounded-full bg-white/20 shadow-lg p-2">
            <AlertTriangle size={30} color="#ffd700" strokeWidth={2.2} />
          </span>
        </div>
      </section>

      {/* Open Panel, No Card */}
      <section
        className="relative flex justify-center py-12 px-2 bg-[#f7fafd] font-sans"
        style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
      >
        <div
          className="w-full"
          style={{ maxWidth: "1280px" }}
        >
          {/* Floating Alert Icon (on left, only desktop) */}
          <div className="hidden md:block absolute -left-16 top-20 z-10">
            <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-yellow-300 shadow-lg p-3">
              <AlertTriangle size={34} color="#fff" strokeWidth={2.5} />
            </span>
          </div>
          {/* Important Points as Chips */}
          <div className="flex flex-wrap gap-3 mb-7">
            {importantPoints.map((point, idx) => (
              <span
                key={idx}
                className="inline-block bg-gradient-to-r from-blue-100 to-yellow-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-blue-200"
                style={{ fontFamily: "'Glacial Indifference', sans-serif" }}
              >
                {point}
              </span>
            ))}
          </div>
          {/* Main Disclaimer Content - no card, just open panel */}
          <div>
            {disclaimerContent.map((para, idx) => (
              <p
                key={idx}
                className="text-[#1a2b49] text-base md:text-lg mb-5"
                style={{
                  lineHeight: 1.7,
                  textAlign: "justify",
                  fontFamily: "'Glacial Indifference', sans-serif",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;