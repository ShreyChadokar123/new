
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { formatCurrency } from "@/lib/utils";
import LoanPieChart from "../../components/LoanPieChart";
import ApplyNowButton from "../../components/ApplyNowButton ";

const BalanceTransferCalculator = () => {
  const [outstandingLoan, setOutstandingLoan] = useState(2000000);
  const [currentRate, setCurrentRate] = useState(10.5);
  const [remainingTenure, setRemainingTenure] = useState(15);
  const [newRate, setNewRate] = useState(8.5);
  const [processingFee, setProcessingFee] = useState(1); // 1% fee
  const [inputType, setInputType] = useState("slider");
  
  // Calculated values
  const [currentEMI, setCurrentEMI] = useState(0);
  const [newEMI, setNewEMI] = useState(0);
  const [emiSaved, setEmiSaved] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [processingAmount, setProcessingAmount] = useState(0);
  const [netSavings, setNetSavings] = useState(0);

  const calculateBalanceTransfer = () => {
    const principal = outstandingLoan;
    const currentRatePerMonth = currentRate / 100 / 12;
    const newRatePerMonth = newRate / 100 / 12;
    const tenureInMonths = remainingTenure * 12;
    
    // Calculate current EMI
    const currentEmiValue = principal * 
      currentRatePerMonth * 
      (Math.pow(1 + currentRatePerMonth, tenureInMonths)) / 
      (Math.pow(1 + currentRatePerMonth, tenureInMonths) - 1);
    
    // Calculate new EMI
    const newEmiValue = principal * 
      newRatePerMonth * 
      (Math.pow(1 + newRatePerMonth, tenureInMonths)) / 
      (Math.pow(1 + newRatePerMonth, tenureInMonths) - 1);
    
    // Calculate EMI savings per month
    const emiSavedValue = currentEmiValue - newEmiValue;
    
    // Calculate total savings over remaining tenure
    const totalSavingsValue = emiSavedValue * tenureInMonths;
    
    // Calculate processing fee
    const processingAmountValue = principal * (processingFee / 100);
    
    // Calculate net savings (total savings minus processing fee)
    const netSavingsValue = totalSavingsValue - processingAmountValue;
    
    setCurrentEMI(currentEmiValue);
    setNewEMI(newEmiValue);
    setEmiSaved(emiSavedValue);
    setTotalSavings(totalSavingsValue);
    setProcessingAmount(processingAmountValue);
    setNetSavings(netSavingsValue);
  };
  
  useEffect(() => {
    calculateBalanceTransfer();
  }, [outstandingLoan, currentRate, remainingTenure, newRate, processingFee]);

  // Prepare pie chart data
  const pieChartData = [
    { name: "Processing Fee", value: processingAmount, color: "#FFC107" },
    { name: "Net Savings", value: netSavings, color: "#1e88e5" }
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
            {/* Outstanding Loan Amount */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="outstandingLoan">Outstanding Loan: ₹{formatCurrency(outstandingLoan)}</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="outstandingLoan"
                  min={100000}
                  max={10000000}
                  step={50000}
                  value={[outstandingLoan]}
                  onValueChange={(value) => setOutstandingLoan(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="outstandingLoan"
                  type="number"
                  value={outstandingLoan}
                  onChange={(e) => setOutstandingLoan(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Current Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="currentRate">Current Interest Rate: {currentRate}%</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="currentRate"
                  min={5}
                  max={20}
                  step={0.1}
                  value={[currentRate]}
                  onValueChange={(value) => setCurrentRate(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="currentRate"
                  type="number"
                  step="0.1"
                  value={currentRate}
                  onChange={(e) => setCurrentRate(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Remaining Tenure */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="remainingTenure">Remaining Tenure: {remainingTenure} years</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="remainingTenure"
                  min={1}
                  max={30}
                  step={1}
                  value={[remainingTenure]}
                  onValueChange={(value) => setRemainingTenure(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="remainingTenure"
                  type="number"
                  value={remainingTenure}
                  onChange={(e) => setRemainingTenure(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* New Interest Rate */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="newRate">New Interest Rate: {newRate}%</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="newRate"
                  min={5}
                  max={20}
                  step={0.1}
                  value={[newRate]}
                  onValueChange={(value) => setNewRate(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="newRate"
                  type="number"
                  step="0.1"
                  value={newRate}
                  onChange={(e) => setNewRate(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            {/* Processing Fee */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <Label htmlFor="processingFee">Processing Fee: {processingFee}%</Label>
              </div>
              
              {inputType === "slider" ? (
                <Slider
                  id="processingFee"
                  min={0}
                  max={3}
                  step={0.1}
                  value={[processingFee]}
                  onValueChange={(value) => setProcessingFee(value[0])}
                  className="mt-2"
                />
              ) : (
                <Input
                  id="processingFee"
                  type="number"
                  step="0.1"
                  value={processingFee}
                  onChange={(e) => setProcessingFee(Number(e.target.value))}
                  className="mt-2"
                />
              )}
            </div>
            
            <div className="mt-6 flex justify-center">
              <ApplyNowButton label="Apply for Balance Transfer" />
            </div>
            
            {/* Related Content */}
            <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Balance Transfer Benefits</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Lower interest rates save money long-term</li>
                <li>• Reduced EMI burden improves cash flow</li>
                <li>• Consolidate multiple loans into one</li>
                <li>• Better loan terms and flexible repayment options</li>
                <li>• Opportunity to improve credit score</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-gray-500">Current EMI</div>
                <div className="text-lg font-bold">₹{formatCurrency(currentEMI)}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500">New EMI</div>
                <div className="text-lg font-bold text-loan-blue">₹{formatCurrency(newEMI)}</div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">EMI Saved per Month</div>
              <div className="text-lg font-bold text-loan-green">₹{formatCurrency(emiSaved)}</div>
            </div>
          </CardContent>
        </Card>
      
        <Card>
          <CardContent className="pt-6 space-y-6">
            <div>
              <div className="text-sm text-gray-500">Total Savings</div>
              <div className="text-xl font-bold text-loan-green">₹{formatCurrency(totalSavings)}</div>
            </div>
            
            <div>
              <div className="text-sm text-gray-500">Processing Fee</div>
              <div className="text-lg font-bold text-loan-yellow">₹{formatCurrency(processingAmount)}</div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="text-sm text-gray-500">Net Savings</div>
              <div className="text-2xl font-bold text-loan-blue">₹{formatCurrency(netSavings)}</div>
            </div>
          </CardContent>
        </Card>

        <LoanPieChart 
          data={pieChartData} 
          title="Savings Analysis"
        />
      </div>
    </div>
  );
};

export default BalanceTransferCalculator;