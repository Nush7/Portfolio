import React from 'react'
import './experience.css'
import gapLogo from '../../assets/gap.png'
const Experience = () => {
  return (
    <section id='experience'>

      <h5>My Professional Journey</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">

        <div className="experience__card">
          <div className="experience__logo">
            <img
              src={gapLogo}
              alt="Company Logo"
            />
          </div>
          <div className="experience__content">
            <h3>Software Engineer Intern</h3>
            <p>
              Working as a Software Engineering Intern in the Engineering Platform team at Gap Inc., focusing on backend automation and observability.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
