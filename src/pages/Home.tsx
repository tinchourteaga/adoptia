import React from 'react';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Metrics from '../components/Metrics';
import ShelterFeatures from '../components/ShelterFeatures';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <Metrics />
      <ShelterFeatures />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;