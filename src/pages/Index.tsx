import { useEffect, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
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
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [animatedNumbers, setAnimatedNumbers] = useState({
    steel: 0,
    gdp: 0,
    jobs: 0,
    carbon: 0,
  });
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll for navigation
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto‑scroll effect
  useEffect(() => {
    let animationId: number;
    const step = () => {
      const el = carouselRef.current;
      if (el) {
        el.scrollLeft += scrollSpeed;
        // when we've scrolled through one copy, jump back seamlessly
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [scrollSpeed]);

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

  // Form validation
  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.company.trim()) errors.company = "Company is required";
    if (!formData.designation.trim())
      errors.designation = "Designation is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      designation: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const services = [
    {
      id: "services",
      title: "Ship Recycling & Dismantling",
      subtitle: "Comprehensive Maritime Solutions",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: [
        {
          subtitle: "Phased Expansion Strategy",
          details: [
            "60 total bays (Phase 1: 30 bays → Phase 2: +30 bays)",
            "Annual throughput: Up to 500 ships dismantled",
          ],
        },
        {
          subtitle: "Hazardous Waste Management",
          details: [
            "13,000 tpa capacity for oils, asbestos, PCBs",
            "Zero-waste-to-landfill policy implementation",
          ],
        },
      ],
    },
    {
      id: "partners",
      title: "Low-Carbon Steel Re-Rolling",
      subtitle: "Sustainable Steel Production",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: [
        {
          subtitle: "Green Steel Technology",
          details: [
            "EAF processing reduces carbon by 1.6–2.3 t CO₂/t",
            "End-to-end chain-of-custody traceability",
          ],
        },
        {
          subtitle: "Digital Certificates",
          details: [
            "Blockchain-verified steel quality assurance",
            "Real-time tracking and reporting systems",
          ],
        },
      ],
    },
    {
      id: "impact",
      title: "Global Impact & Partnerships",
      subtitle: "Environmental Leadership in Action",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: [
        {
          subtitle: "Climate Impact",
          details: [
            "Repurposing steel combats climate change",
            "Addressing environmental hazards of traditional beaching",
          ],
        },
        {
          subtitle: "Strategic Partnerships",
          details: [
            "MoU with Gujarat Maritime Board/JICA",
            "UN Global Compact membership",
          ],
        },
      ],
    },
    {
      id: "policy",
      title: "Policy & Initiative Highlights",
      subtitle: "Alignment with National Programs",
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      content: [
        {
          subtitle: "National Electric Mobility Mission",
          details: [
            "Battery-electric yard equipment cuts diesel use by 40%",
            "Integration with renewable energy sources",
          ],
        },
        {
          subtitle: "Swachh Bharat Mission",
          details: [
            "On-site TSDF/incinerator for hazardous waste",
            "Community health and safety programs",
          ],
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "HKC – Hong Kong Convention",
      logo: "/assets/certs/hkgs.png",
      description: "IMO aligned",
      details: "Hong Kong Green Standard aligned with IMO guidelines",
    },
    {
      name: "EUSSR",
      logo: "/assets/certs/eussr.png",
      description: "meets EU Ship Recycling Regulation",
      details: "Compliant with the EU Ship Recycling Regulation",
    },
    {
      name: "UNEP / Basel Convention",
      logo: "/assets/certs/unep-basel.png",
      description: "for hazardous materials",
      details: "Aligned with UNEP / Basel Convention for hazardous materials",
    },
    {
      name: "SA 8000",
      logo: "/assets/certs/sa8000.png",
      description: "Administered by SAI",
      details: "Social Accountability International standard SA 8000",
    },
    {
      name: "IHM (Part 1-3)",
      logo: "/assets/certs/ihm.png",
      description: "per IMO MEPC.269(68)",
      details:
        "Inventory of Hazardous Materials (Parts 1–3) per IMO MEPC.269(68)",
    },
    {
      name: "ISO 9001:2015",
      logo: "/assets/certs/iso9001.png",
      description: "Quality Management Systems",
      details: "ISO 9001:2015 standard for Quality Management Systems",
    },
    {
      name: "ISO 30000:2009",
      logo: "/assets/certs/iso30000.png",
      description: "Ship Recycling Management",
      details: "ISO 30000:2009 for Ship Recycling Management Systems",
    },
    {
      name: "ISO 45001:2018",
      logo: "/assets/certs/iso45001.png",
      description: "Health & Safety Systems",
      details: "ISO 45001:2018 for Occupational Health & Safety Management",
    },
    {
      name: "ISO 14001:2015",
      logo: "/assets/certs/iso14001.png",
      description: "Environmental Management",
      details: "ISO 14001:2015 standard for Environmental Management Systems",
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

  const getCardLayout = () => {
    return "grid-cols-1";
  };

  const renderCardContent = (service: (typeof services)[0]) => {
    return (
      <div className="h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
        </div>
        <div className="p-6">
          <div className="mb-4">
            <div className="text-caption text-brand-blue mb-2">
              {service.subtitle}
            </div>
            <h3 className="text-lg mb-3 text-text-primary font-medium">
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
                  {item.details.map((detail, detailIdx) => (
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
      </div>
    );
  };

  // Navbar links
  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar (always hamburger) */}
      <nav
        className={`fixed z-50 transition-all duration-1000 ease-out ${
          navScrolled
            ? "top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl"
            : "left-1/2 top-8 -translate-x-1/2 w-auto"
        }`}
      >
        <div className="bg-white flex items-center justify-between py-3 px-4 md:px-6 rounded-full transition-all duration-1000 ease-out">
          <img
            src="/assets/logo.png"
            alt="Neptunus Logo"
            className={`w-auto transition-all duration-700 ${
              navScrolled ? "h-8 md:h-10" : "h-10 md:h-12"
            }`}
          />
          <button
            className="p-2 text-black"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute mt-2 glass-panel rounded-2xl p-4 w-11/12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ label, href, active }) => (
                <a
                  key={label}
                  href={href}
                  className={`block text-body transition-colors ${
                    active
                      ? "text-primary font-medium"
                      : "text-text-secondary hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button
                className="mt-2 btn-primary w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "/#contact";
                }}
              >
                Contact
              </button>
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
          <source src="/assets/herov.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 text-center max-w-6xl px-4 md:px-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 text-gradient font-light">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering India's carbon-negative future through sustainable ship
            recycling and circular steel production.
          </p>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 md:space-y-3 animate-float">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-brand-blue animate-bounce" />
          <span className="text-xs md:text-sm text-text-tertiary text-center">
            Scroll to Explore
          </span>
        </div>
      </div>

      {/* Enhanced Certifications Carousel */}
      <section className="section-padding" id="certifications">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-headline mb-4 text-gradient font-medium">
              Certifications & Standards
            </h2>
            <p className="text-body-large text-text-secondary">
              Maintaining the highest industry standards and compliance
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mb-4">
            <button
              className="p-2 hover:bg-surface-elevated rounded-full"
              onClick={() => {
                if (carouselRef.current) carouselRef.current.scrollLeft -= 200;
              }}
            >
              <ChevronLeft className="w-5 h-5 text-text-primary" />
            </button>
            <button
              className="p-2 hover:bg-surface-elevated rounded-full"
              onClick={() => {
                if (carouselRef.current) carouselRef.current.scrollLeft += 200;
              }}
            >
              <ChevronRight className="w-5 h-5 text-text-primary" />
            </button>
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={scrollSpeed}
              onChange={(e) => setScrollSpeed(Number(e.target.value))}
              className="flex-1"
            />
          </div>

          {/* Infinite‑looping carousel */}
          <div
            ref={carouselRef}
            className="flex space-x-12 overflow-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="flex-shrink-0 w-64 h-40 elevated-panel rounded-2xl flex flex-col items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105">
                    <div className="w-16 h-16 mb-3 overflow-hidden rounded-lg">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center px-4">
                      <div className="font-semibold text-text-primary mb-1">
                        {cert.name}
                      </div>
                      <div className="text-xs text-text-secondary">
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
      </section>

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
          <div className="relative overflow-hidden max-w-4xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardIndex * 100}%)` }}
            >
              {services.map((service, index) => (
                <Card
                  key={service.id}
                  className="min-w-full gradient-border hover-lift mx-4 h-80"
                >
                  <CardContent className="p-0 h-full">
                    <div className={`grid gap-0 ${getCardLayout()} h-full`}>
                      {renderCardContent(service)}
                    </div>
                  </CardContent>
                </Card>
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
      <section className="section-padding bg-surface-elevated/20" id="contact">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-headline mb-6 text-gradient font-medium">
              Get In Touch
            </h2>
            <p className="text-body-large text-text-secondary">
              Ready to be part of India's sustainable maritime future?
            </p>
          </div>

          <Card className="gradient-border p-8 lg:p-12">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`bg-surface-elevated border-border/40 text-text-primary h-12 ${
                        formErrors.name ? "border-red-500" : ""
                      }`}
                      placeholder="Your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`bg-surface-elevated border-border/40 text-text-primary h-12 ${
                        formErrors.email ? "border-red-500" : ""
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`bg-surface-elevated border-border/40 text-text-primary h-12 ${
                        formErrors.phone ? "border-red-500" : ""
                      }`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-body font-medium mb-3 text-text-primary">
                      Company *
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className={`bg-surface-elevated border-border/40 text-text-primary h-12 ${
                        formErrors.company ? "border-red-500" : ""
                      }`}
                      placeholder="Your company name"
                    />
                    {formErrors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.company}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-body font-medium mb-3 text-text-primary">
                    Designation *
                  </label>
                  <Input
                    value={formData.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    className={`bg-surface-elevated border-border/40 text-text-primary h-12 ${
                      formErrors.designation ? "border-red-500" : ""
                    }`}
                    placeholder="Your job title"
                  />
                  {formErrors.designation && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.designation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-body font-medium mb-3 text-text-primary">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`bg-surface-elevated border-border/40 text-text-primary h-32 resize-none ${
                      formErrors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Tell us about your requirements..."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary h-14 text-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ExternalLink className="ml-2 w-5 h-5" />
                    </>
                  )}
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

          {/* Social Media Icons */}
          <div className="border-t border-border/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-text-secondary">
                &copy; 2024 Neptunus Ship Builders and Recyclers. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-brand-blue/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-text-secondary hover:text-brand-blue" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-brand-blue/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-text-secondary hover:text-brand-blue" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-brand-blue/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-text-secondary hover:text-brand-blue" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-surface-elevated hover:bg-brand-blue/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-text-secondary hover:text-brand-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
function useRef<T>(initialValue: T | null): { current: T | null } {
  return { current: initialValue };
}

