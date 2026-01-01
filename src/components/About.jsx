import React from 'react';
import ScrollReveal from './ScrollReveal';
import Counter from './Counter';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <center>
          <ScrollReveal>
             <span className="section-subtitle">Who We Are</span>
             <h2 className="section-title">Redefine Your Limits</h2>
          </ScrollReveal>
        </center>
        
        <div className="about-content">
          <ScrollReveal delay={0.3}>
            <p className="about-text">
              Iron Zone Gym isn't just a place to workout; it's a sanctuary for those dedicated to self-improvement. 
              We provide state-of-the-art equipment, a motivating atmosphere, and a team of expert trainers ready to guide you 
              through every rep and set. Whether you're a beginner or a pro athlete, you'll find your home here.
            </p>
          </ScrollReveal>
          
          <div className="stats-container">
            <ScrollReveal delay={0.4}>
              <div className="stat-item">
                <Counter from={0} to={5} />
                <span className="stat-label">Years of Excellence</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="stat-item">
                <Counter from={0} to={100} duration={2.5} />
                <span className="stat-label">Machines</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.6}>
              <div className="stat-item">
                <Counter from={0} to={500} duration={3} />
                <span className="stat-label">Happy Members</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
