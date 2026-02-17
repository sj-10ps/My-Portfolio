import { Award, Briefcase, Code, User, Star, GraduationCap } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveSection } from '../redux/renderoptionslice';

const Sideoptions = () => {
  const { activeSection } = useSelector((state) => state.renderoption);
  const dispatch = useDispatch();

  const menuItems = [
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Star size={20} /> },
  ];

  return (
    <div className="relative">
      <div className="sticky top-6 flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => dispatch(setActiveSection(item.id))}
              className={`
                group flex items-center w-full px-5 py-4 rounded-xl text-base font-medium transition-all duration-300 text-left border
                ${isActive 
                  ? 'bg-gradient-to-br from-[#00D9FF]/20 to-[#8A2BE2]/20 border-[#00D9FF] text-white shadow-[0_0_20px_rgba(0,217,255,0.2)]' 
                  : 'bg-white/5 border-white/10 text-[#B8C5D6] hover:bg-white/10 hover:border-[#00D9FF]/50 hover:text-[#00D9FF] hover:translate-x-1'
                }
              `}
            >
              <span className={`mr-4 transition-colors duration-300 ${isActive ? 'text-[#00D9FF]' : 'group-hover:text-[#00D9FF]'}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Sideoptions;