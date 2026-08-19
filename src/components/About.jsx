import React from 'react';
import { FileText, Rocket, Mail } from 'lucide-react';
import { badges } from '../data/datas';

const About = () => {
  return (
    <div className="animate-slide-up">
      {/* High-Visibility Header Section */}
      <div className="mb-8 flex items-center">
        <div className="relative mr-4 flex items-center justify-center">
          {/* Neon Glow Aura behind the icon */}
          <div className="absolute h-10 w-10 rounded-full bg-[#00D9FF]/20 blur-xl"></div>
          <Rocket 
            className="relative text-[#00D9FF] drop-shadow-[0_0_10px_rgba(0,217,255,0.8)]" 
            size={48} 
          />
        </div>
        
        <h2 className="bg-[linear-gradient(135deg,#FFFFFF_0%,#00D9FF_50%,#8A2BE2_100%)] bg-clip-text text-5xl font-black tracking-tighter text-transparent md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          About Me
        </h2>
      </div>

      {/* Main Content Card */}
      <div className="mb-6 rounded-[24px] border border-white/10 bg-white/5 p-6 backdrop-blur-[12px] transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/10 hover:shadow-[0_20px_40px_rgba(0,217,255,0.15)] md:p-10">
        
        <div className="mb-6">
          <p className="mb-4 text-xl leading-relaxed text-white">
            <img 
              src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" 
              className="mr-3 inline-block align-middle" 
              width="32" 
              alt="Hand wave"
            />
            Hi! I'm <span className="font-extrabold text-[#00D9FF] drop-shadow-[0_0_5px_rgba(0,217,255,0.3)]">Sooraj P.S</span>, a passionate Full Stack Developer specializing in JavaScript,Java TypeScript, Next.js,Spring Boot and the MERN stack.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-[#D1D9E6]">
            I have project based experience in <span className="text-white font-medium">Next js and MERN Stack</span> for Full Stack Apps <span className="text-white font-medium">React Native</span> for mobile apps, <span className="text-white font-medium">Kotlin with Jetpack Compose</span>, and <span className="text-white font-medium">Spring Boot</span> and <span className="text-white font-medium">Django</span>  for backend solutions.
          </p>

          <p className="mb-4 text-lg leading-relaxed text-[#B8C5D6]">
            I enjoy building web and mobile applications that solve real-world problems, combining clean, responsive designs using <span className="text-[#00D9FF]">Tailwind CSS</span> and <span className="text-[#6d28d9]">Bootstrap</span> with robust, maintainable code. I also leverage Docker for containerization and GitHub Actions/CI-CD for automated testing and deployments.
          </p>

          <p className="text-lg leading-relaxed text-[#B8C5D6]">
            Constantly exploring new technologies, I strive to deliver seamless user experiences while keeping performance and scalability in mind. My goal is to create projects that demonstrate modern best practices across multiple tech stacks.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {badges.map((badge, index) => (
            <div key={index}>
              <a href={badge.link} className="no-underline group" target="_blank" rel="noreferrer">
                <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:border-[#00D9FF]/50 group-hover:bg-white/10 group-hover:shadow-[0_10px_20px_rgba(0,217,255,0.1)]">
                  <div className="mb-2 text-[#00D9FF] transition-transform duration-300 group-hover:scale-110">
                    {badge.icon}
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#00D9FF] transition-colors">
                    {badge.name}
                  </div>
                  <div className="text-xs font-semibold text-[#00D9FF]/80">
                    {badge.count}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <a 
            href="mailto:sps24723@gmail.com" 
            className="flex flex-1 min-w-[160px] items-center justify-center gap-2 rounded-xl bg-[#00D9FF] px-8 py-4 font-black uppercase tracking-wider text-[#0a1628] transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_24px_rgba(0,217,255,0.4)] active:scale-95"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a 
            href="https://drive.google.com/file/d/1XVzjT2pfGsHLlo9-q5-6utIf4gy8khAf/view?usp=sharing" 
            target="_blank" 
            rel="noreferrer"
            className="flex flex-1 min-w-[160px] items-center justify-center gap-2 rounded-xl border-2 border-[#00D9FF] px-8 py-4 font-black uppercase tracking-wider text-[#00D9FF] transition-all hover:translate-y-[-3px] hover:bg-[#00D9FF]/10 hover:shadow-[0_12px_24px_rgba(0,217,255,0.2)] active:scale-95"
          >
            <FileText size={20} />
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;