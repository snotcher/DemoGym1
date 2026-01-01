import React from 'react';
import ScrollReveal from './ScrollReveal';
import '../styles/testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member since 2023",
      initial: "S",
      quote: "Iron Zone changed my life. The trainers are incredible and the atmosphere is so welcoming. I've achieved results here I never thought possible."
    },
    {
      name: "Mike Chen",
      role: "Pro Athlete",
      initial: "M",
      quote: "As a professional athlete, I need top-tier equipment. Iron Zone delivers that and more. It's the only place I train when I'm in the city."
    },
    {
      name: "Emily Davis",
      role: "Group Class Enthusiast",
      initial: "E",
      quote: "The classes here are intense but fun! The community vibe keeps me coming back every single day. Highly recommend to anyone looking to get fit."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <center>
          <span className="section-subtitle">Success Stories</span>
          <h2 className="section-title">What Our Members Say</h2>
        </center>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <div className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.initial}</div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
