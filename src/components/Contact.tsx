import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for emergency assistance, service inquiries, 
            or general support. We're here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-emergency-light border-emergency/30">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-emergency">
                  <Phone className="w-6 h-6" />
                  <span>Emergency Line</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-emergency mb-2">911</p>
                <p className="text-muted-foreground">For immediate life-threatening emergencies</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-card shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">General Line</span>
                  </div>
                  <p className="text-lg font-bold text-primary">(555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Non-emergency inquiries</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Email</span>
                  </div>
                  <p className="text-lg font-bold text-primary">info@quickassist.com</p>
                  <p className="text-sm text-muted-foreground">24-hour response</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <span className="font-semibold text-foreground block mb-2">Service Area</span>
                    <p className="text-muted-foreground">
                      123 Medical Center Drive<br />
                      Healthcare District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-success-light border-success/30">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Clock className="w-5 h-5 text-success" />
                  <span className="font-semibold text-success">Operating Hours</span>
                </div>
                <p className="text-lg font-bold text-success">24/7 Emergency Services</p>
                <p className="text-muted-foreground">Always available for emergencies</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Office Hours: Monday - Friday, 8:00 AM - 6:00 PM
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Send Us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Your last name" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Service Type
                </label>
                <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                  <option>General Inquiry</option>
                  <option>Medicine Booking</option>
                  <option>Bystander Service</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Please describe how we can help you..."
                  rows={4}
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                <p>For emergencies, please call 911 immediately.</p>
                <p>We typically respond to messages within 2-4 hours.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;