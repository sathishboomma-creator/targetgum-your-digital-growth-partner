import { CheckCircle, Award, Users, Zap } from "lucide-react";

const features = [
  "Data-Driven Strategies",
  "Transparent Reporting",
  "Dedicated Account Managers",
  "24/7 Campaign Monitoring",
  "Custom Marketing Solutions",
  "Industry Expertise",
];

const highlights = [
  {
    icon: Award,
    title: "6+ Years",
    description: "Of Marketing Excellence",
  },
  {
    icon: Users,
    title: "200+",
    description: "Happy Clients",
  },
  {
    icon: Zap,
    title: "500+",
    description: "Campaigns Executed",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
                About <span className="text-gradient">TargetGum</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in Hyderabad, Telangana, TargetGum is a full-service digital marketing agency dedicated to helping businesses achieve measurable growth through innovative marketing strategies.
              </p>
              <p className="text-muted-foreground">
                Our team of experts combines creativity with data-driven insights to deliver campaigns that not only reach your target audience but convert them into loyal customers. We believe in transparency, results, and building long-term partnerships with our clients.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            <div className="bg-secondary/30 border border-border/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold font-heading mb-8 text-center">
                Why Choose Us?
              </h3>
              
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary font-heading">
                        {highlight.title}
                      </div>
                      <div className="text-muted-foreground">
                        {highlight.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Badge */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
              <p className="text-foreground">
                📍 Proudly serving clients from <span className="text-primary font-semibold">Hyderabad, Telangana</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;