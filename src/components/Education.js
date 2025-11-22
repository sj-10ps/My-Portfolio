import React from 'react';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/datas'; // create this array in your datas.js

const Education = () => {
  return (
    <div className="animate-slide-up">
      <div className="d-flex align-items-center mb-4">
        <GraduationCap className="text-cyan me-3" size={40} />
        <h2 className="display-4 mb-0 gradient-text">Education</h2>
      </div>
      <div className="row g-3">
        {educationData.map((edu, index) => (
          <div key={index} className="col-md-6">
            <div className="glass-card p-4 education-card">
              <div className="d-flex align-items-center mb-2">
                <GraduationCap className="text-cyan me-3" size={24} />
                <h5 className="text-white mb-0">{edu.institution}</h5>
              </div>
              <p className="text-light-muted mb-1">
                <strong>Course:</strong> {edu.course}
              </p>
              <p className="text-light-muted mb-1">
                <strong>Period:</strong> {edu.from} - {edu.to}
              </p>
              <p className="text-light-muted mb-0">
                <strong>Grade:</strong> {edu.grade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
