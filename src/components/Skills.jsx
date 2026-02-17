import React from 'react';
import { Code, Star } from 'lucide-react';
import { skills } from '../data/datas';

const Skills = () => {
  return (
    <div className="animate-slide-up">
      {/* Header Section */}
      <div className="mb-4 flex items-center">
        <Code className="mr-3 text-[#00D9FF]" size={40} />
        <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Skills
        </h2>
      </div>

      {/* Skills Container */}
      <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px]">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex items-center justify-center rounded-xl border border-[#00D9FF]/30 bg-[#00D9FF]/10 px-4 py-3 font-medium text-[#00D9FF] transition-all duration-300 hover:scale-105 hover:border-[#00D9FF] hover:bg-[#00D9FF]/20 hover:shadow-[0_0_15px_rgba(0,217,255,0.3)]">
                <Star 
                  className="mr-2 shrink-0 transition-transform duration-300 group-hover:rotate-12" 
                  size={16} 
                />
                <span className="text-sm md:text-base">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;