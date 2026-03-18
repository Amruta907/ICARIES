import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
// import SpecialIssueSection from "@/components/SpecialIssueSection";
import ImportantDates from "@/components/ImportantDates";
import SpeakersSection from "@/components/SpeakersSection";
// import SponsorsSection from "@/components/SponsorsSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WelcomeSection />
      {/* <SpecialIssueSection /> */}
      <ImportantDates />
      <SpeakersSection />
      {/* <SponsorsSection /> */}
      {/* <TestimonialsSection /> */}
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
