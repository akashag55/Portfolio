import React from "react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:agarwalakash551999@gmail.com"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Mail size={24} />
            <span>agarwalakash551999@gmail.com</span>
          </a>

          <a
            href="https://github.com/akashag55"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Github size={24} />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akash-agarwal-2a2297150/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <Linkedin size={24} />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href="https://medium.com/@akashag55"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <MessageSquare size={24} />
            <span>Medium Blog</span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block p-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
