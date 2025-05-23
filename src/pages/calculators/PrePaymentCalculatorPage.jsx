
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/utils";
import LoanPieChart from "../../components/LoanPieChart";
import ApplyNowButton from "../../components/ApplyNowButton ";

const PrepaymentCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emiPaid, setEmiPaid] = useState(24); // 2 years
  const [prepaymentAmount, setPrepaymentAmount] = useState(500000);
  const [prepaymentType, setPrepaymentType] = useState("emi"); // emi or tenure
  const [inputType, setInputType] = useState("slider");
  
  // Calculated values
  const [originalEmi, setOriginalEmi] = useState(0);
  const [newEmi, setNewEmi] = useState(0);
  const [newTenure, setNewTenure] = useState(0);
  const [interestSaved, setInterestSaved] = useState(0);

  const calculatePrepayment = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 100 / 12;
    const tenureInMonths = loanTenure * 12;
    
    // Calculate original EMI
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
    
    for (let i = 1; i <= emiPaid; i++) {
      const interestForMonth = remainingPrincipal * ratePerMonth;
      interestPaid += interestForMonth;
      
      const principalForMonth = emi - interestForMonth;
      remainingPrincipal -= principalForMonth;
    }
    
    // Apply prepayment
    const remainingPrincipalAfterPrepayment = Math.max(0, remainingPrincipal - prepaymentAmount);
    const remainingEmis = tenureInMonths - emiPaid;
    
    // Calculate results based on prepayment type
    if (prepaymentType === "emi") {
      // EMI reduction mode
      const newEmiValue = remainingPrincipalAfterPrepayment * 
        ratePerMonth * 
        (Math.pow(1 + ratePerMonth, remainingEmis)) / 
        (Math.pow(1 + ratePerMonth, remainingEmis) - 1);
      
      const newTotalAmount = newEmiValue * remainingEmis;
      const newTotalInterest = newTotalAmount - remainingPrincipalAfterPrepayment;
      const originalRemainingInterest = (emi * remainingEmis) - remainingPrincipal;
      
      setOriginalEmi(emi);
      setNewEmi(newEmiValue);
      setNewTenure(remainingEmis / 12); // Convert to years
      setInterestSaved(originalRemainingInterest - newTotalInterest);
    } else {
      // Tenure reduction mode
      let reducedTenure = 0;
      let reducedInterest = 0;
      let reducedPrincipal = remainingPrincipalAfterPrepayment;
      
      // Calculate how many EMIs can be paid with the remaining principal
      while (reducedPrincipal > 0) {
        const monthlyInterest = reducedPrincipal * ratePerMonth;
        reducedInterest += monthlyInterest;
        
        const monthlyPrincipal = emi - monthlyInterest;
        reducedPrincipal -= monthlyPrincipal;
        
        reducedTenure++;
      }
      
      const originalRemainingInterest = (emi * remainingEmis) - remainingPrincipal;
      
      setOriginalEmi(emi);
      setNewEmi(emi);
      setNewTenure((emiPaid + reducedTenure) / 12); // Convert to years
      setInterestSaved(originalRemainingInterest - reducedInterest);
    }
  };
  
  useEffect(() => {
    calculatePrepayment();
  }, [loanAmount, interestRate, loanTenure, emiPaid, prepaymentAmount, prepaymentType]);

  // Prepare data for the pie chart
  const pieChartData = [
    { name: "Principal Paid", value: prepaymentAmount, color: "#4CAF50" },
    { name: "Interest Saved", value: interestSaved, color: "#1e88e5" },
    { 
      name: prepaymentType === "emi" ? "Reduced EMI" : "Reduced Tenure",
      value: prepaymentType === "emi" ? originalEmi - newEmi : (loanTenure - newTenure) * 12,
      color: "#FFC107"
    }
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
            {/* Loan Amount */}
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
                  onValueChange={(value) => setLoanAmount(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
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
            
            {/* Loan Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="loanTenure">Loan Tenure: {loanTenure} years</Label>
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
            
            {/* EMIs Paid So Far */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="emiPaid">EMIs Paid So Far: {emiPaid} months</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="emiPaid"
                  min={0}
                  max={loanTenure * 12 - 1}
                  step={1}
                  value={[emiPaid]}
                  onValueChange={(value) => setEmiPaid(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="emiPaid"
                  type="number"
                  value={emiPaid}
                  onChange={(e) => setEmiPaid(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Prepayment Amount */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="prepaymentAmount">Prepayment Amount: ₹{formatCurrency(prepaymentAmount)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="prepaymentAmount"
                  min={10000}
                  max={loanAmount}
                  step={10000}
                  value={[prepaymentAmount]}
                  onValueChange={(value) => setPrepaymentAmount(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="prepaymentAmount"
                  type="number"
                  value={prepaymentAmount}
                  onChange={(e) => setPrepaymentAmount(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Prepayment Type */}
            <div className="space-y-2">
              <Label>Prepayment Option</Label>
              <RadioGroup value={prepaymentType} onValueChange={setPrepaymentType} className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="emi" id="emi" />
                  <Label htmlFor="emi" className="cursor-pointer">Reduce EMI</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-3">
                  <RadioGroupItem value="tenure" id="tenure" />
                  <Label htmlFor="tenure" className="cursor-pointer">Reduce Tenure</Label>
                </div>
              </RadioGroup>
            </div>
            
            {/* Apply Now Button */}
            <div className="pt-4 flex justify-center">
              <ApplyNowButton label="Apply for Prepayment" />
            </div>
            
            {/* Related Content */}
            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Prepayment Strategies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Make lump-sum payments when you receive bonuses</li>
                <li>• Choose between reducing EMI or tenure based on your financial goals</li>
                <li>• Partial prepayments are usually free for floating rate loans</li>
                <li>• Regular prepayments in early loan years save maximum interest</li>
                <li>• Consider tax implications before making large prepayments</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardContent className="pt-6 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Original EMI</h3>
              <div className="text-xl font-bold">
                ₹{formatCurrency(originalEmi)}
              </div>
            </div>
            
            {prepaymentType === "emi" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">New EMI</h3>
                <div className="text-xl font-bold text-loan-blue">
                  ₹{formatCurrency(newEmi)}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  (Same tenure: {loanTenure} years)
                </div>
              </div>
            )}
            
            {prepaymentType === "tenure" && (
              <div>
                <h3 className="text-lg font-semibold mb-2">New Tenure</h3>
                <div className="text-xl font-bold text-loan-blue">
                  {newTenure.toFixed(1)} years
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  (Same EMI: ₹{formatCurrency(originalEmi)})
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Interest Saved</h3>
              <div className="text-2xl font-bold text-loan-green">
                ₹{formatCurrency(interestSaved)}
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              <p>* Prepayment typically has no charges for floating rate loans</p>
              <p>* Actual savings may vary based on interest rate fluctuations</p>
            </div>
          </CardContent>
        </Card>
        
        <LoanPieChart 
          data={pieChartData}
          title="Prepayment Impact" 
        />
      </div>
    </div>
  );
};

export default PrepaymentCalculator;