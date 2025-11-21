import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { badges } from '../data/datas';
const About = () => {
    return (
           <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Rocket className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">About Me</h2>
            </div>
            <div className="glass-card p-4 mb-4">
              <p className="lead text-light mb-3">
                Hi! I'm <span className="text-cyan fw-bold">Sooraj P.S</span>, a passionate Full Stack Developer specializing in MERN Stack, React Native,Kotlin Jetpack Compose and Django.
              </p>
              <p className="text-light-muted mb-3">
               I enjoy building web and mobile apps and learning new tools. I use Postman for testing APIs, GitHub for version control, and Bootstrap for quick and clean UI design. I like creating projects that solve real problems and help me improve my skills.
              </p>
              <p className="text-light-muted mb-4">
                I'm constantly learning and staying updated with the latest technologies to deliver the best results. My goal is to create seamless user experiences while maintaining robust and maintainable codebases.
              </p>
               
              <div className="row g-3 mb-4 justify-content-center">
                
                {badges.map((badge, index) => (
                  
                  <div key={index} className="col-6 col-md-3">
                          <a 
        href={badge.link} 
        className="text-decoration-none"
      >

                    <div className="badge-card p-3 text-center">
                      <div className="text-cyan mb-2">{badge.icon}</div>
                      <div className="fw-bold text-white small">{badge.name}</div>
                      <div className="text-cyan small">{badge.count}</div>
                    </div>

                        </a>
                  </div>
                 
             
                ))}
              </div>
           

              <div className="d-flex flex-wrap gap-2 ">
                <a href="mailto:sps24723@gmail.com" className="btn btn-cyan">
                  <Mail className="me-2" size={18} />
                  Contact Me
                </a>
                <a href="/myresume.pdf" className="btn btn-outline-primary">
                  <FileText className="me-2" size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
    );
}

export default About;
