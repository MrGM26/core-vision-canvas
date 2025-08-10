import { Shield, Mountain, Building, Banknote, Zap, Eye, Target, Mail, Phone, MapPin, ExternalLink, ArrowRight, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for magnet effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@promax-bf.com?subject=Partnership Inquiry from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AOrganization: ${formData.organization}%0A%0AMessage:%0A${formData.message}`;
    toast.success("Opening your email client...");
    setFormData({ name: "", email: "", organization: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sectors = [
    {
      icon: Shield,
      title: "Security & Strategic Zones",
      description: "High-resilience infrastructure, protected corridors, and critical services enablement."
    },
    {
      icon: Mountain,
      title: "Gold & Mineral Development",
      description: "Exploration, licensing, responsible extraction, and value-added processing."
    },
    {
      icon: Building,
      title: "Infrastructure & Logistics",
      description: "Roads, utilities, trade facilitation, and cross-border connectivity."
    },
    {
      icon: Banknote,
      title: "Financial & Energy Systems",
      description: "Digital banking, e-payments, renewable and conventional energy projects."
    }
  ];

  const impactItems = [
    {
      title: "Security zones with advanced infrastructure",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
    },
    {
      title: "Gold exploration in high-potential regions",
      image: "https://images.unsplash.com/photo-1624542506639-13a8fc599a1d?w=600&h=400&fit=crop"
    },
    {
      title: "Digital finance and e-payment systems",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      title: "Renewable energy and cross-border power links",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop"
    }
  ];

  const partners = [
    "Government Ministries",
    "International Investors", 
    "Development Finance Institutions",
    "Private Sector Enterprises",
    "Local SMEs"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        {/* Background */}
        <div 
          className="absolute inset-0 parallax-hero"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1920&h=1080&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-charcoal/90" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in-up">
            <p className="text-accent font-semibold text-lg mb-4 tracking-wide">
              Building Strategic Assets for Burkina Faso's Future
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Sovereign Growth.<br />
              <span className="text-accent">Strategic Execution.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-off-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
              Promax Burkina Faso leads high-impact investment and project development across security, gold & mining, infrastructure, financial services, and energy — aligning with national priorities and regional opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="magnet-cta bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'mailto:info@promax-bf.com?subject=Partnership Inquiry'}
              >
                Explore Partnerships
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg"
                onClick={() => document.getElementById('what-we-do')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Focus Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="who-we-are" className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-8">
                  Our Story
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                  Promax Burkina Faso is a leading investment and business development company delivering strategic, high-impact projects across Burkina Faso and West Africa. We specialize in emerging markets and high-growth sectors including security, gold & mining, infrastructure, financial services, and energy solutions.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Operating closely with government entities, we provide a trusted gateway for foreign and local investors, development institutions, and strategic partners to engage in transformational opportunities aligned with Burkina Faso's national development plan.
                </p>
              </div>
              
              <div className="fade-in-up space-y-8">
                <Card className="border-accent/20 card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/10">
                        <Eye className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl text-primary">Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      To become a leading enabler of sustainable growth and national value creation across Africa.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-accent/20 card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/10">
                        <Target className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-xl text-primary">Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">
                      To unlock potential by delivering innovative, scalable, and economically empowering projects for the future of Burkina Faso.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="what-we-do" className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Integrated Solutions
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Comprehensive investment and development services across key sectors driving Burkina Faso's economic transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sectors.map((sector, index) => (
                <Card key={index} className="card-tilt border-accent/20 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                        <sector.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {sector.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70">
                      {sector.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12 fade-in-up">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
                onClick={() => window.location.href = 'mailto:info@promax-bf.com?subject=Sector Brief Request'}
              >
                Request Sector Brief
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shaping Tomorrow */}
      <section id="impact" className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Shaping Tomorrow
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Creating jobs, boosting investor confidence, and powering sustainable growth in Burkina Faso's emerging economy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactItems.map((item, index) => (
                <Card key={index} className="group overflow-hidden border-accent/20 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section id="partnerships" className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Strategic Partnerships
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                We work closely with diverse stakeholders to ensure sustainable and impactful development.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="fade-in-up">
                <h3 className="text-2xl font-bold text-primary mb-8">We collaborate with:</h3>
                <div className="space-y-4">
                  {partners.map((partner, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-background rounded-lg border border-accent/20">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-lg text-foreground/80">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="fade-in-up">
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">PPP Excellence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      Our Public-Private Partnership model ensures alignment with regulation, community needs, and long-term sustainability across all our initiatives.
                    </p>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                      onClick={() => window.location.href = 'mailto:info@promax-bf.com?subject=PPP Collaboration Inquiry'}
                    >
                      Explore PPP Collaboration
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Management */}
      <section id="leadership" className="py-8 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
                Leadership & Management
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                Visionary leaders driving transformation across Burkina Faso
              </p>
            </div>
            
            {/* Leadership Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
              
              {/* Alexander Reay - CEO */}
              <div className="leadership-card group fade-in-up">
                <div className="relative h-0 pb-[125%] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
                    alt="Alexander Reay"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000B3] via-transparent to-transparent" 
                       style={{ backgroundImage: 'linear-gradient(to top, #000000B3 0%, transparent 55%)' }}>
                  </div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold uppercase text-xl mb-1 tracking-wide">
                      MR. ALEXANDER REAY
                    </h3>
                    <p className="text-[#D4AF37] font-medium text-lg">
                      Chief Executive Officer (CEO)
                    </p>
                  </div>
                  
                  {/* Icons bar */}
                  <div className="absolute bottom-6 right-6 flex gap-3 leadership-icons opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button
                      onClick={() => window.location.href = 'mailto:ceo@promax-bf.com'}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="Email"
                      aria-label="Email Alexander Reay"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => window.open('https://www.linkedin.com/in/alexanderreay', '_blank', 'noopener,noreferrer')}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="LinkedIn"
                      aria-label="LinkedIn profile of Alexander Reay"
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Eric Benz - CSO */}
              <div className="leadership-card group fade-in-up">
                <div className="relative h-0 pb-[125%] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face"
                    alt="Eric Benz"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000B3] via-transparent to-transparent" 
                       style={{ backgroundImage: 'linear-gradient(to top, #000000B3 0%, transparent 55%)' }}>
                  </div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold uppercase text-xl mb-1 tracking-wide">
                      MR. ERIC BENZ
                    </h3>
                    <p className="text-[#D4AF37] font-medium text-lg">
                      Chief Strategic Officer
                    </p>
                  </div>
                  
                  {/* Icons bar */}
                  <div className="absolute bottom-6 right-6 flex gap-3 leadership-icons opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button
                      onClick={() => window.location.href = 'mailto:cso@promax-bf.com'}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="Email"
                      aria-label="Email Eric Benz"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => window.open('https://www.linkedin.com/in/ericbenz', '_blank', 'noopener,noreferrer')}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="LinkedIn"
                      aria-label="LinkedIn profile of Eric Benz"
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sarah Johnson - CTO */}
              <div className="leadership-card group fade-in-up">
                <div className="relative h-0 pb-[125%] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=400&h=500&fit=crop&crop=face"
                    alt="Sarah Johnson"
                    className="absolute inset-0 w-full h-full object-cover object-[50%_15%] transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Bottom gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000B3] via-transparent to-transparent" 
                       style={{ backgroundImage: 'linear-gradient(to top, #000000B3 0%, transparent 55%)' }}>
                  </div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold uppercase text-xl mb-1 tracking-wide">
                      MS. SARAH JOHNSON
                    </h3>
                    <p className="text-[#D4AF37] font-medium text-lg">
                      Chief Technology Officer
                    </p>
                  </div>
                  
                  {/* Icons bar */}
                  <div className="absolute bottom-6 right-6 flex gap-3 leadership-icons opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <button
                      onClick={() => window.location.href = 'mailto:cto@promax-bf.com'}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="Email"
                      aria-label="Email Sarah Johnson"
                    >
                      <Mail className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => window.open('https://www.linkedin.com/in/sarahjohnson', '_blank', 'noopener,noreferrer')}
                      className="p-2 text-white hover:scale-110 transition-transform duration-200"
                      title="LinkedIn"
                      aria-label="LinkedIn profile of Sarah Johnson"
                    >
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-8 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Contact Us
              </h2>
              <p className="text-xl text-off-white/90 max-w-3xl mx-auto">
                Ready to explore partnership opportunities? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-accent/20 bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Get In Touch</CardTitle>
                  <CardDescription className="text-off-white/80">
                    Send us a message and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-off-white/70"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-off-white/70"
                      />
                    </div>
                    <Input
                      name="organization"
                      placeholder="Organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-off-white/70"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-off-white/70 resize-none"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="fade-in-up">
                  <h3 className="text-2xl font-bold text-white mb-6">Direct Contact</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-off-white/80">Ouagadougou, Burkina Faso</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-off-white/80">info@promax-bf.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-off-white/80">+226 XXX XXX XXX</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-accent/20">
                        <ExternalLink className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Website</p>
                        <p className="text-off-white/80">www.promax-bf.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-white/10 backdrop-blur-sm border-accent/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-white mb-3">Investment Inquiries</h4>
                    <p className="text-off-white/80 leading-relaxed text-sm">
                      For partnership opportunities and investment discussions, please include details about 
                      your project scope, timeline, and funding requirements in your message.
                    </p>
                    <p className="text-off-white/60 text-sm mt-4">
                      Promax United office details available upon request.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-off-white/80 text-sm">
              © 2025 Promax Burkina Faso. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-off-white/80 hover:text-accent transition-colors">Legal Disclaimer</a>
              <a href="#" className="text-off-white/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-off-white/80 hover:text-accent transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
