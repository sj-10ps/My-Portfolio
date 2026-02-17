import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/datas';

const Education = () => {
  return (
    <div className="animate-slide-up">
      {/* Header Section */}
      <div className="mb-4 flex items-center">
        <GraduationCap className="mr-3 text-[#00D9FF]" size={40} />
        <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Education
        </h2>
      </div>

      {/* Education Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <div key={index}>
            <div className="h-full rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]">
              <div className="mb-3 flex items-center">
                <GraduationCap className="mr-3 text-[#00D9FF]" size={24} />
                <h5 className="text-xl font-semibold text-white">{edu.institution}</h5>
              </div>
              
              <div className="space-y-1">
                <p className="text-[#B8C5D6]">
                  <strong className="text-white">Course:</strong> {edu.course}
                </p>
                <p className="text-[#B8C5D6]">
                  <strong className="text-white">Period:</strong> {edu.from} - {edu.to}
                </p>
                <p className="text-[#B8C5D6]">
                  <strong className="text-white">Grade:</strong> {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;