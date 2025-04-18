import React from 'react';

const Impact = () => {
  return (
    <section className="impact">
      <h2>Feedback & Impact</h2>
      <div className="impact-content">
        <h3>Participant Feedback Summary</h3>
        <ul>
          <li>95% participants rated the hackathon as "excellent" in terms of organization, challenge quality, and mentor support.</li>
          <li>Participants appreciated the diverse cybersecurity challenges, the opportunity to interact with industry experts, and the overnight support provided during the 24-hour event.</li>
        </ul>

        <div className="testimonials">
          <h3>Quotes from Participants</h3>
          <blockquote>
            <p>"IntrusionX was one of the most intense and rewarding hackathons I've ever attended."</p>
            {/* <footer>— Participant from IIT Mandi</footer> */}
          </blockquote>
          
          <blockquote>
            <p>"Great platform for students to experience real-world cyber problem-solving. We'll definitely come back!"</p>
            {/* <footer>— Participant from VIT Bhopal</footer> */}
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Impact;

