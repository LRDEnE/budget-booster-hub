import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, MapPin } from 'lucide-react';

export const PropertyEstimator = () => {
  const [squareFootage, setSquareFootage] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [estimatedValue, setEstimatedValue] = useState<number | null>(null);

  const calculatePropertyValue = () => {
    if (!squareFootage || !bedrooms || !bathrooms || !location || !propertyType) return;

    const sqft = Number(squareFootage);
    const beds = Number(bedrooms);
    const baths = Number(bathrooms);

    // Base price per square foot by location
    const locationMultipliers: { [key: string]: number } = {
      'urban': 200,
      'suburban': 150,
      'rural': 100
    };

    // Property type multipliers
    const typeMultipliers: { [key: string]: number } = {
      'single-family': 1.0,
      'condo': 0.8,
      'townhouse': 0.9,
      'luxury': 1.5
    };

    const basePricePerSqft = locationMultipliers[location] || 150;
    const typeMultiplier = typeMultipliers[propertyType] || 1.0;

    let baseValue = sqft * basePricePerSqft * typeMultiplier;

    // Bedroom and bathroom bonuses
    baseValue += (beds - 2) * 15000; // Bonus/penalty for bedrooms above/below 2
    baseValue += (baths - 1) * 10000; // Bonus/penalty for bathrooms above/below 1

    setEstimatedValue(Math.max(50000, baseValue));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <Home className="w-6 h-6 text-accent" />
        </div>
        <CardTitle>Property Estimator</CardTitle>
        <CardDescription>Get an estimated property value</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="square-footage">Square Footage</Label>
          <Input
            id="square-footage"
            type="number"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            placeholder="2,500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Input
              id="bedrooms"
              type="number"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
              placeholder="3"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bathrooms">Bathrooms</Label>
            <Input
              id="bathrooms"
              type="number"
              step="0.5"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              placeholder="2.5"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location">Location Type</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="urban">Urban/City Center</SelectItem>
              <SelectItem value="suburban">Suburban</SelectItem>
              <SelectItem value="rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="property-type">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single-family">Single Family Home</SelectItem>
              <SelectItem value="condo">Condominium</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="luxury">Luxury Home</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={calculatePropertyValue} 
          variant="financial" 
          className="w-full"
          disabled={!squareFootage || !bedrooms || !bathrooms || !location || !propertyType}
        >
          Estimate Value
        </Button>

        {estimatedValue && (
          <div className="pt-4 space-y-3 border-t text-center">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Estimated Property Value</span>
            </div>
            <div className="text-3xl font-bold text-accent">
              ${estimatedValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
            <div className="text-sm text-muted-foreground">
              Based on current market trends
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};