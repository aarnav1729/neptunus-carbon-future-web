import { ArrowRight, Target, Eye, Users, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const About = () => {
  const teamMembers = [
    {
      name: "Deepak Pillapalem",
      position: "Managing Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Deepak Reddy Pillapalem is the Founder and Managing Director of Neptunus Shipbreaking & Recycling Pvt Ltd. With over 20 years of real estate development expertise, he has driven exceptional growth in the sector—channeling his strategic vision into sustainable ship recycling, steel re-rolling, renewable-energy integration, and community-driven partnerships. Under his leadership, Neptunus will become India's first facility fully compliant with both the EU Ship Recycling Regulation and the Hong Kong Convention. He holds a Bachelor's degree in Civil Engineering from CBIT Hyderabad and a Master's degree in Urban Planning from the University of Cleveland. He has secured multimillion-dollar financing, forged strategic partnerships with local cooperatives, and consistently delivers strong returns—driving stakeholder value, uplifting communities, and championing green innovations.",
    },
    {
      name: "Satish Burugupalli",
      position: "Executive Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Satish Burugupalli is the Executive Director of Neptunus Shipbreaking & Recycling, bringing over 15 years of operational leadership in maritime engineering and sustainable infrastructure. He oversees high-impact projects—from greenfield plant expansions to renewable-energy integration—ensuring full compliance with international ship-recycling regulations while delivering on-time, on-budget performance. Satish secures strategic alliances with government agencies and local cooperatives, drives solar-park and waste-heat recovery initiatives to minimize carbon footprints, and champions workforce development programs that uplift surrounding communities.",
    },
    {
      name: "Marine Officer",
      position: "Chief Technical Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616c273e11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Leading our technical operations with 15+ years of marine engineering experience and deep expertise in ship recycling technologies.",
    },
    {
      name: "Safety Director",
      position: "Head of Safety & Compliance",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Ensuring world-class safety standards with extensive experience in maritime safety protocols and environmental compliance.",
    },
    {
      name: "Operations Manager",
      position: "Director of Operations",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Streamlining operations with innovative approaches to sustainable ship recycling and steel production efficiency.",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="text-headline font-bold text-primary">
              Neptunus
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-body hover:text-primary transition-colors">Home</a>
              <a href="/about" className="text-body text-primary">About</a>
              <a href="/services" className="text-body hover:text-primary transition-colors">Services</a>
              <a href="/stakeholders" className="text-body hover:text-primary transition-colors">Stakeholders</a>
              <a href="/impact" className="text-body hover:text-primary transition-colors">Impact</a>
              <a href="/blog" className="text-body hover:text-primary transition-colors">Blog</a>
              <a href="/partners" className="text-body hover:text-primary transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-text-primary mb-6">
              About Neptunus
            </h1>
            <p className="text-title text-text-secondary mb-8">
              Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">150+</div>
                <div className="text-body text-text-secondary">Marine Officers</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">20+</div>
                <div className="text-body text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">100%</div>
                <div className="text-body text-text-secondary">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-panel h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-headline font-bold text-text-primary">Mission</h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-primary">
                    Integrity and commitment towards combating climate change
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    "To create a vertically integrated ship recycling facility while upholding the highest labour safety and environmental sustainability standards."
                  </p>
                  <div className="bg-background/50 p-6 rounded-lg">
                    <p className="text-body-large text-text-primary italic">
                      We believe that sustainable ship recycling is not just about environmental protection—it's about creating a better future for communities, industries, and the planet.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-panel h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-headline font-bold text-text-primary">Vision</h2>
                </div>
                <div className="space-y-6">
                  <h3 className="text-title font-semibold text-primary">
                    Leading India's transition to a carbon-secure future
                  </h3>
                  <p className="text-body text-text-secondary leading-relaxed">
                    "To position India as a global leader in sustainable ship recycling by building the world's most advanced, environmentally responsible, and socially conscious maritime industrial facility."
                  </p>
                  <div className="bg-background/50 p-6 rounded-lg">
                    <p className="text-body-large text-text-primary italic">
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
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-headline font-bold text-text-primary mb-8">
              Our Promise to Odisha
            </h2>
            <blockquote className="text-title text-text-secondary leading-relaxed mb-6 italic">
              "Neptunus Shipbuilders & Recyclers is not just an industrial project—it's a promise to Odisha's people. Built on international standards like the Hong Kong Convention and the EU Ship Recycling Regulation, our facility brings credibility and compliance to a traditionally unsafe sector. But our commitment runs deeper. For the thousands of families along Odisha's coastline, Neptunus means access to safer jobs, fair wages, and long-term growth."
            </blockquote>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold">
                "Safer jobs, stronger communities—built in Odisha."
              </div>
              <div className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold">
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
            <h2 className="text-display font-bold text-text-primary mb-4">
              Meet the Team
            </h2>
            <p className="text-title text-text-secondary max-w-2xl mx-auto">
              Our leadership team brings decades of experience in maritime engineering, sustainable development, and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <Card className="elevated-panel cursor-pointer group transition-all duration-300 hover-lift">
                    <CardContent className="p-6">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20"
                        />
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                          <div className="bg-primary text-primary-foreground rounded-full p-2">
                            <Users className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-body-large font-bold text-text-primary mb-2">
                          {member.name}
                        </h3>
                        <p className="text-body text-brand-blue font-medium mb-4">
                          {member.position}
                        </p>
                        <div className="flex items-center justify-center text-text-secondary">
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
                        <h4 className="text-body-large font-bold text-text-primary">
                          {member.name}
                        </h4>
                        <p className="text-body text-brand-blue">{member.position}</p>
                      </div>
                    </div>
                    <p className="text-caption text-text-secondary leading-relaxed">
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
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-title text-primary-foreground/90 mb-8">
              Be part of India's transformation towards sustainable maritime industry and circular economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/stakeholders" className="flex items-center">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href="/#contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;