import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Zap, Target, TrendingUp, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SteelManufacturing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-secondary text-secondary-foreground py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            className="mb-4 text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Steel Manufacturing</h1>
          <p className="text-xl text-secondary-foreground/80">
            High-quality steel production from recycled materials, contributing to sustainable manufacturing practices
          </p>
        </div>
      </header>

      {/* Hero Section with alternating layout */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/src/assets/steel-manufacturing.jpg" 
                alt="Steel Manufacturing"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Sustainable Steel Production</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced steel manufacturing processes transform recycled ship materials into high-grade steel products, 
                creating a circular economy that benefits both the environment and industry.
              </p>
              <div className="space-y-4">
                {[
                  "100% recycled raw materials",
                  "40% lower carbon footprint",
                  "Premium quality steel grades",
                  "Continuous quality monitoring"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: "Material Sorting",
                description: "Advanced sorting and preparation of recycled steel materials for optimal processing quality."
              },
              {
                icon: Zap,
                title: "Electric Arc Furnace",
                description: "High-efficiency electric arc furnaces melt recycled steel with minimal energy consumption."
              },
              {
                icon: Target,
                title: "Quality Control",
                description: "Rigorous testing and quality assurance at every stage of the manufacturing process."
              },
              {
                icon: TrendingUp,
                title: "Final Products",
                description: "High-grade steel products ready for construction, automotive, and industrial applications."
              }
            ].map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardContent className="p-6">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <step.icon className="mx-auto mb-4 text-secondary mt-4" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Product Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Structural Steel</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Grades: S355, S275, S235</li>
                      <li>• Tensile Strength: 490-630 MPa</li>
                      <li>• Applications: Construction, Infrastructure</li>
                      <li>• Standards: EN 10025, ASTM A572</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Reinforcement Steel</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Grades: B500A, B500B, B500C</li>
                      <li>• Yield Strength: 500 MPa</li>
                      <li>• Applications: Concrete Reinforcement</li>
                      <li>• Standards: EN 10080, IS 1786</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Quality Certifications</h2>
              <div className="space-y-3">
                {[
                  "ISO 9001:2015",
                  "ISO 14001:2015",
                  "OHSAS 18001",
                  "CE Marking",
                  "BIS Certification",
                  "Lloyd's Register Approval"
                ].map((cert, index) => (
                  <Badge key={index} variant="outline" className="block text-center py-2">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Steel Solutions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with our steel manufacturing experts for customized solutions.
          </p>
          <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            Request Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SteelManufacturing;