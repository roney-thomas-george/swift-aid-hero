import { Phone, Mail, MapPin, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h3 className="text-2xl font-bold">Resqly</h3>
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
                  <p className="font-bold text-emergency-light">911</p>
                  <p className="text-sm text-primary-foreground/70">Life-threatening emergencies</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <div>
                  <p className="font-semibold">+91 8050 444 580</p>
                  <p className="text-sm text-primary-foreground/70">General inquiries</p>
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
                <span>info@resqly.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div className="text-sm">
                  <p>OM CHAMBERS, 648/A, 4TH FLOOR</p>
                  <p>BINNAMANGALA, 1ST STAGE</p>
                  <p>INDIRANAGAR, BANGALORE</p>
                  <p>KARNATAKA - 560038</p>
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