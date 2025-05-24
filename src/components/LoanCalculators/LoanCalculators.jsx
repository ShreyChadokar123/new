import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBuilding,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

import EmiCalculator from "../../pages/calculators/EMICalculatorPage";
import EligibilityCalculator from "../../pages/calculators/EligibilityCalculatorPage";
import ForeclosureCalculator from "../../pages/calculators/ForecloseCalculatorPage";
import BalanceTransferCalculator from "../../pages/calculators/BalanceTransferCalculatorPage";
import PrepaymentCalculator from "../../pages/calculators/PrePaymentCalculatorPage";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Calculator = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const validTabs = [
    "emi",
    "eligibility",
    "foreclose",
    "balance-transfer",
    "pre-payment",
  ];
  const queryTab = searchParams.get("type");
  const defaultTab = validTabs.includes(queryTab) ? queryTab : "emi";

  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    if (validTabs.includes(queryTab)) {
      setActiveTab(queryTab);
    } else {
      setActiveTab("emi");
    }
  }, [queryTab]);

  const getHeading = () => {
    if (location.pathname === "/") {
      return (
        <>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-black">Loans </span>
            <span className="bg-gradient-to-r from-[#0074d9] to-[#00c6ff] text-transparent bg-clip-text">
              Calculators
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg mt-3 max-w-2xl mx-auto">
            Explore our range of loan products designed to meet your financial needs
            with the best terms in the market.
          </p>
        </>
      );
    }

    switch (activeTab) {
      case "emi":
        return (
          <h2 className="text-3xl font-bold text-white">
            EMI <span className="text-[#ffd700]">Calculator</span>
          </h2>
        );
      case "eligibility":
        return (
          <h2 className="text-3xl font-bold text-white">
            Eligibility <span className="text-[#ffd700]">Calculator</span>
          </h2>
        );
      case "balance-transfer":
        return (
          <h2 className="text-3xl font-bold text-white">
            Balance Transfer <span className="text-[#ffd700]">Calculator</span>
          </h2>
        );
      case "pre-payment":
        return (
          <h2 className="text-3xl font-bold text-white">
            Pre-Payment <span className="text-[#ffd700]">Calculator</span>
          </h2>
        );
      case "foreclose":
        return (
          <h2 className="text-3xl font-bold text-white">
            Foreclosure <span className="text-[#ffd700]">Calculator</span>
          </h2>
        );
      default:
        return null;
    }
  };

  const getSubContent = () => {
    switch (activeTab) {
      case "emi":
        return (
          <p className="text-white text-sm sm:text-base mt-2">
            Calculate your monthly EMI based on loan amount, interest rate, and tenure. Plan your finances better.
          </p>
        );
      case "eligibility":
        return (
          <p className="text-white text-sm sm:text-base mt-2">
            Find out how much loan amount you're eligible for based on your income and expenses.
          </p>
        );
      case "balance-transfer":
        return (
          <p className="text-white text-sm sm:text-base mt-2">
            Check how much you can save by transferring your existing loan to another bank with lower interest.
          </p>
        );
      case "pre-payment":
        return (
          <p className="text-white text-sm sm:text-base mt-2">
            See the impact of making part payments on your loan EMI or tenure.
          </p>
        );
      case "foreclose":
        return (
          <p className="text-white text-sm sm:text-base mt-2">
            Understand how much you save by foreclosing your loan early and closing your debt faster.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="w-full sm:w-[75%] mx-auto px-4 sm:px-6 py-10"
      style={{
        marginTop: "-30px",
        fontFamily: "'Glacial Indifference', sans-serif",
      }}
    >
      {/* Google Font Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Glacial+Indifference&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @media (max-width: 640px) {
          .hide-scrollbar::-webkit-scrollbar-button {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
      `}</style>

      {/* Heading Section */}
      {location.pathname !== "/" ? (
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-400 py-6 rounded-xl mb-8 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {getHeading()}
            {getSubContent()}
          </div>
        </div>
      ) : (
        <div className="w-full mb-8 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center">
            {getHeading()}
            {getSubContent()}
          </div>
        </div>
      )}

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="overflow-x-auto hide-scrollbar">
          <TabsList className="flex w-max sm:w-full justify-start sm:justify-center gap-2 px-2 py-1 bg-[#f5f7fa] rounded-full shadow-sm">
            <TabsTrigger
              value="emi"
              className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-200 ${
                activeTab === "emi"
                  ? "bg-white text-black font-semibold"
                  : "bg-white text-gray-600 hover:text-[#ffd700] hover:bg-gray-100"
              }`}
            >
              <FaHome />
              Emi-Calculator
            </TabsTrigger>
            <TabsTrigger
              value="eligibility"
              className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-200 ${
                activeTab === "eligibility"
                  ? "bg-white text-black font-semibold"
                  : "bg-white text-gray-600 hover:text-[#ffd700] hover:bg-gray-100"
              }`}
            >
              <FaBuilding />
              Eligibility-Calculator
            </TabsTrigger>
            <TabsTrigger
              value="balance-transfer"
              className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-200 ${
                activeTab === "balance-transfer"
                  ? "bg-white text-black font-semibold"
                  : "bg-white text-gray-600 hover:text-[#ffd700] hover:bg-gray-100"
              }`}
            >
              <FaExchangeAlt />
              Balance-Transfer
            </TabsTrigger>
            <TabsTrigger
              value="pre-payment"
              className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-200 ${
                activeTab === "pre-payment"
                  ? "bg-white text-black font-semibold"
                  : "bg-white text-gray-600 hover:text-[#ffd700] hover:bg-gray-100"
              }`}
            >
              <FaMoneyBillWave />
              Pre-Payment
            </TabsTrigger>
            <TabsTrigger
              value="foreclose"
              className={`flex items-center gap-2 px-4 py-2 text-sm sm:text-base whitespace-nowrap rounded-full transition-all duration-200 ${
                activeTab === "foreclose"
                  ? "bg-white text-black font-semibold"
                  : "bg-white text-gray-600 hover:text-[#ffd700] hover:bg-gray-100"
              }`}
            >
              <FaChartLine />
              ForeClose-Calculator
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="emi">
          <EmiCalculator />
        </TabsContent>
        <TabsContent value="eligibility">
          <EligibilityCalculator />
        </TabsContent>
        <TabsContent value="balance-transfer">
          <BalanceTransferCalculator />
        </TabsContent>
        <TabsContent value="pre-payment">
          <PrepaymentCalculator />
        </TabsContent>
        <TabsContent value="foreclose">
          <ForeclosureCalculator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Calculator;
