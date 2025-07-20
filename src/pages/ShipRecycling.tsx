import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, Recycle, Globe, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ShipRecycling = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            className="mb-4 text-primary-foreground hover:bg-primary-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ship Recycling</h1>
          <p className="text-xl text-primary-foreground/80">
            Environmentally responsible ship breaking and recycling services with full compliance to international standards
          </p>
        </div>
      </header>

      {/* Hero Image */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="aspect-video rounded-2xl overflow-hidden mb-16">
            <img 
              src="/src/assets/ship-recycling.jpg" 
              alt="Ship Recycling Facility"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Ship Recycling Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Comprehensive safety protocols ensuring worker protection and environmental safety throughout the recycling process."
              },
              {
                icon: Recycle,
                title: "Green Recycling",
                description: "Advanced recycling techniques that maximize material recovery while minimizing environmental impact."
              },
              {
                icon: Globe,
                title: "Global Standards",
                description: "Full compliance with international maritime recycling regulations and environmental standards."
              },
              {
                icon: Award,
                title: "Certified Process",
                description: "Internationally certified processes ensuring quality and compliance at every step."
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <feature.icon className="mx-auto mb-4 text-primary" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Ship Recycling?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Environmental Excellence</h3>
                  <p className="text-muted-foreground">
                    Our state-of-the-art facility operates with zero-discharge principles, ensuring no harmful substances enter the environment during the recycling process.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">International Compliance</h3>
                  <p className="text-muted-foreground">
                    Fully compliant with Hong Kong International Convention, EU Ship Recycling Regulation, and all relevant international standards.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Maximum Recovery</h3>
                  <p className="text-muted-foreground">
                    Advanced processing techniques ensure maximum material recovery, with over 95% of ship materials being recycled into new products.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Certifications & Standards</h2>
              <div className="space-y-4">
                {[
                  "Hong Kong International Convention",
                  "EU Ship Recycling Regulation",
                  "ISO 14001 Environmental Management",
                  "ISO 45001 Occupational Health & Safety",
                  "Basel Convention Compliance",
                  "IMO Guidelines"
                ].map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Badge variant="secondary">{cert}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Ship Recycling Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your ship recycling requirements and get a customized solution.
          </p>
          <Button size="lg" variant="secondary">
            Get Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShipRecycling;