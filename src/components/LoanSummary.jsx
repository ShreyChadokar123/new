import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";

const LoanSummary = ({ emi, totalInterest, totalAmount, principal }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-sm text-gray-500">Monthly EMI</div>
          <div className="text-2xl font-bold text-loan-green">
            ₹{formatCurrency(emi)}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500">Total Interest Payable</div>
          <div className="text-xl font-bold text-loan-yellow">
            ₹{formatCurrency(totalInterest)}
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500">Total Amount</div>
          <div className="text-xl font-bold">
            ₹{formatCurrency(totalAmount)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanSummary;
