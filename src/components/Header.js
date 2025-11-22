import React from 'react'
import { Github, Linkedin,Mail } from 'lucide-react'

function Header() {
  return (
       <div className="hero-section">
        <div className="container text-center">
          <h1 className="hero-title"><img src='/mylogo.png' style={{height:'80px',width:'80px',marginRight:'20px',objectFit:'fill',borderRadius:'50%'}}></img>SOORAJ P.S.</h1>
          <p className="hero-subtitle">MERN STACK | REACT NATIVE | DJANGO | KOTLIN JETPACK</p>
          <div className="d-flex justify-content-center gap-3 mt-5">
            <a href="https://github.com/sj-10ps" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ps-sooraj/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <Linkedin size={28} />
            </a>
            <a href="mailto:sps24723@gmail.com" className="social-btn">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Header
