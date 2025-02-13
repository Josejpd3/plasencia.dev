'use client';

import { experiences } from '@/app/data/experience';
import './Experience.css';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <h2>Experience Journey</h2>
      <div className="timeline">
        <div className="timeline-track">
          <div className="glow-point"></div>
        </div>
        
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-content">
              <div className="exp-details">
                <div className="exp-description">
                  <div className="exp-header">
                    <h3>{exp.title}</h3>
                    <div className="exp-meta">
                      <span className="company">{exp.company}</span>
                      <span className="duration">{exp.period}</span>
                      {exp.contract && <span>Contract</span>}
                    </div>
                  </div>

                  <div className="exp-metrics">
                    {exp.showcase?.metrics?.map((metric, i) => (
                      <div key={i} className="metric-badge">
                        <span className="metric-number">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="achievements">
                    <ul>
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-tags">
                    {exp.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="exp-showcase">
                  <div className={`project-grid ${exp.showcase?.images?.length === 1 ? 'single-project' : ''}`}>
                    {exp.showcase?.images?.map((image, i) => (
                      image.showMore ? (
                        <div key={i} className="project-card more-projects">
                          <div className="project-count">
                            <span>{image.showMore}+</span>
                            <p>More Projects</p>
                          </div>
                        </div>
                      ) : (
                        <div key={i} className="project-card">
                          <img src={image.src} alt={image.alt} className="project-preview" />
                          <div className="project-overlay">
                          {exp.showcase?.links?.certificate && (
                            <div className="certificate-badge">
                              <button className="verify-btn" onClick={() => window.open(exp.showcase?.links?.certificate, '_blank')}>Verify Certificate
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 12l-4-4 1.4-1.4L9 11.2l4.6-4.6L15 8l-6 6z" fill="currentColor"/>
                                </svg>
                              </button>
                            </div>
                          )}
                            <h4>{image.caption}</h4>
                            <p>{image.metric}</p>
                          </div>
                        </div>
                        )
                      ))}

                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}