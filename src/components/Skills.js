import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { skills } from '../data/datas';
const Skills = () => {
    return (
            <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Code className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">Skills</h2>
            </div>
            <div className="glass-card p-4">
              <div className="row g-3">
                {skills.map((skill, index) => (
                  <div key={index} className="col-6 col-md-4 col-lg-3">
                    <div className="skill-tag">
                      <Star className="me-2" size={16} />
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    );
}

export default Skills;
