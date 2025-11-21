import React from 'react';
import { useParams } from 'react-router-dom';
import {  projectshots } from '../data/datas';
import Header from './Header';

const Projectshot = () => {
    const {title}=useParams()
    const project=projectshots.find(p=>p.title===title)
   
    return (

           <div className="portfolio-container">
      <Header />

      <div className="container my-5">
        {/* Project Title */}
        <h1 className="hero-subtitle text-center mb-3">{project.title}</h1>

        {/* Screenshots Grid */}
        <div className="row g-4">
          {project.images.map((img, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="glass-card p-3">
                <img
                  src={img}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  className="img-fluid"
                  style={{ borderRadius: '12px', width: '100%', maxHeight: '600px', objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
    );
}

export default Projectshot;
