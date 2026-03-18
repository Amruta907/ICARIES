import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, AlertCircle, Info } from "lucide-react";
import { Calendar } from "lucide-react";

const AuthorGuidelines = () => {
  const guidelines = [
    "The paper should be original and should not have been published anywhere else or be under review for any journal or other conferences.",
    "A paper should not have more than Five authors.",
    "The author can submit a maximum of 03 papers. However, each paper needs to be registered separately.",
    "Page limit is of maximum 06 pages. You may submit a paper of up to 8 pages with an additional cost of 500 per extra page.",
    "Student registrants must upload proof of their Institute ID during the online registration.",
    "ICARIES members must upload a valid ICARIES membership card during the online registration.",
    "Tables, figures and images should have appropriate captions and be of good quality (dpi = 400). Each of these items must be cited inline in the main text of the manuscript.",
    "The full article must be submitted as a MS Word file in DOC or DOCX format with proper title.",
    "Before submitting your paper, please ensure that the English used is clear, concise and coherent. This is especially important if English is not your first language.",
    "All submissions with less than 15% similarity will only be eligible for review, with the quality and scope of the work being taken into consideration.",
    "Once the full paper is accepted, the author(s) will be requested to submit the copyright transfer form.",
    "Any paper that does not follow the guidelines may not be considered for publication in the conference proceedings.",
    "All the accepted papers must be revised with due comments and suggestions given by reviewers before the deadlines.",
    "The Publisher maintains the right to exclude any papers from the work if they are deemed unsuitable for publication."
  ];

  const importantDates = [
    { title: "Paper Submission Deadline", date: "To be announced" },
    { title: "Notification of Acceptance", date: "To be announced" },
    { title: "Camera Ready Submission", date: "To be announced" },
    { title: "Registration Deadline", date: "To be announced" },
    { title: "Conference Dates", date: "To be announced" },
  ];


  return (
    <div className="min-h-screen bg-white text-white">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 border-b border-white/10 pb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4">Author Guidelines</h1>
            <p className="text-slate-400">Please follow these instructions carefully to ensure your submission is processed correctly.</p>
          </div>

          <div className="space-y-4 mb-16">
            {guidelines.map((text, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4fd1c5]/20 flex items-center justify-center text-[#4fd1c5] font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          {/* Note Section */}
          <div className="p-8 rounded-2xl bg-[#4fd1c5]/5 border border-[#4fd1c5]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Info size={80} className="text-[#4fd1c5]" />
            </div>
            <h3 className="text-xl font-bold text-[#4fd1c5] mb-4 flex items-center gap-2">
              <AlertCircle size={20} /> Important Notes
            </h3>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li>• At least one author has to register for the paper to be included in the proceedings.</li>
              <li>• Only registered authors will be allowed to present and receive certificates.</li>
              <li>• Keep a copy of your transaction ID and bank receipt to track your registration.</li>
              <li className="text-[#4fd1c5] font-semibold">• The committee is not responsible for financial losses caused by improper transactions.</li>
            </ul>
          </div>

          <br />

          {/* Important Dates - Compact Style */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 border-l-4 border-[#4fd1c5] pl-4">
              Important Dates
            </h2>

            <div className="divide-y divide-white/10 border border-white/5 rounded-xl overflow-hidden">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-5 py-4 bg-white hover:bg-[#111827] transition-colors"
                >
                  <span className="text-slate-300 text-sm md:text-base">
                    {item.title}
                  </span>

                  <span className="text-[#4fd1c5] font-medium text-sm md:text-base">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <br /> 

          {/* Submit Research Paper Section */}
<div className="mb-20">
  <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-6 border-l-4 border-[#4fd1c5] pl-4">
    Submit Research Paper
  </h2>

  <div className="border border-white/5 rounded-xl p-6 bg-white space-y-4">
    
    <p className="text-slate-300 leading-relaxed text-sm md:text-base">
      Authors are invited to submit their original and unpublished research papers
      in the prescribed format. All submissions will undergo a peer-review process.
    </p>

    {/* Key Points */}
    <ul className="text-slate-400 text-sm space-y-2 list-disc pl-5">
      <li>Submit papers in DOC/DOCX format</li>
      <li>Maximum 6 pages (extra pages with additional charges)</li>
      <li>Ensure plagiarism is below 15%</li>
      <li>Follow all author guidelines before submission</li>
    </ul>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-4 pt-4">
      <a
        href="#"
        className="px-5 py-2.5 bg-[#4fd1c5] text-black font-semibold rounded-lg hover:bg-[#38b2ac] transition-colors"
      >
        Submit Paper
      </a>

      <a
        href="#"
        className="px-5 py-2.5 border border-[#4fd1c5]/40 text-[#4fd1c5] rounded-lg hover:bg-[#4fd1c5]/10 transition-colors"
      >
        Download Template
      </a>
    </div>

  </div>
</div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AuthorGuidelines;