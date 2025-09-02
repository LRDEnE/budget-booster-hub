import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, DollarSign } from 'lucide-react';

export const MortgageCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMortgage = () => {
    const principal = loanAmount;
    const monthlyRate = (interestRate / 100) / 12;
    const numPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numPayments);
      setTotalInterest(0);
    } else {
      const monthly = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                     (Math.pow(1 + monthlyRate, numPayments) - 1);
      setMonthlyPayment(monthly);
      setTotalInterest((monthly * numPayments) - principal);
    }
  };

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary-foreground" />
        </div>
        <CardTitle>Mortgage Calculator</CardTitle>
        <CardDescription>Calculate your monthly payments</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="loan-amount">Loan Amount</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="pl-10"
              placeholder="300,000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interest-rate">Interest Rate (%)</Label>
          <Input
            id="interest-rate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="6.5"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="loan-term">Loan Term (years)</Label>
          <Input
            id="loan-term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="30"
          />
        </div>

        <div className="pt-4 space-y-3 border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Monthly Payment:</span>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total Interest:</span>
            <span className="text-sm font-medium">
              ${totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </span>
          </div>
        </div>

        <Button variant="hero" className="w-full mt-4">
          Get Pre-Approved
        </Button>
      </CardContent>
    </Card>
  );
};