import React from "react";
import SectionHeading from "../SestionHeading/SectionHeading";
import project_img from "../../Img/project_img.jpg";
import "./Projects.css";

function Projects() {
  const project_list = [
    {
      id: 1,
      name: "CRWN CLOATHING",
      description:
        "This is a E-commerce website for cloathing products built with React.",
      link: "https://crwn-live.herokuapp.com/",
    },
    {
      id: 2,
      name: "EXPANCE TRACKER",
      description:
        "This is a dynamic Expense Tracker with chart functionality.",
      link: "https://expense-tracker-2.netlify.app/",
    },
    {
      id: 3,
      name: "KEEPER APP",
      description: "This is a clone of Google Keep to keep your notes updated.",
      link: "https://keeper-app-65239.web.app/",
      source: "https://github.com/akashag55/KeeperApp",
    },
    {
      id: 4,
      name: "REAL TIME CHAT APP",
      description:
        "This is a Chat Applications for browsers with local storage.",
      link: "https://whatsapp-clone-chatapp.netlify.app/",
      source: "https://github.com/akashag55/Real-Time-Chat-App",
    },
    {
      id: 5,
      name: "Dev Resource",
      description:
        "A Portal to manage my bookmarks as Development resources so that I can share them with my team and with my friends.",
      link: "https://dev-resources-frontend.netlify.app/",
      source: "https://github.com/akashag55/dev-resources",
    },
    {
      id: 6,
      name: "Mentor Pannel",
      description:
        "Tt is a small portal which I developed for the purpose of understanding complex forms and how to send that form data to API.",
      link: "https://admin-panel-ott.netlify.app/",
      source: "https://github.com/akashag55/mentor-pannel",
    },
    {
      id: 6,
      name: "Codex",
      description:
        "It is a powerful and user-friendly tool that helps people communicate with an AI chatbot in a natural and intuitive way.",
      link: "https://codex-lovat.vercel.app/",
      source: "https://github.com/akashag55/codex",
    },
  ];

  return (
    <div className="project_section">
      <SectionHeading heading_name="Projects" />
      <i>
        <p className="note">
          <span>*Note:</span> Click on the card to see project
        </p>
      </i>
      <div className="project_section_card">
        {project_list.map((project) => (
          <>
            <div
              className={`project_section_card_data project_section_card_animation_${project.id}`}
            >
              <p className="project_section_card_name">{project.name}</p>
              <img src={project_img} alt="project_image" />
              <p className="project_section_card_description">
                {project.description}
              </p>
              {
                <div className="project_section_card_buttons">
                  <a href={project.source}>
                    <button>Source</button>
                  </a>
                  <a href={project.link}>
                    <button>Demo</button>
                  </a>
                </div>
              }
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
