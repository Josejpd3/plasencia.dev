import { React, Node, MongoDB, AWS, Express } from '../Icon'
import './TechStack.css';

export default function TechStack() {

  return (
    <section className="tech-stack">
      <p>Tech Stack</p>
      <div className="tech-grid">
        <div className="tech-item">
          <React/>        
          <span>React.js</span>
        </div>

        <div className="tech-item">
          <Node/>        
          <span>Node.js</span>
        </div>

        <div className="tech-item">
          <MongoDB/>        
          <span>MongoDB</span>
        </div>

        <div className="tech-item">
          <Express/>        
          <span>Express.js</span>
        </div>
      </div>

    </section>
  );
}