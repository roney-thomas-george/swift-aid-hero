import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "General Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `${formData.serviceType} - ${formData.firstName} ${formData.lastName}`;
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service Type: ${formData.serviceType}

Message:
${formData.message}`;
    
    window.location.href = `mailto:support@resqly.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
                <a 
                  href="tel:+918050444580"
                  className="text-2xl font-bold text-emergency mb-2 hover:underline block"
                >
                  +91 8050 444 580
                </a>
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
                  <a 
                    href="https://wa.me/918050444580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-primary hover:underline block"
                  >
                    +91 8050 444 580
                  </a>
                  <p className="text-sm text-muted-foreground">Non-emergency inquiries (WhatsApp)</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">Email</span>
                  </div>
                  <a 
                    href="mailto:info@resqly.in"
                    className="text-lg font-bold text-primary hover:underline block"
                  >
                    info@resqly.in
                  </a>
                  <p className="text-sm text-muted-foreground">24-hour response</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-card shadow-card">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <span className="font-semibold text-foreground block mb-2">Office Address</span>
                    <p className="text-muted-foreground">
                      RESQLY PRIVATE LIMITED<br />
                      OM CHAMBERS, 648/A, 4TH FLOOR<br />
                      BINNAMANGALA, 1ST STAGE<br />
                      INDIRANAGAR, BANGALORE<br />
                      KARNATAKA, INDIA - 560038
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Service Type
                  </label>
                  <select 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                  >
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
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  <p>For emergencies, please call +91 8050 444 580 immediately.</p>
                  <p>We typically respond to messages within 2-4 hours.</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;