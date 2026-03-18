import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Technical Program Committee
const technicalCommittee = [
  { name: "Dr. Roshan Bodile", org: "NIT Jalandhar" },
  { name: "Dr. Ms. M. S. Deshmukh", org: "Assistant Prof, PRMITR, Badnera" },
  { name: "Dr. R. R. Karwa", org: "Assistant Prof, PRMITR, Badnera" },
  { name: "Dr. Shital Raut", org: "Professor, VNIT, Nagpur" },
  { name: "Dr. A. S. Tiwari", org: "VNIT, Nagpur" },
  { name: "Dr. Rohit Singh", org: "NIT Jalandhar" },
  { name: "Dr. Kundan Kumar", org: "NIT Jalandhar" },
  { name: "Dr. Aijaz Mehdi Zaidi", org: "NIT Jalandhar" },
  { name: "Dr. Sachchidanand", org: "NIT Jalandhar" },
  { name: "Dr. V. Narasimha Nayak", org: "NIT Jalandhar" },
  { name: "Dr. Kappala Vinod Kiran", org: "NIT Jalandhar" },
  { name: "Dr. Somesula Manoj Kumar", org: "NIT Jalandhar" },
  { name: "Dr. Banalaxmi Brahma", org: "NIT Jalandhar" },
  { name: "Dr. Jailsingh Bhookya", org: "NIT Calicut" },
  { name: "Dr. Gautam Borkar", org: "Professor, RAIT, Navi Mumbai" },
  { name: "Dr. Sunil Wankhade", org: "Head & Professor" },
  { name: "Dr. Ankush Hutke", org: "Assistant Professor, RGIT Mumbai" },
  { name: "Dr. Shivaji Lahane", org: "GES R.H. Sapat COE, Nashik" },
  { name: "Dr. Umesh Kokate", org: "Technical Director, MSBTE" },
  { name: "Mr. Hemant Rajkule", org: "CEO, ASPEN Systems & Software, Pune" },
  { name: "Mr. Roshan Halmare", org: "Lead Database Administrator, Global Payments" },
  { name: "Sapana Kawle", org: "Data Analyst, Nvidia" },
  { name: "Dr. Ankush D. Sawarkar", org: "Assistant Professor, SGGSIE&T, Nanded" },
  { name: "Prof. R. R. Papalkar", org: "Assistant Professor, VIT Pune" },
  { name: "Dr. Shreyash R. Hole", org: "Assistant Professor, SIT Nagpur" },
  { name: "Shyam Sharma", org: "Technical Lead, Wipro Technologies" },
  { name: "Pratik B. Raut", org: "Sr. Dev. Engg. Manager, Asimily India" },
  { name: "Dr. Sheetal S. Dhande", org: "Assistant Professor, Sipna COE, Amravati" },
  { name: "Dr. Yogesh Thakare", org: "SRCOEM, Nagpur" },
  { name: "Jayendra Jadhav", org: "Technical Committee Member" },
  { name: "Prof. (Dr.) Satish N. Gujar", org: "Professor & Head, JSPM University Pune" },
  { name: "Dr. Sandeep S. Deshmukh", org: "Professor, BITS Pilani, Hyderabad" },
  { name: "Dr. Shyamkumar Kalpande", org: "Professor & Head, MET, Nashik" },
  { name: "Dr. Vishal Sulakhe", org: "HOD Mechanical, Sandeep University Nashik" },
  { name: "Dr. Arun Thakare", org: "Associate Professor, GH Raisoni, Pune" },
  { name: "Dr. Sunil Dambhare", org: "Director IQAC, DY Patil University, Pune" },
  { name: "Dr. Sanjay Pohekar", org: "Head, Research Programs, Symbiosis, Pune" },
  { name: "Dr. Avinash D. Gawande", org: "Professor, Sipna COE, Amravati" },
];

// International Committee
const internationalCommittee = [
  { name: "Dr. Amruta Deshmukh", org: "Ciena Corporation, USA" },
  { name: "Mr. Saurabh Deshmukh", org: "Senior Data Architect, Cognizant, UK" },
  { name: "Vinothkumar Kolluru", org: "Senior Professional, USA" },
  { name: "Apoorv Sawale", org: "Sr ETL Developer, ARAG Legal Insurance, USA" },
  { name: "Mangesh Pimprikar", org: "Technical Manager/Architect, Cognizant, USA" },
  { name: "Vinay Purushe", org: "Consultant, TCS, USA" },
  { name: "Pooja Rajurkar", org: "Enterprisewide Manager, Siemens Healthineers, USA" },
  { name: "Hrishav Kumar", org: "SAP Operations Technical Lead, C&A, Germany" },
  { name: "Mr. Nilesh Sarode", org: "Software Engineer, United Health Group, Ireland" },
  { name: "Amruta Chorey", org: "Business Analyst, Blue Cross Blue Shield, USA" },
  { name: "Ms. Rashi Dhande", org: "Software Engineer, Progyny, USA" },
  { name: "Kunal Mhapsekar", org: "Senior Mechanical Engineer, Zipline International, USA" },
  { name: "Palash Sukhdeo Deulkar", org: "Senior Engineer, LTM, USA" },
];

const OrganizingTeam = [
  { name: "Chief Patron", org: "President VYWS" },
  { name: "Patron", org: "VYWS Management" },
  { name: "General Chair", org: "Dr. Gajendra R. Bamnote" },
  { name: "General Co Chair", org: "Dr. Chandrashekhar N. Deshmukh and Dr. Mahendra A. Pund" },
  { name: "Organizing Secretary", org: "Prof. Arpit U. Chaudhari" },
  { name: "Finance Chair", org: "Dr. Anand A. Chaudhari" },
];

const chairPerson = [
  { name: "Dr. Maithili. S. Deshmukh", org: "Technical Program Chair" },
  { name: "Dr. Roshan. R. Karwa", org: "Technical Program Chair" },
];

const PublicationChair = [
  { name: "Dr. Samir Deshmukh", org: "Publication Chair" },
  { name: "Prof. A. G. Mahalle", org: "Publication Chair" },
];

const AdvisoryPlenaryChair = [
  { name: "Dr. S. V. Pattalwar", org: "Advisory and Plenary Chair" },
  { name: "Dr. C. R. Patil", org: "Advisory and Plenary Chair" },
];

const PlagiarismAICheckingChair = [
  { name: "Dr. Ms. Pranjali Deshmukh", org: "Plagiarism and AI Checking Chair" },
  { name: "Dr. Ms. Sumera M. Iqbal", org: "Plagiarism and AI Checking Chair" },
];

const Committee = () => {
  const MemberGrid = ({ title, members }) => (
    <section className="mb-24">
      <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-10 border-l-4 border-[#4fd1c5] pl-4">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {members.map((member, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#4fd1c5]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(79,209,197,0.15)]"
          >
            <h4 className="text-lg font-bold text-white group-hover:text-[#4fd1c5] transition-colors line-clamp-2">
              {member.name}
            </h4>

            <p className="text-sm text-slate-400 mt-2 leading-relaxed">
              {member.org}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white text-white">
      <Navbar />

      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 uppercase tracking-tight">
              Technical Program Committee
            </h1>
            <div className="w-24 h-1 bg-[#4fd1c5] mx-auto rounded-full" />
          </div>

          <MemberGrid
            title="International Committee"
            members={internationalCommittee}
          />

          <MemberGrid
            title="National Committee"
            members={technicalCommittee}
          />

        </div>
      </main>
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold text-[#4fd1c5] mb-4 uppercase tracking-tight">
              Organizing Team
            </h1>
            <div className="w-24 h-1 bg-[#4fd1c5] mx-auto rounded-full" />
          </div>

          <MemberGrid
            title="Organizing Team"
            members={OrganizingTeam}
          />
          <div>
          <MemberGrid
            title="Chair Persons"
            members={chairPerson}
          />
          <MemberGrid
            title="Publication Chair"
            members={PublicationChair}
          />
          </div>
          <MemberGrid
            title="Advisory and Plenary Chair"
            members={AdvisoryPlenaryChair}
          />
          <MemberGrid
            title="Plagiarism and AI Checking Chair"
            members={PlagiarismAICheckingChair}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Committee;