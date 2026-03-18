// import heroSkyline from "@/assets/hero-skyline.png";
import Countdown from "./Countdown";
import { Globe, Calendar, MapPin, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 relative" id="home">
      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-foreground/40 rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 60}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto space-y-6" >
        

        <h1 className="text-xl md:text-3xl lg:text-5xl font-heading font-bold text-foreground leading-tight" >
          International Conference on Automation and Resilient Innovative Expert System{" "}
          <span className="text-primary"> ICARIES</span>
        </h1>

        <p className="text-sm text-primary font-medium">
          {/* ICARIES Conference Record Number:{" "} */}
          {/* <a href="https://conferences.ICARIES.org/conferences_events/conferences/conferencedetails/69723" className="underline hover:text-teal-glow" target="_blank" rel="noopener noreferrer">
            69723
          </a> */}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPin size={18} className="text-primary" />
            Prof. Ram Meghe Institute of Technology & Research, Badnera- Amravati, Maharashtra (India)
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
          <span className="flex items-center gap-2">
            <Calendar size={18} className="text-primary" />
            Date - comming soon
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a href="#" className="btn-hero-primary inline-flex items-center gap-2">
            Call for Papers <ArrowRight size={16} />
          </a>
          <a href="#" className="btn-hero-outline inline-flex items-center gap-2">
            Paper Submission <ArrowRight size={16} />
          </a>
        </div>

        {/* <div className="pt-6 flex justify-center">
          <Countdown />
        </div> */}
      </div>

      {/* Skyline */}
      {/* <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-30">
        <img src={heroSkyline} alt="" className="w-full object-cover" />
      </div> */}

      {/* Announcement bar */}
      <div >
        {/* <span className="bg-destructive text-destructive-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
          📢 Announcements
        </span> */}
        {/* <span className="text-sm text-muted-foreground">
          Call for Papers is now open.{" "}
          <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-0.5 rounded">NEW</span>
        </span> */}
      </div>
    </section>
  );
};

export default HeroSection;
