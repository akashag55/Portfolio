const projects = [
  {
    title: "Expance Tracker",
    description:
      "Developed an expense tracker application to efficiently manage and categorize expenses, providing users with insightful financial summaries.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
  {
    title: "Dynamic Form Builder",
    description:
      "Created a dynamic form builder enabling users to customize and generate forms with real-time previews and seamless data handling",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next Js", "Typescript", "MySQL", "Tailwind CSS"],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
  {
    title: "Prime Focus",
    description:
      "A Desktop app based on pomodoro technique with customizable theme, focus & break time ",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    technologies: ["Electron js", "Next js", "Twilwind CSS", "Mantine UI"],
    // github: 'https://github.com',
    // live: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 space-y-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* <div className="flex gap-4 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <Github size={20} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
