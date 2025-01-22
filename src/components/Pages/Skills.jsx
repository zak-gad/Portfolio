const Experience = () => {
  const experienceList = [
    // {
    //   title: 'fr',
    //   company: 'Tech Company',
    //   duration: 'Jan 2020 - Present',
    //   description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with cross-functional teams to define and design new features.'
    // },
    {
      title: 'Study future web development',
      company: 'DCI digital career institute.',
      duration: 'Sep 2023 - Nov 2024',
      description: ' HTML, CSS, and JavaScript, TypeScript, React, Angular, Node.js, Express.js, Git and MongoDB.'
    },
    // {
    //   title: 'Intern',
    //   company: 'Software Solutions',
    //   duration: 'Jan 2018 - May 2018',
    //   description: 'Participated in code reviews and team meetings. Gained hands-on experience with front-end development and debugging.'
    // },
    // Add more experience as needed
  ];

  return (
    <div className="p-5 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl text-gray-800 text-center mb-8">Experience</h1>
      <div className="space-y-6">
        {experienceList.map((experience, index) => (
          <div key={index} className="bg-white rounded-lg p-5 shadow-md">
            <h2 className="text-2xl text-gray-800 mb-2">{experience.title}</h2>
            <h3 className="text-xl text-gray-500 mb-1">{experience.company}</h3>
            <span className="block text-gray-400 mb-2">{experience.duration}</span>
            <p className="text-gray-600 leading-relaxed">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;