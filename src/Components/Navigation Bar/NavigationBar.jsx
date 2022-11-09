import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
function NavigationBar() {
  return (
    <div className="navigationBar">
      <ul className="navigationBar_list">
        <Link to={"/"}>
          {/* <img src={[projects]} alt="projects" /> */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <p>Home</p>
        </Link>
        <Link to={"/projects"}>
          {/* <img alt="home"> */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          {/* </img> */}
          <p>Projects</p>
        </Link>
        <Link to={"/experience"}>
          {/* <img src={experience} alt="experience" /> */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
          </svg>
          <p>Experience</p>
        </Link>
        <Link to={"/contact"}>
          {/* <img src={contact} alt="contact" /> */}
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="white"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
          </svg>
          <p>Get IN Touch</p>
        </Link>
        {/* <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Experience</li>
                <li><a href="https://drive.google.com/file/d/1lnJM6EeAoRgFBSyIcQhUvxqjAldVRnL1/view">Resume</a></li> */}
      </ul>
    </div>
  );
}

export default NavigationBar;
