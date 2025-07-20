import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Menu, X, ChevronLeft, ChevronRight, Users, Award, Target, Globe, Star, TrendingUp, Building, Home, Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, Mail, Factory, Anchor, Shield, Recycle } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  designation: z.string().min(2, "Designation must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavTransformed, setIsNavTransformed] = useState(false);
  const [selectedStakeholder, setSelectedStakeholder] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [currentCertIndex, setCurrentCertIndex] = useState(0);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const heroRef = useRef(null);
  const contactRef = useRef(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      message: "",
    },
  });

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsNavTransformed(scrollPosition > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCertIndex((prev) => (prev + 1) % certifications.length);
    }, 1500); // Faster carousel - 1.5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Ship Recycling",
      description: "Environmentally responsible ship breaking and recycling services with full compliance to international standards.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop",
      features: ["Green Recycling", "Full Compliance", "Environmental Safety"],
      route: "/ship-recycling"
    },
    {
      id: 2,
      title: "Steel Manufacturing",
      description: "High-quality steel production from recycled materials, contributing to sustainable manufacturing practices.",
      image: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=800&h=600&fit=crop",
      features: ["Recycled Steel", "Quality Assurance", "Sustainable Production"],
      route: "/steel-manufacturing"
    },
    {
      id: 3,
      title: "Environmental Compliance",
      description: "Comprehensive environmental monitoring and compliance services for maritime and industrial operations.",
      image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop",
      features: ["Monitoring", "Reporting", "Compliance"],
      route: "/environmental-compliance"
    },
    {
      id: 4,
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics solutions for maritime recycling and steel manufacturing operations.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      features: ["Supply Chain", "Transportation", "Warehousing"],
      route: "/logistics"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "ISO 14001",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      description: "Environmental Management System certification ensuring sustainable practices.",
      standards: ["Environmental Management", "Sustainability", "Compliance"]
    },
    {
      id: 2,
      name: "IMO Certification",
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
      description: "International Maritime Organization certification for ship recycling.",
      standards: ["Maritime Safety", "Ship Recycling", "International Standards"]
    },
    {
      id: 3,
      name: "Hong Kong Convention",
      logo: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=150&h=150&fit=crop",
      description: "Compliance with Hong Kong International Convention for ship recycling.",
      standards: ["Ship Recycling", "Environmental Protection", "Safety"]
    },
    {
      id: 4,
      name: "EU Ship Recycling",
      logo: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?w=150&h=150&fit=crop",
      description: "European Union Ship Recycling Regulation compliance.",
      standards: ["EU Regulation", "Environmental Safety", "Quality Assurance"]
    },
    {
      id: 5,
      name: "Basel Convention",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=150&h=150&fit=crop",
      description: "Basel Convention on hazardous waste management.",
      standards: ["Waste Management", "Hazardous Materials", "International Law"]
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      bio: "25+ years in maritime industry with expertise in sustainable shipping solutions.",
      expertise: ["Maritime Strategy", "Sustainable Development", "Global Operations"],
      achievements: "Led 50+ successful ship recycling projects worth $2B+"
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b0fc?w=300&h=300&fit=crop",
      bio: "PhD in Environmental Engineering with focus on green steel production technologies.",
      expertise: ["Green Technology", "Environmental Engineering", "Innovation"],
      achievements: "Patented 12 green steel production technologies"
    },
    {
      id: 3,
      name: "Captain Arjun Singh",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      bio: "Former ship captain with 30+ years maritime experience and safety expertise.",
      expertise: ["Maritime Operations", "Safety Management", "Logistics"],
      achievements: "Zero-accident record across 100+ ship recycling operations"
    },
    {
      id: 4,
      name: "Ms. Kavya Patel",
      position: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      bio: "Environmental scientist specializing in circular economy and waste management.",
      expertise: ["Circular Economy", "Waste Management", "ESG Compliance"],
      achievements: "Reduced carbon footprint by 40% across all operations"
    }
  ];

  const stakeholders = [
    {
      id: 1,
      title: "Ship-Owners & Shipping Lines",
      icon: Anchor,
      benefits: [
        "Fast, safe disposal of end-of-life vessels with full IHM and regulatory certification (HKGS, EUSSR)",
        "40% credit note on new-build contracts—turning sustainable disposal into future savings",
        "Peace of mind: no more costly reflagging or beaching risks; a single partner for compliant, carbon-friendly recycling"
      ]
    },
    {
      id: 2,
      title: "Steel Manufacturers & Re-rollers",
      icon: Factory,
      benefits: [
        "Guaranteed low-carbon feedstock: secure contracts for millions of tonnes of scrap steel, all traceable via digital chain-of-custody",
        "One-stop shop: certified dismantling + re-rolling under one roof—streamlining logistics and quality control",
        "ESG uplift: every tonne you melt reduces your portfolio's carbon footprint via EAF processing"
      ]
    },
    {
      id: 3,
      title: "Investors & Financial Institutions",
      icon: TrendingUp,
      benefits: [
        "First-mover advantage: back the world's largest green-steel facility, UN-certified from day one",
        "Robust returns: lifecycle CO₂-reduction estimates and IRR case studies underpinned by government support",
        "Guaranteed market: with India's '30% green-steel mandate,' one in three tonnes must be recycled—locking in future buyers"
      ]
    },
    {
      id: 4,
      title: "Local Communities & Workforce",
      icon: Users,
      benefits: [
        "Safe, skilled jobs: cutting-edge equipment, zero-accident pledge, and OSHA-grade protocols",
        "Capacity building: on-site training programs, apprenticeships, and an aspirational '70% local hire' target",
        "Community uplift: new schools, affordable housing, and a modern medical clinic—because your well-being powers our progress"
      ]
    },
    {
      id: 5,
      title: "Regulators & NGOs",
      icon: Shield,
      benefits: [
        "Full transparency: real-time environmental dashboards, periodic third-party audits, and public sustainability reports",
        "Iron-clad compliance: Basel/UNEP alignment, IMO/EU Ship Recycling Regulation, plus local EIA and CRZ clearances",
        "True partnership: collaborate on best practices and shape a blueprint for safe, circular-economy growth"
      ]
    },
    {
      id: 6,
      title: "Government & Policy Makers",
      icon: Building,
      benefits: [
        "New industrial cluster: catalyze Ganjam's transformation into a maritime-green hub, driving rural prosperity",
        "Budget leverage: tap into ₹1,624 Cr over five years under the Ship-Flagging Subsidy (Union Budget 2021-22)",
        "Legislative alignment: deliver on the Recycling of Ships Act 2019 (4.5 M LDT capacity by 2024) and Maritime India Vision 2030"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isNavTransformed 
            ? 'right-0 top-1/2 transform -translate-y-1/2 w-auto bg-primary/80 backdrop-blur-sm hover:bg-primary/95 rounded-l-2xl shadow-2xl' 
            : 'bg-gradient-to-r from-primary/80 to-secondary/80 backdrop-blur-sm'
        }`}
      >
        <div className={`${
          isNavTransformed 
            ? 'flex flex-col items-center p-4 space-y-4' 
            : 'container mx-auto px-6 flex items-center justify-between h-16'
        }`}>
          {!isNavTransformed && (
            <div className="flex items-center justify-center flex-1">
              <img 
                src="/lovable-uploads/531242ac-b981-4ac8-9615-867b96127f68.png" 
                alt="Neptunus Logo" 
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
          )}
          
          <div className={`flex ${isNavTransformed ? 'flex-col space-y-4' : 'items-center gap-4'}`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
            
            <Button 
              onClick={scrollToContact}
              className={`${
                isNavTransformed 
                  ? 'bg-white/10 hover:bg-white/20 text-white border-white/20 px-3 py-2 text-sm' 
                  : 'hidden sm:block bg-white/10 hover:bg-white/20 text-white border-white/20'
              }`}
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-primary/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <Button variant="ghost" className="text-2xl">Home</Button>
            <Button variant="ghost" className="text-2xl">Services</Button>
            <Button variant="ghost" className="text-2xl">About</Button>
            <Button variant="ghost" className="text-2xl" onClick={scrollToContact}>Contact</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/public/assets/hero.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Building Tomorrow's <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Green Economy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transforming end-of-life vessels into sustainable steel through innovative recycling technology, creating a circular economy for the maritime industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronRight className="rotate-90" size={20} />
          </div>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognized by leading international bodies for our commitment to quality and sustainability
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-hidden">
              {certifications.map((cert, index) => {
                const isActive = index === currentCertIndex;
                const isPrev = index === (currentCertIndex - 1 + certifications.length) % certifications.length;
                const isNext = index === (currentCertIndex + 1) % certifications.length;
                const isVisible = isActive || isPrev || isNext;
                
                return (
                  <div
                    key={cert.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 hidden md:block'
                    } ${
                      isActive ? 'scale-110 z-10' : 'scale-90'
                    }`}
                    onClick={() => setSelectedCertification(cert)}
                    onMouseEnter={() => setSelectedCertification(cert)}
                    onMouseLeave={() => setSelectedCertification(null)}
                  >
                    <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-border">
                      <img 
                        src={cert.logo} 
                        alt={cert.name}
                        className="w-20 h-20 mx-auto object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center text-primary">{cert.name}</h3>
                      
                      {selectedCertification?.id === cert.id && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-20 border">
                          <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.standards.map((standard, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {standard}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentCertIndex((prev) => (prev - 1 + certifications.length) % certifications.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={() => setCurrentCertIndex((prev) => (prev + 1) % certifications.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Smaller Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for sustainable maritime recycling and green steel production
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={service.id} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden h-64 ${
                index % 4 === 0 ? 'md:col-span-2 lg:col-span-1' : 
                index % 4 === 1 ? 'md:row-span-1' :
                index % 4 === 2 ? 'lg:col-span-2' : ''
              }`}>
                <div className="aspect-video overflow-hidden h-24">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 h-40 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Measurable results in sustainability and economic growth
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5M+", label: "Tonnes Steel Recycled", icon: Recycle },
              { number: "40%", label: "Carbon Reduction", icon: Globe },
              { number: "2200+", label: "Jobs Created", icon: Users },
              { number: "₹835Cr", label: "Economic Impact", icon: TrendingUp }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="mx-auto mb-4 text-secondary" size={48} />
                <div className="text-3xl md:text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-primary-foreground/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission & Vision</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Target className="mr-3" size={28} />
                    Mission
                  </h3>
                  <p className="text-lg opacity-90">
                    To revolutionize the maritime recycling industry by providing sustainable, compliant, and profitable solutions that transform end-of-life vessels into valuable resources while protecting our environment.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Globe className="mr-3" size={28} />
                    Vision
                  </h3>
                  <p className="text-lg opacity-90">
                    To become the global leader in sustainable maritime recycling, creating a circular economy that benefits all stakeholders while setting new standards for environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop" 
                alt="Mission & Vision"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits - Interactive */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">United Under One Vision</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Bringing together diverse stakeholders to create a sustainable maritime ecosystem that benefits everyone
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stakeholders.map((stakeholder) => (
              <Card 
                key={stakeholder.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-primary/20"
                onClick={() => setSelectedStakeholder(stakeholder)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <stakeholder.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{stakeholder.title}</h3>
                  <p className="text-muted-foreground text-sm">Click to explore benefits</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Dialog */}
      <Dialog open={!!selectedStakeholder} onOpenChange={() => setSelectedStakeholder(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedStakeholder && (
                <>
                  <selectedStakeholder.icon className="text-primary" size={32} />
                  {selectedStakeholder.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">What's in it for you?</h4>
            {selectedStakeholder?.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Team Carousel - Pillars of Neptunus */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pillars of Neptunus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving our mission forward
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-hidden">
              {teamMembers.map((member, index) => {
                const isActive = index === currentTeamIndex;
                const isPrev = index === (currentTeamIndex - 1 + teamMembers.length) % teamMembers.length;
                const isNext = index === (currentTeamIndex + 1) % teamMembers.length;
                const isVisible = isActive || isPrev || isNext;
                
                return (
                  <div
                    key={member.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75 hidden md:block'
                    } ${
                      isActive ? 'scale-110 z-10' : 'scale-90'
                    }`}
                    onClick={() => setSelectedTeamMember(member)}
                    onMouseEnter={() => setSelectedTeamMember(member)}
                    onMouseLeave={() => setSelectedTeamMember(null)}
                  >
                    <div className="relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 mx-auto object-cover rounded-full mb-4"
                      />
                      <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                      <p className="text-sm text-muted-foreground text-center">{member.position}</p>
                      
                      {selectedTeamMember?.id === member.id && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 z-20 border w-80">
                          <p className="text-sm text-muted-foreground mb-3">{member.bio}</p>
                          <div className="mb-3">
                            <h4 className="font-semibold text-sm mb-1">Expertise:</h4>
                            <div className="flex flex-wrap gap-1">
                              {member.expertise.map((skill, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">Key Achievement:</h4>
                            <p className="text-xs text-muted-foreground">{member.achievements}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={() => setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              onClick={() => setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to partner with us? Let's discuss how we can help transform your maritime recycling needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building className="text-primary" size={20} />
                    <span>Neptunus Carbon Future</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" size={20} />
                    <span>Ganjam, Odisha, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span>info@neptunuscarbon.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>
              
              <Card className="p-6">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                        {...form.register("name")}
                        className={form.formState.errors.name ? "border-destructive" : ""}
                      />
                      {form.formState.errors.name && (
                        <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-destructive" : ""}
                      />
                      {form.formState.errors.email && (
                        <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input 
                        id="phone" 
                        placeholder="Your phone number"
                        {...form.register("phone")}
                        className={form.formState.errors.phone ? "border-destructive" : ""}
                      />
                      {form.formState.errors.phone && (
                        <p className="text-destructive text-sm mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="company">Company *</Label>
                      <Input 
                        id="company" 
                        placeholder="Your company"
                        {...form.register("company")}
                        className={form.formState.errors.company ? "border-destructive" : ""}
                      />
                      {form.formState.errors.company && (
                        <p className="text-destructive text-sm mt-1">{form.formState.errors.company.message}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="designation">Designation *</Label>
                    <Input 
                      id="designation" 
                      placeholder="Your designation"
                      {...form.register("designation")}
                      className={form.formState.errors.designation ? "border-destructive" : ""}
                    />
                    {form.formState.errors.designation && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.designation.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows={4}
                      {...form.register("message")}
                      className={form.formState.errors.message ? "border-destructive" : ""}
                    />
                    {form.formState.errors.message && (
                      <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="/lovable-uploads/531242ac-b981-4ac8-9615-867b96127f68.png" 
                alt="Neptunus Logo" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-primary-foreground/80 mb-6">
                Leading the transformation of maritime recycling through sustainable technology and responsible practices.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>Ship Recycling</li>
                <li>Steel Manufacturing</li>
                <li>Environmental Compliance</li>
                <li>Logistics Solutions</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>About Us</li>
                <li>Careers</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="text-center text-primary-foreground/60">
            <p>&copy; 2024 Neptunus Carbon Future. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;