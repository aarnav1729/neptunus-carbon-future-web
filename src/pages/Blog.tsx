import { Calendar, Clock, ArrowRight, BookOpen, Lightbulb, TrendingUp, Globe, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  const featuredArticle = {
    title: "How Repurposing Steel from Old Ships Combats Climate Change",
    excerpt: "Exploring the environmental benefits of ship recycling versus virgin steel production, backed by EU studies and climate research from leading organizations.",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Climate Impact",
    readTime: "8 min read",
    date: "December 15, 2024",
    tags: ["Climate Change", "Steel Recycling", "EU Studies", "Carbon Reduction"]
  };

  const articles = [
    {
      title: "Traditional Beaching vs Green Refurbishing: A Safety Analysis",
      excerpt: "Detailed comparison of environmental hazards posed by traditional ship beaching and how Neptunus' green refurbishing addresses human and ecological risks.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Environmental Safety",
      readTime: "6 min read",
      date: "December 12, 2024",
      tags: ["Safety", "Environmental Protection", "Green Technology"]
    },
    {
      title: "Success Story: Carbon Savings in Virgin Steel Replacement",
      excerpt: "Real-world case study demonstrating measurable carbon savings achieved through our steel recycling process compared to traditional virgin steel production.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Case Study",
      readTime: "5 min read",
      date: "December 10, 2024",
      tags: ["Carbon Savings", "Case Study", "Steel Production"]
    },
    {
      title: "Safe Worker Retention: Building a Sustainable Workforce",
      excerpt: "How our zero-accident pledge and comprehensive safety protocols have transformed worker retention rates and community trust in the ship recycling industry.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Workforce Development",
      readTime: "7 min read",
      date: "December 8, 2024",
      tags: ["Worker Safety", "Training", "Community Impact"]
    },
    {
      title: "Technical Deep Dive: IHM and Decontamination Processes",
      excerpt: "Comprehensive technical guide to Inventory of Hazardous Materials (IHM) procedures and our advanced decontamination protocols for safe ship dismantling.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Technical Insights",
      readTime: "10 min read",
      date: "December 5, 2024",
      tags: ["IHM", "Decontamination", "Technical Standards"]
    },
    {
      title: "EAF Steel Rolling: The Future of Green Steel Production",
      excerpt: "Understanding Electric Arc Furnace technology and how it revolutionizes steel production with significantly reduced carbon emissions and energy consumption.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Technology",
      readTime: "9 min read",
      date: "December 3, 2024",
      tags: ["EAF Technology", "Green Steel", "Innovation"]
    },
    {
      title: "Community Benefits: Transforming Lives in Coastal Odisha",
      excerpt: "Stories from local communities about how sustainable ship recycling has brought economic opportunities, infrastructure development, and improved quality of life.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Impact",
      readTime: "6 min read",
      date: "December 1, 2024",
      tags: ["Community Development", "Social Impact", "Odisha"]
    }
  ];

  const categories = [
    { name: "Climate Impact", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Technical Insights", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Case Studies", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Community Impact", count: 10, color: "bg-orange-100 text-orange-800" },
    { name: "Safety", count: 6, color: "bg-red-100 text-red-800" },
    { name: "Innovation", count: 9, color: "bg-indigo-100 text-indigo-800" }
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
              <a href="/impact" className="text-body hover:text-primary transition-colors">Impact</a>
              <a href="/blog" className="text-body text-primary">Blog</a>
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
              Case Studies & Insights
            </h1>
            <p className="text-title text-text-secondary mb-8">
              Explore technical insights, success stories, and thought leadership in sustainable ship recycling and circular steel production
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">50+</div>
                <div className="text-body text-text-secondary">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">6</div>
                <div className="text-body text-text-secondary">Topic Categories</div>
              </div>
              <div className="text-center">
                <div className="text-title font-bold text-primary mb-2">10K+</div>
                <div className="text-body text-text-secondary">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Featured Article
            </h2>
            <p className="text-title text-text-secondary">
              Latest insights from our research and industry experience
            </p>
          </div>

          <Card className="elevated-panel overflow-hidden mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-4">
                      {featuredArticle.category}
                    </Badge>
                    <h1 className="text-headline font-bold text-text-primary mb-4">
                      {featuredArticle.title}
                    </h1>
                    <p className="text-body text-text-secondary leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 text-caption text-text-secondary">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-headline font-bold text-text-primary mb-4">
              Browse by Category
            </h2>
            <p className="text-title text-text-secondary">
              Explore articles organized by topic areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="glass-panel cursor-pointer hover-lift transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {index === 0 && <Globe className="h-6 w-6 text-primary" />}
                      {index === 1 && <Lightbulb className="h-6 w-6 text-primary" />}
                      {index === 2 && <BookOpen className="h-6 w-6 text-primary" />}
                      {index === 3 && <Users className="h-6 w-6 text-primary" />}
                      {index === 4 && <Shield className="h-6 w-6 text-primary" />}
                      {index === 5 && <TrendingUp className="h-6 w-6 text-primary" />}
                    </div>
                  </div>
                  <h3 className="text-body-large font-bold text-text-primary mb-2">
                    {category.name}
                  </h3>
                  <Badge className={category.color}>
                    {category.count} articles
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-display font-bold text-text-primary mb-4">
              Recent Articles
            </h2>
            <p className="text-title text-text-secondary">
              Latest insights and case studies from our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="elevated-panel cursor-pointer group hover-lift transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-body-large font-bold text-text-primary line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-body text-text-secondary line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-caption text-text-secondary">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline font-bold text-primary-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-title text-primary-foreground/90 mb-8">
              Subscribe to our newsletter for the latest insights in sustainable ship recycling and circular economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground"
              />
              <Button variant="secondary" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;