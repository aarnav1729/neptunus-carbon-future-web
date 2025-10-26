// src/pages/Index.tsx
import { useEffect, useState, useRef, useMemo } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useToast } from "@/hooks/use-toast";
import shipbuild from "@/assets/ship1.jpeg";
import low1 from "@/assets/low1.jpeg";
import policy1 from "@/assets/policy1.jpeg";
import part1 from "@/assets/part1.jpeg";
import stake1 from "@/assets/stake1.jpeg";
import team1 from "@/assets/deepak.jpeg";
import team2 from "@/assets/satish.jpeg";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Animated metrics
  const [animatedNumbers, setAnimatedNumbers] = useState({
    steel: 0,
    gdp: 0,
    jobs: 0,
    carbon: 0,
  });

  // Navbar + UI state (match Services.tsx pattern)
  const [navScrolled, setNavScrolled] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState(1);
  const servicesRailRef = useRef<HTMLDivElement>(null);

  const [carouselPaused, setCarouselPaused] = useState(false);
  const [selectedCert, setSelectedCert] = useState<
    (typeof certifications)[number] | null
  >(null);
  const [overlayTextClass, setOverlayTextClass] = useState<
    "text-black" | "text-white"
  >("text-black");

  // Contact form
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

  const pickTextClassFromBg = (el: HTMLElement | null) => {
    try {
      if (!el) return "text-black";
      const bg = getComputedStyle(el).backgroundColor; // e.g. "rgb(231, 229, 228)"
      const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
      if (!match) return "text-black";
      const [r, g, b] = [Number(match[1]), Number(match[2]), Number(match[3])];

      // sRGB -> relative luminance
      const toLin = (v: number) => {
        const s = v / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
      };
      const L = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
      // If background is bright, use dark text; else white text
      return L > 0.5 ? "text-black" : "text-white";
    } catch {
      return "text-black";
    }
  };

  // Handle scroll for navigation (same threshold behavior)
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // center the middle copy on mount
    const rail = servicesRailRef.current;
    if (!rail) return;
    const child = rail.children.item(BASE_OFFSET) as HTMLElement | null;
    if (child) {
      child.scrollIntoView({
        behavior: "auto",
        inline: "center",
        block: "nearest",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let animationId: number;
    const step = () => {
      const el = carouselRef.current;
      if (el && !carouselPaused) {
        el.scrollLeft += FIXED_SCROLL_SPEED;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft -= el.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(step);
    };
    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [carouselPaused]);

  // Metric counters
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
          animateNumber("jobs", 22000, 2000);
          animateNumber("carbon", 835, 2000);
        }
      });
    });

    const metricsElement = document.getElementById("metrics");
    if (metricsElement) observer.observe(metricsElement);
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
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

  const FIXED_SCROLL_SPEED = 3; // ~40% of prior slider's max speed

  // Cards content
  const services = [
    {
      id: "services",
      title: "Ship Recycling & Building",
      subtitle: "Comprehensive Maritime Solutions",
      image: shipbuild,
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
      image: low1,
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
      image: part1,
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
      image: policy1,
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
    {
      id: "stakeholders",
      title: "What's In It for You?",
      subtitle: "Holistic Stakeholder Benefits",
      image: stake1,
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
  ];

  // Certifications carousel data
  const certifications = [
    {
      name: "HKC – Hong Kong Convention",
      logo: "/assets/HKC.png",
      description: "IMO aligned",
      details: "Hong Kong Green Standard aligned with IMO guidelines",
    },
    {
      name: "EUSSR",
      logo: "/assets/eussr.jpg",
      description: "meets EU Ship Recycling Regulation",
      details: "Compliant with the EU Ship Recycling Regulation",
    },
    {
      name: "UNEP / Basel Convention",
      logo: "/assets/unepp.png",
      description: "for hazardous materials",
      details: "Aligned with UNEP / Basel Convention for hazardous materials",
    },
    {
      name: "SA 8000",
      logo: "/assets/SA8000.png",
      description: "Administered by SAI",
      details: "Social Accountability International standard SA 8000",
    },
    {
      name: "IHM (Part 1-3)",
      logo: "/assets/IHM.jpg",
      description: "per IMO MEPC.269(68)",
      details:
        "Inventory of Hazardous Materials (Parts 1–3) per IMO MEPC.269(68)",
    },
    {
      name: "ISO 9001:2015",
      logo: "/assets/ISO9001.png",
      description: "Quality Management Systems",
      details: "ISO 9001:2015 standard for Quality Management Systems",
    },
    {
      name: "ISO 30000:2009",
      logo: "/assets/iso30000.png",
      description: "Ship Recycling Management",
      details: "ISO 30000:2009 for Ship Recycling Management Systems",
    },
    {
      name: "ISO 45001:2018",
      logo: "/assets/iso45001.webp",
      description: "Health & Safety Systems",
      details: "ISO 45001:2018 for Occupational Health & Safety Management",
    },
    {
      name: "ISO 14001:2015",
      logo: "/assets/iso-14001.jpg",
      description: "Environmental Management",
      details: "ISO 14001:2015 standard for Environmental Management Systems",
    },

    {
      name: "The Recycling of Ships Act 2019",
      logo: "/assets/c8.jpeg",
      description: "Recycling of Ships Act",
      details:
        "The Recycling of Ships Act 2019 for safe ship recycling adherent to Indian Maritime Laws.",
    },

    {
      name: "Ship Breaking Code 2013",
      logo: "/assets/c9.png",
      description: "Ship Breaking Code",
      details:
        "The Ship Breaking Code 2013 issed by the Ministry of Ports, Shipping, and Waterways, Government of India.",
    },
  ];

  const teamMembers = [
    {
      name: "Deepak Pillapalem",
      position: "Managing Director",
      image: team1,
      details:
        "Deepak Reddy Pillapalem is the Founder and Managing Director of Neptunus Shipbreaking & Recycling Pvt Ltd. With over 20 years of real estate development expertise, he has driven exceptional growth in the sector—channeling his strategic vision into sustainable ship recycling, steel re-rolling, renewable-energy integration, and community-driven partnerships. Under his leadership, Neptunus will become India’s first facility fully compliant with both the EU Ship Recycling Regulation and the Hong Kong Convention. He holds a Bachelor’s degree in Civil Engineering from CBIT Hyderabad and a Master’s degree in Urban Planning from the University of Cleveland. He has secured multimillion-dollar financing, forged strategic partnerships with local cooperatives, and consistently delivers strong returns—driving stakeholder value, uplifting communities, and championing green innovations.",
    },
    {
      name: "Satish Burugupalli",
      position: "Executive Director",
      image: team2,
      details:
        "Satish Burugupalli is the Executive Director of Neptunus Shipbreaking & Recycling, bringing over 15 years of operational leadership in maritime engineering and sustainable infrastructure. He oversees high-impact projects—from greenfield plant expansions to renewable-energy integration—ensuring full compliance with international ship-recycling regulations while delivering on-time, on-budget performance. Satish secures strategic alliances with government agencies and local cooperatives, drives solar-park and waste-heat recovery initiatives to minimize carbon footprints, and champions workforce development programs that uplift surrounding communities.",
    },
  ];

  // Stakeholder tabs (names align with Stakeholders page)
  const stakeholderTabs = [
    {
      value: "Ship Owners & Shipping Lines",
      label: "Ship Owners",
      headline: "Fulfill your EOL vessel goals with ease",
      copy: "Fast, safe disposal with full IHM & EU/HKC compliance—no beaching risks and a single partner you can trust.",
      bullets: [
        "Full IHM & EUSSR certification",
        "40% credit note on new-build contracts",
      ],
    },
    {
      value: "Steel Manufacturers & Re-rollers",
      label: "Steel Manufacturers",
      headline: "Reliable low-carbon feedstock, fully traceable",
      copy: "Certified dismantling + re-rolling under one roof. Digital chain-of-custody and EAF-ready scrap.",
      bullets: [
        "Digital chain-of-custody",
        "Certified quality & EAF processing",
      ],
    },
    {
      value: "Investors & Financial Institutions",
      label: "Investors",
      headline: "Back the green-steel revolution confidently",
      copy: "UN-aligned standards, government support, and a guaranteed demand tailwind for recycled steel.",
      bullets: ["UN alignment & policy support", "Strong ESG & market demand"],
    },
    {
      value: "Social & Community Infrastructure",
      label: "Communities",
      headline: "Create safe jobs and shared prosperity",
      copy: "Zero-accident pledge, skill development, and community infrastructure that uplifts families.",
      bullets: ["90% local hire target", "Training & medical facilities"],
    },
    {
      value: "Regulators & NGOs",
      label: "Regulators & NGOs",
      headline: "Transparency and compliance by design",
      copy: "Real-time dashboards, third-party audits, and Basel/UNEP alignment for true accountability.",
      bullets: ["Dashboards & audits", "Basel/UNEP alignment"],
    },
    {
      value: "Global Partners & Climate Advocates",
      label: "Global Partners",
      headline: "Scale circular impact together",
      copy: "Co-develop next-gen recycling tech and amplify climate leadership across markets.",
      bullets: ["R&D collaboration", "Thought leadership"],
    },
    {
      value: "Government & Policy Makers",
      label: "Policy Makers",
      headline: "Catalyze an industrial green cluster",
      copy: "Deliver on national targets with a PPP-ready model, strong compliance, and rural prosperity.",
      bullets: ["PPP model", "Legislative alignment"],
    },
  ];

  // Reuse your existing images for the collage (3 vertical slices)
  const collageImages = [stake1, part1, low1];

  // one image per tab (reuse existing imports: stake1, part1, low1)
  const stakeholderImages = [stake1, part1, low1];

  // Slider navigation
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

  const BASE_OFFSET = services.length;
  const servicesLoop = useMemo(
    () => [...services, ...services, ...services],
    [services]
  );

  useEffect(() => {
    // whenever index changes, scroll to the middle copy + index
    const rail = servicesRailRef.current;
    if (!rail) return;
    const targetIndex = BASE_OFFSET + currentCardIndex;
    const child = rail.children.item(targetIndex) as HTMLElement | null;
    if (child) {
      child.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentCardIndex, BASE_OFFSET]);

  // Navbar links (Services.tsx parity)
  const navLinks = [
    { label: "Home", href: "/", active: true },
    { label: "Services", href: "/services" },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar (exact structure & style from Services.tsx) */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50 pt-4 transition-all duration-500 ease-out">
        <div className="flex items-center justify-between py-4 px-6 rounded-2xl bg-stone-200 backdrop-blur-lg shadow-lg ring-1 ring-white/10">
          <img
            src="/assets/logo.png"
            alt="Neptunus Logo"
            className="h-10 md:h-12 w-auto transition-all duration-300"
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
          <div className="absolute mt-2 right-0 w-1/2 rounded-2xl bg-stone-200 text-black backdrop-blur-lg shadow-lg ring-1 ring-white/10 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ label, href, active }) => (
                <Link
                  key={label}
                  to={href}
                  className={`block text-lg ${
                    active
                      ? "text-green-900 font-medium"
                      : "hover:text-green-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                className="mt-2 btn bg-yellow-500 border-black rounded-lg p-2 text-white w-full text-lg"
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

      {/* Hero Section (video + Services color scheme overlay) */}
      <div className="relative h-screen flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/assets/herov.mp4" type="video/mp4" />
        </video>

        {/* Services green gradient veil 
        <div className="absolute inset-0 bg-gradient-to-r from-green-300/20 to-green-500/20" />*/}

        <div className="relative z-10 text-center max-w-6xl px-4 md:px-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 md:mb-8 font-bold text-stone-200">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed text-stone-200">
            Pioneering India's carbon-negative future through sustainable ship
            recycling and circular steel production.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="group text-white bg-green-900"
            >
              <a href="/#contact" className="flex items-center">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-white bg-yellow-500 hover:bg-primary-foreground hover:text-primary"
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 md:space-y-3">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-stone-200 animate-bounce" />
          <span className="text-xs md:text-sm text-stone-200">
            Scroll to Explore
          </span>
        </div>
      </div>

      {/* Certifications (full-width, auto-moving, click to pause + quick view) */}
      <section
        id="certifications"
        className="pt-10 pb-10 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]"
      >
        {/* Keep the heading constrained for readability */}
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-headline mb-4 font-bold text-white">
              Certifications & Standards
            </h2>
            <p className="text-body-large text-white/70">
              Maintaining the highest industry standards and compliance
            </p>
          </div>
        </div>

        {/* Edge-to-edge rail */}
        <div className="w-screen max-w-none overflow-hidden">
          <div
            ref={carouselRef}
            className="flex space-x-16 overflow-hidden px-6 sm:px-8 md:px-10"
            style={{ scrollBehavior: "auto" }}
          >
            {[...certifications, ...certifications].map((cert, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  {/* CARD */}
                  <div
                    className="flex-shrink-0 w-80 h-56 elevated-panel rounded-2xl flex flex-col items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105 bg-stone-200"
                    onClick={(e) => {
                      // Pick best text color from the clicked card's background
                      setOverlayTextClass(pickTextClassFromBg(e.currentTarget));
                      setSelectedCert(cert);
                      setCarouselPaused(true);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setOverlayTextClass(
                          pickTextClassFromBg(e.currentTarget as HTMLElement)
                        );
                        setSelectedCert(cert);
                        setCarouselPaused(true);
                      }
                    }}
                  >
                    <div className="w-24 h-24 mb-4 overflow-hidden rounded-lg bg-white">
                      <img
                        src={cert.logo}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-center px-6">
                      <div className="font-semibold text-lg text-black mb-2">
                        {cert.name}
                      </div>
                      <div className="text-sm text-black/70">
                        {cert.description}
                      </div>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-96 p-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-xl">{cert.name}</h4>
                    <p className="text-base text-black/80">{cert.details}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>

        {/* Quick View Overlay (click anywhere to resume) */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => {
              setSelectedCert(null);
              setCarouselPaused(false);
            }}
            role="button"
            aria-label="Close certification quick view"
          >
            {/* Stop click bubbling inside the panel */}
            <div
              className="max-w-xl w-full rounded-2xl shadow-xl p-6 sm:p-8 bg-stone-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 sm:gap-6 mb-5">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={selectedCert.logo}
                    alt={selectedCert.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`text-xl sm:text-2xl font-semibold ${overlayTextClass} truncate`}
                  >
                    {selectedCert.name}
                  </h3>
                  <p
                    className={`text-sm sm:text-base ${
                      overlayTextClass === "text-white"
                        ? "text-white/80"
                        : "text-black/70"
                    } truncate`}
                  >
                    {selectedCert.description}
                  </p>
                </div>
              </div>

              <div
                className={`${
                  overlayTextClass === "text-white"
                    ? "text-white/90"
                    : "text-black/80"
                } leading-relaxed`}
              >
                {selectedCert.details}
              </div>

              <div className="mt-6 flex items-center justify-end">
                <button
                  onClick={() => {
                    setSelectedCert(null);
                    setCarouselPaused(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-green-900 text-white hover:bg-green-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services – large single-focus card with side peek, tighter spacing after Certifications */}
      <section
        id="services-section"
        className="relative section-padding pt-6 md:pt-8 bg-white text-black"
      >
        <div className="container-custom max-w-[1600px]">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-headline mb-4 font-bold">Our Capabilities</h2>
            <p className="text-body-large text-black/70 max-w-3xl mx-auto">
              Comprehensive solutions for sustainable maritime operations
            </p>
          </div>
{/*
          {/* Rail with scroll snap; wider, padded, peeks on both sides */}
          <div className="relative">
            <div
              ref={servicesRailRef}
              className="flex gap-6 md:gap-8 px-4 md:px-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {servicesLoop.map((service, idx) => (
                <div
                  key={`${service.id}-${idx}`}
                  className="shrink-0 snap-center w-[90%] sm:w-[86%] md:w-[84%] lg:w-[80%] xl:w-[76%]"
                >
                  <div
                    className="group relative h-[460px] sm:h-[500px] lg:h-[560px] rounded-2xl overflow-hidden ring-1 ring-stone-200 hover:ring-stone-300 transition cursor-pointer bg-stone-200"
                    onClick={() =>
                      navigate(
                        {
                          services: "/services",
                          partners: "/services",
                          impact: "/partners",
                          policy: "/impact",
                          stakeholders: "/stakeholders",
                        }[service.id] || "/"
                      )
                    }
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(
                          {
                            services: "/services",
                            partners: "/services",
                            impact: "/partners",
                            policy: "/impact",
                            stakeholders: "/stakeholders",
                          }[service.id] || "/"
                        );
                      }
                    }}
                  >
                    {/* Background image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Hover veil */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />

                    {/* Top-left meta pill */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="bg-white/80 backdrop-blur-md ring-1 ring-white/40 text-black rounded-xl px-4 py-2">
                        <span className="text-[11px] tracking-widest uppercase opacity-90">
                          {service.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Bottom-left title & CTA */}
                    <div className="absolute left-5 right-5 bottom-5 z-10">
                      <h3 className="text-3xl md:text-4xl font-semibold leading-tight text-white drop-shadow">
                        {service.title}
                      </h3>
                      <div className="mt-3 inline-flex items-center text-white/90 text-sm">
                        <span className="underline underline-offset-4 decoration-white/40">
                          Explore
                        </span>
                        <ArrowRight className="ml-2 w-4 h-4 translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows (always visible; inside the padded area) */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4 md:px-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateCards("left");
                }}
                className="pointer-events-auto p-3 bg-white/80 hover:bg-white rounded transition-colors shadow"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateCards("right");
                }}
                className="pointer-events-auto p-3 bg-white/80 hover:bg-white rounded transition-colors shadow"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCardIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentCardIndex ? "bg-green-600" : "bg-stone-300"
                }`}
              />
            ))}
          </div>
        </div>
*/}
      </section>

      {/* Impact Metrics */}
      <section
        id="metrics"
        className="pt-1 pb-10 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588] text-black"
      >
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-headline text-white font-bold mb-4 mt-10">
              Impact Metrics
            </h2>
            <p className="text-body-large text-white/70">
              Measurable results driving sustainable change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8 hover-lift bg-stone-200">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4 text-green-700">
                  {animatedNumbers.steel}M
                </div>
                <div className="text-body font-medium text-black mb-2">
                  MT Steel Recovered
                </div>
                <div className="text-sm text-black/70">
                  Annual processing capacity
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-lift bg-stone-200">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4 text-green-700">
                  ${animatedNumbers.gdp}B+
                </div>
                <div className="text-body font-medium text-black mb-2">
                  GDP Contribution
                </div>
                <div className="text-sm text-black/70">
                  Economic impact to Odisha
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-lift bg-stone-200">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4 text-green-700">
                  {animatedNumbers.jobs.toLocaleString()}
                </div>
                <div className="text-body font-medium text-black mb-2">
                  Direct and Indirect Jobs
                </div>
                <div className="text-sm text-black/70">
                  Employment opportunities
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover-lift bg-stone-200">
              <CardContent className="p-0">
                <div className="text-5xl font-bold mb-4 text-green-700">
                  {(animatedNumbers.carbon / 100).toFixed(1)}M
                </div>
                <div className="text-body font-medium text-black mb-2">
                  T CO₂ Avoided
                </div>
                <div className="text-sm text-black/70">
                  Annual carbon reduction
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-12 hover-lift bg-white/95">
              <CardContent className="p-0">
                <div className="text-caption text-green-800 mb-4">
                  OUR MISSION
                </div>
                <h3 className="text-title mb-6 font-bold text-black">
                  Integrity and Commitment
                </h3>
                <p className="text-body-large font-medium mb-6 text-black">
                  Combating climate change through sustainable practices.
                </p>
                <p className="text-body text-black/80 leading-relaxed">
                  "To create a vertically integrated ship recycling facility
                  while upholding the highest labour safety and environmental
                  sustainability standards."
                </p>
              </CardContent>
            </Card>

            <Card className="p-12 hover-lift bg-white/95">
              <CardContent className="p-0">
                <div className="text-caption text-green-800 mb-4">
                  OUR VISION
                </div>
                <h3 className="text-title mb-6 font-bold text-black">
                  Leading India's Future
                </h3>
                <p className="text-body-large font-medium mb-6 text-black">
                  Transition to a carbon-secure future through innovation.
                </p>
                <p className="text-body text-black/80 leading-relaxed">
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

      {/* Stakeholder Solutions (tabs + single image, enhanced) */}
      <section className="py-20 md:py-24 bg-stone-200">
        <div className="container-custom max-w-6xl">
          <h2 className="text-headline font-bold text-black text-center mb-8 md:mb-10">
            Solutions to Power Your Sustainability Goals
          </h2>

          <Tabs defaultValue={stakeholderTabs[0].value} className="w-full">
            {/* Pill tabs — mobile scrollable, centered on larger screens */}
            <TabsList
              className="
          mx-auto mb-10 flex max-w-full items-center gap-2 rounded-full bg-white/90 p-1.5 shadow
          overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          md:justify-center
        "
            >
              {stakeholderTabs.map((t) => (
                <TabsTrigger
                  key={t.value}
                  value={t.value}
                  className="
              whitespace-nowrap rounded-full px-4 py-2 text-sm md:text-base text-black transition
              hover:bg-stone-100
              data-[state=active]:bg-green-900 data-[state=active]:text-white data-[state=active]:shadow
              data-[state=active]:ring-2 data-[state=active]:ring-green-700/30
            "
                >
                  {t.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Panels */}
            {stakeholderTabs.map((t, i) => (
              <TabsContent key={t.value} value={t.value} className="mt-0">
                {/* Image + overlays */}
                <div className="group relative overflow-hidden rounded-3xl ring-1 ring-stone-300/60 bg-white">
                  {/* Single responsive image */}
                  <div className="relative aspect-[16/9] sm:aspect-[18/9] md:aspect-[20/9]">
                    <img
                      src={stakeholderImages[i % stakeholderImages.length]}
                      alt={t.label}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {/* subtle vignette for depth */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                  </div>

                  {/* Overlay card (desktop) */}
                  <Card
                    className="
              hidden md:block
              absolute left-6 top-6 lg:left-8 lg:top-8
              max-w-lg lg:max-w-xl bg-white/95 backdrop-blur-md shadow-2xl ring-1 ring-stone-200
              rounded-2xl
            "
                  >
                    <CardContent className="p-6 lg:p-7">
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-3 lg:mb-4">
                        {t.headline}
                      </h3>
                      <p className="text-black/80 leading-relaxed mb-5">
                        {t.copy}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {t.bullets.map((b, idx) => (
                          <li key={idx} className="flex items-start text-black">
                            <span className="mt-2 mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-700" />
                            <span className="text-sm">{b}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        asChild
                        className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-xl px-5"
                      >
                        <a href="/stakeholders">Explore More</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Stacked card (mobile) */}
                <Card className="mt-4 md:hidden bg-white shadow-lg ring-1 ring-stone-200 rounded-2xl">
                  <CardContent className="p-5">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {t.headline}
                    </h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                      {t.copy}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {t.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start text-black">
                          <span className="mt-2 mr-2 inline-block h-1.5 w-1.5 rounded-full bg-green-700" />
                          <span className="text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-yellow-500 text-black hover:bg-yellow-600 rounded-xl"
                    >
                      <a href="/stakeholders">Explore More</a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white text-black" id="contact">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-headline font-bold mb-6">Get In Touch</h2>
            <p className="text-body-large text-black/70">
              Ready to be part of India's sustainable maritime future?
            </p>
          </div>

          <Card className="p-8 lg:p-12 bg-stone-200">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-body text-black font-medium mb-3">
                      Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`h-12 bg-white text-black placeholder:text-black caret-black ${
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
                    <label className="block text-black text-body font-medium mb-3">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`h-12 bg-white text-black placeholder:text-black caret-black ${
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
                    <label className="block text-black text-body font-medium mb-3">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`h-12 bg-white text-black placeholder:text-black caret-black ${
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
                    <label className="block text-black text-body font-medium mb-3">
                      Company *
                    </label>
                    <Input
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className={`h-12 bg-white text-black placeholder:text-black caret-black ${
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
                  <label className="block text-body text-black font-medium mb-3">
                    Designation *
                  </label>
                  <Input
                    value={formData.designation}
                    onChange={(e) =>
                      handleInputChange("designation", e.target.value)
                    }
                    className={`h-12 bg-white text-black placeholder:text-black caret-black ${
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
                  <label className="block text-black text-body font-medium mb-3">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`h-32 resize-none bg-white text-black placeholder:text-black caret-black ${
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
                  className="w-full h-14 text-lg disabled:opacity-50 bg-green-900 text-white hover:bg-green-800"
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
      <footer className="bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588] section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img
                src="/assets/logo.png"
                alt="Neptunus Logo"
                className="bg-white rounded-lg m-3 h-12 w-auto mb-6"
              />
              <p className="text-stone-200 leading-relaxed">
                Pioneering India's carbon-negative future through sustainable
                ship recycling and circular steel production.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-stone-200">
                <li className="hover:text-white cursor-pointer transition-colors">
                  Ship Recycling
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Steel Re-Rolling
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Shipbuilding & Repair
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-stone-200">
                <li className="hover:text-white cursor-pointer transition-colors">
                  About Us
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Our Team
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Certifications
                </li>
                <li className="hover:text-white cursor-pointer transition-colors">
                  Sustainability
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Contact</h4>
              <div className="space-y-4 text-stone-200">
                <div className="flex items-center space-x-3 hover:text-white cursor-pointer transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@neptunus.in</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white cursor-pointer transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+91 xxx xxx xxxx</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white cursor-pointer transition-colors">
                  <MapPin className="w-5 h-5" />
                  <span>Odisha, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-stone-200">
                &copy; 2024 Neptunus Ship Builders and Recyclers. All rights
                reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-stone-200 hover:text-white" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-stone-200 hover:text-white" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-stone-200 hover:text-white" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-stone-200 hover:text-white" />
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
