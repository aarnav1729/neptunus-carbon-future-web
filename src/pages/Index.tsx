
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Mail, Phone, MapPin, ExternalLink, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    steel: 0,
    gdp: 0,
    jobs: 0,
    carbon: 0
  });
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  // Handle scroll for navigation
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setNavScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation for numbers
  useEffect(() => {
    const animateNumber = (key: keyof typeof animatedNumbers, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'metrics') {
          animateNumber('steel', 5, 2000);
          animateNumber('gdp', 3, 2000);
          animateNumber('jobs', 2200, 2000);
          animateNumber('carbon', 835, 2000);
        }
      });
    });

    const metricsElement = document.getElementById('metrics');
    if (metricsElement) {
      observer.observe(metricsElement);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: "services",
      title: "Services",
      subtitle: "Comprehensive Maritime Solutions",
      image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg",
      content: [
        {
          subtitle: "Ship Recycling & Dismantling",
          details: [
            "Phased expansion: 60 total bays (Phase 1: 30 bays → Phase 2: +30 bays)",
            "Annual throughput: Up to 500 ships dismantled",
            "Hazardous-waste management: 13,000 tpa capacity for oils, asbestos, PCBs"
          ]
        },
        {
          subtitle: "Low-Carbon Steel Re-Rolling",
          details: [
            "Green-steel feedstock: Melted in EAFs to reduce carbon by 1.6–2.3 t CO₂/t",
            "Traceability: End-to-end chain-of-custody, digital certificates for buyers"
          ]
        },
        {
          subtitle: "Shipbuilding & Repair",
          details: [
            "Climate-resilient design: Corrosion-resistant alloys, modular hulls",
            "Value recovery: Salvage revenue share for owners; scrap income for Neptunus"
          ]
        }
      ]
    },
    {
      id: "partners",
      title: "Partners & Affiliations",
      subtitle: "Global Network & Certifications",
      image: "/lovable-uploads/photo-1500673922987-e212871fec22.jpg",
      content: [
        {
          subtitle: "Strategic Partners",
          details: [
            "MoU with Gujarat Maritime Board/JICA (modeled after Alang improvements)"
          ]
        },
        {
          subtitle: "Key Memberships",
          details: [
            "UN Global Compact",
            "Bureau of International Recycling",
            "Local labor NGOs"
          ]
        }
      ]
    },
    {
      id: "impact",
      title: "Global Impact & Case Studies",
      subtitle: "Environmental Leadership in Action",
      image: "/lovable-uploads/photo-1506744038136-46273834b3fb.jpg",
      content: [
        {
          subtitle: "Climate Impact",
          details: [
            "Repurposing steel from old ships combats climate change by reducing virgin steel production",
            "Environmental hazards traditional beaching poses—and how Neptunus' green refurbishing addresses human and ecological risks"
          ]
        },
        {
          subtitle: "Success Stories",
          details: [
            "Carbon saved vs virgin steel",
            "Safe worker retention",
            "Community benefits",
            "Technical insights: IHM, decontamination, EAF steel rolling"
          ]
        }
      ]
    },
    {
      id: "policy",
      title: "Policy & Initiative Highlights",
      subtitle: "Alignment with National Programs",
      image: "/lovable-uploads/photo-1501854140801-50d01698950b.jpg",
      content: [
        {
          subtitle: "National Electric Mobility Mission",
          details: ["Battery-electric yard equipment cuts diesel use by 40%"]
        },
        {
          subtitle: "National Clean Energy Fund",
          details: ["10 MW rooftop solar + 2 MW wind-solar mini-grid slashes grid draw by 60%"]
        },
        {
          subtitle: "Swachh Bharat Mission",
          details: ["On-site TSDF/incinerator for hazardous & municipal waste"]
        },
        {
          subtitle: "Atmanirbhar Bharat",
          details: ["≥ 80% local sourcing empowering Odisha & West Bengal MSMEs"]
        },
        {
          subtitle: "India's Net-Zero 2070",
          details: ["35% carbon-intensity cut by 2030 via renewables"]
        }
      ]
    }
  ];

  const certifications = [
    { 
      name: "ISO 14001", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/ISO_14001.svg/200px-ISO_14001.svg.png", 
      description: "Environmental Management System",
      details: "Internationally recognized standard for environmental management systems"
    },
    { 
      name: "ISO 45001", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/ISO_45001.svg/200px-ISO_45001.svg.png", 
      description: "Occupational Health & Safety",
      details: "Global standard for occupational health and safety management systems"
    },
    { 
      name: "UN Global Compact", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/UN_Global_Compact_logo.svg/200px-UN_Global_Compact_logo.svg.png", 
      description: "Corporate Sustainability",
      details: "World's largest corporate sustainability initiative"
    },
    { 
      name: "Bureau of International Recycling", 
      logo: "https://www.bir.org/images/logo.png", 
      description: "Recycling Standards",
      details: "Leading international trade association for recycling industries"
    },
    { 
      name: "GRIHA 5-Star", 
      logo: "https://grihaindia.org/images/griha-logo.png", 
      description: "Green Building Rating",
      details: "India's premier green building rating system"
    },
    { 
      name: "BEE 5-Star", 
      logo: "https://beeindia.gov.in/sites/default/files/BEE_Logo.png", 
      description: "Energy Efficiency",
      details: "Bureau of Energy Efficiency certification for optimal energy performance"
    }
  ];

  const teamMembers = [
    { 
      name: "Rajesh Kumar", 
      position: "CEO & Founder", 
      description: "20+ years in maritime industry", 
      expertise: "Strategic Leadership",
      image: "/lovable-uploads/photo-1581090464777-f3220bbe1b8b.jpg",
      details: "Led multiple successful maritime ventures with focus on sustainable practices. Expert in international maritime law and environmental compliance."
    },
    { 
      name: "Priya Sharma", 
      position: "CTO", 
      description: "Expert in sustainable technology", 
      expertise: "Technology Innovation",
      image: "/lovable-uploads/photo-1523712999610-f77fbcfc3843.jpg",
      details: "PhD in Environmental Engineering. Pioneer in green steel production technologies and circular economy solutions."
    },
    { 
      name: "Amit Patel", 
      position: "Head of Operations", 
      description: "Specialist in ship recycling", 
      expertise: "Operational Excellence",
      image: "/lovable-uploads/photo-1482938289607-e9573fc25ebb.jpg",
      details: "15+ years in ship dismantling operations. Expert in hazardous waste management and safety protocols."
    },
    { 
      name: "Sunita Rao", 
      position: "Environmental Director", 
      description: "Environmental compliance expert", 
      expertise: "Sustainability",
      image: "/lovable-uploads/photo-1469474968028-56623f02e42e.jpg",
      details: "Former environmental regulator with deep expertise in maritime environmental protection and carbon footprint reduction."
    }
  ];

  const stakeholders = [
    { name: "Ship Owners", percentage: 20, color: "hsl(204, 94%, 74%)", description: "Fast, safe disposal with 40% credit note on new-build contracts", icon: "🚢" },
    { name: "Steel Manufacturers", percentage: 18, color: "hsl(180, 100%, 60%)", description: "Guaranteed low-carbon feedstock with digital chain-of-custody", icon: "⚒️" },
    { name: "Investors", percentage: 16, color: "hsl(270, 100%, 60%)", description: "First-mover advantage in world's largest green-steel facility", icon: "💼" },
    { name: "Local Communities", percentage: 15, color: "hsl(30, 100%, 50%)", description: "Safe jobs, capacity building, and community uplift programs", icon: "🏘️" },
    { name: "Regulators", percentage: 12, color: "hsl(120, 100%, 50%)", description: "Full transparency with real-time environmental dashboards", icon: "⚖️" },
    { name: "Global Partners", percentage: 10, color: "hsl(300, 100%, 60%)", description: "Leadership showcase and R&D pipeline collaboration", icon: "🌍" },
    { name: "Government", percentage: 9, color: "hsl(60, 100%, 50%)", description: "New industrial cluster catalyzing rural prosperity", icon: "🏛️" }
  ];

  const navigateCards = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentCardIndex(prev => prev === 0 ? services.length - 1 : prev - 1);
    } else {
      setCurrentCardIndex(prev => prev === services.length - 1 ? 0 : prev + 1);
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        navScrolled 
          ? 'translate-x-1/4 opacity-60 hover:opacity-100' 
          : 'translate-x-0 opacity-100'
      }`}>
        <div className="glass-panel rounded-full px-8 py-3 flex items-center space-x-8">
          <img 
            src="/lovable-uploads/531242ac-b981-4ac8-9615-867b96127f68.png" 
            alt="Neptunus Logo" 
            className="h-8 w-auto"
          />
          <div className="hidden md:flex space-x-6 text-sm">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(service.id)}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {service.title}
              </button>
            ))}
          </div>
          <Button className="btn-primary text-sm px-6 py-2">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center video-container">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.pixabay.com/video/2024/03/01/202560-918431383_large.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-6xl px-8 animate-fade-in-up">
          <h1 className="text-display mb-8 text-gradient font-light">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-body-large text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 animate-float">
          <ChevronDown className="w-6 h-6 text-brand-blue animate-bounce" />
          <span className="text-caption text-text-tertiary">Scroll to Explore</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="section-padding bg-surface-elevated/20" id="services-section">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">Our Capabilities</h2>
            <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
              Comprehensive solutions for sustainable maritime operations
            </p>
          </div>

          {/* Card Navigation */}
          <div className="flex justify-center items-center mb-12 space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateCards('left')}
              className="rounded-full hover:bg-surface-elevated"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCardIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentCardIndex ? 'bg-brand-blue' : 'bg-surface-elevated'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateCards('right')}
              className="rounded-full hover:bg-surface-elevated"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Service Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <Card key={service.id} className="min-w-full gradient-border hover-lift mx-4">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-80 lg:h-auto overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
                      </div>
                      
                      <div className="p-12">
                        <div className="mb-8">
                          <div className="text-caption text-brand-blue mb-3">{service.subtitle}</div>
                          <h3 className="text-title mb-6 text-text-primary font-medium" id={service.id}>
                            {service.title}
                          </h3>
                        </div>
                        
                        <div className="space-y-8 mb-8">
                          {service.content.map((item, idx) => (
                            <div key={idx}>
                              <h4 className="text-lg font-semibold mb-4 text-text-primary">{item.subtitle}</h4>
                              <ul className="space-y-3">
                                {item.details.map((detail, detailIdx) => (
                                  <li key={detailIdx} className="text-body text-text-secondary flex items-start">
                                    <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        
                        <Button className="btn-primary group">
                          Read More 
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="section-padding" id="certifications">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">Certifications & Standards</h2>
            <p className="text-body-large text-text-secondary">
              Maintaining the highest industry standards and compliance
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth space-x-12">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 h-64 elevated-panel rounded-2xl flex flex-col items-center justify-center hover-lift cursor-pointer group transition-all duration-300 hover:scale-105"
                >
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <img 
                      src={cert.logo} 
                      alt={cert.name}
                      className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center px-4">
                    <div className="font-semibold text-text-primary mb-2">{cert.name}</div>
                    <div className="text-sm text-text-secondary mb-3">{cert.description}</div>
                    <div className="text-xs text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {cert.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel - Pillars of Neptunus */}
      <section className="section-padding bg-surface-elevated/20" id="team">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">Pillars of Neptunus</h2>
            <p className="text-body-large text-text-secondary">
              Experienced professionals driving sustainable innovation
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth-reverse space-x-8">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <Card
                  key={index}
                  className={`flex-shrink-0 w-80 gradient-border hover-lift group cursor-pointer transition-all duration-500 ${
                    selectedPerson === index ? 'scale-110 z-10' : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedPerson(selectedPerson === index ? null : index)}
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-text-primary">{member.name}</h3>
                      <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                      <p className="text-body text-text-secondary mb-4">{member.description}</p>
                      <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm text-brand-blue mb-4">
                        {member.expertise}
                      </div>
                      {selectedPerson === index && (
                        <div className="mt-4 p-4 bg-surface-elevated/60 rounded-lg animate-fade-in">
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {member.details}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stakeholder Benefits - Interactive Unity Vision */}
      <section className="section-padding" id="stakeholders">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">United Under One Vision</h2>
            <p className="text-body-large text-text-secondary">
              Collaborative benefits for all stakeholders in our ecosystem
            </p>
          </div>
          
          <div className="relative">
            {/* Interactive Network Visualization */}
            <div className="flex items-center justify-center mb-16">
              <div className="relative">
                {/* Central Unity Hub */}
                <div className="w-32 h-32 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center text-4xl animate-glow">
                  🤝
                </div>
                
                {/* Orbiting Stakeholder Icons */}
                {stakeholders.map((stakeholder, index) => {
                  const angle = (index * 360) / stakeholders.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={index}
                      className="absolute w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer transition-all duration-300 hover:scale-125 hover:animate-pulse"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                        backgroundColor: stakeholder.color,
                        opacity: 0.8
                      }}
                      onMouseEnter={() => setSelectedPerson(index)}
                      onMouseLeave={() => setSelectedPerson(null)}
                    >
                      <span className="text-white">{stakeholder.icon}</span>
                      
                      {/* Connecting Line */}
                      <div
                        className="absolute w-px bg-gradient-to-r from-brand-blue/20 to-transparent"
                        style={{
                          height: `${radius - 32}px`,
                          transformOrigin: 'bottom',
                          transform: `rotate(${angle + 180}deg)`,
                          bottom: '2rem'
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Information Panel */}
            {selectedPerson !== null && (
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in">
                <Card className="gradient-border p-6 max-w-md">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4 mb-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                        style={{ backgroundColor: stakeholders[selectedPerson].color }}
                      >
                        {stakeholders[selectedPerson].icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">
                          {stakeholders[selectedPerson].name}
                        </h4>
                        <p className="text-sm text-brand-blue">
                          {stakeholders[selectedPerson].percentage}% Involvement
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">
                      {stakeholders[selectedPerson].description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Stakeholder Grid for Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:hidden">
              {stakeholders.map((stakeholder, index) => (
                <Card key={index} className="gradient-border hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                        style={{ backgroundColor: stakeholder.color }}
                      >
                        {stakeholder.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">{stakeholder.name}</h4>
                        <p className="text-sm text-brand-blue">{stakeholder.percentage}% Involvement</p>
                      </div>
                    </div>
                    <p className="text-sm text-text-secondary">{stakeholder.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="metrics" className="section-padding bg-surface-elevated/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">Impact Metrics</h2>
            <p className="text-body-large text-text-secondary">
              Measurable results driving sustainable change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">{animatedNumbers.steel}M</div>
                <div className="text-body font-medium text-text-primary mb-2">MT Steel Recovered</div>
                <div className="text-sm text-text-secondary">Annual processing capacity</div>
              </CardContent>
            </Card>
            
            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">${animatedNumbers.gdp}B+</div>
                <div className="text-body font-medium text-text-primary mb-2">GDP Contribution</div>
                <div className="text-sm text-text-secondary">Economic impact to Odisha</div>
              </CardContent>
            </Card>
            
            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">{animatedNumbers.jobs.toLocaleString()}</div>
                <div className="text-body font-medium text-text-primary mb-2">Direct Jobs</div>
                <div className="text-sm text-text-secondary">Employment opportunities</div>
              </CardContent>
            </Card>
            
            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">{(animatedNumbers.carbon / 100).toFixed(1)}M</div>
                <div className="text-body font-medium text-text-primary mb-2">T CO₂ Avoided</div>
                <div className="text-sm text-text-secondary">Annual carbon reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="gradient-border p-12 hover-lift">
              <CardContent className="p-0">
                <div className="text-caption text-brand-blue mb-4">OUR MISSION</div>
                <h3 className="text-title mb-6 text-text-primary font-medium">Integrity and Commitment</h3>
                <p className="text-body-large font-medium mb-6 text-text-primary">
                  Combating climate change through sustainable practices.
                </p>
                <p className="text-body text-text-secondary leading-relaxed">
                  "To create a vertically integrated ship recycling facility while upholding the highest labour safety and environmental sustainability standards."
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-border p-12 hover-lift">
              <CardContent className="p-0">
                <div className="text-caption text-brand-teal mb-4">OUR VISION</div>
                <h3 className="text-title mb-6 text-text-primary font-medium">Leading India's Future</h3>
                <p className="text-body-large font-medium mb-6 text-text-primary">
                  Transition to a carbon-secure future through innovation.
                </p>
                <p className="text-body text-text-secondary leading-relaxed">
                  "To position India as a global leader in sustainable ship recycling by building the world's most advanced, environmentally responsible, and socially conscious maritime industrial facility."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-surface-elevated/20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">Get In Touch</h2>
            <p className="text-body-large text-text-secondary">
              Ready to be part of India's sustainable maritime future?
            </p>
          </div>
          
          <Card className="gradient-border p-12">
            <CardContent className="p-0">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">Name</label>
                    <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">Email</label>
                    <Input type="email" className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                </div>
                <div>
                  <label className="block text-body font-medium mb-3 text-text-primary">Subject</label>
                  <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                </div>
                <div>
                  <label className="block text-body font-medium mb-3 text-text-primary">Message</label>
                  <Textarea className="bg-surface-elevated border-border/40 text-text-primary h-32 resize-none" />
                </div>
                <Button className="w-full btn-primary h-14 text-lg">
                  Send Message <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-elevated border-t border-border/20 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img 
                src="/lovable-uploads/531242ac-b981-4ac8-9615-867b96127f68.png" 
                alt="Neptunus Logo" 
                className="h-12 w-auto mb-6"
              />
              <p className="text-text-secondary leading-relaxed">
                Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-text-primary">Services</h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Ship Recycling</li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Steel Re-Rolling</li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Shipbuilding & Repair</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-text-primary">Company</h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="hover:text-brand-blue cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Our Team</li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Certifications</li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">Sustainability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-text-primary">Contact</h4>
              <div className="space-y-4 text-text-secondary">
                <div className="flex items-center space-x-3 hover:text-brand-blue cursor-pointer transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@neptunus.in</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-brand-blue cursor-pointer transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 xxx xxx xxxx</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-brand-blue cursor-pointer transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Odisha, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/20 pt-8 text-center">
            <p className="text-text-secondary">
              &copy; 2024 Neptunus Ship Builders and Recyclers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
