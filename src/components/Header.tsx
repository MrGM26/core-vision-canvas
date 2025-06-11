
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/196761c0-b662-49b1-8924-4f7320ac0c0b.png" 
              alt="Promax United Burkina Faso" 
              className="h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-[#1e3a8a] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-700 hover:text-[#1e3a8a] transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('media')}
              className="text-slate-700 hover:text-[#1e3a8a] transition-colors font-medium"
            >
              Media
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
