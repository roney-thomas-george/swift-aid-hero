import { Ambulance, Pill, Users, Phone, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Ambulance,
      title: "Emergency Ambulance",
      description: "Immediate ambulance dispatch with professional medical crew for critical emergencies.",
      features: ["24/7 Availability", "Professional EMTs", "Advanced Life Support", "GPS Tracking"],
      action: "Call Now",
      variant: "emergency" as const,
      urgent: true
    },
    {
      icon: Pill,
      title: "Medicine Booking",
      description: "Order prescription medications and have them delivered safely to your location.",
      features: ["Prescription Delivery", "Verified Pharmacies", "Insurance Support", "Quick Fulfillment"],
      action: "Book Medicine",
      variant: "default" as const,
      urgent: false
    },
    {
      icon: Users,
      title: "Bystander Support",
      description: "Professional bystander assistance for medical situations and emergency support.",
      features: ["Trained Personnel", "First Aid Certified", "Companion Services", "Medical Advocacy"],
      action: "Book Bystander",
      variant: "success" as const,
      urgent: false
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive emergency and medical assistance services designed to provide 
            rapid, professional support when you need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.urgent ? 'border-emergency/50 bg-gradient-to-br from-emergency-light/20 to-background' : 'bg-gradient-card'
              }`}
            >
              {service.urgent && (
                <div className="absolute top-4 right-4 bg-emergency text-emergency-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  URGENT
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  service.urgent ? 'bg-gradient-emergency' : 'bg-gradient-primary'
                }`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={service.variant} 
                  className="w-full font-semibold" 
                  size="lg"
                >
                  {service.urgent && <Phone className="w-4 h-4" />}
                  {service.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;