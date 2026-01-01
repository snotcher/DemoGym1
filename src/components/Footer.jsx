import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              IRON<span>ZONE</span>
            </a>
            <p className="footer-desc">
              Your ultimate destination for fitness and strength training. Join us and transform your life today.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Twitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#packages" className="footer-link">Packages</a>
              <a href="#contact" className="footer-link">Contact</a>
              <a href="#privacy" className="footer-link">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-newsletter">
             <h4 className="footer-title">Newsletter</h4>
             <p>Subscribe for latest updates and offers.</p>
             <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Your Email" className="newsletter-input" />
               <button type="submit" className="btn btn-primary newsletter-btn">Subscribe</button>
             </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Iron Zone Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
