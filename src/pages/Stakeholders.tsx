// src/pages/Stakeholders.tsx
import { useEffect, useState } from "react";
import {
  Ship,
  Building2,
  DollarSign,
  Users,
  Scale,
  Globe,
  Building,
  ArrowRight,
  CheckCircle,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Stakeholders = () => {
  // Navbar state
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Stakeholders", href: "/stakeholders", active: true },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  const stakeholderGroups = [
    {
      name: "Ship Owners & Shipping Lines",
      icon: Ship,
      color: "from-blue-500 to-blue-600",
      emoji: "🚢",
      tagline: "Turn end-of-life vessels into future savings",
      benefits: [
        "Fast, safe disposal of end-of-life vessels with full IHM and regulatory certification (HKGS, EUSSR)",
        "40% credit note on new-build contracts—turning sustainable disposal into future savings",
        "Peace of mind: no more costly reflagging or beaching risks; a single partner for compliant, carbon-friendly recycling",
      ],
      keyFeatures: [
        "Full IHM Certification",
        "40% Credit Notes",
        "Zero Beaching Risk",
        "HKGS & EUSSR Compliant",
      ],
    },
    {
      name: "Steel Manufacturers & Re-rollers",
      icon: Building2,
      color: "from-orange-500 to-red-500",
      emoji: "⚒️",
      tagline: "Secure low-carbon feedstock with full traceability",
      benefits: [
        "Guaranteed low-carbon feedstock: secure contracts for millions of tonnes of scrap steel, all traceable via digital chain-of-custody",
        "One-stop shop: certified dismantling + re-rolling under one roof—streamlining logistics and quality control",
        "ESG uplift: every tonne you melt reduces your portfolio's carbon footprint via EAF processing",
      ],
      keyFeatures: [
        "Digital Chain-of-Custody",
        "Certified Quality",
        "EAF Processing",
        "ESG Compliance",
      ],
    },
    {
      name: "Investors & Financial Institutions",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600",
      emoji: "💼",
      tagline: "First-mover advantage in green steel revolution",
      benefits: [
        "First-mover advantage: back the world's largest green-steel facility, UN-certified from day one",
        "Robust returns: lifecycle CO₂-reduction estimates and IRR case studies underpinned by government support",
        "Guaranteed market: with India's '30% green-steel mandate,' one in three tonnes must be recycled—locking in future buyers",
        "Strategic hedge: shipping lines face mounting costs to reflag; our solution lets them comply without expense",
      ],
      keyFeatures: [
        "UN Certification",
        "Government Support",
        "Guaranteed Market",
        "Strategic Positioning",
      ],
    },
    {
      name: "Local Communities & Workforce",
      icon: Users,
      color: "from-green-500 to-green-600",
      emoji: "🏘️",
      tagline: "Safe jobs, skills development, and community uplift",
      benefits: [
        "Safe, skilled jobs: cutting-edge equipment, zero-accident pledge, and OSHA-grade protocols",
        "Capacity building: on-site training programs, apprenticeships, and an aspirational '70% local hire' target",
        "Community uplift: new schools, affordable housing, and a modern medical clinic—because your well-being powers our progress",
        "Pride of place: become part of Odisha's green-industry revolution and global climate story",
      ],
      keyFeatures: [
        "Zero-Accident Pledge",
        "70% Local Hire Target",
        "Training Programs",
        "Community Infrastructure",
      ],
    },
    {
      name: "Regulators & NGOs",
      icon: Scale,
      color: "from-teal-500 to-teal-600",
      emoji: "⚖️",
      tagline: "Transparency, compliance, and environmental partnership",
      benefits: [
        "Full transparency: real-time environmental dashboards, periodic third-party audits, and public sustainability reports",
        "Iron-clad compliance: Basel/UNEP alignment, IMO/EU Ship Recycling Regulation, plus local EIA and CRZ clearances",
        "True partnership: collaborate on best practices and shape a blueprint for safe, circular-economy growth",
      ],
      keyFeatures: [
        "Real-time Dashboards",
        "Third-party Audits",
        "Basel/UNEP Alignment",
        "Partnership Model",
      ],
    },
    {
      name: "Global Partners & Climate Advocates",
      icon: Globe,
      color: "from-indigo-500 to-indigo-600",
      emoji: "🌍",
      tagline: "Leading India's circular economy transformation",
      benefits: [
        "Leadership showcase: highlight India's circular-economy triumph alongside EU, Japan, and Polish collaborators",
        "R&D pipelines: co-develop next-gen recycling technologies and green-hydrogen integration",
        "Storytelling: joint press and thought-leadership platforms to amplify impact and attract co-investment",
      ],
      keyFeatures: [
        "Global Collaboration",
        "R&D Innovation",
        "Thought Leadership",
        "Impact Amplification",
      ],
    },
    {
      name: "Government & Policy Makers",
      icon: Building,
      color: "from-yellow-500 to-orange-500",
      emoji: "🏛️",
      tagline: "Catalyzing industrial transformation and rural prosperity",
      benefits: [
        "New industrial cluster: catalyze Ganjam's transformation into a maritime-green hub, driving rural prosperity",
        "Budget leverage: tap into ₹1,624 Cr over five years under the Ship-Flagging Subsidy (Union Budget 2021-22)",
        "Legislative alignment: deliver on the Recycling of Ships Act 2019 (4.5 M LDT capacity by 2024) and Maritime India Vision 2030",
        "PPP excellence: structured as a DBFOT model with performance-based incentives—sharing risk, reward, and regulatory ease",
      ],
      keyFeatures: [
        "Industrial Cluster",
        "Budget Leverage",
        "Legislative Alignment",
        "PPP Model",
      ],
    },
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
            onClick={() => setMobileMenuOpen(o => !o)}
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

      {/* Hero Section (moved down, reduced whitespace) */}
      <section className="pt-28 pb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-text-primary mb-4">
              Stakeholder Benefits
            </h1>
            <p className="text-title text-text-secondary mb-4">
              Discover how Neptunus creates value for every stakeholder in the maritime and steel ecosystem
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">7</div>
                <div className="text-body text-text-secondary">Stakeholder Groups</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">100%</div>
                <div className="text-body text-text-secondary">Value Creation</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">360°</div>
                <div className="text-body text-text-secondary">Comprehensive Benefits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Groups */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom space-y-12">
          {stakeholderGroups.map((group, idx) => (
            <Card key={idx} className="elevated-panel overflow-hidden">
              <div className="grid lg:grid-cols-12">
                {/* Header */}
                <div className={`lg:col-span-4 bg-gradient-to-br ${group.color} p-8 lg:p-12 text-white`}>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{group.emoji}</div>
                      <group.icon className="h-8 w-8" />
                    </div>
                    <div>
                      <h2 className="text-headline font-bold mb-3">{group.name}</h2>
                      <p className="text-body-large opacity-90">{group.tagline}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.keyFeatures.map((feat, i2) => (
                        <Badge
                          key={i2}
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30"
                        >
                          {feat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Benefits */}
                <div className="lg:col-span-8 p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-title font-bold text-text-primary mb-4">
                        What's in it for you?
                      </h3>
                      <div className="space-y-4">
                        {group.benefits.map((b, i3) => (
                          <div key={i3} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-4 flex-shrink-0 mt-0.5" />
                            <p className="text-body text-text-secondary leading-relaxed">
                              {b}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-background/50 p-6 rounded-lg border-l-4 border-primary">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-body-large font-semibold text-text-primary mb-2">
                            Ready to Partner?
                          </h4>
                          <p className="text-body text-text-secondary">
                            Learn more about opportunities and how we can create value together
                          </p>
                        </div>
                        <Button variant="outline" className="ml-4 group">
                          <a href="/#contact" className="flex items-center">
                            Connect
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-4">
              Become a Stakeholder
            </h2>
            <p className="text-title text-primary-foreground/90 mb-6">
              Join us in transforming the maritime industry and building a sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/#contact" className="flex items-center">
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/services">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;
