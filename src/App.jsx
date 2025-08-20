import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import HeroSection from "./components/HeroSection";

export default function App() {
  return (
    <main className="font-sans text-gray-800">
      {/* Skip to Content Link for accessibility */}
      <a href="#about" className="sr-only focus:not-sr-only absolute top-2 left-2 bg-blue-600 text-white px-4 py-2 rounded z-50">Skip to Content</a>
      <header>
        <nav aria-label="Main Navigation">
          <Navbar />
        </nav>
      </header>
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="relative">
              <div className="relative z-10 flex justify-center">
                <div className="relative">
                  <img 
                    src="/seyram.png" 
                    alt="Portrait of Seyram, SEO Specialist & Digital Marketing Tutor" 
                    className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/50"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent" />
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400/30 rounded-full blur-xl animate-pulse" />
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-400/30 rounded-full blur-lg animate-pulse" />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Seyram</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-700">
                  SEO Specialist & Digital Marketing Tutor
                </h3>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With nearly 4 years of experience, I've managed SEO, Google Ads, and content strategy for nonprofits, agencies, and service-based businesses. I teach from practice, not theory — simplifying SEO into clear steps that drive measurable results, even on small budgets.
              </p>

              {/* Key Points */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🎯", text: "Data-driven strategies" },
                  { icon: "📈", text: "Proven ROI results" },
                  { icon: "🎓", text: "Practical teaching approach" },
                  { icon: "💡", text: "Small budget optimization" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Read More About Me
              </Button>
            </div>

            {/* Profile Image */}
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Services
            </span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What I <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to drive measurable growth for your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "SEO Strategy",
                description: "Complete SEO audits, keyword research, and strategic optimization to boost organic rankings",
                icon: "🔍",
                features: ["Technical SEO", "On-page optimization", "Content strategy", "Link building"],
                gradient: "from-blue-600 to-cyan-600"
              },
              {
                title: "Google Ads",
                description: "High-converting PPC campaigns with laser-focused targeting and ROI optimization",
                icon: "📊",
                features: ["Campaign setup", "Ad copywriting", "Bid management", "Performance tracking"],
                gradient: "from-green-600 to-emerald-600"
              },
              {
                title: "Content Marketing",
                description: "Data-driven content strategies that attract, engage, and convert your target audience",
                icon: "✍️",
                features: ["Content planning", "SEO writing", "Blog management", "Content optimization"],
                gradient: "from-purple-600 to-pink-600"
              },
              {
                title: "Training & Consulting",
                description: "Personalized coaching and strategic guidance to build your in-house marketing capabilities",
                icon: "🎓",
                features: ["1-on-1 coaching", "Team training", "Strategy sessions", "Ongoing support"],
                gradient: "from-orange-600 to-red-600"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-gray-300 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105`}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Grow Your Business?
              </h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can achieve your marketing goals together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold">
                  Book Free Consultation
                </Button>
                <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-4">
              Portfolio
            </span>
            <h2 id="portfolio-heading" className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">SEO & Marketing</span> Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real campaigns. Each project showcases measurable growth and proven strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frogmen Technologies",
                metrics: [
                  { icon: "📈", value: "+118%", label: "Clicks in 3 months" },
                  { icon: "🏆", value: "2×", label: "Organic Traffic" }
                ],
                description: "Strategic keyword optimization and internal linking architecture",
                gradient: "from-blue-600 to-purple-600",
                tags: ["SEO", "Technical", "Content"]
              },
              {
                title: "BoracayAdventures.com",
                metrics: [
                  { icon: "📈", value: "+44%", label: "Organic Clicks" },
                  { icon: "🌍", value: "+95%", label: "Impressions" }
                ],
                description: "Content updates and targeted keyword optimization strategy",
                gradient: "from-green-600 to-teal-600",
                tags: ["Content", "SEO", "Travel"]
              },
              {
                title: "Liberty Shine Car Wash",
                metrics: [
                  { icon: "🥇", value: "#1", label: "Local Ranking" },
                  { icon: "📍", value: "Top 3", label: "Google Maps" }
                ],
                description: "Local SEO dominance through Google Business Profile optimization",
                gradient: "from-orange-600 to-red-600",
                tags: ["Local SEO", "GBP", "Maps"]
              },
              {
                title: "OffroadHandbook.com",
                metrics: [
                  { icon: "📈", value: "+70%", label: "Clicks in 28 days" },
                  { icon: "🚀", value: "+123%", label: "Impressions" }
                ],
                description: "Rapid technical and on-page SEO improvements",
                gradient: "from-purple-600 to-pink-600",
                tags: ["Technical", "On-Page", "Quick Wins"]
              },
              {
                title: "Google Ads Campaign",
                metrics: [
                  { icon: "💰", value: "10×", label: "ROI in 3 weeks" },
                  { icon: "📊", value: "$2,700", label: "Revenue" }
                ],
                description: "High-converting campaign with AED 215.98 budget",
                gradient: "from-yellow-600 to-orange-600",
                tags: ["Google Ads", "PPC", "ROI"]
              },
              {
                title: "E-commerce SEO",
                metrics: [
                  { icon: "🛒", value: "+156%", label: "Organic Sales" },
                  { icon: "💳", value: "+89%", label: "Revenue Growth" }
                ],
                description: "Product page optimization and technical SEO overhaul",
                gradient: "from-indigo-600 to-purple-600",
                tags: ["E-commerce", "Technical", "Sales"]
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white font-bold`}>
                      {project.metrics[0].icon}
                    </div>
                  </div>

                  <div className="space-y-3 mb-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-2xl">{metric.icon}</span>
                        <div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-sm text-gray-300">{metric.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button 
                      variant="ghost" 
                      className="w-full text-blue-300 hover:text-blue-200 hover:bg-blue-500/10"
                    >
                      View Case Study →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section id="featured" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
              Featured Publication
            </span>
            <h2 id="featured-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Thought Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Published insights on critical issues affecting communities and industries
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image/Visual */}
                <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Modern Ghana</h3>
                    <p className="text-blue-100">Leading News Platform</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                      September 2024
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      The Health Cost of Galamsey in Ghana
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      An in-depth analysis of the environmental and health impacts of illegal mining activities in Ghana, 
                      exploring the long-term consequences for communities and proposing sustainable solutions.
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Environmental impact assessment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Community health analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700">Policy recommendations</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      asChild
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <a 
                        href="https://www.modernghana.com/news/1341271/the-health-cost-of-galamsey-in-ghana.html" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Full Article →
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-semibold"
                    >
                      Share Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center" role="contentinfo">
        <p>&copy; 2025 Seyram. All rights reserved.</p>
      </footer>
    </main>
  );
}
