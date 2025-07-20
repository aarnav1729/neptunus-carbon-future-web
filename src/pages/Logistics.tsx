import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Truck, Ship, Warehouse, MapPin, Clock, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Logistics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="container mx-auto px-6">
          <Button 
            onClick={() => navigate(-1)} 
            variant="ghost" 
            className="mb-4 text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Logistics & Supply Chain</h1>
          <p className="text-xl text-white/80">
            End-to-end logistics solutions for maritime recycling and steel manufacturing operations
          </p>
        </div>
      </header>

      {/* Hero Grid Layout */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img 
                src="/src/assets/logistics.jpg" 
                alt="Logistics Operations"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Comprehensive Logistics Solutions</h2>
              <p className="text-muted-foreground">
                Our integrated logistics network ensures seamless transportation, storage, and distribution 
                of materials and products across the entire supply chain.
              </p>
              <div className="space-y-3">
                {[
                  "Multi-modal Transportation",
                  "Strategic Warehouse Locations",
                  "Real-time Tracking",
                  "Customs Clearance Support"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Stacked Layout */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Logistics Services</h2>
          
          <div className="space-y-8">
            {[
              {
                icon: Ship,
                title: "Maritime Transport",
                description: "Specialized vessels for transporting end-of-life ships to recycling facilities",
                features: ["Heavy-lift Capabilities", "International Routes", "Port-to-Port Service"]
              },
              {
                icon: Truck,
                title: "Land Transportation",
                description: "Comprehensive road and rail transport solutions for steel products and materials",
                features: ["Heavy Cargo Transport", "Just-in-Time Delivery", "Route Optimization"]
              },
              {
                icon: Warehouse,
                title: "Warehousing & Storage",
                description: "Strategic storage facilities with advanced inventory management systems",
                features: ["Climate-Controlled Storage", "Automated Systems", "Security Monitoring"]
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? 'lg:grid-cols-2' : ''
                  }`}>
                    <div className={`p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="flex items-center mb-4">
                        <service.icon className="text-blue-600 mr-4" size={48} />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="mr-2">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className={`bg-gradient-to-br from-blue-50 to-blue-100 p-8 flex items-center justify-center ${
                      index % 2 === 1 ? 'lg:order-1' : ''
                    }`}>
                      <service.icon className="text-blue-600" size={120} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Network Map */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Global Network</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our extensive logistics network spans across major shipping routes and industrial centers, 
                ensuring efficient and cost-effective transportation solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-muted-foreground">Global Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
                  <div className="text-muted-foreground">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-muted-foreground">Warehouse Facilities</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.5%</div>
                  <div className="text-muted-foreground">On-Time Delivery</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "24/7 Operations Support" },
                    { icon: MapPin, text: "GPS Tracking & Monitoring" },
                    { icon: Globe, text: "International Compliance" },
                    { icon: Ship, text: "Multi-Modal Capabilities" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <feature.icon size={24} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technology Integration</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-Time Tracking</h3>
                <p className="text-muted-foreground">
                  Advanced GPS and IoT sensors provide real-time visibility of all shipments and inventory.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Warehouse className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Warehousing</h3>
                <p className="text-muted-foreground">
                  Automated inventory management and robotic systems optimize storage and retrieval.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Digital Platform</h3>
                <p className="text-muted-foreground">
                  Unified digital platform for booking, tracking, and managing all logistics operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Optimize Your Supply Chain</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our logistics experts design a customized solution for your supply chain needs.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Get Logistics Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Logistics;