import React from "react";
import "./about.css";
import myImage from "../../assets/me2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                B.Tech Computer Science <br />
                <i>Vellore Institute of Technology</i>
              </small>
            </article>

            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>Current GPA</h5>
              <small>9.08</small>
            </article>

            {/* <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Net Centric</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article> */}
          </div>
          <p>
            Hey, I’m Anushka Singh — a software engineer in the making,
            currently interning at Gap Inc., where I’m building tools that
            improve how teams work at scale. I enjoy working across the stack
            with technologies like React, TypeScript, Python, and cloud
            platforms like AWS and Azure. I’ve been a finalist at JP Morgan’s
            Code for Good, and I’m always up for a challenge that blends
            creativity with code. Whether it’s collaborating on hackathons,
            automating workflows, or sharing ideas with a team — I’m all in. Oh,
            and I never say no to foosball or good coffee
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
