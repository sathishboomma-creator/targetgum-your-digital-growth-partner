import { 
  Target, 
  TrendingUp, 
  Share2, 
  Search, 
  Mail, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven campaigns on Google, Meta & more to maximize your ROI and reach target audiences.",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    description: "Dominate search rankings with strategic content that drives organic traffic and builds authority.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities and drive conversions with compelling social media strategies.",
  },
  {
    icon: TrendingUp,
    title: "Growth Hacking",
    description: "Innovative, data-backed experiments to unlock explosive growth for your business.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "High-converting email campaigns that nurture leads and drive repeat purchases.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Deep data analysis to uncover opportunities and optimize every marketing dollar.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive digital marketing solutions designed to accelerate your business growth and maximize returns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-secondary/30 hover:bg-secondary/50 border border-border/50 hover:border-primary/30 rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold font-heading mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;