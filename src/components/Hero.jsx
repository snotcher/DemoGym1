import React from 'react';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <motion.div 
        className="hero-bg"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          ease: "linear", 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
        style={{ backgroundImage: `url(/gymimage.jpg)` }}
      />
      
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          T9DER DIRHA<br /> <span>DABA</span>
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          بدّل جسمك، قوّي صحتك، وبدا اليوم
        </motion.p>
        
        <motion.div 
          className="hero-btns"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#packages" className="btn btn-primary">Join Now</a>
          <a href="#about" className="btn btn-secondary">Learn More</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
