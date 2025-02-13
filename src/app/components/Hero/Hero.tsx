import './Hero.css';

export default function Hero() {

  const handleResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="hero">
      <div className="portrait-container">
        <img src="/images/portrait.png" alt="Jose Plasencia" className="portrait" />
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
        <button onClick={() => window.location.href = '#experience'} className="primary-btn">
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