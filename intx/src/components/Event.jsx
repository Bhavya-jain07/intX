import React from 'react';

const TechnicalSessions = () => {
  const sessions = [
    {
      title: "24-Hour Challenge",
      description:
        "Participants engaged in intensive real-world cybersecurity scenarios, including network penetration testing, malware analysis, and incident response challenges. The event featured hands-on exercises designed by industry experts to simulate actual cybersecurity threats and defense mechanisms.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Distinguished mentors from leading tech companies including IBM, Deloitte, and HCL provided guidance throughout the event. Dr. Asheesh Tiwari led the academic mentorship team, while industry professionals shared insight on current cybersecurity trends and best practices.",
    },
    {
      title: "Networking",
      description:
        "The event brought together talented participants from prestigious institutions across India, Including IIT Mandi, VIT Bhopal, and GLA University. This diverse gathering created valuable networking opportunities and fostered collaboration among the next generation of cybersecurity professionals.",
    },
  ];
  return (
    <section className="technical-sessions">
      <h2>ABOUT THE EVENT </h2>
      <div className="sessions-grid">
        {sessions.map((session, index) => (
          <div key={index} className="session-card">
            <h3>{session.title}</h3>
            <p>{session.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSessions;