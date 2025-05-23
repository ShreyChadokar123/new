import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBuilding, FaHandshake, FaRupeeSign, FaUsers } from "react-icons/fa";
import Layout from '@/components/Layout';

const stats = [
  { icon: <FaBuilding size={28} className="text-yellow-400" />, number: "96+", text: "Banks & NBFCs" },
  { icon: <FaUsers size={28} className="text-yellow-400" />, number: "1,50,000+", text: "Channel Partners" },
  { icon: <FaRupeeSign size={28} className="text-yellow-400" />, number: "USD 300M+", text: "Annual Transactions" },
  { icon: <FaHandshake size={28} className="text-yellow-400" />, number: "#1", text: "Secured Mortgage Provider" },
];

const brands = [
  { title: "Square Yards", desc: "The best foreign real estate platform, offering seamless investment solutions globally." },
  { title: "Square Connect", desc: "India’s leading digital broker platform, enabling seamless property transactions." },
  { title: "Azuro", desc: "Leading property management firm providing comprehensive real estate solutions." },
  { title: "PropsAMC", desc: "Transforming property valuation, tracking, and management for investors." },
  { title: "Interior Company", desc: "Providing end-to-end home interior solutions with an artistic approach." },
  { title: "PropVR", desc: "Utilizing 3D visualization & AI for immersive real estate experiences." },
];

const directors = [
  {
    name: "Shri Debadatta Chand",
    designation: "Managing Director & CEO",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    profile: "Shri Debadatta Chand assumed charge as MD & CEO of the Bank on 1st July 2023...",
  },
  {
    name: "Shri Rajesh Kumar",
    designation: "Director",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    profile: "Shri Rajesh Kumar has over 30 years of experience in the banking industry and joined the Board as Director in March 2024. He is known for his leadership in digital transformation and financial inclusion.",
  },
];

const teamMembers = [
  {
    name: "Shri Lalit Tyagi",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    profile: "Profile details for Shri Lalit Tyagi...",
  },
  {
    name: "Shri Sanjay Mudaliar",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    profile: "Profile details for Shri Sanjay Mudaliar...",
  },
  {
    name: "Shri Lal Singh",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    profile: "Profile details for Shri Lal Singh...",
  },
  {
    name: "Ms. Beena Vaheed",
    designation: "Executive Director",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    profile: "Profile details for Ms. Beena Vaheed...",
  },
];

// MISSION icon: Naya black target icon
const missionVisionValues = [
  {
    title: "MISSION",
    icon: "https://cdn-icons-png.flaticon.com/512/1208/1208170.png",
    text: "Empowering your homeownership journey with fast, transparent, and trusted loan solutions.",
  },
  {
    title: "VISION",
    icon: "https://cdn-icons-png.flaticon.com/512/159/159604.png",
    text: "To be the most trusted and leading financial institution, recognized for integrity, customer-centricity, and technological innovation in the lending sector.",
  },
  {
    title: "VALUES",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910761.png",
    text: "Integrity, Customer Focus, Innovation, Collaboration, and Social Responsibility are at the heart of everything we do.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AboutPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const openModal = (person) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPerson(null);
  };

  // Height for both sections
  const sectionMinHeight = "370px";

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12 text-center px-4 font-sans overflow-hidden">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 tracking-tight">
              <span className="text-white">About </span>
              <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              We help you unlock your dream home with fast, transparent, and trusted loan solutions.
            </p>
          </div>
        </section>

        {/* COMPANY INTRO + STATS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col md:flex-row md:gap-12 items-stretch">
            {/* Left Content: About Hously Finntech */}
            <motion.div
              className="md:flex-1 mb-10 md:mb-0 h-full flex flex-col justify-center"
              variants={itemVariants}
              style={{
                minHeight: sectionMinHeight,
                height: "100%",
              }}
            >
              <h3 className="text-3xl font-bold mb-4 text-center text-black">
                About <span className="text-black">Hously Finntech</span>
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-xl mx-auto mb-3 text-center">
                <span className="font-semibold text-blue-600">Hously-Finntech</span> is a leading online lending platform helping millions achieve their dream of home ownership by providing access to loan products from over 96 banks and NBFCs.
              </p>
              <ul className="list-disc pl-6 text-gray-700 text-base mb-3 max-w-xl mx-auto">
                <li>
                  <span className="font-semibold text-blue-600">Wide Loan Options:</span> Home loans, balance transfers.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Top-Ups:</span> Hassle-free top-up loans for your extra needs.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Trusted Partners:</span> 96+ banks & NBFCs.
                </li>
                <li>
                  <span className="font-semibold text-blue-600">Customer Focus:</span> Transparent and quick loan processing.
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-2 justify-center">
                <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold shadow border border-blue-100">
                  <FaUsers className="mr-1" /> 1,50,000+ Channel Partners
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm font-semibold shadow border border-yellow-100">
                  <FaHandshake className="mr-1" /> 300M+ USD Annual Transactions
                </span>
                <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-semibold shadow border border-green-100">
                  <FaBuilding className="mr-1" /> 96+ Banks & NBFCs
                </span>
              </div>
            </motion.div>

            {/* Right: Offering Products */}
            <motion.div
              className="md:flex-1 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg p-4 shadow-lg flex flex-col justify-between"
              variants={itemVariants}
              style={{
                minHeight: sectionMinHeight,
                height: "100%",
              }}
            >
              <div>
                <h5 className="font-bold text-yellow-400 mb-2 text-lg">Offering Products</h5>
                <p className="mb-2">From Over 96 Banks and NBFCs</p>
                <hr className="border-yellow-400 mb-2" />
                <div>
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-4 mb-2"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div>{stat.icon}</div>
                      <div>
                        <h4 className="font-bold text-yellow-400 text-xl">{stat.number}</h4>
                        <p className="text-white">{stat.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* GROUP BRANDS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Our Group Brands</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brands.map((brand, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl cursor-pointer transition-shadow"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-bold text-[#0074D9] mb-3">{brand.title}</h4>
                <p className="text-gray-600 text-sm">{brand.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* BOARD OF DIRECTORS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Board of Directors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {directors.map((dir, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md flex items-center gap-6 p-6 cursor-pointer hover:shadow-xl transition-shadow"
                variants={itemVariants}
                onClick={() => openModal(dir)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={dir.image}
                  alt={dir.name}
                  className="rounded-full w-20 h-20 object-cover flex-shrink-0"
                />
                <div className="whitespace-normal break-words">
                  <h4 className="text-[#0074D9] font-bold text-xl">{dir.name}</h4>
                  <p className="text-gray-600">{dir.designation}</p>
                  <button
                    className="text-[#0d9488] underline mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(dir);
                    }}
                  >
                    View Profile →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXECUTIVE DIRECTORS */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Executive Directors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md text-center p-6 cursor-pointer hover:shadow-xl transition-shadow"
                variants={itemVariants}
                onClick={() => openModal(member)}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-24 h-24 mx-auto object-cover mb-4"
                />
                <h4 className="text-[#0074D9] font-bold text-lg whitespace-normal break-words">{member.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{member.designation}</p>
                <button
                  className="text-[#0d9488] underline mt-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(member);
                  }}
                >
                  View Profile →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* MODAL */}
        <AnimatePresence>
          {modalOpen && selectedPerson && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  &times;
                </button>
                <div className="text-center">
                  <img
                    src={selectedPerson.image}
                    alt={selectedPerson.name}
                    className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-[#0074D9]">{selectedPerson.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedPerson.designation}</p>
                  <p className="text-gray-700">{selectedPerson.profile}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MISSION VISION VALUES */}
        <motion.section
          className="container mx-auto my-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl font-bold mb-10">Our Mission, Vision & Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {missionVisionValues.map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-lg shadow-md p-8 text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
                <h5 className="text-[#0074D9] font-bold mb-3">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default AboutPage;