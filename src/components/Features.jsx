import React from 'react';
import { Dumbbell, Clock, Users, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import '../styles/features.css';

const Features = () => {
  const features = [
    {
      icon: <Trophy size={48} strokeWidth={1.5} />,
      title: "Expert Trainers",
      desc: "Train with certified coaches who guide you every step"
    },
    {
      icon: <Dumbbell size={48} strokeWidth={1.5} />,
      title: "Top Equipment",
      desc: "Modern machines for strength, cardio, and performance."
    },
    {
      icon: <Clock size={48} strokeWidth={1.5} />,
      title: "24/7 Access",
      desc: "Train anytime. Morning or night, we’re open"
    },
    {
      icon: <Users size={48} strokeWidth={1.5} />,
      title: "Supportive Community",
      desc: "A motivating environment that pushes you to stay consistent."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <center>
          <span className="section-subtitle">Why Choose Us</span>
          <h2 className="section-title">Push Your Limits</h2>
        </center>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
