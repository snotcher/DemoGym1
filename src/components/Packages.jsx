import React from 'react';
import ScrollReveal from './ScrollReveal';
import '../styles/packages.css';
import { BadgeCheck, CalendarOff, Users, Star } from 'lucide-react';

const Packages = () => {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <center>
          <span className="section-subtitle">Membership Plans</span>
          <h2 className="section-title">Khtar LPlan dyalk</h2>
        </center>

        <div className="packages-grid">
          {/* Monthly Plan */}
          <ScrollReveal delay={0.2}>
            <div className="package-card">
              <h3 className="package-title">Monthly</h3>
              <div className="package-price">200MAD<span>/month</span></div>
              <ul className="package-features">
                <li>Unlimited Gym Access</li>
                <li>Free Body Assessment</li>
                <li>Locker & Shower Access</li>
              </ul>
              <a href="#contact" className="btn btn-secondary package-btn">Subscribe Now</a>
            </div>
          </ScrollReveal>

          {/* 3 Months Plan (Highlight) */}
          <ScrollReveal delay={0.4}>
            <div className="package-card highlight">
              <div className="package-badge">Popular</div>
              <h3 className="package-title">3 Month</h3>
              <div className="package-price">550MAD<span>/3 month</span></div>
              <div className="package-saving">🔥 Save 50 MAD compared to monthly</div>
              <ul className="package-features">
                <li>All Monthly Features</li>
                <li>Coach Follow-up</li>
                <li>1 Free Personal Training Session</li>
              </ul>
              <a href="#contact" className="btn btn-primary package-btn">Subscribe Now</a>
            </div>
          </ScrollReveal>

          {/* Yearly Plan */}
          <ScrollReveal delay={0.6}>
            <div className="package-card">
              <h3 className="package-title">Yearly</h3>
              <div className="package-price">2500MAD<span>/year</span></div>
              <ul className="package-features">
                <li>All 3-Month Features</li>
                <li>2 Personal Training Sessions</li>
                <li>Personalized Nutrition Guide</li>
              </ul>
              <a href="#contact" className="btn btn-secondary package-btn">Subscribe Now</a>
            </div>
          </ScrollReveal>
        </div>
        
        <div className="trust-elements">
          <div className="trust-item">
            <BadgeCheck size={18} color="var(--primary-color)" />
            No commitment
          </div>
          <div className="trust-item">
            <CalendarOff size={18} color="var(--primary-color)" />
            Cancel anytime
          </div>
          <div className="trust-item">
             <Users size={18} color="var(--primary-color)" />
             Trusted by 500+ members
          </div>
           <div className="trust-item">
            <Star size={18} color="#ffc107" fill="#ffc107" />
            4.8/5 Google rating
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
