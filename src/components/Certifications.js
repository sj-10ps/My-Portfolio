import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { certifications } from '../data/datas';
const Certifications = () => {
    return (
           <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Award className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">Certifications</h2>
            </div>
            <div className="row g-3">
              {certifications.map((cert, index) => (
                <div key={index} className="col-md-6">
                  <div className="glass-card p-4 cert-card">
                    <div className="d-flex align-items-start">
                      <Award className="text-cyan me-3 flex-shrink-0" size={28} />
                      <div>
                        <h6 className="text-white mb-1">{cert.name}</h6>
                        <p className="text-light-muted small mb-1">{cert.issuer}</p>
                        <span className="year-badge">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
}

export default Certifications;
