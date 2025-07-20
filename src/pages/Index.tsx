import { useEffect, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Index = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    steel: 0,
    gdp: 0,
    jobs: 0,
    carbon: 0,
  });
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navigation
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation for numbers
  useEffect(() => {
    const animateNumber = (
      key: keyof typeof animatedNumbers,
      target: number,
      duration: number
    ) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedNumbers((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "metrics") {
          animateNumber("steel", 5, 2000);
          animateNumber("gdp", 3, 2000);
          animateNumber("jobs", 2200, 2000);
          animateNumber("carbon", 835, 2000);
        }
      });
    });

    const metricsElement = document.getElementById("metrics");
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
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      layout: "image-left",
      content: [
        {
          subtitle: "Ship Recycling & Dismantling",
          details: [
            "Phased expansion: 60 total bays (Phase 1: 30 bays → Phase 2: +30 bays)",
            "Annual throughput: Up to 500 ships dismantled",
            "Hazardous-waste management: 13,000 tpa capacity for oils, asbestos, PCBs",
          ],
        },
        {
          subtitle: "Low-Carbon Steel Re-Rolling",
          details: [
            "Green-steel feedstock: Melted in EAFs to reduce carbon by 1.6–2.3 t CO₂/t",
            "Traceability: End-to-end chain-of-custody, digital certificates for buyers",
          ],
        },
      ],
    },
    {
      id: "partners",
      title: "Partners & Affiliations",
      subtitle: "Global Network & Certifications",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      layout: "image-right",
      content: [
        {
          subtitle: "Strategic Partners",
          details: [
            "MoU with Gujarat Maritime Board/JICA (modeled after Alang improvements)",
          ],
        },
        {
          subtitle: "Key Memberships",
          details: [
            "UN Global Compact",
            "Bureau of International Recycling",
            "Local labor NGOs",
          ],
        },
      ],
    },
    {
      id: "impact",
      title: "Global Impact & Case Studies",
      subtitle: "Environmental Leadership in Action",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      layout: "image-top",
      content: [
        {
          subtitle: "Climate Impact",
          details: [
            "Repurposing steel from old ships combats climate change by reducing virgin steel production",
            "Environmental hazards traditional beaching poses—and how Neptunus' green refurbishing addresses human and ecological risks",
          ],
        },
      ],
    },
    {
      id: "policy",
      title: "Policy & Initiative Highlights",
      subtitle: "Alignment with National Programs",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
      layout: "image-bottom",
      content: [
        {
          subtitle: "National Electric Mobility Mission",
          details: ["Battery-electric yard equipment cuts diesel use by 40%"],
        },
        {
          subtitle: "Swachh Bharat Mission",
          details: ["On-site TSDF/incinerator for hazardous & municipal waste"],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "ISO 14001",
      logo: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Environmental Management System",
      details:
        "Internationally recognized standard for environmental management systems ensuring continuous improvement in environmental performance",
    },
    {
      name: "ISO 45001",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Occupational Health & Safety",
      details:
        "Global standard for occupational health and safety management systems, protecting workers and visitors",
    },
    {
      name: "UN Global Compact",
      logo: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Corporate Sustainability",
      details:
        "World's largest corporate sustainability initiative with 10 principles covering human rights, labor, environment and anti-corruption",
    },
    {
      name: "Bureau of International Recycling",
      logo: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Recycling Standards",
      details:
        "Leading international trade association promoting sustainable recycling practices and circular economy principles",
    },
    {
      name: "GRIHA 5-Star",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Green Building Rating",
      details:
        "India's premier green building rating system promoting energy efficiency and environmental sustainability",
    },
    {
      name: "BEE 5-Star",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Energy Efficiency",
      details:
        "Bureau of Energy Efficiency certification ensuring optimal energy performance and reduced carbon footprint",
    },
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      description: "20+ years in maritime industry",
      expertise: "Strategic Leadership",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details:
        "Led multiple successful maritime ventures with focus on sustainable practices. Expert in international maritime law and environmental compliance. Holds MBA from IIM Ahmedabad and B.Tech in Naval Architecture.",
      achievements: [
        "Founded 3 successful maritime companies",
        "Led $500M+ in sustainable infrastructure projects",
        "Keynote speaker at 50+ international conferences",
      ],
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      description: "Expert in sustainable technology",
      expertise: "Technology Innovation",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616c273e11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details:
        "PhD in Environmental Engineering from MIT. Pioneer in green steel production technologies and circular economy solutions. 15+ patents in sustainable manufacturing processes.",
      achievements: [
        "15+ patents in green technology",
        "Published 50+ research papers",
        "Winner of Green Innovation Award 2023",
      ],
    },
    {
      name: "Amit Patel",
      position: "Head of Operations",
      description: "Specialist in ship recycling",
      expertise: "Operational Excellence",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details:
        "15+ years in ship dismantling operations. Expert in hazardous waste management and safety protocols. Certified in OSHA and ISO 45001 standards.",
      achievements: [
        "Zero-accident record for 8 consecutive years",
        "Reduced operational costs by 35%",
        "Implemented industry-first safety protocols",
      ],
    },
    {
      name: "Sunita Rao",
      position: "Environmental Director",
      description: "Environmental compliance expert",
      expertise: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      details:
        "Former environmental regulator with deep expertise in maritime environmental protection and carbon footprint reduction. M.Sc. in Environmental Science from JNU.",
      achievements: [
        "Reduced carbon emissions by 40%",
        "Achieved 100% waste recycling rate",
        "Led environmental compliance for 200+ projects",
      ],
    },
  ];

  const stakeholders = [
    {
      name: "Ship Owners & Shipping Lines",
      color: "hsl(204, 94%, 74%)",
      icon: "🚢",
      benefits: [
        "Fast, safe disposal of end-of-life vessels with full IHM and regulatory certification (HKGS, EUSSR)",
        "40% credit note on new-build contracts—turning sustainable disposal into future savings",
        "Peace of mind: no more costly reflagging or beaching risks; a single partner for compliant, carbon-friendly recycling",
      ],
    },
    {
      name: "Steel Manufacturers & Re-rollers",
      color: "hsl(180, 100%, 60%)",
      icon: "⚒️",
      benefits: [
        "Guaranteed low-carbon feedstock: secure contracts for millions of tonnes of scrap steel, all traceable via digital chain-of-custody",
        "One-stop shop: certified dismantling + re-rolling under one roof—streamlining logistics and quality control",
        "ESG uplift: every tonne you melt reduces your portfolio's carbon footprint via EAF processing",
      ],
    },
    {
      name: "Investors & Financial Institutions",
      color: "hsl(270, 100%, 60%)",
      icon: "💼",
      benefits: [
        "First-mover advantage: back the world's largest green-steel facility, UN-certified from day one",
        "Robust returns: lifecycle CO₂-reduction estimates and IRR case studies underpinned by government support",
        "Guaranteed market: with India's '30% green-steel mandate,' one in three tonnes must be recycled—locking in future buyers",
        "Strategic hedge: shipping lines face mounting costs to reflag; our solution lets them comply without expense",
      ],
    },
    {
      name: "Local Communities & Workforce",
      color: "hsl(30, 100%, 50%)",
      icon: "🏘️",
      benefits: [
        "Safe, skilled jobs: cutting-edge equipment, zero-accident pledge, and OSHA-grade protocols",
        "Capacity building: on-site training programs, apprenticeships, and an aspirational '70% local hire' target",
        "Community uplift: new schools, affordable housing, and a modern medical clinic—because your well-being powers our progress",
        "Pride of place: become part of Odisha's green-industry revolution and global climate story",
      ],
    },
    {
      name: "Regulators & NGOs",
      color: "hsl(120, 100%, 50%)",
      icon: "⚖️",
      benefits: [
        "Full transparency: real-time environmental dashboards, periodic third-party audits, and public sustainability reports",
        "Iron-clad compliance: Basel/UNEP alignment, IMO/EU Ship Recycling Regulation, plus local EIA and CRZ clearances",
        "True partnership: collaborate on best practices and shape a blueprint for safe, circular-economy growth",
      ],
    },
    {
      name: "Global Partners & Climate Advocates",
      color: "hsl(300, 100%, 60%)",
      icon: "🌍",
      benefits: [
        "Leadership showcase: highlight India's circular-economy triumph alongside EU, Japan, and Polish collaborators",
        "R&D pipelines: co-develop next-gen recycling technologies and green-hydrogen integration",
        "Storytelling: joint press and thought-leadership platforms to amplify impact and attract co-investment",
      ],
    },
    {
      name: "Government & Policy Makers",
      color: "hsl(60, 100%, 50%)",
      icon: "🏛️",
      benefits: [
        "New industrial cluster: catalyze Ganjam's transformation into a maritime-green hub, driving rural prosperity",
        "Budget leverage: tap into ₹1,624 Cr over five years under the Ship-Flagging Subsidy (Union Budget 2021-22)",
        "Legislative alignment: deliver on the Recycling of Ships Act 2019 (4.5 M LDT capacity by 2024) and Maritime India Vision 2030",
        "PPP excellence: structured as a DBFOT model with performance-based incentives—sharing risk, reward, and regulatory ease",
      ],
    },
  ];

  const navigateCards = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentCardIndex((prev) =>
        prev === 0 ? services.length - 1 : prev - 1
      );
    } else {
      setCurrentCardIndex((prev) =>
        prev === services.length - 1 ? 0 : prev + 1
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const getCardLayout = (service: (typeof services)[0]) => {
    switch (service.layout) {
      case "image-left":
        return "grid-cols-1 lg:grid-cols-2";
      case "image-right":
        return "grid-cols-1 lg:grid-cols-2";
      case "image-top":
        return "grid-cols-1";
      case "image-bottom":
        return "grid-cols-1";
      default:
        return "grid-cols-1 lg:grid-cols-2";
    }
  };

  const renderCardContent = (service: (typeof services)[0]) => {
    const imageElement = (
      <div className="relative h-48 lg:h-auto overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>
    );

    const contentElement = (
      <div className="p-6">
        <div className="mb-4">
          <div className="text-caption text-brand-blue mb-2">
            {service.subtitle}
          </div>
          <h3
            className="text-lg mb-3 text-text-primary font-medium"
            id={service.id}
          >
            {service.title}
          </h3>
        </div>

        <div className="space-y-4 mb-4">
          {service.content.map((item, idx) => (
            <div key={idx}>
              <h4 className="text-md font-semibold mb-2 text-text-primary">
                {item.subtitle}
              </h4>
              <ul className="space-y-2">
                {item.details.slice(0, 2).map((detail, detailIdx) => (
                  <li
                    key={detailIdx}
                    className="text-sm text-text-secondary flex items-start"
                  >
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Button className="btn-primary group text-sm">
          Read More
          <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    );

    switch (service.layout) {
      case "image-left":
        return (
          <>
            {imageElement}
            {contentElement}
          </>
        );
      case "image-right":
        return (
          <>
            {contentElement}
            {imageElement}
          </>
        );
      case "image-top":
        return (
          <div className="space-y-0">
            {imageElement}
            {contentElement}
          </div>
        );
      case "image-bottom":
        return (
          <div className="space-y-0">
            {contentElement}
            {imageElement}
          </div>
        );
      default:
        return (
          <>
            {imageElement}
            {contentElement}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Enhanced Navigation */}

      <nav
        className={`fixed z-50 transition-all duration-1000 ease-out ${
          navScrolled
            ? "top-0 left-1/2 -translate-x-1/2 w-4/5"
            : "left-1/2 top-8 -translate-x-1/2"
        }`}
      >
        <div
          className={`glass-panel transition-all duration-1000 ease-out ${
            navScrolled
              ? "flex items-center justify-between py-4 px-6 rounded-lg"
              : "flex items-center space-x-8 py-3 px-8 rounded-full"
          }`}
        >
          {/* Logo */}
          <img
            src="/assets/logo.png"
            alt="Neptunus Logo"
            className={`transition-all duration-700 ${
              navScrolled ? "h-10" : "h-12"
            } w-auto`}
          />

          {/* Hamburger + Contact */}
          {navScrolled ? (
            <div className="flex items-center space-x-4">
              <button
                className="transition-all duration-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <Button className="btn-primary text-xs px-4 py-2 transition-all duration-700">
                Contact
              </Button>
            </div>
          ) : (
            <>
              <button
                className="transition-all duration-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
              <Button className="btn-primary text-sm px-6 py-2 transition-all duration-700">
                Contact
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`absolute mt-2 glass-panel rounded-2xl p-4 ${
              navScrolled ? "top-full right-0" : "top-full left-0 right-0"
            }`}
          >
            <div className="flex flex-col space-y-3">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="text-text-secondary hover:text-primary transition-colors text-left"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center video-container">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="/assets/hero.mp4"
            type="video/mp4"
          />
        </video>

        <div className="relative z-10 text-center max-w-6xl px-8 animate-fade-in-up">
          <h1 className="text-display mb-8 text-gradient font-light">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-body-large text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering India's carbon-negative future through sustainable ship
            recycling and circular steel production.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-3 animate-float">
          <ChevronDown className="w-6 h-6 text-brand-blue animate-bounce" />
          <span className="text-caption text-text-tertiary">
            Scroll to Explore
          </span>
        </div>
      </div>

      {/* Services Section */}
      <section
        className="section-padding bg-surface-elevated/20"
        id="services-section"
      >
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Our Capabilities
            </h2>
            <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
              Comprehensive solutions for sustainable maritime operations
            </p>
          </div>

          {/* Card Navigation */}
          <div className="flex justify-center items-center mb-12 space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateCards("left")}
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
                    index === currentCardIndex
                      ? "bg-brand-blue"
                      : "bg-surface-elevated"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateCards("right")}
              className="rounded-full hover:bg-surface-elevated"
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Service Cards with Varied Layouts */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="min-w-full gradient-border hover-lift mx-4"
                >
                  <CardContent className="p-0">
                    <div className={`grid gap-0 ${getCardLayout(service)}`}>
                      {renderCardContent(service)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Carousel */}
      <section className="section-padding" id="certifications">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Certifications & Standards
            </h2>
            <p className="text-body-large text-text-secondary">
              Maintaining the highest industry standards and compliance
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth space-x-12">
              {[...certifications, ...certifications].map((cert, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="flex-shrink-0 w-64 h-40 elevated-panel rounded-2xl flex flex-col items-center justify-center hover-lift cursor-pointer group transition-all duration-300 hover:scale-110">
                      <div className="w-16 h-16 mb-3 flex items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={cert.logo}
                          alt={cert.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center px-4">
                        <div className="font-semibold text-text-primary mb-2">
                          {cert.name}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {cert.description}
                        </div>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-text-primary">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {cert.details}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Carousel - Pillars of Neptunus */}
      <section className="section-padding bg-surface-elevated/20" id="team">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Pillars of Neptunus
            </h2>
            <p className="text-body-large text-text-secondary">
              Experienced professionals driving sustainable innovation
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-smooth-reverse space-x-8">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <Card className="flex-shrink-0 w-80 gradient-border hover-lift group cursor-pointer transition-all duration-500 hover:scale-105">
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
                          <h3 className="text-xl font-bold mb-2 text-text-primary">
                            {member.name}
                          </h3>
                          <p className="text-brand-blue font-medium mb-3">
                            {member.position}
                          </p>
                          <p className="text-body text-text-secondary mb-4">
                            {member.description}
                          </p>
                          <div className="inline-block px-4 py-2 bg-brand-blue/10 rounded-full text-sm text-brand-blue">
                            {member.expertise}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-96">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-16 h-16 object-cover rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-text-primary">
                            {member.name}
                          </h4>
                          <p className="text-sm text-brand-blue">
                            {member.position}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {member.details}
                      </p>
                      <div>
                        <h5 className="font-medium text-text-primary mb-2">
                          Key Achievements:
                        </h5>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-text-secondary flex items-start"
                            >
                              <div className="w-1.5 h-1.5 bg-brand-teal rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Stakeholder Unity Section */}
      <section className="section-padding" id="stakeholders">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              United Under One Vision
            </h2>
            <p className="text-body-large text-text-secondary">
              Collaborative ecosystem bringing all stakeholders together for
              sustainable maritime future
            </p>
          </div>

          <div className="relative min-h-[800px] flex items-center justify-center">
            {/* Central Unity Symbol */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center animate-glow shadow-2xl">
                <div className="text-2xl font-bold text-background">UNITY</div>
              </div>
            </div>

            {/* Interactive Stakeholder Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
              {stakeholders.map((stakeholder, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card
                      className="gradient-border hover-lift cursor-pointer group transition-all duration-300 hover:scale-105 animate-float"
                      style={{ animationDelay: `${index * 0.3}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div
                          className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl shadow-lg"
                          style={{ backgroundColor: stakeholder.color }}
                        >
                          <span className="text-background font-bold">
                            {stakeholder.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <h3 className="text-sm font-semibold text-text-primary mb-2 leading-tight">
                          {stakeholder.name}
                        </h3>
                        <div className="text-xs text-text-secondary">
                          Click to explore benefits
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="flex items-center space-x-3 text-xl">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                          style={{ backgroundColor: stakeholder.color }}
                        >
                          <span className="text-background font-bold">
                            {stakeholder.name
                              .split(" ")
                              .map((word) => word[0])
                              .join("")
                              .slice(0, 2)}
                          </span>
                        </div>
                        <span>{stakeholder.name}</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-6">
                      <h4 className="font-semibold text-brand-blue text-lg">
                        What's in it for you?
                      </h4>
                      <ul className="space-y-3">
                        {stakeholder.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-secondary leading-relaxed">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>

            {/* Connecting Lines Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {stakeholders.map((_, index) => {
                const angle = (index * 360) / stakeholders.length;
                return (
                  <div
                    key={index}
                    className="absolute w-px h-24 bg-gradient-to-t from-brand-blue/20 to-transparent origin-bottom animate-pulse"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${angle}deg) translateY(-100px)`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="metrics" className="section-padding bg-surface-elevated/20">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Impact Metrics
            </h2>
            <p className="text-body-large text-text-secondary">
              Measurable results driving sustainable change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">
                  {animatedNumbers.steel}M
                </div>
                <div className="text-body font-medium text-text-primary mb-2">
                  MT Steel Recovered
                </div>
                <div className="text-sm text-text-secondary">
                  Annual processing capacity
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">
                  ${animatedNumbers.gdp}B+
                </div>
                <div className="text-body font-medium text-text-primary mb-2">
                  GDP Contribution
                </div>
                <div className="text-sm text-text-secondary">
                  Economic impact to Odisha
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">
                  {animatedNumbers.jobs.toLocaleString()}
                </div>
                <div className="text-body font-medium text-text-primary mb-2">
                  Direct Jobs
                </div>
                <div className="text-sm text-text-secondary">
                  Employment opportunities
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border text-center p-8 hover-lift animate-glow">
              <CardContent className="p-0">
                <div className="text-5xl font-light mb-4 text-gradient">
                  {(animatedNumbers.carbon / 100).toFixed(1)}M
                </div>
                <div className="text-body font-medium text-text-primary mb-2">
                  T CO₂ Avoided
                </div>
                <div className="text-sm text-text-secondary">
                  Annual carbon reduction
                </div>
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
                <div className="text-caption text-brand-blue mb-4">
                  OUR MISSION
                </div>
                <h3 className="text-title mb-6 text-text-primary font-medium">
                  Integrity and Commitment
                </h3>
                <p className="text-body-large font-medium mb-6 text-text-primary">
                  Combating climate change through sustainable practices.
                </p>
                <p className="text-body text-text-secondary leading-relaxed">
                  "To create a vertically integrated ship recycling facility
                  while upholding the highest labour safety and environmental
                  sustainability standards."
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-border p-12 hover-lift">
              <CardContent className="p-0">
                <div className="text-caption text-brand-teal mb-4">
                  OUR VISION
                </div>
                <h3 className="text-title mb-6 text-text-primary font-medium">
                  Leading India's Future
                </h3>
                <p className="text-body-large font-medium mb-6 text-text-primary">
                  Transition to a carbon-secure future through innovation.
                </p>
                <p className="text-body text-text-secondary leading-relaxed">
                  "To position India as a global leader in sustainable ship
                  recycling by building the world's most advanced,
                  environmentally responsible, and socially conscious maritime
                  industrial facility."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="section-padding bg-surface-elevated/20">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Get In Touch
            </h2>
            <p className="text-body-large text-text-secondary">
              Ready to be part of India's sustainable maritime future?
            </p>
          </div>

          <Card className="gradient-border p-12">
            <CardContent className="p-0">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Name
                    </label>
                    <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Email
                    </label>
                    <Input
                      type="email"
                      className="bg-surface-elevated border-border/40 text-text-primary h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      className="bg-surface-elevated border-border/40 text-text-primary h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Company
                    </label>
                    <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Designation
                    </label>
                    <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Subject
                    </label>
                    <Input className="bg-surface-elevated border-border/40 text-text-primary h-12" />
                  </div>
                </div>

                <div>
                  <label className="block text-body font-medium mb-3 text-text-primary">
                    Message
                  </label>
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
                Pioneering India's carbon-negative future through sustainable
                ship recycling and circular steel production.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-text-primary">Services</h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Ship Recycling
                </li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Steel Re-Rolling
                </li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Shipbuilding & Repair
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-text-primary">Company</h4>
              <ul className="space-y-3 text-text-secondary">
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Our Team
                </li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Certifications
                </li>
                <li className="hover:text-brand-blue cursor-pointer transition-colors">
                  Sustainability
                </li>
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
              &copy; 2024 Neptunus Ship Builders and Recyclers. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
