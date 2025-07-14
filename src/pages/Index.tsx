
import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
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
      title: "Services",
      subtitle: "Comprehensive Maritime Solutions",
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
      title: "Partners & Affiliations",
      subtitle: "Global Network & Certifications",
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
      title: "Global Impact & Case Studies",
      subtitle: "Environmental Leadership in Action",
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
      title: "Policy & Initiative Highlights",
      subtitle: "Alignment with National Programs",
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

  const stakeholders = [
    { name: "Ship Owners", percentage: 20, color: "hsl(204, 94%, 74%)", description: "Fast, safe disposal with 40% credit note on new-build contracts" },
    { name: "Steel Manufacturers", percentage: 18, color: "hsl(180, 100%, 60%)", description: "Guaranteed low-carbon feedstock with digital chain-of-custody" },
    { name: "Investors", percentage: 16, color: "hsl(270, 100%, 60%)", description: "First-mover advantage in world's largest green-steel facility" },
    { name: "Local Communities", percentage: 15, color: "hsl(30, 100%, 50%)", description: "Safe jobs, capacity building, and community uplift programs" },
    { name: "Regulators", percentage: 12, color: "hsl(120, 100%, 50%)", description: "Full transparency with real-time environmental dashboards" },
    { name: "Global Partners", percentage: 10, color: "hsl(300, 100%, 60%)", description: "Leadership showcase and R&D pipeline collaboration" },
    { name: "Government", percentage: 9, color: "hsl(60, 100%, 50%)", description: "New industrial cluster catalyzing rural prosperity" }
  ];

  const certifications = [
    { name: "ISO 14001", logo: "🌱", description: "Environmental Management" },
    { name: "ISO 45001", logo: "🛡️", description: "Occupational Health & Safety" },
    { name: "UN Global Compact", logo: "🌍", description: "Corporate Sustainability" },
    { name: "Bureau of International Recycling", logo: "♻️", description: "Recycling Standards" },
    { name: "GRIHA 5-Star", logo: "⭐", description: "Green Building Rating" },
    { name: "BEE 5-Star", logo: "⚡", description: "Energy Efficiency" }
  ];

  const teamMembers = [
    { name: "Rajesh Kumar", position: "CEO & Founder", description: "20+ years in maritime industry", expertise: "Strategic Leadership" },
    { name: "Priya Sharma", position: "CTO", description: "Expert in sustainable technology", expertise: "Technology Innovation" },
    { name: "Amit Patel", position: "Head of Operations", description: "Specialist in ship recycling", expertise: "Operational Excellence" },
    { name: "Sunita Rao", position: "Environmental Director", description: "Environmental compliance expert", expertise: "Sustainability" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center video-container">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://cdn.pixabay.com/video/2024/03/01/202560-918431383_large.mp4" type="video/mp4" />
        </video>

        {/* Navigation */}
        <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="glass-panel rounded-full px-12 py-4 flex items-center space-x-12">
            <div className="text-xl font-semibold text-gradient">⚓ Neptunus</div>
            <Button className="btn-primary">
              Get Started
            </Button>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-brand-blue rounded-full animate-pulse"></div>
              <div className="w-8 h-2 bg-brand-blue/30 rounded-full"></div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl px-8 animate-fade-in-up">
          <h1 className="text-display mb-8 text-gradient">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-body-large text-text-secondary mb-12 max-w-4xl mx-auto">
            Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 flex flex-col items-center space-y-3 animate-float">
          <ChevronDown className="w-8 h-8 text-brand-blue animate-bounce" />
          <span className="text-caption text-text-tertiary">Scroll to Explore</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="section-padding bg-surface-elevated/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient">Our Capabilities</h2>
            <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
              Comprehensive solutions for sustainable maritime operations
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth space-x-8 pb-8">
              {[...services, ...services].map((service, index) => (
                <Card key={index} className="min-w-[500px] gradient-border hover-lift">
                  <CardContent className="p-10">
                    <div className="mb-8">
                      <div className="text-caption text-brand-blue mb-3">{service.subtitle}</div>
                      <h3 className="text-title mb-6 text-text-primary">{service.title}</h3>
                    </div>
                    
                    <div className="space-y-8">
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
                    
                    <Button className="mt-8 btn-primary group">
                      Learn More 
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient">Certifications & Standards</h2>
            <p className="text-body-large text-text-secondary">
              Maintaining the highest industry standards and compliance
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth space-x-12">
              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-48 elevated-panel rounded-2xl flex flex-col items-center justify-center hover-lift cursor-pointer group"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.logo}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-text-primary mb-2">{cert.name}</div>
                    <div className="text-sm text-text-secondary">{cert.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="section-padding bg-surface-elevated/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient">Leadership Team</h2>
            <p className="text-body-large text-text-secondary">
              Experienced professionals driving sustainable innovation
            </p>
          </div>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth-reverse space-x-8">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-96 gradient-border hover-lift group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-primary-foreground group-hover:animate-glow">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text-primary">{member.name}</h3>
                    <p className="text-brand-blue font-medium mb-3">{member.position}</p>
                    <p className="text-body text-text-secondary mb-4">{member.description}</p>
                    <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm text-brand-blue">
                      {member.expertise}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Benefits - Pie Chart */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient">United Under One Vision</h2>
            <p className="text-body-large text-text-secondary">
              Collaborative benefits for all stakeholders in our ecosystem
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-20">
            <div className="relative w-96 h-96 group">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {stakeholders.map((stakeholder, index) => {
                  const total = stakeholders.reduce((sum, s) => sum + s.percentage, 0);
                  const percentage = stakeholder.percentage / total;
                  const angle = percentage * 360;
                  const prevAngle = stakeholders.slice(0, index).reduce((sum, s) => sum + (s.percentage / total) * 360, 0);
                  
                  const x1 = 100 + 80 * Math.cos((prevAngle * Math.PI) / 180);
                  const y1 = 100 + 80 * Math.sin((prevAngle * Math.PI) / 180);
                  const x2 = 100 + 80 * Math.cos(((prevAngle + angle) * Math.PI) / 180);
                  const y2 = 100 + 80 * Math.sin(((prevAngle + angle) * Math.PI) / 180);
                  
                  const largeArcFlag = angle > 180 ? 1 : 0;
                  
                  return (
                    <g key={index}>
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={stakeholder.color}
                        className="hover:opacity-80 cursor-pointer transition-all duration-300 hover:scale-105"
                        style={{ transformOrigin: '100px 100px' }}
                      />
                    </g>
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center elevated-panel rounded-full w-32 h-32 flex flex-col items-center justify-center">
                  <div className="text-4xl mb-2">🤝</div>
                  <div className="text-sm font-medium text-text-primary">United Goal</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 max-w-md">
              {stakeholders.map((stakeholder, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 glass-panel rounded-xl hover-lift cursor-pointer">
                  <div
                    className="w-6 h-6 rounded-full flex-shrink-0 mt-1"
                    style={{ backgroundColor: stakeholder.color }}
                  ></div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">{stakeholder.name}</div>
                    <div className="text-sm text-text-secondary mb-2">{stakeholder.percentage}% Involvement</div>
                    <div className="text-sm text-text-tertiary">{stakeholder.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="metrics" className="section-padding bg-surface-elevated/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient">Impact Metrics</h2>
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
                <h3 className="text-title mb-6 text-text-primary">Integrity and Commitment</h3>
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
                <h3 className="text-title mb-6 text-text-primary">Leading India's Future</h3>
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
            <h2 className="text-headline mb-6 text-gradient">Get In Touch</h2>
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
              <h3 className="text-xl font-semibold mb-6 text-gradient">⚓ Neptunus</h3>
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
