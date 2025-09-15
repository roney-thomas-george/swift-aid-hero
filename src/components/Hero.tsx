import { Phone, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional medical emergency response team" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Quick Assist
            <span className="block text-3xl md:text-4xl font-normal mt-2 text-primary-light">
              Emergency & Medical Support
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Professional emergency assistance, ambulance services, and medical support available 24/7. 
            Your safety is our priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="emergency" size="xl" className="text-lg px-12">
              <Phone className="w-6 h-6" />
              Call Ambulance Now
            </Button>
            <Button variant="hero" size="xl" className="text-lg px-12">
              <Shield className="w-6 h-6" />
              Book Assistance
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-primary-light" />
              <span className="text-lg font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-primary-light" />
              <span className="text-lg font-semibold">Licensed Professionals</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-8 h-8 text-primary-light" />
              <span className="text-lg font-semibold">Rapid Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;