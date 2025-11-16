import { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  children: React.ReactNode;
}

const MobileMenu = ({ children }: MobileMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setOpen(false);
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <button 
            onClick={() => handleNavClick('home')}
            className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavClick('services')}
            className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('about')}
            className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
          >
            About
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
          >
            Contact
          </button>
          <div className="pt-4 border-t border-border">
            <Button 
              variant="emergency" 
              className="w-full"
              onClick={() => {
                setOpen(false);
                window.location.href = 'tel:+918050444580';
              }}
            >
              <Phone className="w-4 h-4" />
              Emergency: +91 8050 444 580
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
