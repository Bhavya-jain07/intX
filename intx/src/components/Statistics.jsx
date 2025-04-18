import React from 'react';

const Statistics = () => {
  const stats = [
    { number: "25", label: "Total Teams", icon: "🌐" },
    { number: "15", label: "Internal Teams", icon: "🔒" },
    { number: "10+", label: "External Teams", icon: "🔥" },
    // { number: "9", label: "Partner Institutions", icon: "🤝" }
  ];

  return (
    <section className="statistics">
      <div className="statistics-header">
        <h2>Participation Overview</h2>
        <div className="cyber-line"></div>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-number-wrapper">
                <h2 className="stat-number">{stat.number}</h2>
                <div className="stat-number-bg">{stat.number}</div>
              </div>
              <p className="stat-label">{stat.label}</p>
            </div>
            <div className="stat-card-corner top-left"></div>
            <div className="stat-card-corner top-right"></div>
            <div className="stat-card-corner bottom-left"></div>
            <div className="stat-card-corner bottom-right"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;



