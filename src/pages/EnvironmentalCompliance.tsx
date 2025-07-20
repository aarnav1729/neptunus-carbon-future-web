import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Shield, Monitor, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnvironmentalCompliance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-accent text-accent-foreground py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            className="mb-4 text-accent-foreground hover:bg-accent-foreground/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Environmental Compliance</h1>
          <p className="text-xl text-accent-foreground/80">
            Comprehensive environmental monitoring and compliance services for maritime and industrial operations
          </p>
        </div>
      </header>

      {/* Alternating Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-16">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Environmental Monitoring</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced environmental monitoring systems ensure continuous compliance with all environmental 
                regulations and standards, providing real-time data and comprehensive reporting.
              </p>
              <div className="space-y-4">
                {[
                  "24/7 Real-time Monitoring",
                  "Automated Reporting Systems",
                  "Compliance Dashboard",
                  "Early Warning Alerts"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-accent w-5 h-5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/src/assets/environmental-compliance.jpg" 
                alt="Environmental Compliance"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>

          {/* Second Row - Reversed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-muted/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Compliance Standards</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "ISO 14001",
                    "Basel Convention",
                    "MARPOL 73/78",
                    "IMO Guidelines",
                    "EU Directives",
                    "Local Regulations"
                  ].map((standard, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Regulatory Compliance</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We ensure full compliance with international, national, and local environmental regulations, 
                providing peace of mind and protecting your operations from regulatory risks.
              </p>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Compliance Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Compliance Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Monitor,
                title: "Environmental Monitoring",
                description: "Continuous monitoring of air, water, and soil quality parameters."
              },
              {
                icon: FileText,
                title: "Documentation",
                description: "Comprehensive documentation and record-keeping for regulatory compliance."
              },
              {
                icon: Shield,
                title: "Risk Assessment",
                description: "Thorough environmental risk assessments and mitigation strategies."
              },
              {
                icon: CheckCircle,
                title: "Audit Support",
                description: "Full support during environmental audits and inspections."
              }
            ].map((service, index) => (
              <Card key={index} className="text-center h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <service.icon className="mx-auto mb-4 text-accent" size={48} />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Parameters */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What We Monitor</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Air Quality</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Particulate Matter (PM2.5, PM10)</li>
                  <li>• Nitrogen Oxides (NOx)</li>
                  <li>• Sulfur Dioxide (SO2)</li>
                  <li>• Volatile Organic Compounds</li>
                  <li>• Carbon Monoxide</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Water Quality</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• pH Levels</li>
                  <li>• Heavy Metals</li>
                  <li>• Oil & Grease</li>
                  <li>• Suspended Solids</li>
                  <li>• Biological Oxygen Demand</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">Soil Quality</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Heavy Metal Contamination</li>
                  <li>• Hydrocarbon Levels</li>
                  <li>• pH Balance</li>
                  <li>• Nutrient Content</li>
                  <li>• Microbial Activity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ensure Environmental Compliance</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our environmental experts to discuss your compliance requirements.
          </p>
          <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
            Schedule Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalCompliance;