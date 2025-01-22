
const Projects = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'Html, Css, Js, React.',
      link: 'https://github.com/zak-gad/React-Pro-Cart'
    },
    {
      title: 'Project Two',
      description: 'Html, Css, Js, React.',
      link: 'https://github.com/zak-gad/Todo-Frontend'
    },
    {
      title: 'Project Three',
      description: 'Html, Sass, Ts, Angular.',
      link: 'https://github.com/zak-gad/We-Rescue-Cats'
    },
    // more projects 
  ];

  return (
    <div className="p-5 max-w-6xl mx-auto font-sans">
      <h1 className="text-3xl text-gray-800 text-center mb-20">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-5 shadow-md transition-transform transform hover:-translate-y-1">
            <h2 className="text-2xl text-gray-800 mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
