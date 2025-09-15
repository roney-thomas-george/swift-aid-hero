import { Target, Eye, Heart, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Quick Assist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to providing exceptional emergency and medical assistance services 
            with professionalism, compassion, and rapid response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mission */}
          <Card className="bg-gradient-card shadow-card border-primary/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                To provide immediate, professional, and compassionate emergency assistance 
                and medical support services to our community. We are committed to saving lives, 
                reducing suffering, and ensuring that help is always just a call away, 
                24 hours a day, 7 days a week.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-card shadow-card border-success/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-success rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                To be the leading provider of emergency and medical assistance services, 
                recognized for our excellence, innovation, and unwavering commitment to 
                community health and safety. We envision a world where quality emergency 
                care is accessible to everyone, everywhere.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Every interaction is guided by genuine care and empathy"
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Maintaining the highest standards in all our services"
              },
              {
                icon: Target,
                title: "Reliability",
                description: "Consistent, dependable service you can trust"
              },
              {
                icon: Eye,
                title: "Innovation",
                description: "Continuously improving through technology and training"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;