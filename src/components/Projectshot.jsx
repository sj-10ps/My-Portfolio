import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectshots } from '../data/datas';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import Header from './Header';

const Projectshot = () => {
  const { title } = useParams();
  const project = projectshots.find(p => p.title === title);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center text-white">
        Project not found
      </div>
    );
  }

  return (
    <div className="bg-[#0a1628] min-h-screen relative overflow-x-hidden pb-20">
      {/* Fixed Background Radial Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,217,255,0.08)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.08)_0%,transparent_50%)]" />
      </div>

      <Header />

      <div className="relative z-10 container mx-auto px-4 mt-12">
        {/* Back Button & Title Section */}
        <div className="mb-10 flex flex-col items-center">
          <Link 
            to="/" 
            className="group mb-6 flex items-center gap-2 text-[#B8C5D6] hover:text-[#00D9FF] transition-all"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wide">Back to Gallery</span>
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex items-center justify-center">
               <div className="absolute h-8 w-8 rounded-full bg-[#00D9FF]/20 blur-xl"></div>
               <ImageIcon className="relative text-[#00D9FF] drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]" size={32} />
            </div>
            <h1 className="bg-[linear-gradient(135deg,#FFFFFF_0%,#00D9FF_50%,#8A2BE2_100%)] bg-clip-text text-4xl font-black tracking-tighter text-transparent md:text-6xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] uppercase">
              {project.title}
            </h1>
          </div>
          
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-50"></div>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.images.map((img, idx) => (
            <div 
              key={idx} 
              className="animate-slide-up" 
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="group relative rounded-[24px] border border-white/10 bg-white/5 p-3 backdrop-blur-[12px] transition-all duration-500 hover:translate-y-[-10px] hover:bg-white/10 hover:border-[#00D9FF]/40 hover:shadow-[0_20px_50px_rgba(0,217,255,0.2)]">
                
                {/* Image Wrap */}
                <div className="overflow-hidden rounded-[16px] bg-[#0a1628]/50">
                   <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    style={{ maxHeight: '600px' }}
                  />
                </div>

                {/* Subtle Overlay Label */}
                <div className="mt-4 flex justify-between items-center px-2">
                  <span className="text-[10px] font-bold text-[#00D9FF] tracking-widest uppercase opacity-60">
                    Screenshot {idx + 1}
                  </span>
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projectshot;