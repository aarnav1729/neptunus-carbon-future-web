
import { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [currentCardSet, setCurrentCardSet] = useState(0);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    steel: 0,
    gdp: 0,
    jobs: 0,
    carbon: 0
  });

  // Animation for numbers
  useEffect(() => {
    const animateNumber = (key: keyof typeof animatedNumbers, target: number, duration: number) => {
      let start = 0;
      const increment = target / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setAnimatedNumbers(prev => ({ ...prev, [key]: Math.floor(start) }));
      }, 50);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === 'metrics') {
          animateNumber('steel', 5, 2000);
          animateNumber('gdp', 3, 2000);
          animateNumber('jobs', 2200, 2000);
          animateNumber('carbon', 835, 2000);
        }
      });
    });

    const metricsElement = document.getElementById('metrics');
    if (metricsElement) {
      observer.observe(metricsElement);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Services",
      content: [
        {
          subtitle: "Ship Recycling & Dismantling",
          details: [
            "Phased expansion: 60 total bays (Phase 1: 30 bays → Phase 2: +30 bays)",
            "Annual throughput: Up to 500 ships dismantled",
            "Hazardous-waste management: 13,000 tpa capacity for oils, asbestos, PCBs"
          ]
        },
        {
          subtitle: "Low-Carbon Steel Re-Rolling",
          details: [
            "Green-steel feedstock: Melted in EAFs to reduce carbon by 1.6–2.3 t CO₂/t",
            "Traceability: End-to-end chain-of-custody, digital certificates for buyers"
          ]
        },
        {
          subtitle: "Shipbuilding & Repair",
          details: [
            "Climate-resilient design: Corrosion-resistant alloys, modular hulls",
            "Value recovery: Salvage revenue share for owners; scrap income for Neptunus"
          ]
        }
      ]
    },
    {
      title: "Partners & Affiliations",
      content: [
        {
          subtitle: "List partners",
          details: [
            "MoU with Gujarat Maritime Board/JICA (modeled after Alang improvements)"
          ]
        },
        {
          subtitle: "Memberships",
          details: [
            "UN Global Compact",
            "Bureau of International Recycling",
            "Local labor NGOs"
          ]
        }
      ]
    },
    {
      title: "Global Issue & Societal Impact",
      content: [
        {
          subtitle: "Climate Impact",
          details: [
            "Repurposing steel from old ships combats climate change by reducing virgin steel production",
            "Environmental hazards traditional beaching poses—and how Neptunus' green refurbishing addresses human and ecological risks"
          ]
        },
        {
          subtitle: "Success Stories",
          details: [
            "Carbon saved vs virgin steel",
            "Safe worker retention",
            "Community benefits",
            "Technical insights: IHM, decontamination, EAF steel rolling"
          ]
        }
      ]
    },
    {
      title: "Policy & Initiative Highlights",
      content: [
        {
          subtitle: "National Electric Mobility Mission",
          details: ["Battery-electric yard equipment cuts diesel use by 40%"]
        },
        {
          subtitle: "National Clean Energy Fund",
          details: ["10 MW rooftop solar + 2 MW wind-solar mini-grid slashes grid draw by 60%"]
        },
        {
          subtitle: "Swachh Bharat Mission",
          details: ["On-site TSDF/incinerator for hazardous & municipal waste"]
        },
        {
          subtitle: "Atmanirbhar Bharat",
          details: ["≥ 80% local sourcing empowering Odisha & West Bengal MSMEs"]
        },
        {
          subtitle: "India's Net-Zero 2070",
          details: ["35% carbon-intensity cut by 2030 via renewables"]
        }
      ]
    }
  ];

  const stakeholders = [
    { name: "Ship Owners", percentage: 20, color: "#3B82F6", description: "Fast, safe disposal with 40% credit note on new-build contracts" },
    { name: "Steel Manufacturers", percentage: 18, color: "#10B981", description: "Guaranteed low-carbon feedstock with digital chain-of-custody" },
    { name: "Investors", percentage: 16, color: "#F59E0B", description: "First-mover advantage in world's largest green-steel facility" },
    { name: "Local Communities", percentage: 15, color: "#EF4444", description: "Safe jobs, capacity building, and community uplift programs" },
    { name: "Regulators", percentage: 12, color: "#8B5CF6", description: "Full transparency with real-time environmental dashboards" },
    { name: "Global Partners", percentage: 10, color: "#06B6D4", description: "Leadership showcase and R&D pipeline collaboration" },
    { name: "Government", percentage: 9, color: "#84CC16", description: "New industrial cluster catalyzing rural prosperity" }
  ];

  const certifications = [
    { name: "ISO 14001", logo: "🌱" },
    { name: "ISO 45001", logo: "🛡️" },
    { name: "UN Global Compact", logo: "🌍" },
    { name: "Bureau of International Recycling", logo: "♻️" },
    { name: "GRIHA 5-Star", logo: "⭐" },
    { name: "BEE 5-Star", logo: "⚡" }
  ];

  const teamMembers = [
    { name: "Rajesh Kumar", position: "CEO & Founder", description: "20+ years in maritime industry" },
    { name: "Priya Sharma", position: "CTO", description: "Expert in sustainable technology" },
    { name: "Amit Patel", position: "Head of Operations", description: "Specialist in ship recycling" },
    { name: "Sunita Rao", position: "Environmental Director", description: "Environmental compliance expert" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        >
          <source src="https://cdn.pixabay.com/video/2024/03/01/202560-918431383_large.mp4" type="video/mp4" />
        </video>

        {/* Navigation */}
        <nav className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/20 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">⚓ Neptunus</div>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-black">
              Get Started
            </Button>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-6 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Neptunus Ship Builders and Recyclers
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Pioneering India's carbon-negative future through sustainable ship recycling and circular steel production.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-8 flex flex-col items-center space-y-2">
          <ChevronDown className="w-6 h-6 animate-bounce" />
          <span className="text-sm">Scroll to Explore</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex overflow-x-auto space-x-8 pb-8">
            {services.map((service, index) => (
              <Card key={index} className="min-w-[400px] bg-gray-900/50 border-gray-700 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">{service.title}</h3>
                  <div className="space-y-6">
                    {service.content.map((item, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold mb-3 text-white">{item.subtitle}</h4>
                        <ul className="space-y-2">
                          {item.details.map((detail, detailIdx) => (
                            <li key={detailIdx} className="text-gray-300 text-sm leading-relaxed">
                              • {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Carousel */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications & Standards</h2>
          <div className="flex animate-scroll space-x-12">
            {[...certifications, ...certifications].map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 bg-white/10 rounded-lg flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-2">{cert.logo}</div>
                <div className="text-sm text-center">{cert.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="flex animate-scroll-reverse space-x-8">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-80 bg-gray-900/50 border-gray-700 hover:scale-105 transition-transform duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-400 mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholder Pie Chart */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Stakeholder Benefits</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-96 h-96">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {stakeholders.map((stakeholder, index) => {
                  const total = stakeholders.reduce((sum, s) => sum + s.percentage, 0);
                  const percentage = stakeholder.percentage / total;
                  const angle = percentage * 360;
                  const prevAngle = stakeholders.slice(0, index).reduce((sum, s) => sum + (s.percentage / total) * 360, 0);
                  
                  const x1 = 100 + 80 * Math.cos((prevAngle * Math.PI) / 180);
                  const y1 = 100 + 80 * Math.sin((prevAngle * Math.PI) / 180);
                  const x2 = 100 + 80 * Math.cos(((prevAngle + angle) * Math.PI) / 180);
                  const y2 = 100 + 80 * Math.sin(((prevAngle + angle) * Math.PI) / 180);
                  
                  const largeArcFlag = angle > 180 ? 1 : 0;
                  
                  return (
                    <g key={index}>
                      <path
                        d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                        fill={stakeholder.color}
                        className="hover:opacity-80 cursor-pointer transition-opacity duration-300"
                        data-tooltip={stakeholder.description}
                      />
                    </g>
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">🤝</div>
                  <div className="text-sm mt-2">United Goal</div>
                </div>
              </div>
            </div>
            <div className="ml-12 space-y-4">
              {stakeholders.map((stakeholder, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: stakeholder.color }}
                  ></div>
                  <div>
                    <div className="font-semibold">{stakeholder.name}</div>
                    <div className="text-sm text-gray-400">{stakeholder.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section id="metrics" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Key Impact Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-blue-600 to-purple-700 border-0 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">{animatedNumbers.steel}M</div>
                <div className="text-lg">MT Steel Recovered</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-600 to-teal-700 border-0 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">${animatedNumbers.gdp}B+</div>
                <div className="text-lg">GDP Contribution</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-600 to-red-700 border-0 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">{animatedNumbers.jobs.toLocaleString()}</div>
                <div className="text-lg">Direct Jobs Created</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-600 to-pink-700 border-0 text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">{(animatedNumbers.carbon / 100).toFixed(1)}M</div>
                <div className="text-lg">T CO₂ Avoided</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h3>
                <p className="text-lg mb-4 font-semibold">Integrity and commitment towards combating climate change.</p>
                <p className="text-gray-300 leading-relaxed">
                  "To create a vertically integrated ship recycling facility while upholding the highest labour safety and environmental sustainability standards."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-green-400">Our Vision</h3>
                <p className="text-lg mb-4 font-semibold">Leading India's transition to a carbon-secure future.</p>
                <p className="text-gray-300 leading-relaxed">
                  "To position India as a global leader in sustainable ship recycling by building the world's most advanced, environmentally responsible, and socially conscious maritime industrial facility."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get In Touch</h2>
          <Card className="bg-gray-900/50 border-gray-700">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" className="bg-gray-800 border-gray-600 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input className="bg-gray-800 border-gray-600 text-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea className="bg-gray-800 border-gray-600 text-white h-32" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">⚓ Neptunus</h3>
              <p className="text-gray-400">
                Pioneering India's carbon-negative future through sustainable ship recycling.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ship Recycling</li>
                <li>Steel Re-Rolling</li>
                <li>Shipbuilding & Repair</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Certifications</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@neptunus.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 xxx xxx xxxx</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Odisha, India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 Neptunus Ship Builders and Recyclers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
