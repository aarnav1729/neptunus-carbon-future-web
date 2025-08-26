// src/pages/Services.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";


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
    { label: "Services", href: "/services", active: true },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  const services = [
    {
      icon: Ship,
      title: "Ship Dismantling / Ship Recycling",
      subtitle: "Sustainable Maritime Vessel Disposal",
      image: "/assets/sbs1.jpeg",
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
      image: "/assets/shipb.jpg",
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
      compliance: [
        "Climate-Resilient Design",
        "Modular Construction Standards",
      ],
    },
    {
      icon: Trash2,
      title: "Waste Disposal Management",
      subtitle: "Zero-Harm Environmental Solutions",
      image: "/assets/wastes2.jpeg",
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
      image: "/assets/steelre.jpeg",
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
      image: "/assets/logs.jpeg",
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
      compliance: [
        "Logistics Standards",
        "Safety Protocols",
        "Environmental Guidelines",
      ],
    },
    {
      icon: Wrench,
      title: "Ship Servicing",
      subtitle: "Maritime Maintenance & Repair",
      image: "/assets/serv2.jpeg",
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

    {
      icon: Wrench,
      title: "Solar Energy Park", // ← unchanged
      subtitle: "25 MW Solar Power Park (100 Acres)",
      image: "/assets/sp.jpg", // ← unchanged
      description:
        "Our 25 MW Solar Power Park is a flagship initiative in Neptunus’ renewable energy strategy. Spanning 100 acres, the park is planned for peak output and environmental harmony. Within the 85-acre operational zone, 70 acres host high-efficiency solar arrays and 15 acres form the power infrastructure zone with 4×1500 kVA units and a 33 kV express line. The remaining 15 acres include a 10-acre buffer for safety/operations and 5 acres of landscaped green spaces to promote biodiversity. The grid-like arrangement, optimally oriented to the sun’s path, ensures reliable power for our operations with surplus to the national grid.",
      features: [
        "25 MW capacity spanning 100 acres",
        "70-acre solar panel array with optimal orientation and spacing",
        "15-acre power infrastructure zone with 4×1500 kVA units & 33 kV express line",
        "10-acre buffer zone for safety and operational flexibility",
        "5-acre landscaped green spaces to promote biodiversity",
        "Advanced tracking systems for maximum output",
        "Grid-connected with captive consumption integration",
        "CO₂ emissions reduction equivalent to 40,000+ trees annually",
      ],
      capacity: "25 MW (100 Acres)",
      compliance: [
        "33 kV grid interconnection",
        "Captive consumption integration",
      ],
    },
  ];

  

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar (always hamburger) */}
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

      {/* Hero Section */}
      <section className="pt-28 pb-8 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-stone-200 mb-4">
              Our Services
            </h1>
            <p className="text-title text-stone-200 mb-4">
              Comprehensive maritime solutions for sustainable ship recycling,
              green steel production, and clean energy generation
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">
                  7
                </div>
                <div className="text-body text-stone-200">Core Services</div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">
                  500
                </div>
                <div className="text-body text-stone-200">
                  Ships Annual Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">
                  100%
                </div>
                <div className="text-body text-stone-200">
                  Compliant Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding pt-12 pb-12 bg-white text-black">
        <div className="container-custom">
          <div className="grid gap-12">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="elevated-panel overflow-hidden bg-stone-200 text-black"
              >
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

                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 lg:p-8 bg-stone-200 text-black ${
                      idx % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div>
                        <div className="text-caption mb-1 text-black opacity-80">
                          {service.subtitle}
                        </div>
                        <h2 className="text-headline font-bold mb-2 text-black">
                          {service.title}
                        </h2>
                        <p className="text-body leading-relaxed text-black">
                          {service.description}
                        </p>
                      </div>

                      <div className="bg-stone-200 p-4 rounded-lg text-black">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-body-large font-semibold text-black">
                            Key Features
                          </h3>
                          <Badge
                            variant="secondary"
                            className="bg-white text-black"
                          >
                            Capacity: {service.capacity}
                          </Badge>
                        </div>
                        <div className="grid gap-2">
                          {service.features.map((feat, i2) => (
                            <div
                              key={i2}
                              className="flex items-center space-x-2 text-black"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span className="text-body">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-body-large font-semibold mb-2 text-black">
                          Compliance & Standards
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.compliance.map((c, i3) => (
                            <Badge
                              key={i3}
                              variant="outline"
                              className="border-black text-black"
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
      <section className="py-16 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline text-stone-200 font-bold text-primary-foreground mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-title text-stone-200 text-primary-foreground/90 mb-6">
              Discover how our services can meet your maritime and
              sustainability needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="group text-white border-black bg-green-900"
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
