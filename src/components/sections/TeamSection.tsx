import { Linkedin, Twitter } from "lucide-react";
import founderImage from "@/assets/founder-murali.jpg";
import ceoImage from "@/assets/ceo-sai.jpg";

const team = [
  {
    name: "Murali Nancharla",
    role: "Founder",
    image: founderImage,
    bio: "Visionary entrepreneur with 15+ years of experience in digital marketing and business development.",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sai Nancharla",
    role: "CEO",
    image: ceoImage,
    bio: "Strategic leader driving innovation and growth, with expertise in performance marketing and analytics.",
    linkedin: "#",
    twitter: "#",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-32 bg-secondary/20 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold font-heading mb-6">
            Meet Our <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            The visionary minds behind TargetGum's success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-bold font-heading mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-6">{member.bio}</p>
                
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;