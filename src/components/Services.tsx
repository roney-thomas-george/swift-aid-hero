import { Ambulance, Heart, Users, Phone, Stethoscope, Activity, Pill, FlaskConical, HandHeart, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const medicalServices = [
    {
      icon: Ambulance,
      title: "Emergency Ambulance",
      description: "Immediate ambulance dispatch with professional medical crew for critical emergencies.",
      action: "Call Now",
      urgent: true
    },
    {
      icon: Heart,
      title: "Homecare Service",
      description: "Professional healthcare services delivered in the comfort of your home.",
      action: "Book Now",
      urgent: false
    },
    {
      icon: Users,
      title: "By-Stander Service",
      description: "Trained personnel to provide medical support and companion care.",
      action: "Book Now",
      urgent: false
    },
    {
      icon: HandHeart,
      title: "Palliative Care",
      description: "Compassionate care focused on comfort and quality of life.",
      action: "Book Now",
      urgent: false
    },
    {
      icon: Stethoscope,
      title: "Doctor at a Call",
      description: "Expert medical consultation available at your doorstep anytime.",
      action: "Book Now",
      urgent: false
    },
    {
      icon: Activity,
      title: "Nursing Service",
      description: "Professional nursing care for your healthcare needs at home.",
      action: "Book Now",
      urgent: false
    },
    {
      icon: Pill,
      title: "Pharmacy Supply",
      description: "Prescription medications delivered safely to your location.",
      action: "Order Now",
      urgent: false
    },
    {
      icon: FlaskConical,
      title: "Laboratory Service",
      description: "Home sample collection and accurate diagnostic testing services.",
      action: "Book Now",
      urgent: false
    }
  ];

  const nonMedicalServices = [
    {
      icon: UserPlus,
      title: "Meet N Greet Service",
      description: "Professional meet and greet services for your guests and visitors.",
      action: "Book Now"
    },
    {
      icon: HandHeart,
      title: "Share N Care",
      description: "Community support services for shared care and assistance.",
      action: "Book Now"
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

        {/* Medical Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Medical Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {medicalServices.map((service, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  service.urgent ? 'border-emergency/50 bg-gradient-to-br from-emergency-light/20 to-background' : 'bg-gradient-card'
                }`}
              >
                {service.urgent && (
                  <div className="absolute top-2 right-2 bg-emergency text-emergency-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                    URGENT
                  </div>
                )}
                
                <CardHeader className="text-center pb-3 p-4">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    service.urgent ? 'bg-gradient-emergency' : 'bg-gradient-primary'
                  }`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 p-4">
                  <Button 
                    variant={service.urgent ? "emergency" : "default"}
                    className="w-full font-semibold text-sm" 
                    size="sm"
                  >
                    {service.urgent && <Phone className="w-3 h-3" />}
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Non-Medical Services */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Non-Medical Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {nonMedicalServices.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card"
              >
                <CardHeader className="text-center pb-3 p-4">
                  <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-gradient-primary">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 p-4">
                  <Button 
                    variant="default"
                    className="w-full font-semibold text-sm" 
                    size="sm"
                  >
                    {service.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;