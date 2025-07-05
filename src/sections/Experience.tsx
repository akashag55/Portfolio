import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "PaveSoft Technologies",
    position: "Senior Software Engineer",
    startDate: "April 2024",
    endDate: "Present",
    description: [
      "Leading multiple frontend projects simultaneously using React.js, Next.js, and Tailwind CSS",
      "Built a full-featured food delivery platform with cart, payment, and user onboarding modules.",
      "Optimized performance for a proctoring desktop app by reducing render time by 30% and memory usage by20%",
      "Collaborated with cross-functional teams to resolve complex UI/UX bugs across devices.",
      "Implemented clean architecture, reusable components, and custom hooks improving code reusability by 40%",
    ],
  },
  {
    company: "RevDau Industries Pvt. Ltd.",
    position: "Software Engineer",
    startDate: "Feb 2023",
    endDate: "March 2024",
    description: [
      "Independently developed a fully functional Content Management System (CMS) with backend integration (Node.js, Prisma, PostgreSQL)",
      "Designed and implemented responsive UI components using React.js, Mantine UI, and Figma",
      "Played a key role in building a Network Management System with interactive dashboards and API integration.",
      "Practiced Agile development using tools like Jira, GitLab, and conducted regular sprint demos",
    ],
  },
  {
    company: " Celebal Technologies Pvt. Ltd",
    position: "Associate Frontend Developer",
    startDate: "March 2021",
    endDate: "November 2022",
    description: [
      "Collaborated with the R & D team on a project leveraging Microsoft Azure Communication Services (ACS),gaining hands-on experience with cloud-based communication platforms",
      "Assisted in developing a Human Resource Management System (HRMS) designed to support 10,000 - 20,000 users, with a focus on scalability and performance optimization",
      "Collaborated with client feedback to identify areas for improvement and implement changes, ensuringsmoother project deliveries",
      "Gained exposure to version control systems like Git and worked in an Agile environment, contributing to regular sprints and fostering team collaboration.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Work Experience
      </h2>
      <div className="relative space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-8">
            {/* Date Column */}
            <div className="w-32 flex-shrink-0 text-right">
              <div className="sticky top-20">
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {exp.startDate}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.endDate}
                </div>
              </div>
            </div>

            {/* Timeline and Content */}
            <div className="relative flex-grow">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-400">
                {/* Timeline dot */}
                <div className="absolute top-6 -left-[5px] w-[11px] h-[11px] rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900"></div>
              </div>

              {/* Content */}
              <div className="ml-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 space-y-4 transform transition-all hover:scale-[1.02]">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
