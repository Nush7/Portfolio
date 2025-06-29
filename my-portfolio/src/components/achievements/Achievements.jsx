import React from "react";
import './achievements.css'
import jpmcLogo from '../../assets/jpmc.png'
import gapLogo from '../../assets/gap.png'

const Achievements = () => {
  return (
    <section id="achievements">
      <h5>What I have accomplished</h5>
      <h2>My Achievements</h2>
      <div className="container achievements__container">
        <div className="achievement__card">
          <div className="achievement__logo">
            <img
              src={jpmcLogo}
              alt="JPMorgan Chase"
            />
          </div>
          <div className="achievement__content">
            <h3>JPMorgan Code For Good'24 Hackathon</h3>
            <p>
              Selected from a competitive nationwide pool as one of 200
              participants and delivered an assessment dashboard for an NGO
              using the MERN stack, with a strong focus on frontend and API
              integration.
            </p>
          </div>
        </div>
        <div className="achievement__card">
          <div className="achievement__logo">
            <img
              src={gapLogo}
              alt="Gap Inc"
            />
          </div>
          <div className="achievement__content">
            <h3>Gap Inc Prayogshala Hackathon</h3>
            <p>
              Built an EP Dashboard for Prayogshala using Python and APIs to auto-generate CSVs, integrated with Grafana via the Infinity plugin for real-time tool insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
