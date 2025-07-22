// src/pages/About.tsx
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Users,
  ChevronDown,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  // Nav state
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll handler for shrinking navbar
  useEffect(() => {
    const onScroll = () => {
      const heroThreshold = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > heroThreshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Links for mobile menu
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about", active: true },
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
        <div className="bg-white flex items-center justify-between py-3 px-4 md:px-6 rounded-full transition-all duration-1000 ease-out shadow-lg">
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
              <X className="w-5 h-5 text-black" />
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
                  className={`block transition-colors ${
                    active
                      ? "text-green-900 font-medium"
                      : "text-slate-600 hover:text-green-900"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <button
                className="mt-2 w-full rounded-md bg-green-900 px-4 py-2 text-white hover:bg-green-800 transition-colors"
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

      {/* Hero Section (more top-padding, tighter bottom) */}
      <section className="pt-28 pb-8 bg-stone-200 from-green-900/5 to-yellow-500/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-green-900 mb-4">
              About Neptunus
            </h1>
            <p className="text-title text-slate-600 mb-4">
              Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-title font-bold text-green-900 mb-2">150+</div>
                <div className="text-body text-slate-600">Marine Officers</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-green-900 mb-2">20+</div>
                <div className="text-body text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-green-900 mb-2">100%</div>
                <div className="text-body text-slate-600">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <Card className="bg-stone-200 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-900 mr-3" />
                  <h2 className="text-headline font-bold text-green-900">
                    Mission
                  </h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-green-900">
                    Integrity and commitment towards combating climate change
                  </h3>
                  <p className="text-body text-slate-600 leading-relaxed">
                    "To create a vertically integrated ship recycling facility while upholding the highest labour safety and environmental sustainability standards."
                  </p>
                  <div className="bg-background/50 p-6 rounded-lg bg-white">
                    <p className="text-body-large  text-green-900 italic">
                      We believe that sustainable ship recycling is not just about environmental protection—it's about creating a better future for communities, industries, and the planet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-green-900 mr-3" />
                  <h2 className="text-headline font-bold text-green-900">
                    Vision
                  </h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-green-900">
                    Leading India's transition to a carbon-secure future
                  </h3>
                  <p className="text-body text-slate-600 leading-relaxed">
                    "To position India as a global leader in sustainable ship recycling by building the world's most advanced, environmentally responsible, and socially conscious maritime industrial facility."
                  </p>
                  <div className="bg-background/50 p-6 rounded-lg">
                    <p className="text-body-large text-green-900 italic">
                      Our vision aligns with India's carbon-negative goals and positions us at the forefront of the global circular economy revolution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact Quote */}
      <section className="py-16 bg-gradient-to-r from-green-900/10 to-yellow-500/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline font-bold text-green-900 mb-8">
              Our Promise to Odisha
            </h2>
            <blockquote className="text-title text-slate-600 leading-relaxed mb-6 italic">
              "Neptunus Shipbuilders & Recyclers is not just an industrial project—it's a promise to Odisha's people. Built on international standards like the Hong Kong Convention and the EU Ship Recycling Regulation, our facility brings credibility and compliance to a traditionally unsafe sector. But our commitment runs deeper. For the thousands of families along Odisha's coastline, Neptunus means access to safer jobs, fair wages, and long-term growth."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-green-900 text-white px-6 py-3 rounded-lg font-semibold">
                "Safer jobs, stronger communities—built in Odisha."
              </div>
              <div className="bg-yellow-500 text-green-900 px-6 py-3 rounded-lg font-semibold">
                "Local hands. Global standards"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-green-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-title text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings decades of experience in maritime engineering, sustainable development, and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Deepak Pillapalem",
                position: "Managing Director",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Deepak Reddy Pillapalem is the Founder and Managing Director of Neptunus Shipbreaking & Recycling Pvt Ltd. With over 20 years of real estate development expertise, he has driven exceptional growth in the sector—channeling his strategic vision into sustainable ship recycling, steel re-rolling, renewable-energy integration, and community-driven partnerships. Under his leadership, Neptunus will become India's first facility fully compliant with both the EU Ship Recycling Regulation and the Hong Kong Convention. He holds a Bachelor's degree in Civil Engineering from CBIT Hyderabad and a Master's degree in Urban Planning from the University of Cleveland. He has secured multimillion-dollar financing, forged strategic partnerships with local cooperatives, and consistently delivers strong returns—driving stakeholder value, uplifting communities, and championing green innovations.",
              },
              {
                name: "Satish Burugupalli",
                position: "Executive Director",
                image:
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Satish Burugupalli is the Executive Director of Neptunus Shipbreaking & Recycling, bringing over 15 years of operational leadership in maritime engineering and sustainable infrastructure. He oversees high-impact projects—from greenfield plant expansions to renewable-energy integration—ensuring full compliance with international ship-recycling regulations while delivering on-time, on-budget performance. Satish secures strategic alliances with government agencies and local cooperatives, drives solar-park and waste-heat recovery initiatives to minimize carbon footprints, and champions workforce development programs that uplift surrounding communities.",
              },
              {
                name: "Akaash Reddy",
                position: "Chief Technical Officer",
                image:
                  "https://images.unsplash.com/photo-1494790108755-2616c273e11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Leading our technical operations with 15+ years of marine engineering experience and deep expertise in ship recycling technologies.",
              },
              {
                name: "Amay Reddy",
                position: "Head of Safety & Compliance",
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Ensuring world-class safety standards with extensive experience in maritime safety protocols and environmental compliance.",
              },
              {
                name: "Tanay Reddy",
                position: "Director of Operations",
                image:
                  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                bio: "Streamlining operations with innovative approaches to sustainable ship recycling and steel production efficiency.",
              },
            ].map((member, i) => (
              <HoverCard key={i}>
                <HoverCardTrigger asChild>
                  <Card className="elevated-panel cursor-pointer group transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-900/20"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-green-900 text-white rounded-full p-2">
                            <Users className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-body-large font-bold text-green-900 mb-2">
                          {member.name}
                        </h3>
                        <p className="text-body text-yellow-600 font-medium mb-4">
                          {member.position}
                        </p>
                        <div className="flex items-center justify-center text-slate-500">
                          <span className="text-caption">View Details</span>
                          <ChevronDown className="h-4 w-4 ml-1 group-hover:translate-y-1 transition-transform" />
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
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="text-body-large font-bold text-green-900">
                          {member.name}
                        </h4>
                        <p className="text-body text-yellow-600">
                          {member.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-caption text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-title text-white/90 mb-8">
              Be part of India's transformation towards sustainable maritime industry and circular economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="group bg-yellow-500 text-green-900 hover:bg-yellow-400"
                onClick={() => (window.location.href = "/stakeholders")}
              >
                <div className="flex items-center">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-900"
                onClick={() => (window.location.href = "/#contact")}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;