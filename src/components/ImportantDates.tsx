import { Calendar } from "lucide-react";

const dates = [
  { title: "Paper Submission Deadline", date: "comming soon" },
  { title: "Notification of Acceptance", date: "comming soon" },
  { title: "Author Registration", date: "comming soon" },
  { title: "Early Bird Registration Closes", date: "comming soon" },
  { title: "Camera Ready Submission", date: "comming soon" },
  { title: "Date of Conference", date: "comming soon" },
];

const ImportantDates = () => {
  return (
    <section id="dates" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title text-center">Important Dates</h2>
        <div className="section-divider mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {dates.map((item, i) => (
            <div key={i} className="date-card group">
              <Calendar size={28} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-primary font-medium">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
