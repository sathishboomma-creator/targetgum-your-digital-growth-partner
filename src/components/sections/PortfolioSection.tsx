import { TrendingUp } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Growth Campaign",
    category: "Performance Marketing",
    result: "+425% Revenue",
    description: "Scaled an online fashion brand from ₹10L to ₹52L monthly revenue through strategic Meta & Google campaigns.",
  },
  {
    title: "B2B Lead Generation",
    category: "LinkedIn Marketing",
    result: "2,500+ Leads",
    description: "Generated high-quality B2B leads for a SaaS company, reducing cost per lead by 60%.",
  },
  {
    title: "Brand Launch Campaign",
    category: "Full-Stack Marketing",
    result: "1M+ Reach",
    description: "Successfully launched a new consumer brand with integrated digital marketing achieving viral reach.",
  },
  {
    title: "SEO Transformation",
    category: "SEO & Content",
    result: "10x Traffic",
    description: "Took a healthcare platform from 5K to 50K monthly organic visitors in 8 months.",
  },
];

const testimonials = [
  {
    quote: "TargetGum transformed our digital presence completely. Their data-driven approach delivered results we didn't think were possible.",
    author: "Rahul Sharma",
    company: "TechStart Solutions",
  },
  {
    quote: "Working with TargetGum was the best decision for our marketing. They truly understand ROI-focused advertising.",
    author: "Priya Reddy",
    company: "FashionHub India",
  },
  {
    quote: "The team's expertise in performance marketing helped us scale our D2C brand to new heights. Highly recommended!",
    author: "Vikram Patel",
    company: "GreenLife Organics",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
            Proven <span className="text-gradient">Results</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real campaigns, real results. See how we've helped businesses achieve extraordinary growth.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <div className="flex items-center gap-1 text-green-500">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">{project.result}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold font-heading mb-3">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <h3 className="text-2xl font-semibold font-heading text-center mb-10">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <blockquote className="text-foreground/90 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;