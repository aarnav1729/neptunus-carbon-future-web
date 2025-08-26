// src/pages/About.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const About = () => {
  // Nav state (always hamburger, matched to Services.tsx)
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink navbar on scroll (kept for parity and future use)
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Links for mobile menu (mark About active)
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog" },
    { label: "Partners", href: "/partners" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar (identical to Services.tsx) */}
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
                    active ? "text-green-900 font-medium" : "hover:text-green-900"
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

      {/* Hero Section (color scheme matched to Services.tsx) */}
      <section className="pt-28 pb-8 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-stone-200 mb-4">
              About Neptunus
            </h1>
            <p className="text-title text-stone-200 mb-4">
              Pioneering India's carbon-negative future through sustainable ship
              recycling and circular economy.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-title font-bold text-stone-200 text-primary mb-2">
                  150+
                </div>
                <div className="text-body text-stone-200">Marine Officers</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-stone-200 text-primary mb-2">
                  20+
                </div>
                <div className="text-body text-stone-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-stone-200 text-primary mb-2">
                  100%
                </div>
                <div className="text-body text-stone-200">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white text-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 ">
            <Card className="bg-stone-200 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-green-900 mr-3" />
                  <h2 className="text-headline font-bold text-black">
                    Mission
                  </h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-green-900">
                    Integrity and commitment towards combating climate change
                  </h3>
                  <p className="text-body-large text-black leading-relaxed">
                    "To create a vertically integrated ship recycling facility
                    while upholding the highest labour safety and environmental
                    sustainability standards."
                  </p>
                  <div className="p-6 rounded-lg bg-white">
                    <p className="text-body-large text-black italic">
                      We believe that sustainable ship recycling is not just
                      about environmental protection—it's about creating a
                      better future for communities, industries, and the planet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elevated-panel h-full bg-stone-200">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-green-900 mr-3" />
                  <h2 className="text-headline font-bold text-black">Vision</h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-green-900">
                    Leading India's transition to a carbon-secure future
                  </h3>
                  <p className="text-body-large text-black leading-relaxed">
                    "To position India as a global leader in sustainable ship
                    recycling by building the world's most advanced,
                    environmentally responsible, and socially conscious maritime
                    industrial facility."
                  </p>
                  <div className="p-6 rounded-lg bg-white">
                    <p className="text-body-large text-black italic">
                      Our vision aligns with India's carbon-negative goals and
                      positions us at the forefront of the global circular
                      economy revolution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Impact Quote (matched gradient + light text like Services) */}
      <section className="py-16 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline font-bold text-stone-200 mb-8">
              Our Promise
            </h2>
            <blockquote className="text-title text-stone-200 leading-relaxed mb-6 italic">
              "Neptunus Shipbuilders & Recyclers is not just an industrial
              project—it's a promise to Odisha's people. Built on international
              standards like the Hong Kong Convention and the EU Ship Recycling
              Regulation, our facility brings credibility and compliance to a
              traditionally unsafe sector. But our commitment runs deeper. For
              the thousands of families along Odisha's coastline, Neptunus means
              access to safer jobs, fair wages, and long-term growth."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Team Section (quick view only, square images) */}
      <section className="section-padding bg-white text-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-black mb-4">
              Architects of a Greener Maritime Future
            </h2>
            <p className="text-title text-slate-600 max-w-2xl mx-auto">
              Our leadership team brings decades of experience in maritime
              engineering, sustainable development, and operational excellence
            </p>
          </div>

          {(() => {
            const members = [
              {
                name: "Deepak Pillapalem",
                position: "Managing Director",
                image: "/assets/deepak.jpeg",
                bio: "Deepak Reddy Pillapalem is the Founder and Managing Director of Neptunus Ship Dismantling & Recycling Pvt Ltd. With over 20 years of real estate development expertise, he has driven exceptional growth in the sector—channeling his strategic vision into sustainable ship recycling, steel re-rolling, renewable-energy integration, and community-driven partnerships. Under his leadership, Neptunus will become India's first facility fully compliant with both the EU Ship Recycling Regulation and the Hong Kong Convention. He holds a Bachelor's degree in Civil Engineering from CBIT Hyderabad and a Master's degree in Urban Planning from the University of Cleveland. He has secured multimillion-dollar financing, forged strategic partnerships with local cooperatives, and consistently delivers strong returns—driving stakeholder value, uplifting communities, and championing green innovations.",
              },
              {
                name: "Satish Burugupalli",
                position: "Executive Director",
                image: "/assets/satish.jpeg",
                bio: "Satish Burugupalli is the Executive Director of Neptunus Ship Dismantling & Recycling, bringing over 15 years of operational leadership in maritime engineering and sustainable infrastructure. He oversees high-impact projects—from greenfield plant expansions to renewable-energy integration—ensuring full compliance with international ship-recycling regulations while delivering on-time, on-budget performance. Satish secures strategic alliances with government agencies and local cooperatives, drives solar-park and waste-heat recovery initiatives to minimize carbon footprints, and champions workforce development programs that uplift surrounding communities.",
              },
              {
                name: "Akaash Reddy",
                position: "Chief Technical Officer",
                image: "/assets/akaash.jpeg",
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
            ];

            const [open, setOpen] = useState(false);
            const [active, setActive] = useState<(typeof members)[0] | null>(
              null
            );

            const openModal = (m: (typeof members)[0]) => {
              setActive(m);
              setOpen(true);
            };

            const cardKeyHandler = (
              e: React.KeyboardEvent<HTMLDivElement>,
              m: (typeof members)[0]
            ) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(m);
              }
            };

            return (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {members.map((member, i) => (
                    <Card
                      key={i}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open profile for ${member.name}`}
                      onClick={() => openModal(member)}
                      onKeyDown={(e) => cardKeyHandler(e, member)}
                      className="group relative overflow-hidden bg-stone-200 border border-stone-300 hover:border-stone-400 transition-all duration-300 cursor-pointer will-change-transform"
                      style={{ transform: "perspective(1200px)" }}
                    >
                      <CardContent className="p-0">
                        {/* Image: SQUARE with soft radius */}
                        <div className="relative aspect-square">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover rounded-xl"
                          />


                          {/* Hover overlay */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Hover content */}
                          <div className="absolute inset-x-0 bottom-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-lg font-bold text-white">
                              {member.name}
                            </h3>
                            <p className="text-sm text-white/80 line-clamp-2">
                              {member.bio}
                            </p>

                            {/* Quick view only (kept) */}
                            <div className="mt-4 flex items-center gap-2">
                              <span className="text-sm">Quick view</span>
                              <ChevronDown className="h-4 w-4 translate-y-0 group-hover:translate-y-0.5 transition-transform" />
                            </div>
                          </div>
                        </div>

                        {/* Base content (no "View Details") */}
                        <div className="p-5">
                          <h4 className="text-body-large font-bold text-black">
                            {member.name}
                          </h4>
                          <p className="text-sm text-yellow-700">
                            {member.position}
                          </p>
                        </div>

                        {/* Subtle lift/tilt on hover */}
                        <div className="absolute inset-0 rounded-xl pointer-events-none transition-transform duration-300 group-hover:-translate-y-1 group-hover:[transform:rotateX(2deg)rotateY(-2deg)]" />
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Quick-view Modal */}
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogContent className="sm:max-w-xl bg-white text-black">
                    {active && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            {/* Square avatar */}
                            <img
                              src={active.image}
                              alt={active.name}
                              className="w-14 h-14 rounded-xl object-cover border border-stone-300"
                            />
                            <div>
                              <div className="text-lg text-black font-semibold">
                                {active.name}
                              </div>
                              <div className="text-sm text-yellow-700">
                                {active.position}
                              </div>
                            </div>
                          </DialogTitle>
                          <DialogDescription className="sr-only">
                            Profile details for {active.name}
                          </DialogDescription>
                        </DialogHeader>

                        {/* Bio */}
                        <div className="space-y-4">
                          <p className="text-sm text-black leading-relaxed">
                            {active.bio}
                          </p>

                          {/* Quick actions */}
                          <div className="flex flex-wrap gap-3 pt-2">
                            <Button
                              size="sm"
                              className="bg-green-900 text-white hover:bg-green-800"
                              onClick={() => {
                                setOpen(false);
                                window.location.href = "/#contact";
                              }}
                            >
                              Email
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-400"
                              onClick={() => {
                                setOpen(false);
                                window.location.href = "/stakeholders";
                              }}
                            >
                              Schedule Call
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </DialogContent>
                </Dialog>
              </>
            );
          })()}
        </div>
      </section>

      {/* Call to Action (match Services.tsx styling and button variants) */}
      <section className="py-16 bg-gradient-to-r from-[#003929] via-[#1b5d3e] to-[#74b588]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline text-stone-200 font-bold text-primary-foreground mb-4">
              Join Our Mission
            </h2>
            <p className="text-title text-stone-200 text-primary-foreground/90 mb-6">
              Be part of India's transformation towards a sustainable maritime
              industry and circular economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="group text-white bg-green-900"
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
                className="border-primary-foreground text-white bg-yellow-500 hover:bg-primary-foreground hover:text-primary"
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
