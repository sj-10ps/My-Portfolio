import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, FileText, User, ExternalLink, Star, Rocket } from 'lucide-react';
import { projects } from '../data/datas';
import { Link } from 'react-router-dom';
const Projects = () => {
    return (
          <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Briefcase className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">Projects</h2>
            </div>
            <div className="row g-4">
              {projects.map((project, index) => (
                <div key={index} className="col-md-6">
                  <div className="project-card glass-card p-4 h-100">
                    <div className="d-flex align-items-start mb-3">
                      <span className="project-icon me-3">{project.icon}</span>
                      <div className="flex-grow-1">
                        <h5 className="text-white mb-2">{project.title}</h5>
                        <div className="tech-badge mb-2">{project.tech}</div>
                      </div>
                    </div>
                                         <div className="flex-grow-1 mb-2">

                    <p className="text-light-muted mb-3">{project.description}</p>
                    
                 
                    {project.demo.length>0&&project.demo.map((d,index)=>(
                      <>
                          <h5  className="text-primary mb-2">Demo logins</h5>
                        <h6 className="text-white mb-2">{d.module}</h6>
                        <div className='d-flex'>
                       <span style={{color:'#a2e4ecff'}} className=' mb-2 me-2' >Username</span> <div className="tech-badge mb-2 me-2">{d.username}</div>
                         <span  style={{color:'#a2e4ecff'}} className=' mb-2  me-2'>password</span> <div className="tech-badge mb-2">{d.password}</div>
                        </div>
                        </>
                   
                    ))}
                       </div>
                   {project.type==='web'?
                    (<a href={project.link} className="btn btn-sm btn-outline-primary ">
                      View Project <ExternalLink size={14} className="ms-1" />
                    </a>)
                   :(
                    <Link to={`/projectshots/${project.title}`} className="btn btn-sm btn-outline-primary">View Project Screenshots <ExternalLink size={14} className="ms-1" /></Link>
                   )
                   }
                        <div className='d-flex mt-2'>
                      {project.github.length>1?project.github.map((l,index)=>(
                        <a href={l} className="btn btn-sm btn-outline-primary me-2"  key={index}>
                          {index===0?(<>Github Repo(frontend) <ExternalLink size={14} className="ms-1" /></>):(<>Github Repo(backend)<ExternalLink size={14} className="ms-1" /></>)}
                         
                  
                    </a>

                        )):(
                           <a href={project.github[0]} className="btn btn-sm btn-outline-primary me-2"  >
                          Github Repo<ExternalLink size={14} className="ms-1" /> </a>
                          
                        )}
                        </div>

                  
                         
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
}

export default Projects;
