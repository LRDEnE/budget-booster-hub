import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, Shield } from 'lucide-react';

export const CreditScoreEstimator = () => {
  const [income, setIncome] = useState('');
  const [debt, setDebt] = useState('');
  const [creditHistory, setCreditHistory] = useState('');
  const [estimatedScore, setEstimatedScore] = useState<number | null>(null);

  const calculateCreditScore = () => {
    if (!income || !debt || !creditHistory) return;

    const incomeNum = Number(income);
    const debtNum = Number(debt);
    const debtToIncome = (debtNum / incomeNum) * 100;

    let baseScore = 650;

    // Income factor
    if (incomeNum > 100000) baseScore += 50;
    else if (incomeNum > 70000) baseScore += 30;
    else if (incomeNum > 50000) baseScore += 10;

    // Debt to income ratio
    if (debtToIncome < 20) baseScore += 40;
    else if (debtToIncome < 30) baseScore += 20;
    else if (debtToIncome > 50) baseScore -= 30;

    // Credit history
    switch (creditHistory) {
      case 'excellent':
        baseScore += 50;
        break;
      case 'good':
        baseScore += 30;
        break;
      case 'fair':
        baseScore += 10;
        break;
      case 'poor':
        baseScore -= 20;
        break;
    }

    setEstimatedScore(Math.min(850, Math.max(300, baseScore)));
  };

  const getScoreColor = (score: number) => {
    if (score >= 750) return 'text-secondary';
    if (score >= 700) return 'text-accent';
    if (score >= 650) return 'text-yellow-600';
    return 'text-destructive';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 750) return 'Excellent';
    if (score >= 700) return 'Good';
    if (score >= 650) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-gradient-success rounded-full flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-secondary-foreground" />
        </div>
        <CardTitle>Credit Score Estimator</CardTitle>
        <CardDescription>Estimate your creditworthiness</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="annual-income">Annual Income</Label>
          <Input
            id="annual-income"
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="75,000"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly-debt">Monthly Debt Payments</Label>
          <Input
            id="monthly-debt"
            type="number"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            placeholder="2,500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="credit-history">Credit History</Label>
          <Select value={creditHistory} onValueChange={setCreditHistory}>
            <SelectTrigger>
              <SelectValue placeholder="Select credit history" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="excellent">Excellent (7+ years)</SelectItem>
              <SelectItem value="good">Good (4-7 years)</SelectItem>
              <SelectItem value="fair">Fair (2-4 years)</SelectItem>
              <SelectItem value="poor">Limited (0-2 years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculateCreditScore} 
          variant="secondary" 
          className="w-full"
          disabled={!income || !debt || !creditHistory}
        >
          Estimate Score
        </Button>

        {estimatedScore && (
          <div className="pt-4 space-y-3 border-t text-center">
            <div className="flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Estimated Credit Score</span>
            </div>
            <div className={`text-4xl font-bold ${getScoreColor(estimatedScore)}`}>
              {estimatedScore}
            </div>
            <div className={`text-sm font-medium ${getScoreColor(estimatedScore)}`}>
              {getScoreLabel(estimatedScore)}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};