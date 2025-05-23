import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./Index";
import NotFound from "./pages/NotFound";
import MobileNavbar from "./components/Navbar/MobileNavbar";

// Service Pages
import HomeLoanPage from "./pages/services/HomeLoanPage";
import PropertyLoanPage from "./pages/services/PropertyLoanPage";
import BalanceTransferPage from "./pages/services/BalanceTransferPage";
import BusinessLoanPage from "./pages/services/BusinessLoanPage";



// Calculator Pages
import LoanCalculators from "./components/LoanCalculators/LoanCalculators";
import BalanceTransferCalculatorPage from "./pages/calculators/BalanceTransferCalculatorPage";
import EMICalculatorPage from "./pages/calculators/EMICalculatorPage";
import EligibilityCalculatorPage from "./pages/calculators/EligibilityCalculatorPage";
import ForecloseCalculatorPage from "./pages/calculators/ForecloseCalculatorPage";
import PrePaymentCalculatorPage from "./pages/calculators/PrePaymentCalculatorPage";

// Other Pages
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import OffersPage from "./pages/OffersPage";
import LoanServicesFooter from "./pages/LoanServicesFooter";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import FAQPage from "./pages/FAQs";
import CustomerSupport from "./CustomerSupport";
import BankPartnerDetails from "./pages/BankPartnerDetails";
import ReferAndEarn from "./pages/services/ReferAndEarn";
import JoinAsPartner from "./pages/services/JoinAsPartner";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <MobileNavbar />
        <Routes>
          <Route path="/" element={<Index />} />
         
          
          {/* Service Pages */}
          <Route path="/home-loan" element={<HomeLoanPage />} />
          <Route path="/property-loan" element={<PropertyLoanPage />} />
          <Route path="/balance-transfer" element={<BalanceTransferPage />} />
          <Route path="/business-loan" element={<BusinessLoanPage />} />
          
          {/* Calculator Pages */}
          <Route path="/calculators" element={<LoanCalculators/>}/>
          <Route path="/calculators/emi" element={<EMICalculatorPage />} />
          <Route path="/calculators/eligibility" element={<EligibilityCalculatorPage />} />
          <Route path="/calculators/foreclose" element={<ForecloseCalculatorPage />} />
          <Route path="/calculators/pre-payment" element={<PrePaymentCalculatorPage />} />
          <Route path="/calculators/balance-transfer" element={<BalanceTransferCalculatorPage />} />
          
          {/* Other Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offers&cashback" element={<OffersPage />} />
          <Route path="/loans" element={<LoanServicesFooter />} />
           <Route path="/terms" element={<TermsAndConditions/>} />
            <Route path="/privacy" element={<PrivacyPolicy/>} />
             <Route path="/disclaimer" element={<Disclaimer/>} />
                <Route path="/faqs" element={<FAQPage/>} />
                  <Route path="/customer" element={<CustomerSupport/>} />
                  <Route path="/join" element={<JoinAsPartner/>} />
                  <Route path="/bank" element={<BankPartnerDetails/>} />
                  <Route path="/refer" element={<ReferAndEarn/>} />


          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;