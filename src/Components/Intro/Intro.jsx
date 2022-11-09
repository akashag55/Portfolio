import React from "react";
import "./Intro.css";
function Intro() {
  return (
    <div className="intro_section">
      <div className="intro_section_name">
        <h1>Hi, I'm Akash Agarwal</h1>
        <h2>
          I am creating Websites and Web Applications. <br />
          Always eger to learn new technologies and still learning.
        </h2>
        <br />
        <i>
          <q>
            To achieve peak excellence in my professional life and get a working
            environment where I can learn and groom myself more to get an
            excellent status in the corporate world and society
          </q>
        </i>
        <br />
        <br />
        <br />
        <a
          href="https://drive.google.com/file/d/1C1YVNvrD7Qq3AzGDsghVoqAHYGf3ssxi/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Resume</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
