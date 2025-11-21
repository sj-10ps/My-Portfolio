import React from 'react';
import { Star } from 'lucide-react';
import { achievements } from '../data/datas';
const Achievements = () => {
    return (
            <div className="animate-slide-up">
            <div className="d-flex align-items-center mb-4">
              <Star className="text-cyan me-3" size={40} />
              <h2 className="display-4 mb-0 gradient-text">Achievements</h2>
            </div>
            <div className="row g-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="col-md-6">
                  <div className="glass-card p-4 achievement-card">
                    <div className="d-flex align-items-center">
                      <span className="achievement-icon me-3" style={{ color: achievement.color }}>
                        {achievement.icon}
                      </span>
                      <span className="text-white">{achievement.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
}

export default Achievements;
