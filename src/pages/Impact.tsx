// src/pages/Impact.tsx
import { useEffect, useState } from "react";
import {
  Leaf,
  Zap,
  Globe as GlobeIcon,
  Factory,
  TrendingUp,
  Award,
  ArrowRight,
  BarChart3,
  Users as UsersIcon,
  Building as BuildingIcon,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
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
    { label: "Impact", href: "/impact", active: true },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  const impactMetrics = [
    {
      title: "Carbon Emissions Avoided",
      value: "8.35M",
      unit: "t CO₂/year",
      description:
        "Per tonne of green steel: 1 t steel → 1.67 t CO₂ prevented",
      details: [
        "5 Mt steel × 1.67 t CO₂/t = 8.35 Mt CO₂ avoided",
        "Equivalent to removing 1.75 M cars for a year",
      ],
      icon: Leaf,
      color: "text-green-600",
      progress: 85,
    },
    {
      title: "Energy Savings",
      value: "4 700",
      unit: "kWh / t recycled",
      description:
        "Recycling uses just 28% of primary‐production energy",
      details: [
        "≈ 4 700 kWh saved per t recycled",
        "Equivalent to powering 50 000 homes",
      ],
      icon: Zap,
      color: "text-yellow-600",
      progress: 72,
    },
    {
      title: "Raw Material Conservation",
      value: "2.5M",
      unit: "t saved annually",
      description:
        "Raw materials conserved per t scrap reused",
      details: [
        "1.4 t iron ore saved",
        "0.8 t coking coal saved",
        "0.3 t limestone saved",
      ],
      icon: Factory,
      color: "text-blue-600",
      progress: 90,
    },
  ];

  const nationalInitiatives = [
    {
      name: "National Solar Mission",
      goal: "280 GW by 2030",
      contribution: "25 MW on‐site solar park",
      impact: "Clean power & grid integration",
      status: "Active",
      details: [
        "Supplies clean power for operations",
        "Excess to renewable grid",
        "Supports peak‐hour balancing",
      ],
    },
    {
      name: "National Green Hydrogen Mission",
      goal: "5 Mt green H₂ by 2030",
      contribution: "Steel logistics hub for H₂",
      impact: "Supports H₂ corridor",
      status: "Planning",
      details: [
        "Recycled steel for plant construction",
        "Pipeline materials from steel",
        "Fuel‐cell fleet retrofit site",
      ],
    },
    {
      name: "Swachh Bharat Mission",
      goal: "Scientific waste processing",
      contribution: "Hazardous‐waste segregation",
      impact: "Zero‐landfill dismantling",
      status: "Implemented",
      details: [
        "TSDF, ETP, STP systems",
        "E‐waste & plastic disposal",
        "Circular‐economy support",
      ],
    },
    {
      name: "Mission LiFE",
      goal: "Sustainable consumption",
      contribution: "Model green ecosystem",
      impact: "Scalable green industry",
      status: "Ongoing",
      details: [
        "Energy‐efficient equipment",
        "Low‐emission practices",
        "Worker‐safety infrastructure",
      ],
    },
  ];

  const odishaImpact = [
    {
      metric: "Jobs Created",
      value: "22 000+",
      description: "Direct & indirect employment",
      icon: "👥",
    },
    {
      metric: "GDP Contribution",
      value: "₹3B+",
      description: "Annual to Odisha's economy",
      icon: "💰",
    },
    {
      metric: "Skills Trained",
      value: "5 000+",
      description: "Workers in green tech",
      icon: "🎓",
    },
    {
      metric: "Community Invested",
      value: "₹50 Cr+",
      description: "Local infrastructure",
      icon: "🏗️",
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
              Global Impact & Societal Benefits
            </h1>
            <p className="text-title text-text-secondary mb-4">
              Transforming the maritime industry while combating climate change and advancing sustainable development
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  8.35M
                </div>
                <div className="text-body text-text-secondary">
                  Tonnes CO₂ Avoided
                </div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  22K+
                </div>
                <div className="text-body text-text-secondary">
                  Jobs Created
                </div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">
                  5M
                </div>
                <div className="text-body text-text-secondary">
                  Tonnes Steel Recycled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Environmental Impact Metrics
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Measurable environmental gains from our circular practices
            </p>
          </div>

          <div className="grid gap-8">
            {impactMetrics.map((metric, i) => (
              <Card key={i} className="elevated-panel overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                    <div className="flex items-center mb-4">
                      <metric.icon
                        className={`h-8 w-8 ${metric.color} mr-2`}
                      />
                      <div className="text-2xl font-bold text-text-primary">
                        {metric.value}
                      </div>
                    </div>
                    <h3 className="text-title font-bold text-text-primary mb-1">
                      {metric.title}
                    </h3>
                    <div className="text-body text-text-secondary mb-3">
                      {metric.unit}
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                    <div className="text-caption text-text-secondary mt-1">
                      {metric.progress}% efficiency
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2 p-8">
                    <p className="text-body text-text-secondary mb-4 leading-relaxed">
                      {metric.description}
                    </p>
                    <div className="space-y-3">
                      {metric.details.map((d, idx) => (
                        <div key={idx} className="flex items-start">
                          <BarChart3 className="h-4 w-4 text-primary mr-2 mt-1" />
                          <span className="text-body text-text-secondary">
                            {d}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Initiatives */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Supporting India's National Missions
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Contributing to sustainable development goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nationalInitiatives.map((ni, idx) => (
              <Card key={idx} className="glass-panel overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={
                        ni.status === "Active"
                          ? "default"
                          : ni.status === "Implemented"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {ni.status}
                    </Badge>
                    <GlobeIcon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-body-large text-text-primary mb-1">
                    {ni.name}
                  </CardTitle>
                  <p className="text-body text-text-secondary">
                    Goal: {ni.goal}
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-body font-semibold text-text-primary mb-1">
                        Our Contribution:
                      </h4>
                      <p className="text-body text-primary">
                        {ni.contribution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-text-primary mb-1">
                        Impact:
                      </h4>
                      <p className="text-body text-text-secondary mb-2">
                        {ni.impact}
                      </p>
                      <div className="space-y-2">
                        {ni.details.map((d, i2) => (
                          <div key={i2} className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-green-600 mr-2 mt-1" />
                            <span className="text-caption text-text-secondary">
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Odisha Impact */}
      <section className="section-padding pt-12 pb-12">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-text-primary mb-2">
              Transforming Odisha
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Building stronger communities and sustainable prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {odishaImpact.map((it, idx) => (
              <Card key={idx} className="glass-panel text-center p-4">
                <div className="text-4xl mb-2">{it.icon}</div>
                <div className="text-body-large font-bold text-primary mb-1">
                  {it.value}
                </div>
                <h3 className="text-body font-bold text-text-primary mb-1">
                  {it.metric}
                </h3>
                <p className="text-caption text-text-secondary">
                  {it.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="elevated-panel overflow-hidden">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h3 className="text-headline font-bold text-text-primary mb-2">
                  Community Promise
                </h3>
                <blockquote className="text-body text-text-secondary italic leading-relaxed">
                  "For Odisha’s families, Neptunus means safer jobs, fair wages,
                  and long-term growth—backed by skill centers, local supply
                  chains, and community infrastructure."
                </blockquote>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <Award className="h-6 w-6 text-primary mx-auto mb-1" />
                    <h4 className="text-body font-bold text-text-primary mb-1">
                      Safety First
                    </h4>
                    <p className="text-caption text-text-secondary">
                      Zero‑accident pledge & OSHA protocols
                    </p>
                  </div>
                  <div>
                    <UsersIcon className="h-6 w-6 text-primary mx-auto mb-1" />
                    <h4 className="text-body font-bold text-text-primary mb-1">
                      Local Hiring
                    </h4>
                    <p className="text-caption text-text-secondary">
                      70% local hire with training programs
                    </p>
                  </div>
                  <div>
                    <BuildingIcon className="h-6 w-6 text-primary mx-auto mb-1" />
                    <h4 className="text-body font-bold text-text-primary mb-1">
                      Infrastructure
                    </h4>
                    <p className="text-caption text-text-secondary">
                      Schools, housing, medical facilities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-4">
              Join the Impact Revolution
            </h2>
            <p className="text-title text-primary-foreground/90 mb-6">
              Be part of reshaping industries and communities for a sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/stakeholders" className="flex items-center">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/#contact">Partner with Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;