import React from 'react';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';

// Add another component for what I do: responsive design, ui/ux experience, 
// Don't show Edit button for Dashboard

const DashboardPage = () => (
  <div>
    Hi I'm Lois. I'm a Front/Back End Developer
    <AboutPage />
    <ResumePage />
    <ContactPage />
  </div>
);

export default DashboardPage;
