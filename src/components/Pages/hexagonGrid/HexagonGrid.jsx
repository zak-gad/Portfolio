
import './HexagonGrid.css';

const projects = [
  {
     title: 'Project One',
     link: 'https://todoappfrontend-8vbp.onrender.com/', 
     color: '#3498db' },
  { 
    title: 'Project Two', 
    link: '#', 
    color: '#e74c3c' 
  },
  { 
    title: 'Project Three', 
    link: '#', 
    color: '#9b59b6' 
  },
 
];

const HexagonGrid = () => {
  return (
    <div className="hexagon-grid">
      {projects.map((project, index) => (
        <div className="hexagon" key={index} style={{ backgroundColor: project.color }}>
          <a href={project.link} className="hexagon-content">
            {project.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default HexagonGrid;