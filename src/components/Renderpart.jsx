import { useSelector } from 'react-redux';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Certifications from './Certifications';
import Achievements from './Achievements';
import Education from './Education';

const Renderpart = () => {
  const { activeSection } = useSelector(state => state.renderoption);

  const renderSection = () => {
    switch (activeSection) {
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'projects': return <Projects />;
      case 'experience': return <Experience />;
      case 'certifications': return <Certifications />;
      case 'achievements': return <Achievements />;
      default: return null;
    }
  };

  return (
    /* We use key={activeSection} to force React to unmount/remount 
       the wrapper, re-triggering the CSS animation on every click.
    */
    <div 
      key={activeSection}
      className="animate-slide-up w-full min-h-[60vh] transition-all duration-500 ease-in-out"
    >
      <div className="relative">
        {/* Optional: Add a subtle glow behind the active content */}
        <div className="absolute -inset-4 z-0 bg-[#00D9FF]/5 blur-3xl rounded-[40px] pointer-events-none" />
        
        <div className="relative z-10">
          {renderSection()}
        </div>
      </div>
    </div>
  );
};

export default Renderpart;