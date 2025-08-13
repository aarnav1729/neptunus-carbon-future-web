// src/pages/Blog.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Globe,
  Users as UsersIcon,
  Shield,
  X,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blog = () => {
  // Navbar state (always hamburger, matched to Services.tsx)
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Shrink navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.8;
      setNavScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Stakeholders", href: "/stakeholders" },
    { label: "Impact", href: "/impact" },
    { label: "Blog", href: "/blog", active: true },
    { label: "Partners", href: "/partners" },
  ];

  const featuredArticle = {
    title: "How Repurposing Steel from Old Ships Combats Climate Change",
    excerpt:
      "Exploring the environmental benefits of ship recycling versus virgin steel production, backed by EU studies and climate research from leading organizations.",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Climate Impact",
    readTime: "8 min read",
    date: "December 15, 2024",
    tags: ["Climate Change", "Steel Recycling", "EU Studies", "Carbon Reduction"],
  };

  const articles = [
    {
      title: "Traditional Beaching vs Green Refurbishing: A Safety Analysis",
      excerpt:
        "Detailed comparison of environmental hazards posed by traditional ship beaching and how Neptunus' green refurbishing addresses human and ecological risks.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Environmental Safety",
      readTime: "6 min read",
      date: "December 12, 2024",
      tags: ["Safety", "Environmental Protection", "Green Technology"],
    },
    {
      title: "Success Story: Carbon Savings in Virgin Steel Replacement",
      excerpt:
        "Real-world case study demonstrating measurable carbon savings achieved through our steel recycling process compared to traditional virgin steel production.",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Case Study",
      readTime: "5 min read",
      date: "December 10, 2024",
      tags: ["Carbon Savings", "Case Study", "Steel Production"],
    },
    {
      title: "Safe Worker Retention: Building a Sustainable Workforce",
      excerpt:
        "How our zero-accident pledge and comprehensive safety protocols have transformed worker retention rates and community trust in the ship recycling industry.",
      image:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Workforce Development",
      readTime: "7 min read",
      date: "December 8, 2024",
      tags: ["Worker Safety", "Training", "Community Impact"],
    },
    {
      title: "Technical Deep Dive: IHM and Decontamination Processes",
      excerpt:
        "Comprehensive technical guide to Inventory of Hazardous Materials (IHM) procedures and our advanced decontamination protocols for safe ship dismantling.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Technical Insights",
      readTime: "10 min read",
      date: "December 5, 2024",
      tags: ["IHM", "Decontamination", "Technical Standards"],
    },
    {
      title: "EAF Steel Rolling: The Future of Green Steel Production",
      excerpt:
        "Understanding Electric Arc Furnace technology and how it revolutionizes steel production with significantly reduced carbon emissions and energy consumption.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Technology",
      readTime: "9 min read",
      date: "December 3, 2024",
      tags: ["EAF Technology", "Green Steel", "Innovation"],
    },
    {
      title: "Community Benefits: Transforming Lives in Coastal Odisha",
      excerpt:
        "Stories from local communities about how sustainable ship recycling has brought economic opportunities, infrastructure development, and improved quality of life.",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Community Impact",
      readTime: "6 min read",
      date: "December 1, 2024",
      tags: ["Community Development", "Social Impact", "Odisha"],
    },
  ];

  const categories = [
    { name: "Climate Impact", count: 12, color: "bg-green-100 text-green-800" },
    { name: "Technical Insights", count: 8, color: "bg-blue-100 text-blue-800" },
    { name: "Case Studies", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Community Impact", count: 10, color: "bg-orange-100 text-orange-800" },
    { name: "Safety", count: 6, color: "bg-red-100 text-red-800" },
    { name: "Innovation", count: 9, color: "bg-indigo-100 text-indigo-800" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navbar (always hamburger, identical to Services.tsx) */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50 pt-4 transition-all duration-500 ease-out">
        <div className="flex items-center justify-between py-4 px-6 rounded-2xl bg-white backdrop-blur-lg shadow-lg ring-1 ring-white/10">
          <img
            src="/assets/logo.png"
            alt="Neptunus Logo"
            className="h-10 md:h-12 w-auto transition-all duration-300"
          />
          <button
            className="p-2 text-black"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute mt-2 right-0 w-1/2 rounded-2xl bg-white/20 backdrop-blur-lg shadow-lg ring-1 ring-white/10 p-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ label, href, active }) => (
                <Link
                  key={label}
                  to={href}
                  className={`block text-lg ${
                    active ? "text-primary font-medium" : "hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button
                className="mt-2 btn-primary w-full text-lg"
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

      {/* Hero Section (green gradient like Services) */}
      <section className="pt-28 pb-8 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-display font-bold text-stone-200 mb-4">
              Case Studies & Insights
            </h1>
            <p className="text-title text-stone-200 mb-4">
              Explore technical insights, success stories, and thought leadership in sustainable ship recycling and circular steel production
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">50+</div>
                <div className="text-body text-stone-200">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">6</div>
                <div className="text-body text-stone-200">Topic Categories</div>
              </div>
              <div className="text-center">
                <div className="text-title text-stone-200 font-bold text-primary mb-2">10K+</div>
                <div className="text-body text-stone-200">Monthly Readers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article (white section with dark text) */}
      <section className="section-padding pt-12 pb-12 bg-white text-black">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-black mb-2">Featured Article</h2>
            <p className="text-title text-slate-600">Latest insights from our research and industry experience</p>
          </div>

          <Card className="elevated-panel overflow-hidden mb-12 bg-stone-200 text-black">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-auto">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-300/10 to-green-500/10" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-green-300/10 to-green-500/10 text-primary-foreground">Featured</Badge>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-2 border-black text-black">
                      {featuredArticle.category}
                    </Badge>
                    <h1 className="text-headline font-bold text-black mb-2">
                      {featuredArticle.title}
                    </h1>
                    <p className="text-body text-black/80 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 text-caption text-black/70">
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
                    {featuredArticle.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-white text-black">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="group bg-green-900 text-white hover:bg-green-800">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories (on green gradient; cards contrast in white) */}
      <section className="py-16 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-stone-200 mb-2">Browse by Category</h2>
            <p className="text-title text-stone-200">Explore articles organized by topic areas</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <Card
                key={idx}
                className="elevated-panel cursor-pointer hover-lift transition-all duration-300 bg-white text-black"
              >
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-300/10 to-green-500/10">
                      {idx === 0 && <Globe className="h-6 w-6 text-black" />}
                      {idx === 1 && <Lightbulb className="h-6 w-6 text-black" />}
                      {idx === 2 && <BookOpen className="h-6 w-6 text-black" />}
                      {idx === 3 && <UsersIcon className="h-6 w-6 text-black" />}
                      {idx === 4 && <Shield className="h-6 w-6 text-black" />}
                      {idx === 5 && <TrendingUp className="h-6 w-6 text-black" />}
                    </div>
                  </div>
                  <h3 className="text-body-large font-bold text-black mb-2">
                    {category.name}
                  </h3>
                  <Badge className={`${category.color} text-sm`}>{category.count} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles (white section with dark text and stone cards) */}
      <section className="section-padding pt-12 pb-12 bg-white text-black">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-display font-bold text-black mb-2">Recent Articles</h2>
            <p className="text-title text-slate-600">Latest insights and case studies from our team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <Card
                key={idx}
                className="elevated-panel cursor-pointer group hover-lift transition-all duration-300 bg-stone-200 text-black"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 group-hover:bg-gradient-to-r from-green-300/10 to-green-500/10">
                  <div className="space-y-4 ">
                    <h3 className="text-body-large font-bold text-black line-clamp-2 group-hover:text-green-900  transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-body text-black/80 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-caption text-black/70">
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
                      {article.tags.slice(0, 2).map((tag, i2) => (
                        <Badge key={i2} variant="outline" className="text-xs border-black text-black">
                          {tag}
                        </Badge>
                      ))}
                      {article.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs border-black text-black">
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
            <Button
              variant="outline"
              size="lg"
              className="border-white bg-gradient-to-r from-green-300/10 to-green-500/10 text-white hover:bg-primary hover:text-black"
            >
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup (CTA styling aligned with Services buttons/colors) */}
      <section className="py-16 bg-gradient-to-r from-green-300/10 to-green-500/10">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-headline font-bold text-stone-200 mb-4">
              Stay Updated
            </h2>
            <p className="text-title text-stone-200/90 mb-6">
              Subscribe to our newsletter for the latest insights in sustainable ship recycling and circular economy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-black placeholder:text-slate-500 border-0 focus:ring-2 focus:ring-primary"
              />
              <Button variant="secondary" className="px-8 bg-green-900 text-white hover:bg-green-800">
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