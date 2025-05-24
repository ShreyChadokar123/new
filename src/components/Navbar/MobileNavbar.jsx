import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome, FaRupeeSign, FaCalculator, FaTags, FaTh, FaBuilding, FaExchangeAlt,
  FaBriefcase, FaCheckCircle, FaSyncAlt, FaLockOpen, FaCreditCard,
  FaPhoneAlt, FaInfoCircle, FaQuestionCircle
} from "react-icons/fa";
import { motion } from "framer-motion";

const iconStyle = {
  fontSize: "16px",
  color: "#666",
  display: "block",
  margin: "0 auto",
};

const MobileNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [clickedItem, setClickedItem] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({});
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (activeMenu !== "calculators") {
      setClickedItem(null);
    }
    if (location.pathname === "/calculators") {
      const params = new URLSearchParams(location.search);
      const tab = params.get("type"); // Changed to "type"
      const tabs = ["emi", "eligibility", "balance-transfer", "foreclose", "pre-payment"];
      const idx = tabs.indexOf(tab);
      setClickedItem(idx !== -1 ? idx : 0);
    }
  }, [location, activeMenu]);

  const toggleMenu = (menu, e) => {
    e.stopPropagation();
    if (menu === "home") {
      setActiveMenu(null);
      setClickedItem(null);
      navigate("/");
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if (menu === "offers") {
      setActiveMenu(null);
      setClickedItem(null);
      navigate("/offers&cashback");
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      setActiveMenu(activeMenu === menu ? null : menu);
      setClickedItem(null);
    }
  };

  const handleClickOutside = (e) => {
    if (navRef.current && !navRef.current.contains(e.target)) {
      setActiveMenu(null);
      setClickedItem(null);
      setExpandedMenus({});
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleNavigation = (path, index, query = "") => {
    navigate(path + query);
    window.scrollTo({ top: 0, behavior: "auto" });
    setActiveMenu(null);
    setClickedItem(index);
    setExpandedMenus({});
  };

  const toggleExpand = (key) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isMobile) return null;

  return (
    <div
      ref={navRef}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-around",
        padding: "12px",
        boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
        borderTop: "2px solid #ddd",
      }}
    >
      {["home", "loans", "calculators", "banks", "offers", "more"].map((menu) => (
        <div
          key={menu}
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={(e) => toggleMenu(menu, e)}
        >
          <div style={{ marginBottom: "5px", display: "flex", justifyContent: "center" }}>
            {menu === "home" && <FaHome style={iconStyle} />}
            {menu === "loans" && <FaRupeeSign style={iconStyle} />}
            {menu === "calculators" && <FaCalculator style={iconStyle} />}
            {menu === "banks" && <FaBuilding style={iconStyle} />}
            {menu === "offers" && <FaTags style={iconStyle} />}
            {menu === "more" && <FaTh style={iconStyle} />}
          </div>
          <div style={{ fontSize: "12px", fontWeight: "bold" }}>
            {menu.charAt(0).toUpperCase() + menu.slice(1)}
          </div>

          {activeMenu === menu && (
            <motion.div
              style={{
                position: "fixed",
                bottom: "60px",
                left: "5%",
                width: "90%",
                background: "#0074d9",
                zIndex: 10000,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                padding: "15px",
                boxShadow: "0px -6px 10px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                gap: "10px",
              }}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Loans submenu */}
              {menu === "loans" &&
                [
                  { name: "Home Loan", path: "/home-loan", icon: <FaBuilding style={iconStyle} /> },
                  { name: "Loan Against Property", path: "/property-loan", icon: <FaExchangeAlt style={iconStyle} /> },
                  { name: "Balance Transfer", path: "/balance-transfer", icon: <FaSyncAlt style={iconStyle} /> },
                  { name: "Business Loan", path: "/business-loan", icon: <FaBriefcase style={iconStyle} /> },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: clickedItem === idx ? "#FFD700" : "#f8f8f8",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleNavigation(item.path, idx)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}

              {/* Calculators submenu */}
              {menu === "calculators" &&
                [
                  { name: "EMI Calculator", path: "/calculators", query: "?type=emi", icon: <FaCalculator style={iconStyle} /> },
                  { name: "Eligibility Calculator", path: "/calculators", query: "?type=eligibility", icon: <FaCheckCircle style={iconStyle} /> },
                  { name: "Balance Transfer Calculator", path: "/calculators", query: "?type=balance-transfer", icon: <FaSyncAlt style={iconStyle} /> },
                  { name: "Foreclosure Calculator", path: "/calculators", query: "?type=foreclose", icon: <FaLockOpen style={iconStyle} /> },
                  { name: "Prepayment Calculator", path: "/calculators", query: "?type=pre-payment", icon: <FaCreditCard style={iconStyle} /> },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: clickedItem === idx ? "#FFD700" : "#f8f8f8",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleNavigation(item.path, idx, item.query)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}

              {/* Banks submenu */}
              {menu === "banks" &&
                [
                  { name: "HDFC Bank", path: "/hdfc" },
                  { name: "ICICI Bank", path: "/icici" },
                  { name: "SBI Bank", path: "/sbi" },
                  { name: "Axis Bank", path: "/axis" },
                  { name: "Bank of Baroda", path: "/bob" }
                ].map((bank, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: clickedItem === idx ? "#FFD700" : "#f8f8f8",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleNavigation(bank.path, idx)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <FaBuilding style={iconStyle} />
                      <span>{bank.name}</span>
                    </div>
                  </div>
                ))}

              {/* Offers submenu */}
              {menu === "offers" &&
                [
                  { name: "Cashback Offers", path: "/offers&cashback" },
                  { name: "Exclusive Deals", path: "/exclusive-deals" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: clickedItem === idx ? "#FFD700" : "#f8f8f8",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleNavigation(item.path, idx)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}

              {/* More submenu */}
              {menu === "more" &&
                [
                  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt style={iconStyle} /> },
                  { name: "About Us", path: "/about", icon: <FaInfoCircle style={iconStyle} /> },
                  { name: "FAQs", path: "/faqs", icon: <FaQuestionCircle style={iconStyle} /> },
                ].map((item, idx) => (
                  <div
                    key={idx + 100}
                    style={{
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: clickedItem === idx + 100 ? "#FFD700" : "#f8f8f8",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleNavigation(item.path, idx + 100)}
                  >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      {item.icon}
                      <span>{item.name}</span>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileNavbar;
