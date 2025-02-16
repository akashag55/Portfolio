import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen pt-16 flex flex-col md:flex-row items-center justify-center gap-12 py-12 container mx-auto px-4">
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">
          Akash Agarwal
        </h1>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
          Full Stack Developer
        </h3>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Passionate about creating seamless web experiences with modern
          technologies. 4+ years of experience in building scalable
          applications.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/akashag55"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/akash-agarwal-2a2297150/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:agarwalakash551999@gmail.com"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Developer workspace"
          className="rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
