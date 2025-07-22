// src/pages/Services.tsx
import { useEffect, useState } from "react";
import {
  Ship,
  Building,
  Trash2,
  Cog,
  Truck,
  Wrench,
  ArrowRight,
  CheckCircle,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  // Nav state (always hamburger)
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
    { label: "Services", href: "/services", active: true },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  const services = [
    {
      icon: Ship,
      title: "Ship Breaking / Ship Recycling",
      subtitle: "Sustainable Maritime Vessel Disposal",
      image:
        "/assets/services.jpg",
      description:
        "At Neptunus, every retired vessel becomes a catalyst for positive change. Each year, our crews guide roughly 500 ships onto 60 specially engineered concrete beds. Here, with precision dry-dock techniques and expert hands, we gently deconstruct each hull—capturing every drop of oil, asbestos, and other hazardous materials before they ever reach our land or sea.",
      features: [
        "500 ships dismantled annually",
        "60 engineered concrete beds",
        "Zero-waste-to-landfill policy",
        "Precision dry-dock techniques",
        "Expert hazardous material handling",
      ],
      capacity: "500 ships/year",
      compliance: [
        "Hong Kong Convention",
        "EU Ship Recycling Regulation",
        "Basel Convention",
      ],
    },
    {
      icon: Building,
      title: "Ship Building",
      subtitle: "Circular Maritime Construction",
      image:
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Right beside our recycling docks, we're turning yesterday's ships into tomorrow's livelihoods. Using the recycled steel we reclaim, our modular yard crafts coastal vessels up to 5,000 DWT—everything from supply boats to passenger ferries. This circular approach slashes embodied carbon by more than 50% and keeps local workshops humming with skilled jobs.",
      features: [
        "Vessels up to 5,000 DWT capacity",
        "50%+ reduction in embodied carbon",
        "Modular construction techniques",
        "Supply boats and passenger ferries",
        "Local workforce development",
      ],
      capacity: "5,000 DWT vessels",
      compliance: ["Climate-Resilient Design", "Modular Construction Standards"],
    },
    {
      icon: Trash2,
      title: "Waste Disposal Management",
      subtitle: "Zero-Harm Environmental Solutions",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "We've designed our on-site Treatment, Storage & Disposal Facility (TSDF) as a zero-harm hub for 13,000 TPA of hazardous waste and 1,500 TPA of municipal solids. With a 30 TPD incinerator, secure landfills, an effluent treatment plant, and dedicated recycling lines, every residue gets transformed or contained safely.",
      features: [
        "13,000 TPA hazardous waste capacity",
        "1,500 TPA municipal waste handling",
        "30 TPD incinerator facility",
        "Secure landfill management",
        "Advanced effluent treatment",
      ],
      capacity: "14,500 TPA total waste",
      compliance: [
        "TSDF Standards",
        "Environmental Protection Act",
        "Waste Management Rules",
      ],
    },
    {
      icon: Cog,
      title: "Steel Re-rolling",
      subtitle: "Green Steel Production",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Our electric-arc-furnace mill is where community ambition meets industrial innovation. Processing up to 60,000 TPA of reclaimed ship steel, we produce top-grade rebars, structural sections, and specialty billets—all under an ISO 14001-certified process with full chain-of-custody transparency.",
      features: [
        "60,000 TPA steel processing capacity",
        "Electric-arc-furnace technology",
        "Full chain-of-custody tracking",
        "Top-grade rebar production",
        "ISO 14001 certified process",
      ],
      capacity: "60,000 TPA",
      compliance: [
        "ISO 14001",
        "Chain-of-Custody Certification",
        "Quality Standards",
      ],
    },
    {
      icon: Truck,
      title: "Logistics Park",
      subtitle: "Integrated Supply Chain Solutions",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Spread across 100 acres, our logistics park is more than forklifts and warehouses—it's a lifeline for local enterprise. Covered stacking yards, bonded facilities, and direct links to national highways and the Chennai–Kolkata rail corridor mean smoother operations and swift dispatch.",
      features: [
        "100-acre integrated facility",
        "Covered stacking yards",
        "Bonded warehouse facilities",
        "Highway and rail connectivity",
        "Reduced transport emissions",
      ],
      capacity: "100 acres",
      compliance: ["Logistics Standards", "Safety Protocols", "Environmental Guidelines"],
    },
    {
      icon: Wrench,
      title: "Ship Servicing",
      subtitle: "Maritime Maintenance & Repair",
      image:
        "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "When ships need care, Neptunus steps in with heart and expertise. Our service quay—backed by 350,000 m³ dredging capacity, four tug/push boats, and eight specialized service craft—offers everything from hull inspections to emergency overhauls.",
      features: [
        "350,000 m³ dredging capacity",
        "4 tug/push boats",
        "8 specialized service craft",
        "Hull inspection services",
        "Emergency overhaul capabilities",
      ],
      capacity: "Full maritime services",
      compliance: ["Maritime Safety Standards", "Emergency Response Protocols"],
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

      {/* Hero Section (moved down, reduced whitespace) */}
      <section className="pt-28 pb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-text-primary mb-4">
              Our Services
            </h1>
            <p className="text-title text-text-secondary mb-4">
              Comprehensive maritime solutions for sustainable ship recycling, green steel production, and environmental stewardship
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">6</div>
                <div className="text-body text-text-secondary">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">500</div>
                <div className="text-body text-text-secondary">Ships Annually</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">100%</div>
                <div className="text-body text-text-secondary">Compliant Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, idx) => (
              <Card key={idx} className="elevated-panel overflow-hidden">
                <div
                  className={`grid lg:grid-cols-2 gap-0 ${
                    idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-80 lg:h-auto ${
                      idx % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                        <service.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div
                    className={`p-6 lg:p-8 ${
                      idx % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="text-caption text-brand-blue mb-1">
                          {service.subtitle}
                        </div>
                        <h2 className="text-headline font-bold text-text-primary mb-2">
                          {service.title}
                        </h2>
                        <p className="text-body text-text-secondary leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="bg-background/50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-body-large font-semibold text-text-primary">
                            Key Features
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary"
                          >
                            Capacity: {service.capacity}
                          </Badge>
                        </div>
                        <div className="grid gap-2">
                          {service.features.map((feat, i2) => (
                            <div
                              key={i2}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-body text-text-secondary">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-body-large font-semibold text-text-primary mb-2">
                          Compliance & Standards
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((c, i3) => (
                            <Badge
                              key={i3}
                              variant="outline"
                              className="border-primary text-primary"
                            >
                              {c}
                            </Badge>
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

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-title text-primary-foreground/90 mb-6">
              Discover how our services can meet your maritime and sustainability needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/#contact" className="flex items-center">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/stakeholders">View Stakeholder Benefits</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;