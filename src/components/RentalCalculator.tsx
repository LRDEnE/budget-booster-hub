import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Building, Euro, TrendingUp, Users } from 'lucide-react';

export const RentalCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(350000);
  const [monthlyRent, setMonthlyRent] = useState(1200);
  const [expenses, setExpenses] = useState(200);
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [rentalYield, setRentalYield] = useState(0);
  const [netMonthlyIncome, setNetMonthlyIncome] = useState(0);
  const [annualROI, setAnnualROI] = useState(0);

  const calculateRental = () => {
    const annualRent = monthlyRent * 12;
    const annualExpenses = expenses * 12;
    const netAnnualIncome = annualRent - annualExpenses;
    
    // Rental yield calculation
    const rentalYieldValue = (netAnnualIncome / propertyValue) * 100;
    setRentalYield(rentalYieldValue);
    
    // Net monthly income
    setNetMonthlyIncome(monthlyRent - expenses);
    
    // Annual ROI
    setAnnualROI(rentalYieldValue);
  };

  useEffect(() => {
    calculateRental();
  }, [propertyValue, monthlyRent, expenses]);

  const getYieldColor = (yieldValue: number) => {
    if (yieldValue >= 5) return 'text-secondary';
    if (yieldValue >= 3) return 'text-accent';
    if (yieldValue >= 1) return 'text-yellow-600';
    return 'text-destructive';
  };

  const getYieldLabel = (yieldValue: number) => {
    if (yieldValue >= 5) return 'Excellent';
    if (yieldValue >= 3) return 'Good';
    if (yieldValue >= 1) return 'Fair';
    return 'Poor';
  };

  // German city multipliers for rent estimates
  const locationMultipliers: { [key: string]: number } = {
    'munich': 1.4,
    'frankfurt': 1.3,
    'hamburg': 1.1,
    'berlin': 1.0,
    'cologne': 0.9,
    'stuttgart': 1.2,
    'dusseldorf': 1.1,
    'other': 0.8
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <Building className="w-6 h-6 text-accent" />
        </div>
        <CardTitle>Rental Calculator</CardTitle>
        <CardDescription>Calculate rental yield and ROI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="property-value">Property Value</Label>
          <div className="relative">
            <Euro className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="property-value"
              type="number"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="pl-10"
              placeholder="350,000"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly-rent">Monthly Rent</Label>
          <div className="relative">
            <Euro className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="monthly-rent"
              type="number"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(Number(e.target.value))}
              className="pl-10"
              placeholder="1,200"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="monthly-expenses">Monthly Expenses</Label>
          <div className="relative">
            <Euro className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="monthly-expenses"
              type="number"
              value={expenses}
              onChange={(e) => setExpenses(Number(e.target.value))}
              className="pl-10"
              placeholder="200"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Includes maintenance, insurance, vacancy allowance
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rental-location">Location (Germany)</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="munich">München (Munich)</SelectItem>
              <SelectItem value="frankfurt">Frankfurt am Main</SelectItem>
              <SelectItem value="hamburg">Hamburg</SelectItem>
              <SelectItem value="berlin">Berlin</SelectItem>
              <SelectItem value="cologne">Köln (Cologne)</SelectItem>
              <SelectItem value="stuttgart">Stuttgart</SelectItem>
              <SelectItem value="dusseldorf">Düsseldorf</SelectItem>
              <SelectItem value="other">Other German City</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rental-property-type">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment/Wohnung</SelectItem>
              <SelectItem value="house">House/Haus</SelectItem>
              <SelectItem value="studio">Studio/Einzimmerwohnung</SelectItem>
              <SelectItem value="maisonette">Maisonette</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="pt-4 space-y-3 border-t">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">Rental Yield</span>
              </div>
              <div className={`text-2xl font-bold ${getYieldColor(rentalYield)}`}>
                {rentalYield.toFixed(1)}%
              </div>
              <div className={`text-xs ${getYieldColor(rentalYield)}`}>
                {getYieldLabel(rentalYield)}
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Euro className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">Net Monthly</span>
              </div>
              <div className="text-2xl font-bold text-secondary">
                €{netMonthlyIncome.toLocaleString('de-DE')}
              </div>
              <div className="text-xs text-muted-foreground">
                After expenses
              </div>
            </div>
          </div>
          
          <div className="text-center pt-2">
            <div className="text-sm text-muted-foreground mb-1">Annual Net Income</div>
            <div className="text-xl font-bold text-primary">
              €{(netMonthlyIncome * 12).toLocaleString('de-DE')}
            </div>
          </div>
        </div>

        <Button variant="financial" className="w-full mt-4">
          Find Rental Properties
        </Button>
      </CardContent>
    </Card>
  );
};