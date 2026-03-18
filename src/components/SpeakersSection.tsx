import { ExternalLink } from "lucide-react";

const speakers = [
  {
    name: "",
    role: "Keynote Speaker",
    title: "",
    affiliation: "Comming soon",
    image: null,
    website: "",
  },
  {
    name: "",
    role: "Keynote Speaker",
    title: "",
    affiliation: "Comming soon",
    image: null,
    website: "",
  },
  {
    name: "",
    role: "Keynote Speaker",
    title: "",
    affiliation: "Comming soon",
    image: null,
    website: "",
  },
  {
    name: "",
    role: "Keynote Speaker",
    title: "",
    affiliation: "Comming soon",
    image: null,
    website: "",
  },
];

const SpeakersSection = () => {
  return (
    <section id="program" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Distinguished Speakers</h2>
        <p className="text-center text-muted-foreground mb-2">Leading minds in Intelligent Computing & Sustainable Innovation</p>
        <div className="section-divider mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                {s.image ? (
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-4xl font-heading font-bold text-muted-foreground">
                    {s.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                )}
              </div>
              <div className="p-4">
                <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                  {s.role}
                </span>
                <h3 className="font-heading font-semibold text-foreground mt-2">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.affiliation}</p>
                {s.website && (
                  <a href={s.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline">
                    <ExternalLink size={12} /> Website
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
