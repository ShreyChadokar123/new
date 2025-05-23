
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import { PieChart } from "lucide-react";
import LoanPieChart from "../../components/LoanPieChart";
import ApplyNowButton from "../../components/ApplyNowButton ";

const ForeclosureCalculator = () => {
  const [originalLoan, setOriginalLoan] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [originalTenure, setOriginalTenure] = useState(20);
  const [paidEmis, setPaidEmis] = useState(36); // 3 years
  const [foreclosureFee, setForeclosureFee] = useState(2); // 2% fee
  const [inputType, setInputType] = useState("slider");
  
  // Calculated values
  const [outstandingPrincipal, setOutstandingPrincipal] = useState(0);
  const [foreclosureAmount, setForeclosureAmount] = useState(0);
  const [interestSaved, setInterestSaved] = useState(0);

  const calculateForeclosure = () => {
    const principal = originalLoan;
    const ratePerMonth = interestRate / 100 / 12;
    const tenureInMonths = originalTenure * 12;
    
    // Calculate EMI
    const emi = principal * 
      ratePerMonth * 
      (Math.pow(1 + ratePerMonth, tenureInMonths)) / 
      (Math.pow(1 + ratePerMonth, tenureInMonths) - 1);
    
    // Calculate total amount if paid full term
    const totalAmount = emi * tenureInMonths;
    const totalInterest = totalAmount - principal;
    
    // Calculate outstanding principal after paid EMIs
    let remainingPrincipal = principal;
    let interestPaid = 0;
    
    for (let i = 1; i <= paidEmis; i++) {
      const interestForMonth = remainingPrincipal * ratePerMonth;
      interestPaid += interestForMonth;
      
      const principalForMonth = emi - interestForMonth;
      remainingPrincipal -= principalForMonth;
    }
    
    const remainingEmis = tenureInMonths - paidEmis;
    const remainingInterest = totalInterest - interestPaid;
    
    // Calculate foreclosure amount with fee
    const foreclosureFeeAmount = remainingPrincipal * (foreclosureFee / 100);
    const totalForeclosureAmount = remainingPrincipal + foreclosureFeeAmount;
    
    setOutstandingPrincipal(remainingPrincipal > 0 ? remainingPrincipal : 0);
    setForeclosureAmount(totalForeclosureAmount > 0 ? totalForeclosureAmount : 0);
    setInterestSaved(remainingInterest > 0 ? remainingInterest : 0);
  };
  
  useEffect(() => {
    calculateForeclosure();
  }, [originalLoan, interestRate, originalTenure, paidEmis, foreclosureFee]);

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Outstanding Principal", value: outstandingPrincipal, color: "#1e88e5" },
    { name: "Interest Saved", value: interestSaved, color: "#4CAF50" },
    { name: "Foreclosure Fee", value: foreclosureAmount - outstandingPrincipal, color: "#F44336" }
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
            {/* Original Loan Amount */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="originalLoan">Original Loan Amount: ₹{formatCurrency(originalLoan)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="originalLoan"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={[originalLoan]}
                  onValueChange={(value) => setOriginalLoan(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="originalLoan"
                  type="number"
                  value={originalLoan}
                  onChange={(e) => setOriginalLoan(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Interest Rate */}
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
            
            {/* Original Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="originalTenure">Original Tenure: {originalTenure} years</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="originalTenure"
                  min={1}
                  max={30}
                  step={1}
                  value={[originalTenure]}
                  onValueChange={(value) => setOriginalTenure(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="originalTenure"
                  type="number"
                  value={originalTenure}
                  onChange={(e) => setOriginalTenure(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* EMIs Paid So Far */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="paidEmis">EMIs Paid: {paidEmis} months</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="paidEmis"
                  min={0}
                  max={originalTenure * 12}
                  step={1}
                  value={[paidEmis]}
                  onValueChange={(value) => setPaidEmis(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="paidEmis"
                  type="number"
                  value={paidEmis}
                  onChange={(e) => setPaidEmis(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Foreclosure Fee */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="foreclosureFee">Foreclosure Fee: {foreclosureFee}%</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="foreclosureFee"
                  min={0}
                  max={5}
                  step={0.1}
                  value={[foreclosureFee]}
                  onValueChange={(value) => setForeclosureFee(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="foreclosureFee"
                  type="number"
                  step="0.1"
                  value={foreclosureFee}
                  onChange={(e) => setForeclosureFee(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Apply Now Button */}
            <div className="pt-4 flex justify-center">
              <ApplyNowButton label="Apply for Foreclosure" />
            </div>
            
            {/* Related Content */}
            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Foreclosure Benefits & Considerations</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Saves substantial interest over the loan term</li>
                <li>• Reduces financial burden and liabilities</li>
                <li>• May have tax implications (consult a tax advisor)</li>
                <li>• Check for lock-in periods before foreclosure</li>
                <li>• Compare foreclosure charges across lenders</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Outstanding Principal</h3>
              <div className="text-2xl font-bold">
                ₹{formatCurrency(outstandingPrincipal)}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Foreclosure Amount</h3>
              <div className="text-2xl font-bold text-loan-blue">
                ₹{formatCurrency(foreclosureAmount)}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                (Including {foreclosureFee}% foreclosure fee)
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Interest Saved</h3>
              <div className="text-2xl font-bold text-loan-green">
                ₹{formatCurrency(interestSaved)}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t">
              <PieChart size={16} />
              <span>Pre-payment can save you significant interest costs</span>
            </div>
          </CardContent>
        </Card>
        
        <LoanPieChart 
          data={pieChartData}
          title="Foreclosure Breakdown" 
        />
      </div>
    </div>
  );
};

export default ForeclosureCalculator;