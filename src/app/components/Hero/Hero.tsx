'use client';
import './Hero.css';
import { event } from '@/app/lib/gtag';

export default function Hero() {

  const handleResume = () => {
    // Track the resume download event
    event({
      action: 'download_resume',
      category: 'engagement',
      label: 'Resume Download Button Click',
    });
    
    // Open resume in new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="hero">
      <div className="portrait-container">
        <img src="/images/portrait2.jpg" alt="Jose Plasencia" className="portrait" />
      </div>
      

      <h1 className="hero-title">
        <span className="animate-text">Turning Visions into&nbsp;</span>
        <span className="gradient-text animate-text">Reality&nbsp;</span>
        <span className="animate-text">through Code</span>
      </h1>
      
      <p className="hero-description">
        Software Engineer committed to building valuable web solutions and turning 
        challenges into opportunities for improvement.
      </p>
      
      <div className="availability-badge">
        <span className="status-dot"></span>
        Open to Full-Time Opportunities
      </div>

      <div className="cta-group">
        <button 
          onClick={() => {
            event({
              action: 'view_projects',
              category: 'engagement',
              label: 'View Projects Button Click',
            });
            window.location.href = '#experience';
          }} 
          className="primary-btn"
        >
          View Projects
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 10h12m-4-4l4 4-4 4" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>
        <button onClick={handleResume} className="secondary-btn">
          Download Resume
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3v10m0 0l-4-4m4 4l4-4m-9 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
}