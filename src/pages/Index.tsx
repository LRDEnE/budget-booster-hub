import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MortgageCalculator } from '@/components/MortgageCalculator';
import { CreditScoreEstimator } from '@/components/CreditScoreEstimator';
import { PropertyEstimator } from '@/components/PropertyEstimator';
import { 
  Calculator, 
  TrendingUp, 
  Home, 
  Shield, 
  Users, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star
} from 'lucide-react';
import heroImage from '@/assets/hero-finance.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-primary">RealEstimate</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#calculators" className="text-foreground hover:text-primary transition-colors">Calculators</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" size="sm">Login</Button>
            <Button variant="hero" size="sm">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Smart Finance
                </span>
                <br />
                for Real Estate
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get accurate property estimates, mortgage calculations, and credit assessments. 
                Make informed real estate decisions with our comprehensive financial tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Start Calculating
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500K+</div>
                  <div className="text-sm text-muted-foreground">Properties Valued</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">$2.1B</div>
                  <div className="text-sm text-muted-foreground">Loans Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">4.9★</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Financial services for real estate" 
                className="relative rounded-3xl shadow-glow w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Financial Calculators */}
      <section id="calculators" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Financial Calculators</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant estimates with our powerful calculation tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <MortgageCalculator />
            <CreditScoreEstimator />
            <PropertyEstimator />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions for all your real estate needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Mortgage Planning</CardTitle>
                <CardDescription>
                  Expert guidance on mortgage options and payment strategies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Pre-approval assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Rate comparison</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Payment optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-success rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary-foreground" />
                </div>
                <CardTitle>Credit Optimization</CardTitle>
                <CardDescription>
                  Improve your credit score for better loan terms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Credit analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Score improvement plan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Debt consolidation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-accent" />
                </div>
                <CardTitle>Property Valuation</CardTitle>
                <CardDescription>
                  Accurate property assessments and market analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Market comparisons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Investment analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span className="text-sm">Trend forecasting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "RealEstimate helped me understand my financing options and get the best mortgage rate. 
                  Their calculators are incredibly accurate!"
                </p>
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm text-muted-foreground">First-time Homebuyer</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The credit optimization service improved my score by 120 points in 6 months. 
                  Now I qualified for a much better rate!"
                </p>
                <div className="font-medium">Mike Chen</div>
                <div className="text-sm text-muted-foreground">Real Estate Investor</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional, reliable, and transparent. Their property valuations are spot-on 
                  and helped me make informed investment decisions."
                </p>
                <div className="font-medium">Emily Rodriguez</div>
                <div className="text-sm text-muted-foreground">Property Developer</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our experts today for personalized financial guidance
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="opacity-80">(555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="opacity-80">info@realestimate.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="opacity-80">123 Finance St, City</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Schedule Consultation
              </Button>
              <Button variant="secondary" size="lg">
                Start Free Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">RealEstimate</h3>
              </div>
              <p className="text-muted opacity-80">
                Your trusted partner for real estate finance and property valuation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 opacity-80">
                <li>Mortgage Planning</li>
                <li>Credit Optimization</li>
                <li>Property Valuation</li>
                <li>Investment Analysis</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 opacity-80">
                <li>Mortgage Calculator</li>
                <li>Credit Estimator</li>
                <li>Property Estimator</li>
                <li>Rate Comparison</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 opacity-80">
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center opacity-60">
            <p>&copy; 2024 RealEstimate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;