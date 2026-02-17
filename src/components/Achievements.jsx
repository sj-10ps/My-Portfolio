import React from 'react';
import { Star } from 'lucide-react';
import { achievements } from '../data/datas';

const Achievements = () => {
  return (
    <div className="animate-slide-up">
      {/* Header Section */}
      <div className="mb-4 flex items-center">
        <Star className="mr-3 text-[#00D9FF]" size={40} />
        <h2 className="bg-[linear-gradient(135deg,#00D9FF_0%,#8A2BE2_100%)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Achievements
        </h2>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <div key={index}>
            {/* Inline Glass Card styling */}
            <div className="flex h-full items-center rounded-[20px] border border-white/10 bg-white/5 p-5 backdrop-blur-[10px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.2)]">
              
              {/* Dynamic Icon with Glow Effect */}
              <span 
                className="mr-4 text-3xl leading-none transition-all duration-300"
                style={{ 
                  color: achievement.color,
                  filter: `drop-shadow(0 0 8px ${achievement.color}80)` 
                }}
              >
                {achievement.icon}
              </span>
              
              <span className="text-lg font-medium text-white/90">
                {achievement.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;