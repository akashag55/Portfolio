import React from "react";
import {
  Code2,
  Database,
  Layout,
  Github as Git,
  PenTool as Tool,
} from "lucide-react";

const skills = {
  frameworks: {
    icon: <Code2 size={24} />,
    title: "Frameworks",
    items: ["React.js", "Next.js", "Vue.js"],
  },
  webDev: {
    icon: <Layout size={24} />,
    title: "Web Development",
    items: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Wordpress",
    ],
  },
  backend: {
    icon: <Database size={24} />,
    title: "Backend",
    items: ["Node.js", "Express.js", "Prisma"],
  },
  database: {
    icon: <Database size={24} />,
    title: "Database",
    items: ["MongoDB", "MySQL", "Postgresss Sql"],
  },
  uiLibraries: {
    icon: <Layout size={24} />,
    title: "UI Libraries",
    items: ["Material UI", "Mantine UI", "Shadcn/ui"],
  },
  versionControl: {
    icon: <Git size={24} />,
    title: "Version Control",
    items: ["Git", "GitHub", "Bitbucket"],
  },
  tools: {
    icon: <Tool size={24} />,
    title: "Tools & Others",
    items: ["VS Code", "Postman", "Swagger", "Slack", "Jira", "Figma"],
  },
};

const TechnicalDetails = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.values(skills).map((category, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 transform transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center gap-3 text-gray-800 dark:text-gray-100">
              {category.icon}
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Professional Development
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Continuously learning and staying updated with the latest technologies
          and best practices in web development. Regular participation in tech
          conferences and online courses to enhance skills and knowledge.
        </p>
      </div>
    </div>
  );
};

export default TechnicalDetails;
