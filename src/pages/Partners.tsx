// src/pages/Partners.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import ombimg from "@/assets/ombimg.png";
import igbc from "@/assets/IGBC.png"; 
import ihm from "@/assets/IHM.jpg";
import eump from "@/assets/eump.webp"; // Assuming you have an EU Maritime Partners logo image
import ungc from "@/assets/ungc.png"; // Assuming you have a UNGC logo image

const Partners = () => {
  // Navbar state (match Services.tsx: always hamburger)
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink navbar on scroll (same threshold as Services.tsx)
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
        ombimg,
      partnership: "Strategic MoU",
      scope: "Maritime Infrastructure Development",
      benefits: [
        "Knowledge transfer from Alang facility improvements",
        "Best practices in ship recycling operations",
        "Regulatory compliance framework",
      ],
    },
    {
      name: "EU Maritime Partners",
      type: "Regulatory Compliance",
      description: "Collaboration with European partners for EUSSR compliance",
      logo: eump,
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
      logo: ungc,
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
      description:
        "Leading international trade association for recycling industries",
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
      description:
        "UN specialized agency for maritime safety and environmental protection",
      logo: ihm,
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
      logo: igbc,
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
      {/* Navbar (Services.tsx style) */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50 pt-4 transition-all duration-500 ease-out">
        <div className="flex items-center justify-between py-4 px-6 rounded-2xl bg-white backdrop-blur-lg shadow-lg ring-1 ring-white/10">
          <img
            src="/assets/logo.png"
            alt="Neptunus Logo"
            className="h-10 md:h-12 w-auto transition-all duration-300"
          />
          <button
            className="p-2 text-black"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute mt-2 right-0 w-1/2 rounded-2xl bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-white/10 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ label, href, active }) => (
                <Link
                  key={label}
                  to={href}
                  className={`block text-lg ${
                    active ? "text-primary font-medium" : "hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                className="mt-2 btn-primary w-full text-lg"
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

      {/* Hero Section (green gradient like Services.tsx) */}
      <section className="pt-28 pb-8 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-stone-200 mb-4">
              Partners & Affiliations
            </h1>
            <p className="text-title text-stone-200 mb-4">
              Building a global network of partnerships for sustainable ship recycling and circular economy leadership
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">20+</div>
                <div className="text-body text-stone-200">Strategic Partners</div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">15+</div>
                <div className="text-body text-stone-200">Global Memberships</div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">100%</div>
                <div className="text-body text-stone-200">Compliance Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners (white section, dark text) */}
      <section className="section-padding pt-12 pb-12 bg-white text-black">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-black mb-2">Strategic Partners</h2>
            <p className="text-title text-slate-600 max-w-3xl mx-auto">
              Key partnerships enabling our world-class operations and regulatory compliance
            </p>
          </div>
          <div className="grid gap-8">
            {strategicPartners.map((p, idx) => (
              <Card key={idx} className="elevated-panel overflow-hidden bg-stone-200 text-black">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Partner logo & meta */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 flex justify-center">
                    <div className="text-center">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
                      />
                      <Badge variant="secondary" className="mb-2 bg-white text-black">
                        {p.type}
                      </Badge>
                      <h3 className="text-body-large font-bold">{p.name}</h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="space-y-6">
                      <p className="text-body text-black/80 leading-relaxed">{p.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-body font-semibold mb-2">Partnership:</h4>
                          <Badge variant="outline" className="border-black text-black">
                            {p.partnership}
                          </Badge>
                        </div>
                        <div>
                          <h4 className="text-body font-semibold mb-2">Scope:</h4>
                          <span className="text-body text-black/80">{p.scope}</span>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-lg">
                        <h4 className="text-body-large font-semibold mb-4">Key Benefits:</h4>
                        <div className="space-y-3">
                          {p.benefits.map((b, i2) => (
                            <div key={i2} className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-600 mr-3 mt-0.5" />
                              <span className="text-body">{b}</span>
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

      {/* Global Memberships (green gradient like Services secondary sections) */}
      <section className="py-16 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-stone-200 mb-2">
              Global Memberships & Affiliations
            </h2>
            <p className="text-title text-stone-200 max-w-3xl mx-auto">
              Active membership in leading international organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {globalMemberships.map((m, idx) => (
              <Card key={idx} className="glass-panel overflow-hidden bg-white text-black">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={m.logo}
                      alt={m.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <CardTitle className="text-body-large">{m.name}</CardTitle>
                      <Badge variant="outline" className="mt-2 border-black text-black">
                        {m.focus}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-body text-black/80">{m.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="text-body-large font-semibold mb-4">Core Principles:</h4>
                  <div className="grid gap-3">
                    {m.principles.map((pr, i3) => (
                      <div key={i3} className="flex items-center">
                        <Award className="h-4 w-4 text-black mr-3" />
                        <span className="text-body text-black/80">{pr}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local & Regional Partners (white section) */}
      <section className="section-padding pt-12 pb-12 bg-white text-black">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold mb-2">Local & Regional Partners</h2>
            <p className="text-title text-slate-600 max-w-3xl mx-auto">
              Community and regional collaboration for sustainable growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localPartners.map((p, idx) => (
              <Card key={idx} className="glass-panel text-center p-6 bg-stone-200">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-300/10 to-green-500/10 flex items-center justify-center mx-auto mb-4">
                    {idx === 0 && <Building className="h-8 w-8 text-black" />}
                    {idx === 1 && <UsersIcon className="h-8 w-8 text-black" />}
                    {idx === 2 && <Lightbulb className="h-8 w-8 text-black" />}
                    {idx === 3 && <DollarSign className="h-8 w-8 text-black" />}
                  </div>
                  <h3 className="text-body-large font-bold  text-black">{p.name}</h3>
                  <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-green-300/10 to-green-500/10 text-white">
                    {p.role}
                  </Badge>
                </div>
                <p className="text-body text-black mb-4">{p.collaboration}</p>
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-caption text-black font-medium">{p.impact}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Partnership Opportunities CTA (match Services CTA styling) */}
      <section className="py-16 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline text-stone-200 font-bold text-primary-foreground mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-title text-stone-200 text-primary-foreground/90 mb-6">
              Join our network of partners committed to sustainable maritime transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group text-white bg-green-900">
                <a href="/#contact" className="flex items-center">
                  Explore Partnership
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-white bg-yellow-500 hover:bg-primary-foreground hover:text-primary"
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
