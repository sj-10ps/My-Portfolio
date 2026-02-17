import { Mail } from 'lucide-react';
import Header from './Header';
import Sideoptions from './Sideoptions';
import Renderpart from './Renderpart';

export default function Portfolio() {
  return (
    <div className="bg-[#0a1628] min-h-screen relative overflow-x-hidden">
      {/* Background Radial Glow Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(0,217,255,0.1)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(138,43,226,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <div className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation (3 columns on large screens) */}
          <div className="lg:col-span-3">
            <Sideoptions />
          </div>

          {/* Content Area (9 columns on large screens) */}
          <main className="lg:col-span-9">
            <Renderpart />
          </main>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-white/10 bg-black/30 py-10 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <a 
            href="mailto:sps24723@gmail.com" 
            className="inline-flex items-center gap-2 text-[#00D9FF] transition-all hover:scale-110 hover:text-[#8A2BE2] mb-4 text-lg font-bold no-underline"
          >
            MAIL ME <Mail size={24} />
          </a>
          <p className="text-[#B8C5D6] text-sm tracking-wide">
            © 2026 Sooraj P.S. Built Using React & Tailwind CSS v4
          </p>
        </div>
      </footer>
    </div>
  );
}