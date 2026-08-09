import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

function Header() {
  return (
    <div
      className="relative mb-10 flex h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat text-center text-white"
      style={{
        backgroundImage: 'url(https://user-images.githubusercontent.com/22107794/139580686-887df369-edb8-4bc8-b607-4fbf6d7e4866.gif)',
      }}
    >
      {/* Darker Overlay for readability */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Header content */}
      <div className="relative z-20 px-4">
        <h1 className="flex items-center justify-center text-4xl font-extrabold tracking-tight md:text-7xl">
          <img
            src="/mylogo.png"
            alt="Logo"
            className="mr-5 h-20 w-20 rounded-full object-cover ring-4 ring-[#00D9FF]/30"
          />
          <span className="bg-[linear-gradient(135deg,#FFFFFF_0%,#00D9FF_50%,#8A2BE2_100%)] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]">
            SOORAJ P.S.
          </span>
        </h1>

        {/* Improved subtitle visibility */}
        <p className="mt-4 text-sm md:text-xl font-semibold tracking-[4px] text-[#00D9FF] drop-shadow-[0_0_8px_rgba(0,0,0,0.7)]">
          NEXT.JS | MERN | SPRING BOOT | REACT NATIVE | DJANGO 
        </p>

        {/* Social Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          {[
            { icon: <Github size={28} />, href: "https://github.com/sj-10ps" },
            { icon: <Linkedin size={28} />, href: "https://www.linkedin.com/in/ps-sooraj/" },
            { icon: <Mail size={28} />, href: "mailto:sps24723@gmail.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#00D9FF] bg-[#00D9FF]/10 text-[#00D9FF] transition-all duration-300 hover:scale-110 hover:bg-[#00D9FF] hover:text-[#0a1628] hover:shadow-[0_0_20px_rgba(0,217,255,0.6)]"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
