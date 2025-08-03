// src/pages/Partners.tsx
import { useEffect, useState } from "react";
import {
  Building,
  Award,
  Globe,
  Handshake,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Users as UsersIcon,
  Lightbulb,
  DollarSign,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Partners = () => {
  // Navbar state
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners", active: true },
  ];

  const strategicPartners = [
    {
      name: "Odisha Maritime Board",
      type: "Government Partnership",
      description:
        "MoU modeled after Alang improvements with JICA collaboration",
      logo:
        "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Strategic MoU",
      scope: "Maritime Infrastructure Development",
      benefits: [
        "Knowledge transfer from Alang facility improvements",
        "Best practices in ship recycling operations",
        "Regulatory compliance framework",
      ],
    },
    {
      name: "JICA (Japan International Cooperation Agency)",
      type: "International Development",
      description: "Technical cooperation for sustainable ship recycling practices",
      logo:
        "https://images.unsplash.com/photo-1562789639-1e4b1e7a7c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Technical Cooperation",
      scope: "Technology Transfer & Training",
      benefits: [
        "Advanced ship dismantling technologies",
        "Worker safety and training programs",
        "Environmental protection standards",
      ],
    },
    {
      name: "EU Maritime Partners",
      type: "Regulatory Compliance",
      description: "Collaboration with European partners for EUSSR compliance",
      logo:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      partnership: "Compliance Partnership",
      scope: "EU Ship Recycling Regulation",
      benefits: [
        "EUSSR certification support",
        "European market access",
        "International standards alignment",
      ],
    },
  ];

  const globalMemberships = [
    {
      name: "UN Global Compact",
      description: "World's largest corporate sustainability initiative",
      logo:
        "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      focus: "Sustainable Development Goals",
      principles: [
        "Human Rights Protection",
        "Labor Standards",
        "Environmental Stewardship",
        "Anti-Corruption Practices",
      ],
    },
    {
      name: "Bureau of International Recycling (BIR)",
      description: "Leading international trade association for recycling industries",
      logo:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      focus: "Circular Economy Leadership",
      principles: [
        "Sustainable Recycling Practices",
        "Industry Best Practices",
        "Global Trade Standards",
        "Innovation in Recycling",
      ],
    },
    {
      name: "International Maritime Organization (IMO)",
      description: "UN specialized agency for maritime safety and environmental protection",
      logo:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      focus: "Maritime Safety & Environment",
      principles: [
        "Ship Recycling Standards",
        "Environmental Compliance",
        "Safety Protocols",
        "International Regulations",
      ],
    },
    {
      name: "India Green Building Council",
      description: "Leading green building certification body in India",
      logo:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      focus: "Sustainable Infrastructure",
      principles: [
        "Green Building Standards",
        "Energy Efficiency",
        "Sustainable Design",
        "Environmental Performance",
      ],
    },
  ];

  const localPartners = [
    {
      name: "Odisha State Pollution Control Board",
      role: "Environmental Oversight",
      collaboration: "Environmental compliance and monitoring",
      impact: "Ensuring zero environmental impact operations",
    },
    {
      name: "Local Cooperatives & NGOs",
      role: "Community Development",
      collaboration: "Workforce development and community programs",
      impact: "70% local hiring and skill development",
    },
    {
      name: "Technical Universities",
      role: "Research & Development",
      collaboration: "Innovation in recycling technologies",
      impact: "Next-generation sustainable practices",
    },
    {
      name: "Financial Institutions",
      role: "Project Financing",
      collaboration: "Green financing and ESG compliance",
      impact: "Sustainable funding for expansion",
    },
  ];

  const certificationBodies = [
    {
      name: "Lloyd's Register",
      service: "Classification & Certification",
      certifications: ["ISO 14001", "ISO 45001", "HKGS"],
      logo:
        "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Bureau Veritas",
      service: "Third-Party Auditing",
      certifications: ["EUSSR", "Basel Convention", "ISO 9001"],
      logo:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "DNV GL",
      service: "Technical Verification",
      certifications: ["Ship Recycling Plan", "IHM Verification"],
      logo:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar */}
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
      <section className="pt-28 pb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-text-primary mb-4">
              Partners & Affiliations
            </h1>
            <p className="text-title text-text-secondary mb-4">
              Building a global network of partnerships for sustainable ship recycling and circular economy leadership
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  20+
                </div>
                <div className="text-body text-text-secondary">
                  Strategic Partners
                </div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  15+
                </div>
                <div className="text-body text-text-secondary">
                  Global Memberships
                </div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-body text-text-secondary">
                  Compliance Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Strategic Partners
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Key partnerships enabling our world-class operations and regulatory compliance
            </p>
          </div>
          <div className="grid gap-8">
            {strategicPartners.map((p, idx) => (
              <Card key={idx} className="elevated-panel overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex justify-center">
                    <div className="text-center">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                      />
                      <Badge variant="secondary" className="mb-2">
                        {p.type}
                      </Badge>
                      <h3 className="text-body-large font-bold text-text-primary">
                        {p.name}
                      </h3>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <p className="text-body text-text-secondary leading-relaxed">
                        {p.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-2">
                            Partnership:
                          </h4>
                          <Badge variant="outline" className="border-primary text-primary">
                            {p.partnership}
                          </Badge>
                        </div>
                        <div>
                          <h4 className="text-body font-semibold text-text-primary mb-2">
                            Scope:
                          </h4>
                          <span className="text-body text-text-secondary">
                            {p.scope}
                          </span>
                        </div>
                      </div>
                      <div className="bg-background/50 p-6 rounded-lg">
                        <h4 className="text-body-large font-semibold text-text-primary mb-4">
                          Key Benefits:
                        </h4>
                        <div className="space-y-3">
                          {p.benefits.map((b, i2) => (
                            <div key={i2} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                              <span className="text-body text-text-secondary">{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Memberships */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Global Memberships & Affiliations
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Active membership in leading international organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {globalMemberships.map((m, idx) => (
              <Card key={idx} className="glass-panel">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={m.logo}
                      alt={m.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-body-large text-text-primary">
                        {m.name}
                      </CardTitle>
                      <Badge variant="outline" className="mt-2">
                        {m.focus}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-body text-text-secondary">
                    {m.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <h4 className="text-body-large font-semibold text-text-primary mb-4">
                    Core Principles:
                  </h4>
                  <div className="grid gap-3">
                    {m.principles.map((pr, i3) => (
                      <div key={i3} className="flex items-center">
                        <Award className="h-4 w-4 text-primary mr-3" />
                        <span className="text-body text-text-secondary">
                          {pr}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partners */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Local & Regional Partners
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Community and regional collaboration for sustainable growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localPartners.map((p, idx) => (
              <Card key={idx} className="glass-panel text-center p-6">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {idx === 0 && <Building className="h-8 w-8 text-primary" />}
                    {idx === 1 && <UsersIcon className="h-8 w-8 text-primary" />}
                    {idx === 2 && <Lightbulb className="h-8 w-8 text-primary" />}
                    {idx === 3 && <DollarSign className="h-8 w-8 text-primary" />}
                  </div>
                  <h3 className="text-body-large font-bold text-text-primary mb-2">
                    {p.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {p.role}
                  </Badge>
                </div>
                <p className="text-body text-text-secondary mb-4">
                  {p.collaboration}
                </p>
                <div className="bg-background/50 p-3 rounded-lg">
                  <p className="text-caption text-primary font-medium">
                    {p.impact}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-title text-primary-foreground/90 mb-6">
              Join our network of partners committed to sustainable maritime transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/#contact" className="flex items-center">
                  Explore Partnership
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/stakeholders" className="flex items-center">
                  View Benefits
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;