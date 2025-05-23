import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import LoanPieChart from "../../components/LoanPieChart";
import ApplyNowButton from "../../components/ApplyNowButton ";

const EligibilityCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(80000);
  const [existingEmi, setExistingEmi] = useState(15000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [inputType, setInputType] = useState("slider");
  
  const [eligibleAmount, setEligibleAmount] = useState(0);
  const [emi, setEmi] = useState(0);

  // Calculate eligibility
  const calculateEligibility = () => {
    // Maximum EMI a person can pay (50% of income minus existing EMIs)
    const maxEmi = monthlyIncome * 0.5 - existingEmi;
    
    // Calculate eligible loan amount
    const ratePerMonth = interestRate / 100 / 12;
    const tenureInMonths = loanTenure * 12;
    
    const eligibleAmountValue = maxEmi * 
      ((Math.pow(1 + ratePerMonth, tenureInMonths) - 1) / 
      (ratePerMonth * Math.pow(1 + ratePerMonth, tenureInMonths)));
    
    setEligibleAmount(eligibleAmountValue > 0 ? eligibleAmountValue : 0);
    setEmi(maxEmi > 0 ? maxEmi : 0);
  };

  useEffect(() => {
    calculateEligibility();
  }, [monthlyIncome, existingEmi, interestRate, loanTenure]);

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Available Income", value: monthlyIncome - existingEmi, color: "#1e88e5" },
    { name: "Existing EMI", value: existingEmi, color: "#FFC107" },
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
            {/* Monthly Income Input */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="monthlyIncome">Monthly Income: ₹{formatCurrency(monthlyIncome)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="monthlyIncome"
                  min={10000}
                  max={500000}
                  step={5000}
                  value={[monthlyIncome]}
                  onValueChange={(value) => setMonthlyIncome(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="monthlyIncome"
                  type="number"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Existing EMI Input */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="existingEmi">Existing EMI: ₹{formatCurrency(existingEmi)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="existingEmi"
                  min={0}
                  max={100000}
                  step={1000}
                  value={[existingEmi]}
                  onValueChange={(value) => setExistingEmi(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="existingEmi"
                  type="number"
                  value={existingEmi}
                  onChange={(e) => setExistingEmi(Number(e.target.value))}
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
                  onValueChange={(value) => setInterestRate(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
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
                  onValueChange={(value) => setLoanTenure(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="loanTenure"
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
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
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Factors Affecting Loan Eligibility</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Credit score and history</li>
                <li>• Stable employment and income</li>
                <li>• Debt-to-income ratio (ideally below 40%)</li>
                <li>• Age and loan tenure alignment</li>
                <li>• Existing relationship with the lender</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Eligible Loan Amount</h3>
              <div className="text-3xl font-bold text-loan-blue">
                ₹{formatCurrency(eligibleAmount)}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Maximum EMI Allowed</h3>
              <div className="text-2xl font-bold text-loan-green">
                ₹{formatCurrency(emi)}
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>* Based on 50% debt-to-income ratio</p>
              <p>* Subject to credit score and other eligibility criteria</p>
            </div>
          </CardContent>
        </Card>
        
        <LoanPieChart 
          data={pieChartData}
          title="Income Distribution" 
        />
      </div>
    </div>
  );
};

export default EligibilityCalculator;