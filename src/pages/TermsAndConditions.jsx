import React from 'react';
import Layout from '@/components/Layout';

const jumpLinks = [
  { text: "What Is a Terms and Conditions Agreement?", href: "#what-is-tc" },
  { text: "Am I Legally Required to Have Terms and Conditions On My Website?", href: "#legally-required" },
  { text: "Reasons to Have Terms and Conditions Document", href: "#reasons" },
  { text: "What Information Should I Include In My Terms and Conditions?", href: "#what-to-include" },
  { text: "Terms and Conditions Examples", href: "#examples" },
  { text: "What Is the Best Way to Display Terms and Conditions?", href: "#best-way" },
  { text: "How To Enforce Your Terms and Conditions Agreement", href: "#enforce" },
  { text: "Terms and Conditions Template", href: "#template" },
  { text: "Terms and Conditions Template UK", href: "#template-uk" },
  { text: "Is It ok to Use a Terms and Conditions Template?", href: "#ok-to-use" },
  { text: "Read These Terms and Conditions Template Tips", href: "#tips" },
  { text: "How to Update Your Terms and Conditions?", href: "#update-tc" },
  { text: "What Happens if Users Break the Rules?", href: "#user-violation" },
  { text: "Contact Information for Legal Queries", href: "#contact-legal" },
  { text: "Can I Copy Terms and Conditions from Other Sites?", href: "#copy-tc" },
];

const termsImage =
  "https://help.iubenda.com/wp-content/uploads/2024/11/terms_and_conditions.png";

const TermsAndConditions = () => (
  <Layout>
    {/* Font import */}
    <style jsx global>{`
      @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');
    `}</style>

    {/* Hero Section with normal height and tagline */}
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">
        Terms and <span className="text-yellow-300">Conditions</span>
      </h1>
      <p className="text-lg md:text-xl opacity-90">
        Set clear rules for your users and protect your business with our comprehensive <br/>Terms and Conditions guide.
      </p>
    </section>

    {/* In short & Jump to... */}
    <div className="bg-[#f7fafd] py-12 px-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left: In short + image below */}
        <div className="md:w-2/3 w-full flex flex-col">
          <div>
            <div className="flex items-center mb-3">
              <div className="w-2 h-8 bg-[#0074d9] rounded mr-3"></div>
              <h2 className="text-3xl font-bold text-[#1a2b49]">In short</h2>
            </div>
            <p className="text-[#1a2b49] text-[18px] mb-5">
              Looking for a Terms and Conditions template? We’ve got you covered. We’ll even go over exactly what Terms and Conditions are and what they should include. Let’s dive in!
            </p>
            <p className="text-[#1a2b49] text-[18px] mb-5">
              In short, a Terms and Conditions agreement is a legally binding document that allows you to set rules that users must follow when using your website, mobile app or services.
            </p>
            <p className="text-[#1a2b49] text-[18px]">
              This document is critically important, so in the following sections, we’ll break down the information you need to include, where to display it and give you a free Terms and Conditions template to get you started.
            </p>
          </div>
          {/* Image only below In short */}
          <img
            src={termsImage}
            alt="Online Terms and Conditions"
            className="mt-8 rounded-lg shadow-md w-full max-w-4xl mx-auto"
            style={{ objectFit: 'cover', height: '40vh' }}
          />
        </div>
        {/* Right: Jump to... */}
        <div className="md:w-1/3 w-full md:pl-8 flex flex-col">
          <h3 className="text-3xl font-bold text-[#1a2b49] mb-3">Jump to…</h3>
          <ul className="space-y-2">
            {jumpLinks.map((link, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mt-2 w-2 h-2 rounded bg-[#0074d9] mr-2 flex-shrink-0"></span>
                <a
                  href={link.href}
                  className="text-[#1a2b49] text-[17px] hover:underline"
                  style={{ lineHeight: '1.6' }}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* What Is a Terms and Conditions Agreement? */}
    <section id="what-is-tc" className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex items-center mb-3">
        <div className="w-2 h-10 bg-[#0074d9] rounded mr-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b49]">
          What Is a Terms and Conditions Agreement?
        </h2>
      </div>
      <div className="pl-6">
        <p className="mb-3 text-[#1a2b49] text-[18px]">
          Terms and Conditions (T&amp;C) – also known as Terms of Service, Terms of Use, or End User License Agreement (EULA) – represent a contract between you, the provider of a service, and your users.
        </p>
        <p className="mb-3 text-[#1a2b49] text-[18px]">
          They are a legally binding document and allow you to set your rules, within applicable law. For example, they may help you define how users can interact with your product or service, how your original content can be used, or the rules concerning the cancellation or suspension of a user’s account.
        </p>
      </div>
      <hr className="my-10 border-gray-200" />
    </section>

    {/* Am I Legally Required to Have Terms and Conditions On My Website? */}
    <section id="legally-required" className="max-w-7xl mx-auto py-10 px-4">
      <div className="flex items-center mb-3">
        <div className="w-2 h-10 bg-[#0074d9] rounded mr-4"></div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b49]">
          Am I Legally Required to Have Terms and Conditions On My Website?
        </h2>
      </div>
      <div className="pl-6">
        <p className="mb-3 text-[#1a2b49] text-[18px]">
          No, you are not legally required to have a Terms and Conditions agreement on your website or app. However, having one is highly recommended for a number of important reasons.
        </p>
        <p className="mb-3 text-[#1a2b49] text-[18px]">
          Unlike a Privacy Policy - which is required by law in many jurisdictions if you collect personal information - a Terms and Conditions agreement is generally not mandated by law. But it serves as a legally binding contract between you and your users, allowing you to:
        </p>
        <ul className="list-disc pl-6 text-[#1a2b49] text-[18px] mb-3">
          <li>Set the rules and guidelines for using your website, app, or service</li>
          <li>Limit your liability in case of misuse or damages</li>
          <li>Protect your intellectual property and content</li>
          <li>Reserve the right to suspend or terminate user accounts for violations</li>
        </ul>
        <p className="text-[#1a2b49] text-[18px]">
          In summary, while not legally required, a Terms and Conditions agreement is a best practice that helps protect your business and set clear expectations with your users.
        </p>
      </div>
      <hr className="my-10 border-gray-200" />
    </section>
  </Layout>
);

export default TermsAndConditions;