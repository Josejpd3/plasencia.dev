import { React, Node, MongoDB, AWS } from '../Icon'
import './TechStack.css';

export default function TechStack() {

  return (
    <section className="tech-stack">
      <h3>Tech Stack</h3>
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
          <AWS/>        
          <span>AWS</span>
        </div>
      </div>

    </section>
  );
}