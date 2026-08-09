import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experience } from '../data/datas';

const Experience = () => {
    return (
        <div className="animate-slide-up">
            {/* Header Section */}
            <div className="mb-4 flex items-center">
                <Briefcase className="mr-3 text-[#00D9FF]" size={40} />
                <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
                    Experience
                </h2>
            </div>

            {/* Experience List */}
            {experience.map((exp, index) => (
                <div key={index} className="group mb-6 rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]">
                    
                    {/* Role and Period Header */}
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                        <div>
                            <h5 className="text-xl font-bold text-white">{exp.role}</h5>
                            <h6 className="text-lg font-medium text-[#00D9FF]">{exp.company}</h6>
                        </div>
                        <span className="inline-block rounded-full border border-[#8A2BE2]/40 bg-[#8A2BE2]/20 px-4 py-1 text-sm font-semibold text-[#8A2BE2]">
                            {exp.period}
                        </span>
                    </div>

                    {/* Description */}
                    <p className="mb-4 leading-relaxed text-[#B8C5D6]">
                        {exp.description}
                    </p>

                    {/* Highlights Tags */}
                    <div className="mb-5 flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, idx) => (
                            <span key={idx} className="rounded-lg border border-[#00D9FF]/20 bg-[#00D9FF]/10 px-3 py-1 text-sm text-[#00D9FF]">
                                ✨ {highlight}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                       {exp.certificate&& <a 
                            href={exp.certificate} 
                            className="inline-flex items-center gap-2 rounded-lg border border-[#00D9FF]/50 px-4 py-2 text-sm font-medium text-[#00D9FF] transition-all hover:bg-[#00D9FF] hover:text-[#0a1628]" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            View Certificate <ExternalLink size={14} />
                        </a>}
                       {exp.link&&  <a 
                            href={exp.link} 
                            className="inline-flex items-center gap-2 rounded-lg border border-red-500/50 px-4 py-2 text-sm font-medium text-red-400 transition-all hover:bg-red-500 hover:text-white" 
                            target="_blank" 
                            rel="noreferrer"
                        >
                            View Project <ExternalLink size={14} />
                        </a>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Experience;