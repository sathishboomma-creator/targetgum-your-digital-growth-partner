import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>TargetGum - Digital Marketing Excellence | Hyderabad</title>
        <meta 
          name="description" 
          content="TargetGum is a leading digital marketing agency based in Hyderabad, Telangana. We help businesses grow with data-driven marketing strategies, SEO, social media, and performance marketing." 
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            "name": "TargetGum",
            "description": "Leading digital marketing agency helping businesses achieve measurable growth",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "India"
            },
            "founder": {
              "@type": "Person",
              "name": "Murali Nancharla"
            },
            "employee": {
              "@type": "Person",
              "name": "Sai Nancharla",
              "jobTitle": "CEO"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;