import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket, Book, GraduationCap } from 'lucide-react';
import { useSelector,useDispatch } from 'react-redux';
import { setActiveSection } from '../redux/renderoptionslice';
const Sideoptions = () => {
     const {activeSection}=useSelector((state)=>state.renderoption)
  
     const dispatch = useDispatch();
    return (
            <div className="col-lg-3">
            <div className="nav-sidebar">
              <button className={`nav-btn ${activeSection === 'about' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('about'))}>
                <User className="me-3" size={20} />
                About
              </button>
              <button className={`nav-btn ${activeSection === 'education' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('education'))}>
                <GraduationCap className="me-3" size={20} />
                Education
              </button>
              <button className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('skills'))}>
                <Code className="me-3" size={20} />
                Skills
              </button>
              <button className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('projects'))}>
                <Briefcase className="me-3" size={20} />
                Projects
              </button>
              <button className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('experience'))}>
                <Briefcase className="me-3" size={20} />
                Experience
              </button>
              <button className={`nav-btn ${activeSection === 'certifications' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('certifications'))}>
                <Award className="me-3" size={20} />
                Certifications
              </button>
              <button className={`nav-btn ${activeSection === 'achievements' ? 'active' : ''}`} onClick={() => dispatch(setActiveSection('achievements'))}>
                <Star className="me-3" size={20} />
                Achievements
              </button>
            </div>
          </div>
    );
}

export default Sideoptions;
