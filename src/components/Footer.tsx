import { Phone, Mail, MapPin, Shield } from "lucide-react";
import logoFull from "@/assets/logo-full.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img src={logoFull} alt="Resqly Logo" className="h-16 object-contain" />
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted healthcare booking platform available 24/7. 
              Book ambulances, doctor services, palliative care, and bystanders with ease.
            </p>
            <div className="flex items-center space-x-2 text-emergency-light">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Licensed & Certified Professionals</span>
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Emergency Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emergency-light" />
                <div>
                  <a 
                    href="tel:+918050444580" 
                    className="font-bold text-emergency-light hover:underline block"
                  >
                    +91 8050 444 580
                  </a>
                  <p className="text-sm text-primary-foreground/70">Life-threatening emergencies</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <a 
                    href="https://wa.me/918050444580"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold hover:underline block"
                  >
                    +91 8050 444 580
                  </a>
                  <p className="text-sm text-primary-foreground/70">General inquiries (WhatsApp)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <a 
                  href="mailto:info@resqly.in" 
                  className="hover:underline"
                >
                  info@resqly.in
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div className="text-sm">
                  <p>OM CHAMBERS, 648/A, 4TH FLOOR</p>
                  <p>BINNAMANGALA, 1ST STAGE</p>
                  <p>INDIRANAGAR, BANGALORE</p>
                  <p>KARNATAKA, INDIA- 560038</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2024 Resqly. All rights reserved. | Licensed Healthcare Booking Service Provider
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;