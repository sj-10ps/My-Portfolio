import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { experience } from '../data/datas';
import { Link } from 'react-router-dom';
const Experience = () => {
    return (
           <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Briefcase className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">Experience</h2>
            </div>
            {experience.map((exp, index) => (
              <div key={index} className="glass-card p-4 mb-4 experience-card">
                <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
                  <div>
                    <h5 className="text-white mb-1">{exp.role}</h5>
                    <h6 className="text-cyan mb-0">{exp.company}</h6>
                  </div>
                  <span className="period-badge">{exp.period}</span>
                </div>
                <p className="text-light-muted mb-3">{exp.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  {exp.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
                 <Link to={`/viewexpcertificate/${exp.id}`} className="btn btn-sm btn-outline-primary mt-3 me-4">View Certificate <ExternalLink size={14} className="ms-1" /></Link>
                 <Link to={exp.link} className="btn btn-sm btn-outline-danger mt-3">View Project <ExternalLink size={14} className="ms-1" /></Link>
              </div>
            ))}
          </div>
    );
}

export default Experience;
