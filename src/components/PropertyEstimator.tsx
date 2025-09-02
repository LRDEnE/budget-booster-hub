import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Home, MapPin, Euro } from 'lucide-react';

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

    // Base price per square meter by location in Germany
    const locationMultipliers: { [key: string]: number } = {
      'munich': 8000,      // €8,000/m² in Munich
      'frankfurt': 7000,   // €7,000/m² in Frankfurt
      'hamburg': 5500,     // €5,500/m² in Hamburg
      'berlin': 5000,      // €5,000/m² in Berlin
      'cologne': 4500,     // €4,500/m² in Cologne
      'stuttgart': 6000,   // €6,000/m² in Stuttgart
      'dusseldorf': 5500,  // €5,500/m² in Düsseldorf
      'other': 3500        // €3,500/m² in other cities
    };

    // Property type multipliers
    const typeMultipliers: { [key: string]: number } = {
      'apartment': 1.0,
      'house': 0.9,
      'penthouse': 1.4,
      'maisonette': 1.1
    };

    const basePricePerSqm = locationMultipliers[location] || 4000;
    const typeMultiplier = typeMultipliers[propertyType] || 1.0;

    let baseValue = sqft * basePricePerSqm * typeMultiplier;

    // Bedroom and bathroom bonuses (European standards)
    baseValue += (beds - 2) * 25000; // Bonus/penalty for bedrooms above/below 2
    baseValue += (baths - 1) * 15000; // Bonus/penalty for bathrooms above/below 1

    setEstimatedValue(Math.max(100000, baseValue));
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
          <Home className="w-6 h-6 text-accent" />
        </div>
        <CardTitle>Property Estimator (DE/EU)</CardTitle>
        <CardDescription>Get estimated property value in Germany</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="square-footage">Square Meters</Label>
          <Input
            id="square-footage"
            type="number"
            value={squareFootage}
            onChange={(e) => setSquareFootage(e.target.value)}
            placeholder="120"
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
          <Label htmlFor="location">Location (Germany)</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Select German city" />
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
          <Label htmlFor="property-type">Property Type</Label>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger>
              <SelectValue placeholder="Select property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment/Wohnung</SelectItem>
              <SelectItem value="house">House/Haus</SelectItem>
              <SelectItem value="penthouse">Penthouse</SelectItem>
              <SelectItem value="maisonette">Maisonette</SelectItem>
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
              €{estimatedValue.toLocaleString('de-DE', { maximumFractionDigits: 0 })}
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