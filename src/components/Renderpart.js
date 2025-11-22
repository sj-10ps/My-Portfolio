import React, { useState } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { useSelector } from 'react-redux';
import { skills,projects,experience,certifications,achievements,badges} from '../data/datas';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Education from './Education';

const Renderpart = () => {
    const {activeSection}=useSelector(state=>state.renderoption)
    
    
    switch(activeSection) {
      case 'about':
        return (
        <About/>
        );
      
      case 'skills':
        return (
       <Skills/>
        );
      case 'education':
        return(
          <Education/>
        )
      
      case 'projects':
        return (
         <Projects/>
        );
      
      case 'experience':
        return (
        <Experience/>
        );
      
      case 'certifications':
        return (
        <Certifications/>
        );
      
      case 'achievements':
        return (
       <Achievements/>
        );
      
      default:
        return null;
    }
}

export default Renderpart;
