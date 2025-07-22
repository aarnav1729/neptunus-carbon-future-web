import { Leaf, Zap, Globe, Factory, TrendingUp, Award, ArrowRight, BarChart3, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  const impactMetrics = [
    {
      title: "Carbon Emissions Avoided",
      value: "8.35 Million",
      unit: "tonnes CO₂/year",
      description: "Per tonne of green steel: 1 tonne steel → 1.67 tonne CO₂ prevented",
      details: [
        "Annual impact (5 Mt steel): 5,000,000 t × 1.67 t CO₂/t = 8.35 million t CO₂ avoided",
        "Real-world equivalent: Removing 1.75 million passenger cars from the road for one year"
      ],
      icon: Leaf,
      color: "text-green-600",
      progress: 85
    },
    {
      title: "Energy Savings",
      value: "4,700",
      unit: "kWh per tonne recycled",
      description: "Recycling scrap steel uses just 28% of the energy needed for primary production",
      details: [
        "Electricity saved: ≈ 4,700 kWh per tonne recycled",
        "Total annual energy savings equivalent to powering 50,000 homes"
      ],
      icon: Zap,
      color: "text-yellow-600",
      progress: 72
    },
    {
      title: "Raw Material Conservation",
      value: "2.5 Million",
      unit: "tonnes saved annually",
      description: "Per tonne of scrap steel reused, significant raw materials are conserved",
      details: [
        "1.4 tonnes iron ore saved",
        "0.8 tonnes coking coal saved",
        "0.3 tonnes limestone saved"
      ],
      icon: Factory,
      color: "text-blue-600",
      progress: 90
    }
  ];

  const nationalInitiatives = [
    {
      name: "National Solar Mission",
      goal: "280 GW solar capacity by 2030",
      contribution: "25 MW Solar Park Onsite",
      impact: "Clean power for operations and grid integration",
      status: "Active",
      details: [
        "Supplies clean power for operations",
        "Excess capacity integrated into renewable grid",
        "Supports peak-hour load balancing"
      ]
    },
    {
      name: "National Green Hydrogen Mission",
      goal: "5 million tonnes green hydrogen by 2030",
      contribution: "Steel logistics hub for hydrogen infrastructure",
      impact: "Supporting hydrogen corridor development",
      status: "Planning",
      details: [
        "Steel reuse for hydrogen plant construction",
        "Pipeline materials from recycled steel",
        "Fuel cell fleet retrofitting site"
      ]
    },
    {
      name: "Swachh Bharat Mission",
      goal: "Scientific waste processing",
      contribution: "Segregated hazardous waste treatment",
      impact: "Zero-landfill dismantling practices",
      status: "Implemented",
      details: [
        "TSDF, ETP, STP systems",
        "Responsible plastic and e-waste disposal",
        "Circular economy support"
      ]
    },
    {
      name: "Mission LiFE",
      goal: "Sustainable consumption and industrial action",
      contribution: "Model industrial ecosystem",
      impact: "Demonstrates scalable green industrial conduct",
      status: "Ongoing",
      details: [
        "Energy-efficient equipment",
        "Low-emission practices",
        "Worker safety infrastructure"
      ]
    }
  ];

  const odishaImpact = [
    {
      metric: "Job Creation",
      value: "22,000+",
      description: "Direct and indirect employment opportunities",
      icon: "👥"
    },
    {
      metric: "GDP Contribution",
      value: "₹3B+",
      description: "Annual contribution to Odisha's economy",
      icon: "💰"
    },
    {
      metric: "Skill Development",
      value: "5,000+",
      description: "Workers trained in green technologies",
      icon: "🎓"
    },
    {
      metric: "Community Investment",
      value: "₹50Cr+",
      description: "Investment in local infrastructure",
      icon: "🏗️"
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
              <a href="/about" className="text-body hover:text-primary transition-colors">About</a>
              <a href="/services" className="text-body hover:text-primary transition-colors">Services</a>
              <a href="/stakeholders" className="text-body hover:text-primary transition-colors">Stakeholders</a>
              <a href="/impact" className="text-body text-primary">Impact</a>
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
              Global Impact & Societal Benefits
            </h1>
            <p className="text-title text-text-secondary mb-8">
              Transforming the maritime industry while addressing climate change and driving sustainable development
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">8.35M</div>
                <div className="text-body text-text-secondary">Tonnes CO₂ Avoided</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">22K+</div>
                <div className="text-body text-text-secondary">Jobs Created</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">5M</div>
                <div className="text-body text-text-secondary">Tonnes Steel Recycled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Metrics */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Environmental Impact Metrics
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Our operations create measurable positive impact on the environment through innovative recycling and circular economy practices
            </p>
          </div>

          <div className="grid gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="elevated-panel overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-0">
                  {/* Metric Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
                    <div className="flex items-center mb-6">
                      <metric.icon className={`h-8 w-8 ${metric.color} mr-3`} />
                      <div className="text-2xl font-bold text-text-primary">
                        {metric.value}
                      </div>
                    </div>
                    <h3 className="text-title font-bold text-text-primary mb-2">
                      {metric.title}
                    </h3>
                    <div className="text-body text-text-secondary mb-4">
                      {metric.unit}
                    </div>
                    <Progress value={metric.progress} className="h-2" />
                    <div className="text-caption text-text-secondary mt-2">
                      {metric.progress}% efficiency achieved
                    </div>
                  </div>

                  {/* Metric Details */}
                  <div className="lg:col-span-2 p-8">
                    <p className="text-body text-text-secondary mb-6 leading-relaxed">
                      {metric.description}
                    </p>
                    <div className="space-y-4">
                      <h4 className="text-body-large font-semibold text-text-primary">
                        Key Details:
                      </h4>
                      <ul className="space-y-3">
                        {metric.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <BarChart3 className="h-4 w-4 text-primary mr-3 flex-shrink-0 mt-1" />
                            <span className="text-body text-text-secondary">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* National Initiatives Support */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Supporting India's National Missions
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Neptunus actively contributes to India's sustainable development goals and national missions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nationalInitiatives.map((initiative, index) => (
              <Card key={index} className="glass-panel">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant={initiative.status === 'Active' ? 'default' : initiative.status === 'Implemented' ? 'secondary' : 'outline'}>
                      {initiative.status}
                    </Badge>
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-body-large text-text-primary">
                    {initiative.name}
                  </CardTitle>
                  <p className="text-body text-text-secondary">
                    Goal: {initiative.goal}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-background/50 p-4 rounded-lg">
                      <h4 className="text-body font-semibold text-text-primary mb-2">
                        Our Contribution:
                      </h4>
                      <p className="text-body text-primary font-medium">
                        {initiative.contribution}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-body font-semibold text-text-primary mb-2">
                        Impact:
                      </h4>
                      <p className="text-body text-text-secondary mb-4">
                        {initiative.impact}
                      </p>
                      <ul className="space-y-2">
                        {initiative.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-caption text-text-secondary">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Odisha Impact */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Transforming Odisha
            </h2>
            <p className="text-title text-text-secondary max-w-3xl mx-auto">
              Our commitment to Odisha goes beyond industrial development—we're building stronger communities and sustainable prosperity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {odishaImpact.map((item, index) => (
              <Card key={index} className="glass-panel text-center p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-title font-bold text-primary mb-2">
                  {item.value}
                </div>
                <h3 className="text-body-large font-bold text-text-primary mb-2">
                  {item.metric}
                </h3>
                <p className="text-body text-text-secondary">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="elevated-panel">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-headline font-bold text-text-primary mb-4">
                  Community Promise
                </h3>
                <blockquote className="text-body-large text-text-secondary italic leading-relaxed">
                  "For the thousands of families along Odisha's coastline, Neptunus means access to safer jobs, fair wages, and long-term growth. It means skill-building centers for youth, local supply chains for rural artisans and vendors, and classrooms supported by clean, sustainable industry."
                </blockquote>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="text-body font-bold text-text-primary mb-1">Safety First</h4>
                    <p className="text-caption text-text-secondary">Zero-accident pledge with OSHA-grade protocols</p>
                  </div>
                  <div>
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="text-body font-bold text-text-primary mb-1">Local Hiring</h4>
                    <p className="text-caption text-text-secondary">70% local hire target with training programs</p>
                  </div>
                  <div>
                    <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h4 className="text-body font-bold text-text-primary mb-1">Infrastructure</h4>
                    <p className="text-caption text-text-secondary">Schools, housing, and medical facilities</p>
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
            <h2 className="text-headline font-bold text-primary-foreground mb-6">
              Join the Impact Revolution
            </h2>
            <p className="text-title text-primary-foreground/90 mb-8">
              Be part of the transformation that's reshaping industries and communities for a sustainable future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="group">
                <a href="/stakeholders" className="flex items-center">
                  Explore Opportunities
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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