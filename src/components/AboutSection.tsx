  const AboutSection = () => {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">About PRMITR Badnera</h2>
          <div className="section-divider" />
          <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
            <p>
              The Vidarbha Youth Welfare Society’s Prof. Ram Meghe Institute of Technology & Research, Badnera-Amravati (an Autonomous Institute and Formerly well known as College of Engineering Badnera), is leading technological institute from Vidarbha. Established in the year 1983, the institute has a prestigious standing amongst the topmost Technical Institutes of Maharashtra.
            </p>
            <p>
              The PRMITR has a legacy of 43 years in terms of research collaboration and student engagement in multiple UG courses like Computer Science and Engineering, Civil Engineering, Information Technology, Electronics and Telecommunication Engineering, Artificial Intelligence and Data science, Computer science and Engineering-IOT and Mechanical Engineering.
              The Institute is approved by AICTE, New Delhi, Accredited by National Assessment and Accreditation Council (NAAC), Bangalore with Grade ‘A+’ & some of it’s UG Programmes are Accredited thrice (03) by the National Board of Accreditation (NBA), New Delhi
            </p>
            <p>
              The Institute is recognized by Directorate of Technical Education (DTE Mumbai), Govt. of Maharashtra and affiliated to Sant Gadge Baba Amravati University, Amravati and is offering UG, PG and Ph.D courses. We have strong backbone of 25,000 of student completed the graduation from our institute. For the better nurturing, we are having 21 Acre of land area, for the academic development also we have built in area is about 50,000 sqft. We have 53 Laboratory for different courses with state of art equipment’s.
            </p>
          </div>
        </div>

        <div id="city" className="max-w-4xl mx-auto mt-20"> {/* Added mt-20 for spacing */}
                <h2 className="section-title">About Amravati City</h2>
                <div className="section-divider" />
                <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
                    <p>
                        Amravati, often called the cultural capital of Vidarbha, is a significant city in Maharashtra. It is renowned for its historical temples, particularly the Ambadevi Temple, and serves as an educational hub with several universities and colleges. The city holds a rich heritage and is a gateway to Melghat Tiger Reserve, offering both urban amenities and proximity to natural beauty.
                    </p>
                    {/* Add more details about Amravati City here */}
                </div>
            </div>
      </section>
    );
  };

  export default AboutSection;
