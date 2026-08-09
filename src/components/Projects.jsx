import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { projects } from '../data/datas';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="animate-slide-up">
      {/* Header Section */}
      <div className="mb-4 flex items-center">
        <Briefcase className="mr-3 text-[#00D9FF]" size={40} />
        <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="flex h-full">
            <div className="flex w-full flex-col rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]">
              
              {/* Icon and Title */}
              <div className="mb-3 flex items-start">
                <span className="mr-3 text-3xl">{project.icon}</span>
                <div className="flex-1">
                  <h5 className="mb-1 text-xl font-bold text-white">{project.title}</h5>
                  <div className="inline-block rounded-full bg-[#8A2BE2]/20 px-3 py-1 text-xs font-semibold text-[#8A2BE2]">
                    {project.tech}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="mb-4 text-sm leading-relaxed text-[#B8C5D6]">
                  {project.description}
                </p>

                {/* Demo Logins Section */}
                {project.demo && project.demo.length > 0 && project.demo.map((d, dIdx) => (
                  <div key={dIdx} className="mb-4 rounded-lg bg-white/5 p-3 border border-white/5">
                    <h5 className="mb-2 text-sm font-bold text-[#00D9FF]">Demo Logins</h5>
                    <h6 className="mb-2 text-xs font-semibold text-white uppercase tracking-wider">{d.module}</h6>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#a2e4ecff] uppercase font-bold">User:</span>
                        <div className="rounded bg-[#00D9FF]/10 px-2 py-0.5 text-xs text-[#00D9FF]">{d.username}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#a2e4ecff] uppercase font-bold">Pass:</span>
                        <div className="rounded bg-[#00D9FF]/10 px-2 py-0.5 text-xs text-[#00D9FF]">{d.password}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col gap-2">
                {project.type === 'web' ? (
                 project?.link&&( <a 
                    href={project.link} 
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#00D9FF]/50 px-4 py-2 text-xs font-medium text-[#00D9FF] transition-all hover:bg-[#00D9FF] hover:text-[#0a1628]" 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    View Project <ExternalLink size={14} />
                  </a>)
                ) : (
                  
                  <Link 
                    to={`/projectshots/${project.title}`} 
                    className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#00D9FF]/50 px-4 py-2 text-xs font-medium text-[#00D9FF] transition-all hover:bg-[#00D9FF] hover:text-[#0a1628]"
                  >
                    View Project Screenshots <ExternalLink size={14} />
                  </Link>
                )}

                {/* GitHub Links */}
                <div className="flex flex-wrap gap-2">
                  {
                    project?.github&&(
                  
                  project?.github?.length > 1 ? project?.github?.map((l, gIdx) => (
                    <a 
                      href={l} 
                      key={gIdx} 
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white transition-all hover:border-[#00D9FF]/50 hover:text-[#00D9FF]" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      {gIdx === 0 ? 'Frontend' : 'Backend'} <ExternalLink size={12} />
                    </a>
                  )) : (
                    <a 
                      href={project.github[0]} 
                      className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] font-medium text-white transition-all hover:border-[#00D9FF]/50 hover:text-[#00D9FF]" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      GitHub Repo <ExternalLink size={12} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;