import React, { useState } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import '../static/css/mystyle.css'
import Header from './Header';
import Sideoptions from './Sideoptions';
import Renderpart from './Renderpart';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');


  const renderSection = () => {
   
  };

  return (
  <>
 
      
      {/* Header */}
   <Header/>

      {/* Main Content */}
      <div className="container pb-5">
        <div className="row g-4">

          {/* Sidebar Navigation */}
          <Sideoptions/>

          {/* Content Area */}
          <div className="col-lg-9">
            <Renderpart/>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container text-center">
          <p className="text-light-muted mb-0">© 2024 Sooraj P.S. Built with React & Bootstrap</p>
        </div>
      </footer>
    </>
  );
}