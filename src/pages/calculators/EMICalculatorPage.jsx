
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoanSummary from "../../components/LoanSummary";
import LoanPieChart from "../../components/LoanPieChart";
import ApplyNowButton from "../../components/ApplyNowButton ";
import { formatCurrency } from "@/lib/utils";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [inputType, setInputType] = useState("slider");
  
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate EMI
  const calculateEmi = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 100 / 12;
    const tenureInMonths = loanTenure * 12;
    
    const emiValue = 
      principal * 
      ratePerMonth * 
      (Math.pow(1 + ratePerMonth, tenureInMonths)) / 
      (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
    
    const totalAmountValue = emiValue * tenureInMonths;
    const totalInterestValue = totalAmountValue - principal;
    
    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalAmount(totalAmountValue);
  };
  
  // Calculate EMI whenever input values change
  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, loanTenure]);
  
  const handleLoanAmountChange = (value) => {
    if (typeof value === "string") {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setLoanAmount(numValue);
      }
    } else {
      setLoanAmount(value[0]);
    }
  };
  
  const handleInterestRateChange = (value) => {
    if (typeof value === "string") {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setInterestRate(numValue);
      }
    } else {
      setInterestRate(value[0]);
    }
  };
  
  const handleLoanTenureChange = (value) => {
    if (typeof value === "string") {
      const numValue = parseFloat(value);
      if (!isNaN(numValue)) {
        setLoanTenure(numValue);
      }
    } else {
      setLoanTenure(value[0]);
    }
  };

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Principal", value: loanAmount, color: "#1e88e5" },
    { name: "Interest", value: totalInterest, color: "#FFC107" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <Card className="lg:col-span-2">
        <CardContent className="pt-6">
          <div className="mb-6">
            <Tabs defaultValue="slider" onValueChange={setInputType}>
              <TabsList>
                <TabsTrigger value="slider">Slider</TabsTrigger>
                <TabsTrigger value="manual">Manual</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="space-y-8">
            {/* Loan Amount Input */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="loanAmount">Loan Amount: ₹{formatCurrency(loanAmount)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="loanAmount"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={[loanAmount]}
                  onValueChange={handleLoanAmountChange}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => handleLoanAmountChange(e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Interest Rate Input */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="interestRate"
                  min={5}
                  max={20}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={handleInterestRateChange}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => handleInterestRateChange(e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Loan Tenure Input */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="loanTenure">Tenure: {loanTenure} years</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="loanTenure"
                  min={1}
                  max={30}
                  step={1}
                  value={[loanTenure]}
                  onValueChange={handleLoanTenureChange}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="loanTenure"
                  type="number"
                  value={loanTenure}
                  onChange={(e) => handleLoanTenureChange(e.target.value)}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Apply Now Button */}
            <div className="pt-4 flex justify-center">
              <ApplyNowButton />
            </div>
            
            {/* Related Content */}
            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Why Calculate Your EMI?</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Plan your monthly budget effectively</li>
                <li>• Compare loan offers from different lenders</li>
                <li>• Understand the total cost of your loan</li>
                <li>• Choose the right loan tenure for your needs</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <LoanSummary
          emi={emi}
          totalInterest={totalInterest}
          totalAmount={totalAmount}
          principal={loanAmount}
        />
        <LoanPieChart data={pieChartData} />
      </div>
    </div>
  );
};

export default EmiCalculator;