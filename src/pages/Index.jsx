import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CheckCircle, Zap, Shield, ArrowRight } from 'lucide-react';

const Feature = ({ icon, title, description }) => (
  <Card className="flex flex-col items-center text-center">
    <CardHeader>
      {icon}
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{description}</CardContent>
  </Card>
);

const PricingTier = ({ title, price, features }) => (
  <Card className="flex flex-col items-center text-center">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <div className="text-3xl font-bold">${price}/mo</div>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </CardContent>
    <Button className="mt-4">Choose Plan</Button>
  </Card>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">Revolutionize Your Workflow</h1>
        <p className="text-xl mb-8">Boost productivity and streamline your business with our cutting-edge SaaS solution.</p>
        <Button size="lg" className="mr-4">Get Started</Button>
        <Button size="lg" variant="outline">Learn More</Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Feature 
            icon={<Zap className="h-12 w-12 text-yellow-500" />}
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency in your daily tasks."
          />
          <Feature 
            icon={<Shield className="h-12 w-12 text-blue-500" />}
            title="Secure & Reliable"
            description="Your data is protected with state-of-the-art security measures."
          />
          <Feature 
            icon={<ArrowRight className="h-12 w-12 text-green-500" />}
            title="Easy Integration"
            description="Seamlessly integrate with your existing tools and workflows."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Flexible Pricing for Every Need</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier 
            title="Starter"
            price={29}
            features={["Basic features", "Up to 5 users", "5GB storage"]}
          />
          <PricingTier 
            title="Pro"
            price={79}
            features={["Advanced features", "Up to 20 users", "50GB storage", "Priority support"]}
          />
          <PricingTier 
            title="Enterprise"
            price={199}
            features={["All features", "Unlimited users", "500GB storage", "24/7 support", "Custom integrations"]}
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and take your productivity to the next level.</p>
        <Button size="lg">Start Your Free Trial</Button>
      </section>
    </div>
  );
};

export default Index;
