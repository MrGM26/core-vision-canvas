import { Shield, Mountain, Building, Bolt, Banknote, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import MediaSection from "@/components/MediaSection";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message. We'll be in touch soon!");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const projects = [
    {
      icon: Shield,
      title: "Security",
      description: "Advanced cybersecurity solutions and infrastructure protection for enterprise and government sectors.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop"
    },
    {
      icon: Mountain,
      title: "Gold & Mining",
      description: "Strategic investments in precious metals extraction and sustainable mining operations worldwide.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=250&fit=crop"
    },
    {
      icon: Building,
      title: "Infrastructure",
      description: "Large-scale infrastructure development projects including transportation and urban development.",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=250&fit=crop"
    },
    {
      icon: Bolt,
      title: "Energy",
      description: "Renewable energy projects and next-generation power solutions for sustainable future growth.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop"
    },
    {
      icon: Banknote,
      title: "Financial System & Banking",
      description: "Innovative fintech solutions and strategic banking partnerships across emerging markets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section id="about" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Who We Are
            </h1>
            <div className="space-y-6 text-lg lg:text-xl text-blue-100">
              <p className="leading-relaxed">
                We are a premier investment group specializing in strategic opportunities across critical global sectors. 
                With decades of combined expertise and a proven track record of successful investments, we identify and 
                capitalize on high-value projects that drive economic growth and innovation.
              </p>
              <p className="leading-relaxed">
                Our diversified portfolio approach and deep industry knowledge enable us to deliver exceptional returns 
                while contributing to sustainable development across security, mining, infrastructure, energy, and financial services.
              </p>
            </div>
            <div className="mt-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our diversified investment portfolio spanning five critical sectors driving global economic growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg overflow-hidden bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
                      <project.icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <MediaSection />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Contact Us
              </h2>
              <p className="text-xl text-blue-200">
                Ready to explore partnership opportunities? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Get In Touch</CardTitle>
                  <CardDescription className="text-blue-200">
                    Send us a message and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                        />
                      </div>
                    </div>
                    <Input
                      name="company"
                      placeholder="Company/Organization"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400"
                    />
                    <Textarea
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-blue-400 resize-none"
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-white">Direct Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-600/20">
                        <Mail className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <p className="text-blue-200">partnerships@yourcompany.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-600/20">
                        <Phone className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <p className="text-blue-200">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-blue-600/20">
                        <MapPin className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-blue-200">New York, NY</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-lg bg-white/10 backdrop-blur-sm">
                  <h4 className="font-bold text-white mb-3">Investment Inquiries</h4>
                  <p className="text-blue-200 leading-relaxed">
                    For partnership opportunities and investment discussions, please include details about 
                    your project scope, timeline, and funding requirements in your message.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Promax United Burkina Faso. All rights reserved. | Professional investment services across global markets.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
