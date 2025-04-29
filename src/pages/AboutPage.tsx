import React from 'react';
import About from '../components/About';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Coverage from '../components/Coverage';
import Contact from '../components/Contact';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-20">
      <About />
      <Mission />
      <Coverage />
      <Team />
      <Contact />
    </main>
  );
};

export default AboutPage;