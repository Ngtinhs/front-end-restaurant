import React from 'react';
import BradcamAbout from '../components/about/BradcamAbout';
import BradcamAreaAbout from '../components/about/BradcamAreaAbout';
import AboutArea from '../components/about/AboutArea';

export default function About() {
  return (
    <div>
      <BradcamAbout />
      <BradcamAreaAbout />
      <AboutArea />
    </div>
  );
}
