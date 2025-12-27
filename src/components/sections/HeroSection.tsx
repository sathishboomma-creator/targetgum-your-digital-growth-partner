import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 150, suffix: "M+", label: "Revenue Generated" },
  { value: 200, suffix: "+", label: "Happy Clients" },
];

const AnimatedCounter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <span className="text-4xl lg:text-5xl font-bold text-primary font-heading">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen hero-section relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8 py-12 lg:py-0">
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
                The Growth-Driven{" "}
                <span className="text-gradient">Marketing Machine</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
                Since 2018, we at TargetGum have helped hundreds of businesses scale their revenue with precision-targeted digital marketing strategies.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <Button variant="hero" size="xl">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="heroOutline" size="xl">
                View Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/30 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Dashboard Illustration */}
          <div className="relative animate-fade-in-up lg:block" style={{ animationDelay: "0.8s" }}>
            <div className="relative bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 lg:p-8 shadow-2xl">
              {/* Mock Dashboard */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="h-4 w-32 bg-muted rounded" />
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <TrendingUp className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">+340%</div>
                    <div className="text-xs text-muted-foreground">ROI Growth</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">12.5K</div>
                    <div className="text-xs text-muted-foreground">New Leads</div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <Target className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold text-foreground">89%</div>
                    <div className="text-xs text-muted-foreground">Conversion</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-end gap-2 h-40">
                    <div className="flex-1 bg-muted rounded-t h-[48px]" />
                    <div className="flex-1 bg-muted rounded-t h-[72px]" />
                    <div className="flex-1 bg-primary rounded-t h-[96px]" />
                    <div className="flex-1 bg-muted rounded-t h-[64px]" />
                    <div className="flex-1 bg-primary rounded-t h-[120px]" />
                    <div className="flex-1 bg-primary rounded-t h-[144px]" />
                    <div className="flex-1 bg-primary rounded-t h-[160px]" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-muted" />
                    <span className="text-xs text-muted-foreground">Others</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-xs text-muted-foreground">TargetGum</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;